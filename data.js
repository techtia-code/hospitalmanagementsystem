// ── DOCTORS ──
const doctors = [
  {
    id: "D001",
    name: "Dr. Takeisha Williams",
    email: "williams@gmail.com",
    specialty: "Cardiology",
    phone: "+1 (876) 555-0101",
    patients: 12,
    experience: "14 yrs",
    color: "#1565c0",
    shift: "Morning Shift",
  },
  {
    id: "D002",
    name: "Dr. James Carter",
    email: "carter@gmail.com",
    specialty: "Neurology",
    phone: "+1 (876) 555-0102",
    patients: 9,
    experience: "10 yrs",
    color: "#6a1b9a",
    shift: "Morning Shift",
  },
  {
    id: "D003",
    name: "Dr. Sophia Nguyen",
    email: "nguyen@gmail.com",
    specialty: "Pediatrics",
    phone: "+1 (876) 555-0103",
    patients: 15,
    experience: "8 yrs",
    color: "#00695c",
    shift: "Evening Shift",
  },
  {
    id: "D004",
    name: "Dr. Marcus Reid",
    email: "reid@gmail.com",
    specialty: "Orthopedics",
    phone: "+1 (876) 555-0104",
    patients: 11,
    experience: "17 yrs",
    color: "#c62828",
    shift: "Morning Shift",
  },
  {
    id: "D005",
    name: "Dr. Alicia Monroe",
    email: "monroe@gmail.com",
    specialty: "Oncology",
    phone: "+1 (876) 555-0105",
    patients: 8,
    experience: "12 yrs",
    color: "#e65100",
    shift: "Night Shift",
  },
  {
    id: "D006",
    name: "Dr. Daniel Osei",
    email: "osei@gmail.com",
    specialty: "General Surgery",
    phone: "+1 (876) 555-0106",
    patients: 7,
    experience: "6 yrs",
    color: "#2e7d32",
    shift: "Evening Shift",
  },
];

// ── PATIENTS ──
const patients = [
  // Dr. Williams' Patients (Cardiology)
  { id: "P001", name: "Robert Thompson", age: 67, gender: "Male", ward: "Cardiology – Ward A", diagnosis: "Myocardial Infarction", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Critical", blood: "O+", admitted: "2025-04-01", room: "101", phone: "+1 (876) 555-1001", address: "12 Harbour Blvd, Kingston", allergies: "Penicillin" },
  { id: "P002", name: "Margaret Hall", age: 72, gender: "Female", ward: "Cardiology – Ward A", diagnosis: "Atrial Fibrillation", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Stable", blood: "A+", admitted: "2025-04-05", room: "102", phone: "+1 (876) 555-1002", address: "4 Mountain View, Spanish Town", allergies: "None" },
  { id: "P003", name: "Donald Pearce", age: 58, gender: "Male", ward: "Cardiology – Ward B", diagnosis: "Hypertensive Crisis", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Recovering", blood: "B+", admitted: "2025-04-08", room: "103", phone: "+1 (876) 555-1003", address: "77 Duncans Road, Trelawny", allergies: "Aspirin" },
  { id: "P004", name: "Patricia Simms", age: 63, gender: "Female", ward: "Cardiology – Ward B", diagnosis: "Congestive Heart Failure", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Critical", blood: "AB-", admitted: "2025-04-10", room: "104", phone: "+1 (876) 555-1004", address: "15 Waterfall Ave, Mandeville", allergies: "Sulfa drugs" },
  { id: "P005", name: "Gregory Brown", age: 45, gender: "Male", ward: "Cardiology – Ward A", diagnosis: "Angina Pectoris", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Stable", blood: "O-", admitted: "2025-04-12", room: "105", phone: "+1 (876) 555-1005", address: "9 Sunrise Terrace, Kingston", allergies: "None" },
  { id: "P006", name: "Sandra Clarke", age: 55, gender: "Female", ward: "Cardiology – Ward C", diagnosis: "Coronary Artery Disease", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Recovering", blood: "A-", admitted: "2025-04-15", room: "106", phone: "+1 (876) 555-1006", address: "3 Palm Court, Portmore", allergies: "Latex" },
  { id: "P007", name: "Winston James", age: 70, gender: "Male", ward: "Cardiology – Ward C", diagnosis: "Heart Block", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Stable", blood: "B-", admitted: "2025-04-17", room: "107", phone: "+1 (876) 555-1007", address: "22 Hilltop Drive, Constant Spring", allergies: "None" },
  { id: "P008", name: "Evelyn Grant", age: 48, gender: "Female", ward: "Cardiology – Ward A", diagnosis: "Mitral Valve Regurgitation", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Stable", blood: "O+", admitted: "2025-04-18", room: "108", phone: "+1 (876) 555-1008", address: "56 Blue Hills, Kingston", allergies: "Codeine" },
  { id: "P009", name: "Trevor Bailey", age: 61, gender: "Male", ward: "Cardiology – Ward B", diagnosis: "Pericarditis", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Recovering", blood: "AB+", admitted: "2025-04-20", room: "109", phone: "+1 (876) 555-1009", address: "1 Garden Path, May Pen", allergies: "None" },
  { id: "P010", name: "Donna Richards", age: 54, gender: "Female", ward: "Cardiology – Ward C", diagnosis: "Aortic Stenosis", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Stable", blood: "A+", admitted: "2025-04-21", room: "110", phone: "+1 (876) 555-1010", address: "88 Orchid Blvd, Montego Bay", allergies: "None" },
  { id: "P011", name: "Clifton Murray", age: 77, gender: "Male", ward: "Cardiology – Ward A", diagnosis: "Chronic Heart Disease", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Stable", blood: "B+", admitted: "2025-04-22", room: "111", phone: "+1 (876) 555-1011", address: "34 Riverside Close, Kingston", allergies: "Morphine" },
  { id: "P012", name: "Nadine Shaw", age: 42, gender: "Female", ward: "Cardiology – Ward B", diagnosis: "Tachycardia", doctor: "Dr. Emily Williams", doctorId: "D001", status: "Discharged", blood: "O+", admitted: "2025-04-14", room: "N/A", phone: "+1 (876) 555-1012", address: "19 Sunset Cres, Portmore", allergies: "None" },

  // Dr. Carter (Neurology)
  { id: "P013", name: "Lawrence Henry", age: 65, gender: "Male", ward: "Neurology – Ward D", diagnosis: "Ischemic Stroke", doctor: "Dr. James Carter", doctorId: "D002", status: "Critical", blood: "A+", admitted: "2025-04-03", room: "201", phone: "+1 (876) 555-2001", address: "7 Central Park, Kingston", allergies: "NSAIDs" },
  { id: "P014", name: "Cecelia Forbes", age: 58, gender: "Female", ward: "Neurology – Ward D", diagnosis: "Epilepsy", doctor: "Dr. James Carter", doctorId: "D002", status: "Stable", blood: "AB+", admitted: "2025-04-06", room: "202", phone: "+1 (876) 555-2002", address: "11 Orchid Park, Mandeville", allergies: "None" },
  { id: "P015", name: "Howard Ellis", age: 74, gender: "Male", ward: "Neurology – Ward E", diagnosis: "Parkinson's Disease", doctor: "Dr. James Carter", doctorId: "D002", status: "Stable", blood: "O+", admitted: "2025-04-09", room: "203", phone: "+1 (876) 555-2003", address: "45 Rose Hall, St. James", allergies: "Penicillin" },

  // Dr. Nguyen (Pediatrics)
  { id: "P016", name: "Emma Collins (Minor)", age: 8, gender: "Female", ward: "Pediatrics – Ward F", diagnosis: "Severe Asthma", doctor: "Dr. Sophia Nguyen", doctorId: "D003", status: "Recovering", blood: "A+", admitted: "2025-04-11", room: "301", phone: "+1 (876) 555-3001", address: "23 Rainbow Drive, Kingston", allergies: "Dust" },
  { id: "P017", name: "Marcus Collins (Minor)", age: 5, gender: "Male", ward: "Pediatrics – Ward F", diagnosis: "Pneumonia", doctor: "Dr. Sophia Nguyen", doctorId: "D003", status: "Stable", blood: "O+", admitted: "2025-04-13", room: "302", phone: "+1 (876) 555-3002", address: "23 Rainbow Drive, Kingston", allergies: "None" },
  { id: "P018", name: "Aaliyah Brown (Minor)", age: 12, gender: "Female", ward: "Pediatrics – Ward F", diagnosis: "Appendicitis", doctor: "Dr. Sophia Nguyen", doctorId: "D003", status: "Recovering", blood: "B+", admitted: "2025-04-16", room: "303", phone: "+1 (876) 555-3003", address: "55 Juniper Lane, Portmore", allergies: "Latex" },

  // Dr. Reid (Orthopedics)
  { id: "P019", name: "Albert Morrison", age: 55, gender: "Male", ward: "Orthopedics – Ward G", diagnosis: "Hip Replacement Recovery", doctor: "Dr. Marcus Reid", doctorId: "D004", status: "Recovering", blood: "O-", admitted: "2025-04-07", room: "401", phone: "+1 (876) 555-4001", address: "8 Valley Road, Kingston", allergies: "None" },
  { id: "P020", name: "Judith White", age: 68, gender: "Female", ward: "Orthopedics – Ward G", diagnosis: "Vertebral Fracture", doctor: "Dr. Marcus Reid", doctorId: "D004", status: "Stable", blood: "A-", admitted: "2025-04-10", room: "402", phone: "+1 (876) 555-4002", address: "62 Silver Rd, Clarendon", allergies: "Codeine" },
  { id: "P021", name: "Nathan Kerr", age: 34, gender: "Male", ward: "Orthopedics – Ward H", diagnosis: "ACL Tear – Post Surgery", doctor: "Dr. Marcus Reid", doctorId: "D004", status: "Recovering", blood: "B+", admitted: "2025-04-19", room: "403", phone: "+1 (876) 555-4003", address: "18 Stadium Close, Kingston", allergies: "None" },

  // Dr. Monroe (Oncology)
  { id: "P022", name: "Bernice Patel", age: 62, gender: "Female", ward: "Oncology – Ward I", diagnosis: "Breast Cancer Stage II", doctor: "Dr. Alicia Monroe", doctorId: "D005", status: "Recovering", blood: "AB+", admitted: "2025-04-02", room: "501", phone: "+1 (876) 555-5001", address: "3 Blossom Ct, Kingston", allergies: "Sulfa" },
  { id: "P023", name: "Calvin Stewart", age: 57, gender: "Male", ward: "Oncology – Ward I", diagnosis: "Lung Cancer Stage III", doctor: "Dr. Alicia Monroe", doctorId: "D005", status: "Critical", blood: "O+", admitted: "2025-04-04", room: "502", phone: "+1 (876) 555-5002", address: "90 West Palm, Montego Bay", allergies: "None" },

  // Dr. Osei (General Surgery)
  { id: "P024", name: "Sharon Dixon", age: 44, gender: "Female", ward: "Surgery – Ward J", diagnosis: "Appendectomy Recovery", doctor: "Dr. Daniel Osei", doctorId: "D006", status: "Stable", blood: "A+", admitted: "2025-04-18", room: "601", phone: "+1 (876) 555-6001", address: "7 Hospital Blvd, Kingston", allergies: "None" },
  { id: "P025", name: "Rupert Newman", age: 49, gender: "Male", ward: "Surgery – Ward J", diagnosis: "Cholecystectomy Recovery", doctor: "Dr. Daniel Osei", doctorId: "D006", status: "Stable", blood: "B-", admitted: "2025-04-20", room: "602", phone: "+1 (876) 555-6002", address: "4 Central Ave, Spanish Town", allergies: "Penicillin" },
];

// ── MEDICATIONS ──
const medications = [
  // Williams' patients
  { id: "M001", name: "Aspirin 100mg", patient: "Robert Thompson", patientId: "P001", dosage: "100mg", frequency: "Once daily", delivery: "2025-04-29", expiry: "2026-10-01", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "Take with food" },
  { id: "M002", name: "Metoprolol 50mg", patient: "Robert Thompson", patientId: "P001", dosage: "50mg", frequency: "Twice daily", delivery: "2025-04-29", expiry: "2026-12-15", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "Monitor heart rate" },
  { id: "M003", name: "Warfarin 5mg", patient: "Margaret Hall", patientId: "P002", dosage: "5mg", frequency: "Once daily", delivery: "2025-04-30", expiry: "2026-09-30", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "Monitor INR weekly" },
  { id: "M004", name: "Digoxin 0.25mg", patient: "Margaret Hall", patientId: "P002", dosage: "0.25mg", frequency: "Once daily", delivery: "2025-05-01", expiry: "2026-11-20", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "Check pulse before giving" },
  { id: "M005", name: "Amlodipine 10mg", patient: "Donald Pearce", patientId: "P003", dosage: "10mg", frequency: "Once daily", delivery: "2025-04-30", expiry: "2026-08-15", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "" },
  { id: "M006", name: "Furosemide 40mg", patient: "Patricia Simms", patientId: "P004", dosage: "40mg", frequency: "Twice daily", delivery: "2025-04-29", expiry: "2026-07-10", prescribedBy: "Dr. Emily Williams", route: "IV", notes: "Monitor electrolytes" },
  { id: "M007", name: "Lisinopril 10mg", patient: "Gregory Brown", patientId: "P005", dosage: "10mg", frequency: "Once daily", delivery: "2025-05-02", expiry: "2026-01-20", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "" },
  { id: "M008", name: "Atorvastatin 40mg", patient: "Sandra Clarke", patientId: "P006", dosage: "40mg", frequency: "Once daily at night", delivery: "2025-05-03", expiry: "2026-02-14", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "Take at bedtime" },
  { id: "M009", name: "Amiodarone 200mg", patient: "Winston James", patientId: "P007", dosage: "200mg", frequency: "Once daily", delivery: "2025-04-29", expiry: "2026-06-30", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "Check thyroid function monthly" },
  { id: "M010", name: "Carvedilol 25mg", patient: "Evelyn Grant", patientId: "P008", dosage: "25mg", frequency: "Twice daily", delivery: "2025-05-01", expiry: "2026-12-01", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "" },
  { id: "M011", name: "Colchicine 0.5mg", patient: "Trevor Bailey", patientId: "P009", dosage: "0.5mg", frequency: "Twice daily", delivery: "2025-04-30", expiry: "2026-10-22", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "" },
  { id: "M012", name: "Nitroglycerin 0.4mg SL", patient: "Donna Richards", patientId: "P010", dosage: "0.4mg", frequency: "PRN (chest pain)", delivery: "2025-05-02", expiry: "2026-09-14", prescribedBy: "Dr. Emily Williams", route: "Sublingual", notes: "Max 3 doses per episode" },
  { id: "M013", name: "Spironolactone 25mg", patient: "Clifton Murray", patientId: "P011", dosage: "25mg", frequency: "Once daily", delivery: "2025-05-01", expiry: "2026-03-05", prescribedBy: "Dr. Emily Williams", route: "Oral", notes: "" },

  // Other doctors' patients
  { id: "M014", name: "tPA (Alteplase)", patient: "Lawrence Henry", patientId: "P013", dosage: "0.9 mg/kg IV", frequency: "Single dose", delivery: "2025-04-03", expiry: "2026-08-06", prescribedBy: "Dr. James Carter", route: "IV Infusion", notes: "Emergency use" },
  { id: "M015", name: "Levetiracetam 500mg", patient: "Cecelia Forbes", patientId: "P014", dosage: "500mg", frequency: "Twice daily", delivery: "2025-04-30", expiry: "2025-12-20", prescribedBy: "Dr. James Carter", route: "Oral", notes: "" },
  { id: "M016", name: "Carbidopa-Levodopa 25-100mg", patient: "Howard Ellis", patientId: "P015", dosage: "25-100mg", frequency: "Three times daily", delivery: "2025-05-01", expiry: "2026-01-10", prescribedBy: "Dr. James Carter", route: "Oral", notes: "Take before meals" },
  { id: "M017", name: "Salbutamol Nebulizer", patient: "Emma Collins (Minor)", patientId: "P016", dosage: "2.5mg", frequency: "Every 4 hours", delivery: "2025-04-29", expiry: "2025-08-30", prescribedBy: "Dr. Sophia Nguyen", route: "Inhalation", notes: "Pediatric dose" },
  { id: "M018", name: "Amoxicillin 250mg Suspension", patient: "Marcus Collins (Minor)", patientId: "P017", dosage: "250mg", frequency: "Three times daily", delivery: "2025-04-30", expiry: "2025-05-14", prescribedBy: "Dr. Sophia Nguyen", route: "Oral", notes: "Refrigerate" },
  { id: "M019", name: "Metronidazole 500mg IV", patient: "Aaliyah Brown (Minor)", patientId: "P018", dosage: "500mg", frequency: "Three times daily", delivery: "2025-04-29", expiry: "2025-09-01", prescribedBy: "Dr. Sophia Nguyen", route: "IV", notes: "" },
  { id: "M020", name: "Morphine Sulfate 10mg", patient: "Albert Morrison", patientId: "P019", dosage: "10mg", frequency: "Every 6 hours PRN", delivery: "2025-04-29", expiry: "2025-07-25", prescribedBy: "Dr. Marcus Reid", route: "IV", notes: "Monitor respiratory rate" },
  { id: "M021", name: "Celecoxib 200mg", patient: "Judith White", patientId: "P020", dosage: "200mg", frequency: "Once daily", delivery: "2025-05-01", expiry: "2025-11-11", prescribedBy: "Dr. Marcus Reid", route: "Oral", notes: "" },
  { id: "M022", name: "Ibuprofen 400mg", patient: "Nathan Kerr", patientId: "P021", dosage: "400mg", frequency: "Three times daily", delivery: "2025-04-30", expiry: "2026-04-01", prescribedBy: "Dr. Marcus Reid", route: "Oral", notes: "Take with food" },
  { id: "M023", name: "Doxorubicin 60mg/m² IV", patient: "Bernice Patel", patientId: "P022", dosage: "60mg/m²", frequency: "Every 21 days (cycle)", delivery: "2025-05-06", expiry: "2025-06-06", prescribedBy: "Dr. Alicia Monroe", route: "IV Infusion", notes: "Chemo – PPE required" },
  { id: "M024", name: "Ondansetron 8mg", patient: "Calvin Stewart", patientId: "P023", dosage: "8mg", frequency: "Twice daily", delivery: "2025-04-29", expiry: "2025-10-17", prescribedBy: "Dr. Alicia Monroe", route: "IV", notes: "Anti-nausea pre-chemo" },
  { id: "M025", name: "Cephalexin 500mg", patient: "Sharon Dixon", patientId: "P024", dosage: "500mg", frequency: "Four times daily", delivery: "2025-04-30", expiry: "2025-09-20", prescribedBy: "Dr. Daniel Osei", route: "Oral", notes: "" },
  { id: "M026", name: "Tramadol 50mg", patient: "Rupert Newman", patientId: "P025", dosage: "50mg", frequency: "Every 8 hours PRN", delivery: "2025-04-29", expiry: "2025-11-30", prescribedBy: "Dr. Daniel Osei", route: "Oral", notes: "Do not exceed 400mg/day" },
];

// ── SCHEDULE (per day) ──
const schedule = [
  {
    doctor: "Dr. Takeisha Williams",
    color: "#1565c0",
    slots: [
      { time: "08:00 AM", patient: "Robert Thompson", type: "Morning Rounds – ICU" },
      { time: "09:30 AM", patient: "Margaret Hall", type: "ECG Review" },
      { time: "11:00 AM", patient: "Patricia Simms", type: "Cardiology Consult" },
      { time: "01:00 PM", patient: "Gregory Brown", type: "Follow-up" },
      { time: "03:00 PM", patient: "Sandra Clarke", type: "Discharge Planning" },
    ],
  },
  {
    doctor: "Dr. James Carter",
    color: "#6a1b9a",
    slots: [
      { time: "08:30 AM", patient: "Lawrence Henry", type: "Stroke Assessment" },
      { time: "10:00 AM", patient: "Cecelia Forbes", type: "EEG Review" },
      { time: "12:00 PM", patient: "Howard Ellis", type: "Neuro Exam" },
    ],
  },
  {
    doctor: "Dr. Sophia Nguyen",
    color: "#00695c",
    slots: [
      { time: "09:00 AM", patient: "Emma Collins", type: "Breathing Assessment" },
      { time: "10:30 AM", patient: "Marcus Collins", type: "X-Ray Review" },
      { time: "02:00 PM", patient: "Aaliyah Brown", type: "Post-Op Check" },
    ],
  },
  {
    doctor: "Dr. Marcus Reid",
    color: "#c62828",
    slots: [
      { time: "08:00 AM", patient: "Albert Morrison", type: "Hip Mobility Check" },
      { time: "10:00 AM", patient: "Judith White", type: "MRI Review" },
      { time: "12:30 PM", patient: "Nathan Kerr", type: "Physio Coordination" },
    ],
  },
  {
    doctor: "Dr. Alicia Monroe",
    color: "#e65100",
    slots: [
      { time: "09:00 AM", patient: "Bernice Patel", type: "Chemotherapy Cycle 3" },
      { time: "02:00 PM", patient: "Calvin Stewart", type: "Oncology Review" },
    ],
  },
  {
    doctor: "Dr. Daniel Osei",
    color: "#2e7d32",
    slots: [
      { time: "07:30 AM", patient: "Sharon Dixon", type: "Post-Op Dressing" },
      { time: "09:00 AM", patient: "Rupert Newman", type: "Wound Check" },
      { time: "11:30 AM", patient: "Sharon Dixon", type: "Discharge Review" },
    ],
  },
];

// ── AUTH ──
const validUsers = doctors.reduce((acc, d) => {
  acc[d.email] = { password: "p1234", doctor: d };
  return acc;
}, {});
