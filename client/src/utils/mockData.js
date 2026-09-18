export const COLLEGE_NAME = 'Demo Institute of Technology'

export const DEMO_USERS = {
  student: {
    id: 's1',
    role: 'student',
    name: 'Anand Yadav',
    email: 'anandyadav@gmail.com',
    erpId: '0241ITE145',
    department: 'Information Technology',
    branch: 'IT',
    year: 3,
    section: 'A',
    semester: 5,
    subjects: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
    ],
  },
  teacher: {
    id: 't1',
    role: 'teacher',
    name: 'Dr. Meera Iyer',
    email: 'meera.iyer@college.edu',
    facultyId: 'FAC-IT-012',
    department: 'Information Technology',
    designation: 'Associate Professor',
    subjects: ['Data Structures & Algorithms', 'Operating Systems'],
  },
  admin: {
    id: 'a1',
    role: 'admin',
    name: 'Rohan Verma',
    email: 'admin@college.edu',
    department: 'Administration',
    designation: 'System Administrator',
  },
}

export const UPCOMING_EXAMS = [
  { subject: 'Operating Systems', type: 'Internal Exam II', date: '2026-09-28', time: '10:00 AM', room: 'Hall B-204' },
  { subject: 'Database Management Systems', type: 'Internal Exam II', date: '2026-09-30', time: '10:00 AM', room: 'Hall B-204' },
  { subject: 'Data Structures & Algorithms', type: 'Internal Exam II', date: '2026-10-03', time: '2:00 PM', room: 'Hall A-101' },
]

export const NOTICES = [
  { id: 1, title: 'Revised Internal Examination Schedule – Semester V', category: 'Examination', date: '2026-09-17', department: 'All Departments', important: true },
  { id: 2, title: 'Guest Lecture on Cloud Computing', category: 'Event', date: '2026-09-15', department: 'Information Technology', important: false },
  { id: 3, title: 'Library Timings During Exam Week', category: 'General', date: '2026-09-12', department: 'All Departments', important: false },
  { id: 4, title: 'Campus Placement Drive – Registration Open', category: 'Placement', date: '2026-09-10', department: 'All Departments', important: true },
]

export const ASSIGNMENTS = [
  { subject: 'DBMS', title: 'ER Diagram & Normalization Worksheet', due: '2026-09-24' },
  { subject: 'DSA', title: 'Graph Algorithms Problem Set', due: '2026-09-26' },
  { subject: 'CN', title: 'Subnetting Practice Sheet', due: '2026-09-29' },
]

export const DOCUMENTS = [
  { id: 1, title: 'Semester V Syllabus – IT', type: 'Syllabus', department: 'Information Technology', visibility: ['student', 'teacher'], updated: '2026-07-20', size: '1.8 MB' },
  { id: 2, title: 'Academic Calendar 2026-27', type: 'Calendar', department: 'All Departments', visibility: ['student', 'teacher'], updated: '2026-07-05', size: '640 KB' },
  { id: 3, title: 'Semester V Internal Exam Schedule', type: 'Exam Schedule', department: 'All Departments', visibility: ['student', 'teacher'], updated: '2026-09-17', size: '320 KB' },
  { id: 4, title: 'DBMS Lab Manual', type: 'Lab Manual', department: 'Information Technology', visibility: ['student', 'teacher'], updated: '2026-08-02', size: '4.2 MB' },
  { id: 5, title: 'Question Paper Setting Guidelines', type: 'Rules', department: 'Examination Cell', visibility: ['teacher'], updated: '2026-08-11', size: '210 KB' },
  { id: 6, title: 'Faculty Appraisal Policy', type: 'Rules', department: 'Administration', visibility: [], updated: '2026-06-30', size: '520 KB' },
]

export const CONVERSATIONS = [
  { id: 'c1', title: 'Deadlock explained for my syllabus', preview: 'Unit 3 – Deadlocks and the four Coffman conditions…', updated: '2026-09-18', messages: 6 },
  { id: 'c2', title: 'Next internal exam date', preview: 'Operating Systems Internal II is on 28 Sept…', updated: '2026-09-17', messages: 2 },
  { id: 'c3', title: 'DBMS lab manual location', preview: 'You can find it in Documents → Lab Manual…', updated: '2026-09-14', messages: 4 },
  { id: 'c4', title: 'Revision plan for Unit 2 DSA', preview: 'Here is a 5-day revision plan…', updated: '2026-09-10', messages: 8 },
]

export const SUGGESTED_PROMPTS = [
  'When is the next internal exam?',
  'Explain deadlock according to my syllabus',
  'Where can I find the DBMS lab manual?',
  'Create a revision plan for my upcoming exam',
]

export const ADMIN_STATS = {
  totalStudents: 1248,
  totalTeachers: 86,
  activeUsers: 412,
  questionsAsked: 9340,
  helpfulRate: 87,
  topTopics: [
    { topic: 'Exam schedules', count: 1820 },
    { topic: 'Syllabus & units', count: 1490 },
    { topic: 'Notices', count: 1105 },
    { topic: 'Lab manuals', count: 760 },
    { topic: 'Placements', count: 512 },
  ],
  topDocuments: [
    { title: 'Semester V Internal Exam Schedule', views: 940 },
    { title: 'Academic Calendar 2026-27', views: 780 },
    { title: 'DBMS Lab Manual', views: 610 },
  ],
  unanswered: [
    'What is the hostel curfew time?',
    'Is there a scholarship for sports quota?',
    'Who is the coordinator of the coding club?',
  ],
}