// ── STATE ──
let currentUser = null;
let filteredPatients = [...patients];
let filteredMeds = [...medications];

// ── HELPERS ──
function getInitials(name) {
  return name.split(" ").filter(w => !["Dr.", "Dr", "(Minor)"].includes(w)).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

function formatDate(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function getMedStatus(expiry) {
  const today = new Date();
  const exp = new Date(expiry);
  const diff = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { label: "Expired", cls: "badge-red" };
  if (diff <= 30) return { label: "Expiring Soon", cls: "badge-yellow" };
  return { label: "Active", cls: "badge-green" };
}

function getStatusBadge(status) {
  const map = {
    "Critical": "badge-red",
    "Stable": "badge-green",
    "Recovering": "badge-blue",
    "Discharged": "badge-gray",
  };
  return `<span class="badge ${map[status] || 'badge-gray'}">${status}</span>`;
}

function getShift() {
  const h = new Date().getHours();
  if (h < 12) return "Morning Shift";
  if (h < 18) return "Evening Shift";
  return "Night Shift";
}

// ── LOGIN ──
function handleLogin() {
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const pass = document.getElementById("loginPassword").value;
  const err = document.getElementById("loginError");

  const user = validUsers[email];
  if (!user || user.password !== pass) {
    err.classList.remove("hidden");
    document.getElementById("loginPassword").value = "";
    return;
  }
  err.classList.add("hidden");
  currentUser = user.doctor;
  initApp();
}

document.getElementById("loginPassword")?.addEventListener("keydown", e => {
  if (e.key === "Enter") handleLogin();
});
document.getElementById("loginEmail")?.addEventListener("keydown", e => {
  if (e.key === "Enter") document.getElementById("loginPassword").focus();
});

function handleLogout() {
  currentUser = null;
  document.getElementById("loginPage").classList.add("active");
  document.getElementById("appPage").classList.remove("active");
  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
}

// ── INIT APP ──
function initApp() {
  document.getElementById("loginPage").classList.remove("active");
  document.getElementById("appPage").classList.add("active");

  const name = currentUser.name.replace("Dr. ", "");
  const initial = name[0].toUpperCase();

  document.getElementById("welcomeMsg").textContent = `Welcome back, ${currentUser.name} 👋`;
  document.getElementById("sidebarName").textContent = currentUser.name;
  document.getElementById("sidebarAvatar").textContent = initial;
  document.getElementById("topbarAvatar").textContent = initial;
  document.getElementById("topbarName").textContent = currentUser.name;
  document.getElementById("welcomeShift").textContent = getShift();
  document.getElementById("topbarDate").textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });

  // Stats
  const myPatients = patients.filter(p => p.doctorId === currentUser.id);
  const myMeds = medications.filter(m => myPatients.find(p => p.id === m.patientId));
  const critical = myPatients.filter(p => p.status === "Critical").length;
  const expiring = myMeds.filter(m => getMedStatus(m.expiry).label !== "Active").length;

  document.querySelectorAll(".stat-value")[0].textContent = myPatients.length;
  document.querySelectorAll(".stat-value")[1].textContent = myMeds.length;
  document.querySelectorAll(".stat-value")[2].textContent = critical;
  document.querySelectorAll(".stat-value")[3].textContent = expiring;

  renderDashPatients(myPatients);
  renderDashMeds(myMeds);
  renderPatientsTable(patients);
  renderMedsTable(medications);
  renderDoctors();
  renderSchedule();
}

// ── DASHBOARD ──
function renderDashPatients(pts) {
  const el = document.getElementById("dashPatientList");
  el.innerHTML = pts.slice(0, 5).map(p => `
    <div class="mini-row" onclick="openPatient('${p.id}')" style="cursor:pointer;">
      <div class="mini-avatar">${getInitials(p.name)}</div>
      <div>
        <div class="mini-name">${p.name}</div>
        <div class="mini-sub">${p.ward}</div>
      </div>
      <div class="mini-right">${getStatusBadge(p.status)}</div>
    </div>
  `).join("");
}

function renderDashMeds(meds) {
  const el = document.getElementById("dashMedList");
  el.innerHTML = meds.slice(0, 5).map(m => {
    const s = getMedStatus(m.expiry);
    return `
      <div class="mini-row">
        <div class="mini-avatar" style="background:#e3f0ff; color: var(--primary);">💊</div>
        <div>
          <div class="mini-name">${m.name}</div>
          <div class="mini-sub">${m.patient} · Delivery: ${formatDate(m.delivery)}</div>
        </div>
        <div class="mini-right"><span class="badge ${s.cls}">${s.label}</span></div>
      </div>
    `;
  }).join("");
}

// ── PATIENTS TABLE ──
function renderPatientsTable(pts) {
  const body = document.getElementById("patientsBody");
  if (!pts.length) {
    body.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:40px; color:var(--text-muted);">No patients found.</td></tr>`;
    return;
  }
  body.innerHTML = pts.map(p => `
    <tr>
      <td><span style="font-family:monospace; font-size:.8rem; color:var(--text-muted);">${p.id}</span></td>
      <td>
        <div style="display:flex; align-items:center; gap:10px;">
          <div class="avatar sm" style="background:${doctorColor(p.doctorId)};">${getInitials(p.name)}</div>
          <div>
            <div style="font-weight:600;">${p.name}</div>
            <div style="font-size:.75rem; color:var(--text-muted);">Room ${p.room}</div>
          </div>
        </div>
      </td>
      <td>${p.age}</td>
      <td>${p.gender}</td>
      <td style="font-size:.82rem;">${p.ward}</td>
      <td style="font-size:.82rem;">${p.diagnosis}</td>
      <td style="font-size:.82rem;">${p.doctor}</td>
      <td>${getStatusBadge(p.status)}</td>
      <td><button class="btn-sm" onclick="openPatient('${p.id}')">View</button></td>
    </tr>
  `).join("");
}

function doctorColor(doctorId) {
  const d = doctors.find(x => x.id === doctorId);
  return d ? d.color : "#1565c0";
}

function filterPatients(q) {
  const lq = q.toLowerCase();
  filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(lq) ||
    p.diagnosis.toLowerCase().includes(lq) ||
    p.doctor.toLowerCase().includes(lq) ||
    p.ward.toLowerCase().includes(lq) ||
    p.id.toLowerCase().includes(lq)
  );
  renderPatientsTable(filteredPatients);
}

function filterPatientsByStatus(status) {
  filteredPatients = status ? patients.filter(p => p.status === status) : [...patients];
  renderPatientsTable(filteredPatients);
}

// ── PATIENT MODAL ──
function openPatient(patientId) {
  const p = patients.find(x => x.id === patientId);
  if (!p) return;
  const meds = medications.filter(m => m.patientId === patientId);

  document.getElementById("patientModalContent").innerHTML = `
    <div class="modal-header">
      <div style="display:flex; align-items:center; gap:16px;">
        <div class="avatar" style="width:56px;height:56px;font-size:1.3rem;background:${doctorColor(p.doctorId)};">${getInitials(p.name)}</div>
        <div>
          <h3>${p.name}</h3>
          <div style="color:var(--text-muted); font-size:.85rem; margin-top:3px;">${p.id} · ${p.ward}</div>
        </div>
        <div style="margin-left:auto;">${getStatusBadge(p.status)}</div>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-section">
        <h5>Personal Information</h5>
        <div class="info-grid">
          <div class="info-item"><label>Age</label><span>${p.age} years</span></div>
          <div class="info-item"><label>Gender</label><span>${p.gender}</span></div>
          <div class="info-item"><label>Blood Type</label><span>${p.blood}</span></div>
          <div class="info-item"><label>Room</label><span>${p.room}</span></div>
          <div class="info-item"><label>Phone</label><span>${p.phone}</span></div>
          <div class="info-item"><label>Admitted</label><span>${formatDate(p.admitted)}</span></div>
          <div class="info-item" style="grid-column:1/-1;"><label>Address</label><span>${p.address}</span></div>
          <div class="info-item"><label>Allergies</label><span style="color:var(--danger);">${p.allergies || "None"}</span></div>
          <div class="info-item"><label>Diagnosis</label><span>${p.diagnosis}</span></div>
        </div>
      </div>
      <div class="modal-section">
        <h5>Assigned Doctor</h5>
        <div style="display:flex; align-items:center; gap:12px; padding:12px; background:var(--bg); border-radius:10px;">
          <div class="avatar sm" style="background:${doctorColor(p.doctorId)};">${getInitials(p.doctor)}</div>
          <div>
            <div style="font-weight:600; font-size:.9rem;">${p.doctor}</div>
            <div style="font-size:.78rem; color:var(--text-muted);">${doctors.find(d=>d.id===p.doctorId)?.specialty || ""}</div>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <h5>Medications (${meds.length})</h5>
        ${meds.length ? meds.map(m => {
          const s = getMedStatus(m.expiry);
          return `
            <div style="padding:12px; background:var(--bg); border-radius:10px; margin-bottom:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span style="font-weight:600; font-size:.9rem;">💊 ${m.name}</span>
                <span class="badge ${s.cls}">${s.label}</span>
              </div>
              <div class="info-grid" style="margin-top:8px;">
                <div class="info-item"><label>Dosage</label><span>${m.dosage}</span></div>
                <div class="info-item"><label>Frequency</label><span>${m.frequency}</span></div>
                <div class="info-item"><label>Route</label><span>${m.route}</span></div>
                <div class="info-item"><label>Delivery</label><span>${formatDate(m.delivery)}</span></div>
                <div class="info-item"><label>Expires</label><span>${formatDate(m.expiry)}</span></div>
                ${m.notes ? `<div class="info-item" style="grid-column:1/-1;"><label>Notes</label><span>${m.notes}</span></div>` : ""}
              </div>
            </div>
          `;
        }).join("") : `<p style="color:var(--text-muted); font-size:.88rem;">No medications recorded.</p>`}
      </div>
    </div>
  `;
  document.getElementById("patientModal").classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

// ── MEDICATIONS TABLE ──
function renderMedsTable(meds) {
  const body = document.getElementById("medsBody");
  if (!meds.length) {
    body.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:40px; color:var(--text-muted);">No medications found.</td></tr>`;
    return;
  }
  body.innerHTML = meds.map(m => {
    const s = getMedStatus(m.expiry);
    return `
      <tr>
        <td><span style="font-family:monospace; font-size:.8rem; color:var(--text-muted);">${m.id}</span></td>
        <td><strong>💊 ${m.name}</strong></td>
        <td style="font-size:.85rem;">${m.patient}</td>
        <td>${m.dosage}</td>
        <td style="font-size:.82rem;">${m.frequency}</td>
        <td style="font-size:.82rem;">${formatDate(m.delivery)}</td>
        <td style="font-size:.82rem;">${formatDate(m.expiry)}</td>
        <td style="font-size:.82rem;">${m.prescribedBy}</td>
        <td><span class="badge ${s.cls}">${s.label}</span></td>
      </tr>
    `;
  }).join("");
}

function filterMeds(q) {
  const lq = q.toLowerCase();
  filteredMeds = medications.filter(m =>
    m.name.toLowerCase().includes(lq) ||
    m.patient.toLowerCase().includes(lq) ||
    m.prescribedBy.toLowerCase().includes(lq)
  );
  renderMedsTable(filteredMeds);
}

function filterMedsByStatus(status) {
  filteredMeds = status
    ? medications.filter(m => getMedStatus(m.expiry).label === status)
    : [...medications];
  renderMedsTable(filteredMeds);
}

// ── DOCTORS ──
function renderDoctors() {
  const grid = document.getElementById("doctorsGrid");
  grid.innerHTML = doctors.map(d => `
    <div class="doctor-card">
      <div class="doctor-avatar" style="background:${d.color};">${getInitials(d.name)}</div>
      <div class="doctor-name">${d.name}</div>
      <div class="doctor-specialty">${d.specialty}</div>
      <div style="font-size:.8rem; color:var(--text-muted); margin-bottom:12px;">📞 ${d.phone}</div>
      <div style="font-size:.8rem; margin-bottom:6px;">✉️ <span style="color:var(--primary);">${d.email}</span></div>
      <div style="font-size:.78rem; color:var(--text-muted); margin-bottom:14px;">🕒 ${d.shift}</div>
      <div class="doctor-stats">
        <div style="text-align:center;">
          <div class="doc-stat-val">${d.patients}</div>
          <div class="doc-stat-label">Patients</div>
        </div>
        <div style="text-align:center;">
          <div class="doc-stat-val">${d.experience}</div>
          <div class="doc-stat-label">Experience</div>
        </div>
      </div>
    </div>
  `).join("");
}

// ── SCHEDULE ──
function renderSchedule() {
  const grid = document.getElementById("scheduleGrid");
  grid.innerHTML = schedule.map(s => `
    <div class="schedule-card">
      <div class="schedule-header" style="background:${s.color};">${s.doctor} — Today's Schedule</div>
      ${s.slots.map(slot => `
        <div class="schedule-slot">
          <div class="slot-time">${slot.time}</div>
          <div class="slot-info">
            <div class="slot-patient">${slot.patient}</div>
            <div class="slot-type">${slot.type}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `).join("");
}

// ── NAVIGATION ──
function showSection(name, el) {
  document.querySelectorAll(".content-section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.getElementById(`section-${name}`).classList.add("active");
  if (el) el.classList.add("active");

  const titles = {
    dashboard: "Dashboard",
    patients: "Patients",
    medications: "Medications",
    doctors: "Doctors",
    schedule: "Today's Schedule",
  };
  document.getElementById("pageTitle").textContent = titles[name] || name;
  return false;
}
