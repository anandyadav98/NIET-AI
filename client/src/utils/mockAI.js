/* Temporary mock. Replaced by POST /api/chat with real RAG in Phases 7–10. */
export function mockReply(question) {
  const q = question.toLowerCase()

  if (q.includes('exam')) {
    return {
      kind: 'college',
      content:
        'Your next internal exam is **Operating Systems – Internal Exam II**.\n\n| Detail | Value |\n|---|---|\n| Date | 28 Sept 2026 |\n| Time | 10:00 AM |\n| Venue | Hall B-204 |\n\nThe schedule was revised recently, so check the latest notice for any changes.',
      sources: [{ title: 'Semester V Internal Exam Schedule.pdf', page: 2, type: 'Exam Schedule' }],
    }
  }

  if (q.includes('deadlock')) {
    return {
      kind: 'general',
      content:
        'A **deadlock** happens when a set of processes are each waiting for a resource held by another process in the set, so none can proceed.\n\nIt requires all four Coffman conditions:\n\n1. Mutual exclusion\n2. Hold and wait\n3. No preemption\n4. Circular wait\n\n```c\n// Classic deadlock: two threads lock in opposite order\nlock(A); lock(B);   // Thread 1\nlock(B); lock(A);   // Thread 2\n```\n\n> This is general knowledge. Ask me to explain it *according to my syllabus* and I will use your college syllabus.',
      sources: [],
    }
  }

  return {
    kind: 'unavailable',
    content:
      "I couldn't find this in the college knowledge base, so I won't guess. Try rephrasing, check **Documents** and **Notices**, or contact your department office.",
    sources: [],
  }
}