// ============================================================================
// 3twah // NET — Computer Networks Complete Question Bank & Study Data
// Instructor: Dr. Ahmed Atwan
// Includes:
//   1. Midterm Exam 2024/2025 (20 Questions)
//   2. Midterm Exam 2025/2026 (30 Questions)
//   3. Chapter 1 Q&A (108 Questions)
//   4. Chapter 2 Q&A (110 Questions)
//   5. Chapter 5 / Lec 3 Q&A (61 Questions)
//   6. Complete Exercises Question Bank (370 Questions across all 131 pages)
//   7. Step-by-Step Problem-Solving Patterns ("بصمجة المسائل")
// ============================================================================

export type QuestionSource =
  | 'midterm-2025'
  | 'midterm-2026'
  | 'ch1'
  | 'ch2'
  | 'ch5'
  | 'question-bank';

export type QuestionType =
  | 'mcq'
  | 'practical'
  | 'short-answer'
  | 'essay'
  | 'fill-in-blank';

export type PriorityTier = 1 | 2 | 3;

export type TopicId =
  | 'intro-models'
  | 'physical-media'
  | 'datalink-ethernet'
  | 'network-ip'
  | 'transport-tcp-udp'
  | 'application-web-mail'
  | 'security-vpn-wlan';

export interface BilingualExplanation {
  /** Detailed Egyptian Arabic explanation preserving English technical terms */
  ar: string;
  /** Concise academic English explanation */
  en: string;
}

export interface Question {
  id: string;
  number: number;
  source: QuestionSource;
  type: QuestionType;
  tier: PriorityTier;
  topic: TopicId;
  topicLabelEn: string;
  topicLabelAr: string;
  page: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  answer: string;
  explanation: BilingualExplanation;
  keywords: string[];
  isDuplicate?: boolean;
  duplicateOf?: string;
}

export interface TopicMetadata {
  id: TopicId;
  titleEn: string;
  titleAr: string;
  icon: string;
  color: string;
}

export interface ExamPaperMetadata {
  id: QuestionSource;
  titleEn: string;
  titleAr: string;
  questionCount: number;
  durationMinutes: number;
  descriptionAr: string;
}

export interface ProblemSolvingPattern {
  id: string;
  titleEn: string;
  titleAr: string;
  formula: string;
  stepsAr: string[];
  workedExample: {
    problem: string;
    solution: string;
  };
  relatedQuestionIds: string[];
}

export const courseMetadata: Record<string, any> = {
  "courseCode": "CS-NET",
  "courseTitleEn": "Computer Networks",
  "courseTitleAr": "شبكات الحاسب — د. أحمد عطوان",
  "instructor": "Dr. Ahmed Atwan",
  "totalQuestions": 699,
  "midterm2025Count": 20,
  "midterm2026Count": 30,
  "ch1Count": 108,
  "ch2Count": 110,
  "ch5Count": 61,
  "questionBankCount": 370
};

export const topics: TopicMetadata[] = [
  {
    "id": "intro-models",
    "titleEn": "Network Fundamentals, Topologies & Layered Models",
    "titleAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "icon": "Network",
    "color": "#38bdf8"
  },
  {
    "id": "physical-media",
    "titleEn": "Physical Layer, Transmission Media & Access Networks",
    "titleAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "icon": "Cpu",
    "color": "#a855f7"
  },
  {
    "id": "datalink-ethernet",
    "titleEn": "Data Link Layer, Ethernet, MAC & Switching",
    "titleAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "icon": "Layers",
    "color": "#10b981"
  },
  {
    "id": "network-ip",
    "titleEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "titleAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "icon": "Globe",
    "color": "#f59e0b"
  },
  {
    "id": "transport-tcp-udp",
    "titleEn": "Transport Layer, TCP, UDP & Sockets",
    "titleAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "icon": "ArrowLeftRight",
    "color": "#ec4899"
  },
  {
    "id": "application-web-mail",
    "titleEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "titleAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "icon": "AppWindow",
    "color": "#6366f1"
  },
  {
    "id": "security-vpn-wlan",
    "titleEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "titleAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "icon": "ShieldCheck",
    "color": "#ef4444"
  }
];

export const examPapers: ExamPaperMetadata[] = [
  {
    "id": "midterm-2025",
    "titleEn": "Midterm Exam 2024/2025",
    "titleAr": "امتحان الميدتيرم 2024 / 2025",
    "questionCount": 20,
    "durationMinutes": 45,
    "descriptionAr": "امتحان الميدتيرم الرسمي (20 سؤال اختيار من متعدد ومسائل عملية)."
  },
  {
    "id": "midterm-2026",
    "titleEn": "Midterm Exam 2025/2026",
    "titleAr": "امتحان الميدتيرم 2025 / 2026",
    "questionCount": 30,
    "durationMinutes": 60,
    "descriptionAr": "امتحان الميدتيرم الحديث (30 سؤال شامل)."
  },
  {
    "id": "ch1",
    "titleEn": "Chapter 1 Q&A (Computer Networks & The Internet)",
    "titleAr": "أسئلة الفصل الأول Ch1 — أساسيات الشبكات والإنترنت",
    "questionCount": 108,
    "durationMinutes": 60,
    "descriptionAr": "108 سؤال شامل على الفصل الأول: Access Networks, Switching, Delay, Throughput, Security, Protocol Layers."
  },
  {
    "id": "ch2",
    "titleEn": "Chapter 2 Q&A (Application Layer)",
    "titleAr": "أسئلة الفصل الثاني Ch2 — طبقة التطبيقات",
    "questionCount": 110,
    "durationMinutes": 60,
    "descriptionAr": "110 سؤال شامل على الفصل الثاني: HTTP/1.1/2/3, SMTP, IMAP/POP3, DNS, BitTorrent P2P, CDN/DASH, Sockets."
  },
  {
    "id": "ch5",
    "titleEn": "Lecture 3 / Ch5 Q&A (Protocols, ARP, TCP/IP & Ethernet)",
    "titleAr": "أسئلة المحاضرة الثالثة Ch5 — البروتوكولات و ARP و TCP/IP",
    "questionCount": 61,
    "durationMinutes": 45,
    "descriptionAr": "61 سؤال محلول على البروتوكولات، ARP/RARP، DHCP (DORA)، CSMA/CD، ATM، SNMP، والـ VPN."
  },
  {
    "id": "question-bank",
    "titleEn": "Dr. Ahmed Atwan Complete Question Bank",
    "titleAr": "بنك الأسئلة الشامل — د. أحمد عطوان",
    "questionCount": 370,
    "durationMinutes": 180,
    "descriptionAr": "جميع أسئلة شيت التمارين الكامل (370 سؤال)."
  }
];

export const problemSolvingPatterns: ProblemSolvingPattern[] = [
  {
    "id": "pattern-queueing-delay",
    "titleEn": "Queueing & Transmission Delay Calculation",
    "titleAr": "حساب زمن الطابور والنقل (Queueing & Transmission Delay)",
    "formula": "d_trans = L / R  |  d_queue = (N_waiting + fraction_in_progress) × (L / R)",
    "stepsAr": [
      "حول حجم الباكيت L من Bytes إلى Bits بالضرب في 8: L_bits = L_bytes × 8.",
      "احسب زمن نقل الباكيت الواحدة (Transmission Delay): d_trans = L_bits / R.",
      "احسب إجمالي عدد الباكيتات اللي الباكيت الجديدة هتستناها في الطابور (مثلاً 4 مستنيين + 0.5 باكيت بتتبعت حالياً = 4.5 باكيت).",
      "اضرب عدد الباكيتات المنتظرة في d_trans عشان تطلع الـ Queueing Delay بالملي ثانية (ms)."
    ],
    "workedExample": {
      "problem": "Packet size L = 1500 bytes, Link rate R = 2.5 Mbps. 4 packets waiting in queue + 1 packet halfway (0.5) transmitted. Find queueing delay.",
      "solution": "1) L = 1500 × 8 = 12,000 bits.\n2) d_trans = 12,000 / 2,500,000 = 0.0048 s = 4.8 ms.\n3) Waiting packets = 4 + 0.5 = 4.5 packets.\n4) d_queue = 4.5 × 4.8 ms = 21.6 ms."
    },
    "relatedQuestionIds": [
      "mid25-06",
      "bank-p3-108",
      "ch1-045"
    ]
  },
  {
    "id": "pattern-circuit-switching-users",
    "titleEn": "Maximum Users in Circuit Switching",
    "titleAr": "أقصى عدد مستخدمين في الـ Circuit Switching",
    "formula": "N = Link_Capacity / User_Busy_Rate  (Ignore activity probability p!)",
    "stepsAr": [
      "انتبه للفخ الشهير في الامتحان: في الـ Circuit Switching، الاحتمال p (مثلاً p = 0.1) ملوش أي لازمة لأن كل مستخدم بيتحجز له خط كامل ثابت طول الوقت!",
      "وحد الوحدات بين سعة الخط الكلية (Link Capacity) وسرعة المستخدم الواحد (مثلاً حول 1 Gbps إلى 1,000,000 Kbps).",
      "اقسم السعة الكلية للخط على سرعة المستخدم الواحد: N = C / R_user."
    ],
    "workedExample": {
      "problem": "Link capacity = 1 Gbps. Each user generates 100 Kbps when busy, with busy probability p = 0.1. What is max users N under circuit switching?",
      "solution": "N = 1 Gbps / 100 Kbps = 1,000,000 Kbps / 100 Kbps = 10,000 users."
    },
    "relatedQuestionIds": [
      "mid25-17",
      "ch1-058"
    ]
  },
  {
    "id": "pattern-http2-framing",
    "titleEn": "HTTP/2 Frame Times & Web Page Objects",
    "titleAr": "حساب الـ Frame Times في HTTP/2 وعدد الـ Objects في صفحة الويب",
    "formula": "Total Objects = 1 (Base HTML) + N_referenced_files  |  Total Frame Times = Video_Frames + (N_images × Frames_per_image)",
    "stepsAr": [
      "لو السؤال بيسأل عن عدد الـ Objects في صفحة ويب فيها K صور وملف HTML: اجمع دايماً 1 (ملف الـ HTML الأساسي) + K (الصور) = K + 1 Objects.",
      "لو السؤال عن HTTP/2 بدون Interleaving (الفيديو كله بيتبعت الأول وبعده الصور): اجمع عدد Frames الفيديو + (عدد الصور × عدد Frames الصورة الواحدة)."
    ],
    "workedExample": {
      "problem": "1 video clip (2000 frames) + 5 images (3 frames each) sent over HTTP/2 without interleaving. How many Frame Times until all 5 images are sent?",
      "solution": "Total Frame Times = 2000 + (5 × 3) = 2000 + 15 = 2015 Frame Times."
    },
    "relatedQuestionIds": [
      "mid25-12",
      "bank-p3-149",
      "mid26-02",
      "bank-p3-153",
      "ch1-095",
      "ch2-037"
    ]
  },
  {
    "id": "pattern-ftp-connections",
    "titleEn": "Total TCP Connections in an FTP Session",
    "titleAr": "حساب إجمالي اتصالات الـ TCP في جلسة FTP",
    "formula": "Total TCP Connections for K files in one FTP session = 1 (Persistent Control) + K (Non-Persistent Data)",
    "stepsAr": [
      "تذكر إن الـ FTP بيستخدم 2 parallel TCP connections لنقل ملف واحد (Port 21 للـ Control و Port 20 للـ Data).",
      "لو نقلنا K ملفات في نفس الـ Session: الـ Control connection بيتفتح مرة واحدة بس ويفضل مفتوح (1)، بينما الـ Data connection بيتفتح ويتقفل لكل ملف (K).",
      "إذن إجمالي عدد اتصالات الـ TCP لـ K ملفات = K + 1."
    ],
    "workedExample": {
      "problem": "If 5 files are transferred from server A to client B in the same FTP session, how many TCP connections are established?",
      "solution": "1 control connection + 5 data connections = 6 TCP connections."
    },
    "relatedQuestionIds": [
      "bank-p3-141",
      "bank-p3-143",
      "bank-p3-082"
    ]
  },
  {
    "id": "pattern-ipv4-classes",
    "titleEn": "IPv4 Address Classes & Host/Network Bits",
    "titleAr": "تحديد Class عنوان الـ IPv4 وعدد بتات الـ Network والـ Host",
    "formula": "Class A: 1–126 (8 Net / 24 Host) | Class B: 128–191 (16 Net / 16 Host) | Class C: 192–223 (24 Net / 8 Host) | Class D: 224–239 (Multicast)",
    "stepsAr": [
      "بص على أول رقم على الشمال (First Octet) قبل أول نقطة.",
      "لو من 1 لـ 126 -> Class A (Network = 8 bits, Host = 24 bits) — و127 محجوز للـ Loopback.",
      "لو من 128 لـ 191 -> Class B (Network = 16 bits, Host = 16 bits).",
      "لو من 192 لـ 223 -> Class C (Network = 24 bits, Host = 8 bits).",
      "لو من 224 لـ 239 -> Class D (مخصص للـ Multicast)."
    ],
    "workedExample": {
      "problem": "Classify: (1) 46.39.42.05, (2) 128.64.32.16, (3) 198.1.0.4, and find Host bits in Class B.",
      "solution": "(1) 46 -> Class A. (2) 128 -> Class B (16 host bits). (3) 198 -> Class C."
    },
    "relatedQuestionIds": [
      "mid26-12",
      "mid26-27",
      "bank-p2-18",
      "bank-p2-19",
      "bank-p2-20",
      "bank-p2-21",
      "bank-p2-22",
      "bank-p2-23"
    ]
  },
  {
    "id": "pattern-mac-oui-ping",
    "titleEn": "MAC OUI Vendor Lookup & Windows Ping Flags",
    "titleAr": "أكواد الشركات المصنعة للـ MAC (OUI) وأوامر الـ Ping",
    "formula": "00-C0-4F = DELL | 00-0A-27 = APPLE | 00-04-76 = 3Com | 00-00-36 = ATARI || ping -t (indefinite) | ping -n count -l size IP",
    "stepsAr": [
      "أول 3 بايت (24 bits) في الـ MAC Address اسمهم OUI وبيحددوا الشركة المصنعة: احفظ الـ 4 أمثلة بتوع شيت د. أحمد عطوان (C0-4F = DELL، 0A-27 = APPLE، 04-76 = 3Com، 00-36 = ATARI).",
      "في أوامر الـ Ping على Windows: استخدم `-t` للـ Ping المستمر لما لا نهاية، واستخدم `-n <number>` لتحديد عدد المرات، و`-l <bytes>` لتحديد حجم الباكيت بالبايت."
    ],
    "workedExample": {
      "problem": "Write the command to ping 192.168.5.36 20 times with 1024 bytes of data.",
      "solution": "ping -n 20 -l 1024 192.168.5.36"
    },
    "relatedQuestionIds": [
      "bank-p2-14",
      "bank-p2-15",
      "bank-p2-16",
      "bank-p2-17",
      "bank-p2-47",
      "bank-p2-48"
    ]
  }
];

export const midterm2025Questions: Question[] = [
  {
    "id": "mid25-01",
    "number": 1,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 1,
    "question": "........ is the time for a small packet to travel from client to server and back.",
    "options": [
      "RTT",
      "HOL",
      "RFC",
      "GDPR"
    ],
    "correctAnswerIndex": 0,
    "answer": "RTT",
    "explanation": {
      "ar": "الـ RTT (Round-Trip Time) هو الوقت اللي بتاخده packet صغيرة عشان تروح من الـ client للـ server وترجع تاني للـ client. أما HOL فهو Head-of-Line blocking، وRFC هي وثائق المعايير القياسية للإنترنت.",
      "en": "Round-Trip Time (RTT) is the duration required for a small packet to travel from a client to a server and return back to the client."
    },
    "keywords": [
      "RTT",
      "Round-Trip Time",
      "HTTP",
      "Latency"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid25-02",
    "number": 2,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 1,
    "question": "In ........, different channels are transmitted in different frequency bands.",
    "options": [
      "HFC",
      "FDM",
      "CMTS",
      "DSL"
    ],
    "correctAnswerIndex": 1,
    "answer": "FDM",
    "explanation": {
      "ar": "في الـ FDM (Frequency Division Multiplexing)، بيتم تقسيم الـ frequency spectrum بتاع الـ link لأكتر من نطاق ترددي (frequency bands)، وكل channel بتتبعت في frequency band مخصص ليها.",
      "en": "In Frequency Division Multiplexing (FDM), the frequency spectrum of a link is divided among the connections established across the link, transmitting different channels in different frequency bands."
    },
    "keywords": [
      "FDM",
      "Frequency Division Multiplexing",
      "Multiplexing",
      "Frequency Bands"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "mid25-03",
    "number": 3,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 1,
    "question": ".... define the format, order of messages sent and received among network entities, and actions taken on message transmission and/or receipt.",
    "options": [
      "Routers",
      "Protocols",
      "Switches",
      "Servers"
    ],
    "correctAnswerIndex": 1,
    "answer": "Protocols",
    "explanation": {
      "ar": "ده التعريف الرسمي للـ Protocol في الشبكات (زي كتاب Kurose & Ross): الـ Protocol بيحدد الـ format والـ order للرسائل المبعوتة والمستقبلة بين أجهزة الشبكة، وكمان الـ actions اللي بتتاخد لما رسالة تتبعت أو توصل.",
      "en": "A network protocol defines the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message."
    },
    "keywords": [
      "Protocols",
      "Message Format",
      "Message Order",
      "Network Entities"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid25-04",
    "number": 4,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 1,
    "question": "In ...... transmission order of requested objects is based on client-specified object priority. It pushes unrequested objects to client, divides them into frames, and then schedules them.",
    "options": [
      "HTTP 1.1",
      "HTTP 1.2",
      "HTTP 2.1",
      "HTTP 2"
    ],
    "correctAnswerIndex": 3,
    "answer": "HTTP 2",
    "explanation": {
      "ar": "بروتوكول HTTP/2 قدم مميزات مهمة لحل مشكلة الـ HOL blocking في HTTP/1.1، وأهمها: تقسيم الرسائل لـ frames وجدولتها (frame scheduling/interleaving)، ترتيب إرسال الـ objects حسب أولوية الـ client (client-specified object priority)، وميزة الـ Server Push (إرسال objects للـ client قبل ما يطلبها).",
      "en": "HTTP/2 supports transmission order based on client-specified object priority, server push of unrequested objects, and dividing objects into small frames to interleave and schedule them."
    },
    "keywords": [
      "HTTP/2",
      "Server Push",
      "Frame Scheduling",
      "Object Priority",
      "HOL Blocking"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid25-05",
    "number": 5,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 2,
    "question": "In ........... end-end resources are allocated to and reserved for a call between source and destination.",
    "options": [
      "Queueing",
      "TDM",
      "Packet-Switching",
      "Circuit Switching"
    ],
    "correctAnswerIndex": 3,
    "answer": "Circuit Switching",
    "explanation": {
      "ar": "في الـ Circuit Switching، الـ resources (زي الـ bandwidth والـ buffers) بتتحجز بالكامل (reserved) طول فترة المكالمة أو الـ session بين الـ source والـ destination، على عكس الـ Packet Switching اللي بيستخدم الـ resources عند الطلب (on demand).",
      "en": "In circuit switching, the resources needed along a path (buffers, link transmission rate) to provide for communication between the end systems are reserved for the duration of the communication session."
    },
    "keywords": [
      "Circuit Switching",
      "Resource Reservation",
      "Packet Switching"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid25-06",
    "number": 6,
    "source": "midterm-2025",
    "type": "practical",
    "tier": 1,
    "topic": "intro-models",
    "page": 2,
    "question": "A packet switch receives a packet and determines the outbound link to which the packet should be forwarded. When the packet arrives, another packet is halfway done being transmitted on this outbound link and four other packets are waiting to be transmitted. Packets are transmitted in order of arrival. Suppose all packets are 1500 bytes and the link rate is 2.5 Mbps. What is the queueing delay for the packet?",
    "options": [
      "21.6 ms",
      "19.2 ms",
      "16.8 ms",
      "2.4 ms"
    ],
    "correctAnswerIndex": 0,
    "answer": "21.6 ms",
    "explanation": {
      "ar": "خطوات الحل: (1) نحسب حجم الـ packet بالـ bits: L = 1500 * 8 = 12,000 bits. (2) نحسب الـ transmission delay لـ packet واحدة: d_trans = L / R = 12,000 / (2.5 * 10^6) = 0.0048 sec = 4.8 ms. (3) الـ packet اللي لسه واصلة هتستنى 4 packets كاملين في الطابور + نص packet بتتبعت حالياً = 4.5 packets. إذن Queueing Delay = 4.5 * 4.8 ms = 21.6 ms.",
      "en": "Packet size L = 1500 bytes = 12,000 bits. Link rate R = 2.5 Mbps = 2.5 * 10^6 bps. Transmission time per packet = L/R = 12,000 / 2,500,000 = 4.8 ms. Since 4 full packets are waiting and 1 packet is halfway transmitted (0.5 remaining), total queueing delay = 4.5 * 4.8 ms = 21.6 ms."
    },
    "keywords": [
      "Queueing Delay",
      "Transmission Delay",
      "Packet Switching",
      "Calculation"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid25-07",
    "number": 7,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 2,
    "question": "..... attacks intercept DNS queries, returning bogus replies.",
    "options": [
      "ICANN",
      "DoS",
      "Spoofing",
      "DDoS"
    ],
    "correctAnswerIndex": 2,
    "answer": "Spoofing",
    "explanation": {
      "ar": "الـ DNS Spoofing (أو Man-in-the-middle DNS spoofing) هو هجوم بيعترض فيه المهاجم طلبات الـ DNS (DNS queries) ويرجع ردود مزيفة (bogus replies) فيها IP addresses غير حقيقية.",
      "en": "In DNS spoofing (or man-in-the-middle intercept attacks), an attacker intercepts DNS queries and returns bogus replies with counterfeit IP addresses."
    },
    "keywords": [
      "DNS Spoofing",
      "Security",
      "Bogus Replies",
      "DNS"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid25-08",
    "number": 8,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 2,
    "question": "In ..... fiber attaches homes to ISP router, homes share access network to cable headend.",
    "options": [
      "DSL",
      "Packet Transmission Delay",
      "TDM",
      "Cable-Based Access"
    ],
    "correctAnswerIndex": 3,
    "answer": "Cable-Based Access",
    "explanation": {
      "ar": "في الـ Cable-Based Access (اللي بيستخدم تقنية HFC - Hybrid Fiber Coax)، الألياف الضوئية (Fiber) بتربط الـ cable headend بـ neighborhood junctions ومنها كابلات Coaxial للبيوت، وكل البيوت بتتشارك في الـ access network للـ cable headend.",
      "en": "In Cable-Based Access (Hybrid Fiber Coax - HFC), optical fiber attaches the cable headend to neighborhood-level junctions, and homes share the broadcast access network to the cable headend."
    },
    "keywords": [
      "Cable-Based Access",
      "HFC",
      "Cable Headend",
      "Access Networks"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "mid25-09",
    "number": 9,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 3,
    "question": "...... provides retrieval, deletion and folders of stored messages on the Email server.",
    "options": [
      "IMAP",
      "ICANN",
      "POP",
      "SMTP"
    ],
    "correctAnswerIndex": 0,
    "answer": "IMAP",
    "explanation": {
      "ar": "بروتوكول IMAP (Internet Mail Access Protocol) بيسمح للـ user إنه يسترجع الإيميلات، يمسحها، وينظمها في folders محفوظة مباشرة على الـ Email server، على عكس الـ POP3 التقليدي اللي مش بيدعم تنظيم الرسائل في folders على السيرفر.",
      "en": "IMAP (Internet Mail Access Protocol) keeps all messages in one place at the server and allows users to organize messages into folders, retrieve, and delete stored messages on the email server."
    },
    "keywords": [
      "IMAP",
      "Email",
      "POP",
      "SMTP",
      "Folders"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid25-10",
    "number": 10,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 3,
    "question": "A small object may have to wait for transmission behind a large object. This is called ..... blocking.",
    "options": [
      "ICANN",
      "GDPR",
      "HOL",
      "FCFS"
    ],
    "correctAnswerIndex": 2,
    "answer": "HOL",
    "explanation": {
      "ar": "الـ HOL (Head-of-Line) blocking بيحصل في HTTP/1.1 لما يكون فيه object كبير (زي فيديو أو صورة كبيرة) بيتبعت في أول الـ TCP connection، فيعطل كل الـ objects الصغيرة اللي مستنية وراه في الطابور.",
      "en": "Head-of-Line (HOL) blocking occurs when a small object has to wait for transmission behind a large object at the head of the queue over a single TCP connection."
    },
    "keywords": [
      "HOL Blocking",
      "Head-of-Line",
      "HTTP/1.1",
      "HTTP/2"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid25-11",
    "number": 11,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 3,
    "question": "...... is the rate (bits/time unit) at which bits are being sent from sender to receiver.",
    "options": [
      "Throughput",
      "Queueing delay",
      "Transmission delay",
      "Nodal processing"
    ],
    "correctAnswerIndex": 0,
    "answer": "Throughput",
    "explanation": {
      "ar": "الـ Throughput هو المعدل الفعلي (bits/time unit أو bps) اللي بتوصل بيه الـ bits من الـ sender للـ receiver عبر الشبكة.",
      "en": "Throughput is the rate (in bits per unit of time) at which bits are transferred between the sender and receiver."
    },
    "keywords": [
      "Throughput",
      "Transfer Rate",
      "Performance"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid25-12",
    "number": 12,
    "source": "midterm-2025",
    "type": "practical",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 3,
    "question": "Consider sending over HTTP/2 a Web page that consists of one video clip, and five images. Suppose that the video clip is transported as 2000 frames and each image has three frames. If all the video frames are sent first without interleaving, how many 'Frame Times' are needed until all five images are sent?",
    "options": [
      "2000",
      "2015",
      "2030",
      "4030"
    ],
    "correctAnswerIndex": 1,
    "answer": "2015",
    "explanation": {
      "ar": "خطوات الحل: عندنا فيديو واحد = 2000 frames، وعندنا 5 صور وكل صورة 3 frames = 5 * 3 = 15 frames. لو بعتنا كل frames الفيديو الأول من غير interleaving وبعدها الـ 5 صور، يبقى الإجمالي عشان كل الصور تتبعت بالكامل = 2000 + 15 = 2015 Frame Times.",
      "en": "The video clip requires 2000 frames and the 5 images require 5 * 3 = 15 frames. Without interleaving (sending all video frames first, followed by the image frames), all 5 images finish sending after 2000 + 15 = 2015 frame times."
    },
    "keywords": [
      "HTTP/2",
      "Frame Times",
      "Interleaving",
      "Calculation"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid25-13",
    "number": 13,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 3,
    "question": "In .... uses existing telephone line to central office; it has 24-52 Mbps dedicated downstream transmission rate and 3.5-16 Mbps dedicated upstream transmission rate.",
    "options": [
      "DSL",
      "TDM",
      "DSLAM",
      "CMTS"
    ],
    "correctAnswerIndex": 0,
    "answer": "DSL",
    "explanation": {
      "ar": "تقنية الـ DSL (Digital Subscriber Line) بتستخدم خط التليفون الأرضي النحاسي الموجود فعلياً للاتصال بالـ Central Office (CO) عن طريق الـ DSLAM، وبتوفر خط مخصص (dedicated) بسرعات downstream من 24 لـ 52 Mbps وupstream من 3.5 لـ 16 Mbps.",
      "en": "Digital Subscriber Line (DSL) uses existing twisted-pair copper telephone lines to connect to the DSLAM in the central office, offering 24-52 Mbps downstream and 3.5-16 Mbps upstream rates."
    },
    "keywords": [
      "DSL",
      "Digital Subscriber Line",
      "Access Network",
      "Downstream",
      "Upstream"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "mid25-14",
    "number": 14,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 4,
    "question": "........ uploads a new file (object) to server; it completely replaces a file at a specified URL with content in the entity body of the HTTP request message.",
    "options": [
      "POST",
      "HEAD",
      "GET",
      "PUT"
    ],
    "correctAnswerIndex": 3,
    "answer": "PUT",
    "explanation": {
      "ar": "الـ PUT method في HTTP بيُستخدم عشان يرفع ملف (object) جديد للسيرفر ويستبدل بالكامل (completely replaces) الملف الموجود في الـ URL المحدد بالبيانات الموجودة في الـ entity body.",
      "en": "The HTTP PUT method uploads a new file (object) to a web server and completely replaces whatever exists at the specified URL with the content in the request's entity body."
    },
    "keywords": [
      "HTTP PUT",
      "HTTP Methods",
      "Upload",
      "Entity Body"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid25-15",
    "number": 15,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 4,
    "question": "HTTP response status code equals to .... when the required object is moved to a new location specified later in the message.",
    "options": [
      "400",
      "305",
      "301",
      "505"
    ],
    "correctAnswerIndex": 2,
    "answer": "301",
    "explanation": {
      "ar": "الكود 301 (Moved Permanently) معناه إن الـ requested object اتنقل بشكل دائم لعنوان جديد، والعنوان الجديد ده بيبقى مكتوب في الـ Location header جوه الرسالة. أما 400 فمعناه Bad Request، و505 معناه HTTP Version Not Supported.",
      "en": "HTTP status code 301 (Moved Permanently) indicates that the requested object has been permanently moved to a new URL specified in the Location header of the response message."
    },
    "keywords": [
      "HTTP Status Code",
      "301 Moved Permanently",
      "HTTP Response"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid25-16",
    "number": 16,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 4,
    "question": "The following are fields in RR format in DNS records, except .....",
    "options": [
      "TTL",
      "URL",
      "Type",
      "Value"
    ],
    "correctAnswerIndex": 1,
    "answer": "URL",
    "explanation": {
      "ar": "الـ DNS Resource Record (RR) بيتكون من 4 حقول أساسية (4-tuple): `(Name, Value, Type, TTL)`. مفيش حقل اسمه URL في الـ DNS RR.",
      "en": "A DNS Resource Record (RR) is a 4-tuple containing the fields (Name, Value, Type, TTL). URL is not a field in a DNS Resource Record."
    },
    "keywords": [
      "DNS",
      "Resource Record",
      "RR Format",
      "TTL",
      "Type",
      "Value"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid25-17",
    "number": 17,
    "source": "midterm-2025",
    "type": "practical",
    "tier": 1,
    "topic": "intro-models",
    "page": 4,
    "question": "Users are generating data at a rate of 100 Kbps when busy, but are busy generating data only with probability p = 0.1. Suppose that we have a 1 Gbps link. What is N, the maximum number of users that can be supported simultaneously under circuit switching?",
    "options": [
      "10000",
      "100000",
      "1000",
      "5000"
    ],
    "correctAnswerIndex": 0,
    "answer": "10000",
    "explanation": {
      "ar": "خلي بالك من الفخ! في الـ Circuit Switching، كل user بيتحجز له 100 Kbps كاملة طول الوقت سواء كان شغال أو لأ (يعني الاحتمال p = 0.1 ملوش أي تأثير في الـ Circuit Switching!). إذن: N = Link Capacity / User Rate = 1 Gbps / 100 Kbps = 1,000,000,000 / 100,000 = 10,000 users.",
      "en": "Under circuit switching, a dedicated 100 Kbps circuit must be reserved for each user regardless of activity probability p = 0.1. With a 1 Gbps (1,000,000 Kbps) link, N = 1,000,000 Kbps / 100 Kbps = 10,000 users."
    },
    "keywords": [
      "Circuit Switching",
      "Link Capacity",
      "Calculation",
      "Users"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid25-18",
    "number": 18,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 5,
    "question": "In ....... attackers make resources (server, bandwidth) unavailable to legitimate traffic by overwhelming the resource with bogus traffic.",
    "options": [
      "Wireshark",
      "DoS",
      "Spoofing",
      "Sniffing"
    ],
    "correctAnswerIndex": 1,
    "answer": "DoS",
    "explanation": {
      "ar": "في هجوم الـ DoS (Denial of Service)، المهاجم بيغرق السيرفر أو الـ bandwidth بكميات ضخمة من الترافيك المزيف (bogus traffic) عشان يوقع الخدمة ويمنع المستخدمين الشرعيين (legitimate traffic) من استخدامها.",
      "en": "A Denial-of-Service (DoS) attack renders a network, host, or other piece of infrastructure unusable by legitimate users by overwhelming the resource with bogus traffic."
    },
    "keywords": [
      "DoS",
      "Denial of Service",
      "Security",
      "Bogus Traffic"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "mid25-19",
    "number": 19,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 5,
    "question": "....... is the premier standards development organization for the Internet.",
    "options": [
      "FDM",
      "HFC",
      "RFC",
      "IETF"
    ],
    "correctAnswerIndex": 3,
    "answer": "IETF",
    "explanation": {
      "ar": "منظمة الـ IETF (Internet Engineering Task Force) هي المنظمة الأساسية المسؤولة عن تطوير معايير وبروتوكولات الإنترنت، وبتصدر الوثائق القياسية بتاعتها في شكل RFCs (Request for Comments).",
      "en": "The Internet Engineering Task Force (IETF) is the premier standards development organization for the Internet, publishing standards documents known as RFCs."
    },
    "keywords": [
      "IETF",
      "Internet Standards",
      "RFC"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid25-20",
    "number": 20,
    "source": "midterm-2025",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 5,
    "question": "SMTP uses TCP to reliably transfer email messages from client to server in port .....",
    "options": [
      "80",
      "29",
      "25",
      "27"
    ],
    "correctAnswerIndex": 2,
    "answer": "25",
    "explanation": {
      "ar": "بروتوكول إرسال الإيميلات SMTP (Simple Mail Transfer Protocol) بيستخدم بروتوكول TCP على Port 25 لنقل الرسائل بشكل موثوق. أما Port 80 فهو خاص بـ HTTP.",
      "en": "Simple Mail Transfer Protocol (SMTP) uses TCP on port 25 to reliably transfer email messages from client to server."
    },
    "keywords": [
      "SMTP",
      "Port 25",
      "TCP",
      "Email"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  }
];

export const midterm2026Questions: Question[] = [
  {
    "id": "mid26-01",
    "number": 1,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 1,
    "question": "The Frame Check Sequence (FCS) field in an Ethernet frame is used for",
    "options": [
      "Error correction",
      "Flow control",
      "Error detection using CRC",
      "Frame synchronization"
    ],
    "correctAnswerIndex": 2,
    "answer": "Error detection using CRC",
    "explanation": {
      "ar": "حقل الـ FCS (Frame Check Sequence) في آخر الـ Ethernet frame (حجمه 4 bytes) بيستخدم خوارزمية CRC (Cyclic Redundancy Check) عشان يكتشف لو حصل أي خطأ (Error detection) في الـ bits أثناء النقل، ومش بيصلح الخطأ (بيعمل discard للـ frame لو بايظة).",
      "en": "The Frame Check Sequence (FCS) field in an Ethernet frame contains a 32-bit Cyclic Redundancy Check (CRC) value used by the receiver to detect bit errors in the transmitted frame."
    },
    "keywords": [
      "FCS",
      "Frame Check Sequence",
      "CRC",
      "Ethernet Frame",
      "Error Detection"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "mid26-02",
    "number": 2,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 1,
    "question": "The non-persistent HTTP response time equals to",
    "options": [
      "2RTT",
      "as little as one RTT for all the referenced objects",
      "as little as two RTT for all the referenced objects",
      "2RTT + file transmission time"
    ],
    "correctAnswerIndex": 3,
    "answer": "2RTT + file transmission time",
    "explanation": {
      "ar": "في الـ Non-persistent HTTP، كل object بيحتاج TCP connection جديدة: أول RTT عشان نعمل الـ TCP 3-way handshake، وتاني RTT عشان نبعت الـ HTTP request ويرجع أول جزء من الـ response، زائد وقت نقل الملف نفسه (file transmission time). فيكون الإجمالي: 2RTT + file transmission time.",
      "en": "Non-persistent HTTP requires 2 RTTs per object (1 RTT to initiate the TCP connection and 1 RTT for the HTTP request and response to return) plus the file transmission time: 2RTT + file transmission time."
    },
    "keywords": [
      "Non-persistent HTTP",
      "Response Time",
      "2RTT",
      "HTTP"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid26-03",
    "number": 3,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 1,
    "question": "What is the default port for FTP?",
    "options": [
      "21",
      "25",
      "53",
      "80"
    ],
    "correctAnswerIndex": 0,
    "answer": "21",
    "explanation": {
      "ar": "الـ Default control port لبروتوكول FTP هو Port 21 (بينما Port 20 للـ data connection). أما 25 فهو لـ SMTP، و53 لـ DNS، و80 لـ HTTP.",
      "en": "FTP (File Transfer Protocol) uses TCP port 21 as its default control connection port (and port 20 for out-of-band data transfer)."
    },
    "keywords": [
      "FTP",
      "Port 21",
      "Port Numbers"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid26-04",
    "number": 4,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 1,
    "question": "What is the purpose of the Header Checksum field in the IPv4 packet?",
    "options": [
      "To specify encryption type",
      "To detect errors in the header",
      "To identify packet fragments",
      "To verify the integrity of the data field"
    ],
    "correctAnswerIndex": 1,
    "answer": "To detect errors in the header",
    "explanation": {
      "ar": "الـ Header Checksum في الـ IPv4 packet وظيفته اكتشاف الأخطاء في الـ IPv4 Header فقط (مش الـ data payload)، وبيتعاد حسابه في كل Router لأن قيمة الـ TTL بتتغير في كل hop.",
      "en": "The IPv4 Header Checksum field aids a router in detecting bit errors strictly within the received IPv4 datagram header."
    },
    "keywords": [
      "Header Checksum",
      "IPv4 Header",
      "Error Detection"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "mid26-05",
    "number": 5,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 1,
    "question": "HTTP uses port number ______ whereas SMTP uses ______",
    "options": [
      "80, 21",
      "80, 20",
      "25, 80",
      "80, 25"
    ],
    "correctAnswerIndex": 3,
    "answer": "80, 25",
    "explanation": {
      "ar": "بروتوكول الويب HTTP بيشتغل افتراضياً على Port 80، بينما بروتوكول البريد الإلكتروني SMTP بيشتغل على Port 25.",
      "en": "HTTP uses TCP port 80 by default, whereas SMTP uses TCP port 25."
    },
    "keywords": [
      "HTTP",
      "SMTP",
      "Port 80",
      "Port 25"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid26-06",
    "number": 6,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 1,
    "question": "______ is commonly used in traditional telephone networks.",
    "options": [
      "circuit switching",
      "routing",
      "packet switching",
      "forwarding"
    ],
    "correctAnswerIndex": 0,
    "answer": "circuit switching",
    "explanation": {
      "ar": "شبكات التليفون الأرضي التقليدية (Traditional telephone networks) هي المثال الكلاسيكي على شبكات الـ Circuit Switching اللي بتحجز مسار ثابت بين الطرفين طول المكالمة.",
      "en": "Traditional telephone networks are the classic example of circuit-switched networks, reserving dedicated end-to-end circuit resources for the duration of a call."
    },
    "keywords": [
      "Circuit Switching",
      "Telephone Network"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid26-07",
    "number": 7,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 2,
    "question": "Which field in an IPv4 header specifies the length of the entire packet, including header and data?",
    "options": [
      "Fragment Offset",
      "Header Length",
      "Total Length",
      "Identification"
    ],
    "correctAnswerIndex": 2,
    "answer": "Total Length",
    "explanation": {
      "ar": "حقل الـ Total Length (حجمه 16 bits) في الـ IPv4 header بيحدد الطول الكلي للـ datagram بالـ bytes شاملاً الـ Header + Data. أما الـ Header Length (IHL) فبيحدد طول الـ header بس.",
      "en": "The 16-bit Total Length field in the IPv4 header specifies the total length of the IP datagram (header plus data) in bytes."
    },
    "keywords": [
      "Total Length",
      "IPv4 Header",
      "Header Length"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "mid26-08",
    "number": 8,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 2,
    "question": "Which IPv4 header field is used to prevent packets from circulating indefinitely in the network?",
    "options": [
      "Protocol",
      "Time to Live (TTL)",
      "Fragment Offset",
      "Header Checksum"
    ],
    "correctAnswerIndex": 1,
    "answer": "Time to Live (TTL)",
    "explanation": {
      "ar": "حقل الـ Time to Live (TTL) بيمنع الـ packets إنها تلف إلى ما لا نهاية في الشبكة (بسبب routing loops مثلاً)، لأن كل router بينقص الـ TTL بـ 1 ولما يوصل لـ 0 بيعمل discard للـ packet.",
      "en": "The Time to Live (TTL) field prevents datagrams from circulating indefinitely due to routing loops; each router decrements TTL by 1 and drops the packet when it reaches 0."
    },
    "keywords": [
      "TTL",
      "Time to Live",
      "IPv4 Header",
      "Routing Loop"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "mid26-09",
    "number": 9,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 2,
    "question": "In ______ a promiscuous network interface reads/records all packets passing by.",
    "options": [
      "packet sniffing",
      "Malware",
      "IP spoofing",
      "Dos"
    ],
    "correctAnswerIndex": 0,
    "answer": "packet sniffing",
    "explanation": {
      "ar": "الـ Packet sniffing بيتم عن طريق ضبط كارت الشبكة (NIC) في وضع الـ promiscuous mode، فيقرأ ويسجل بشكل سلبي (passive) كل الـ packets اللي بتعدي في الشبكة حتى لو مش مبعوتة ليه.",
      "en": "In packet sniffing, a passive receiver places its network interface into promiscuous mode to read and record copies of all packets passing by."
    },
    "keywords": [
      "Packet Sniffing",
      "Promiscuous Mode",
      "Security",
      "Wireshark"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "mid26-10",
    "number": 10,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 2,
    "question": "Which protocol supports packets containing error messages, control, and information?",
    "options": [
      "ICMP",
      "ARP",
      "UDP",
      "RARP"
    ],
    "correctAnswerIndex": 0,
    "answer": "ICMP",
    "explanation": {
      "ar": "بروتوكول الـ ICMP (Internet Control Message Protocol) بيستخدمه الـ routers والـ hosts في طبقة الـ Network عشان يبعتوا رسائل الأخطاء (error reporting)، التحكم، واستعلامات حالة الشبكة (زي الـ ping والـ traceroute).",
      "en": "ICMP (Internet Control Message Protocol) is used by hosts and routers to communicate network-layer information, error messages, and operational control/diagnostic queries."
    },
    "keywords": [
      "ICMP",
      "Error Messages",
      "Control",
      "Ping"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "mid26-11",
    "number": 11,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 3,
    "question": "Which technology uses a fixed packet size of 53 bytes?",
    "options": [
      "Satellite systems",
      "DQDB",
      "Ethernet",
      "ATM"
    ],
    "correctAnswerIndex": 3,
    "answer": "ATM",
    "explanation": {
      "ar": "تقنية الـ ATM (Asynchronous Transfer Mode) بتستخدم خلايا (cells) ذات حجم ثابت (fixed size) قدره 53 bytes (عبارة عن 5 bytes header + 48 bytes payload) لتسريع الـ switching.",
      "en": "Asynchronous Transfer Mode (ATM) is a cell-switching technology that uses fixed-size packets (cells) of 53 bytes (5-byte header and 48-byte payload)."
    },
    "keywords": [
      "ATM",
      "53 bytes",
      "Asynchronous Transfer Mode",
      "Cell Switching"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "mid26-12",
    "number": 12,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 3,
    "question": "Which IP address class is used for multicast?",
    "options": [
      "Class B",
      "Class C",
      "Class A",
      "Class D"
    ],
    "correctAnswerIndex": 3,
    "answer": "Class D",
    "explanation": {
      "ar": "في الـ IPv4 Classful addressing: الـ Classes A, B, C بتستخدم للـ Unicast، بينما Class D (من 224.0.0.0 لـ 239.255.255.255) مخصص للـ Multicast، وClass E مخصص للأبحاث والتجارب.",
      "en": "In classful IPv4 addressing, Class D addresses (224.0.0.0 to 239.255.255.255) are reserved for multicast groups."
    },
    "keywords": [
      "Class D",
      "Multicast",
      "IPv4 Classes"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "mid26-13",
    "number": 13,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 3,
    "question": "What does a distance vector algorithm assign to each link in the network?",
    "options": [
      "Cost numbers",
      "Bandwidth values",
      "IP addresses",
      "MAC addresses"
    ],
    "correctAnswerIndex": 0,
    "answer": "Cost numbers",
    "explanation": {
      "ar": "خوارزميات الـ Routing زي الـ Distance Vector والـ Link State بتدي لكل link في الشبكة رقم يمثل التكلفة (Cost number) زي عدد الـ hops أو الـ delay، وبتستخدم معادلة Bellman-Ford لإيجاد المسار الأقل تكلفة.",
      "en": "Routing algorithms such as the distance vector algorithm assign a cost number (metric) to each link in the network to compute the least-cost paths between nodes."
    },
    "keywords": [
      "Distance Vector",
      "Link Cost",
      "Routing Algorithm"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "mid26-14",
    "number": 14,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 3,
    "question": "What are the four phases of DHCP communication known as?",
    "options": [
      "IPAD",
      "DORA",
      "DHCP",
      "ABCD"
    ],
    "correctAnswerIndex": 1,
    "answer": "DORA",
    "explanation": {
      "ar": "مراحل عمل بروتوكول الـ DHCP الأربعة معروفة باختصار DORA وهي بالترتيب: (1) Discover، (2) Offer، (3) Request، (4) Acknowledge (ACK).",
      "en": "The four steps of DHCP client-server interaction are known by the acronym DORA: DHCP Discover, DHCP Offer, DHCP Request, and DHCP Acknowledge (ACK)."
    },
    "keywords": [
      "DHCP",
      "DORA",
      "Discover Offer Request Acknowledge"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "mid26-15",
    "number": 15,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 3,
    "question": "What is the purpose of NAT (Network Address Translation)?",
    "options": [
      "To translate domain names to IP addresses",
      "To encrypt network traffic",
      "To map private IP addresses to public IP addresses",
      "To assign IP addresses to devices"
    ],
    "correctAnswerIndex": 2,
    "answer": "To map private IP addresses to public IP addresses",
    "explanation": {
      "ar": "تقنية الـ NAT (Network Address Translation) وظيفتها تحويل عناوين الـ Private IP في الشبكة الداخلية لعنوان Public IP واحد أو أكتر عند الخروج للإنترنت، وده بيوفر في عناوين IPv4 وبيحمي الأجهزة الداخلية. (تحويل أسماء النطاقات لـ IP هو وظيفة DNS، وتوزيع الـ IP هو وظيفة DHCP).",
      "en": "NAT (Network Address Translation) maps private IP addresses inside a local network to a public IP address for communicating over the global Internet."
    },
    "keywords": [
      "NAT",
      "Network Address Translation",
      "Private IP",
      "Public IP"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "mid26-16",
    "number": 16,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 2,
    "topic": "network-ip",
    "page": 4,
    "question": "Which protocol is used by the Novell Netware operating system for data transfer within networks?",
    "options": [
      "IPX/SPX",
      "RARP",
      "ICMP",
      "ARP"
    ],
    "correctAnswerIndex": 0,
    "answer": "IPX/SPX",
    "explanation": {
      "ar": "نظام التشغيل الشهير قديماً للشبكات Novell NetWare كان بيستخدم حزمة بروتوكولات IPX/SPX (Internetwork Packet Exchange / Sequenced Packet Exchange) لنقل البيانات داخل الشبكات قبل هيمنة TCP/IP.",
      "en": "IPX/SPX (Internetwork Packet Exchange / Sequenced Packet Exchange) is the proprietary protocol suite used by the Novell NetWare operating system."
    },
    "keywords": [
      "IPX/SPX",
      "Novell NetWare",
      "Network Protocols"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "mid26-17",
    "number": 17,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 4,
    "question": "What is the maximum payload size allowed in a standard Ethernet frame?",
    "options": [
      "2048 bytes",
      "1024 bytes",
      "512 bytes",
      "1500 bytes"
    ],
    "correctAnswerIndex": 3,
    "answer": "1500 bytes",
    "explanation": {
      "ar": "الـ Maximum Payload Size (أو الـ MTU) في الـ Standard Ethernet frame هو 1500 bytes (والحد الأدنى للـ payload هو 46 bytes، بينما حجم الـ frame كله من 64 لـ 1518 bytes).",
      "en": "The maximum payload (data field) size in a standard IEEE 802.3 Ethernet frame is 1500 bytes (minimum is 46 bytes)."
    },
    "keywords": [
      "Ethernet Frame",
      "Maximum Payload",
      "1500 bytes",
      "MTU"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "mid26-18",
    "number": 18,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 4,
    "question": "Which wireless standard provides the highest data transfer rate?",
    "options": [
      "802.11b",
      "802.11a",
      "802.11g",
      "802.11ac"
    ],
    "correctAnswerIndex": 3,
    "answer": "802.11ac",
    "explanation": {
      "ar": "من بين المعايير المذكورة: 802.11b سرعته 11 Mbps، و802.11a و802.11g سرعتهم 54 Mbps، بينما 802.11ac (Wi-Fi 5) هو الأحدث بينهم وبيوصل لسرعات Gigabit (مئات الـ Mbps لعدة Gbps).",
      "en": "Among the listed IEEE 802.11 standards, 802.11ac (Wi-Fi 5) provides the highest data transfer rate (supporting multi-hundred Mbps to multi-Gbps speeds, compared to 11 Mbps for 802.11b and 54 Mbps for 802.11a/g)."
    },
    "keywords": [
      "802.11ac",
      "Wireless Standards",
      "Wi-Fi",
      "Data Rate"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "mid26-19",
    "number": 19,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 4,
    "question": "What does the throughput rate represent in a network?",
    "options": [
      "The capacity of the network's servers and workstations",
      "The speed at which information can be sent between devices",
      "The highest and lowest frequencies in the network",
      "The rate of incoming data at a specific point in the network"
    ],
    "correctAnswerIndex": 1,
    "answer": "The speed at which information can be sent between devices",
    "explanation": {
      "ar": "الـ Throughput بيمثل السرعة الفعلية أو المعدل اللي بيتم بيه إرسال المعلومات بين الأجهزة عبر الشبكة (تُقاس بـ bits per second). أما الفرق بين أعلى وأقل تردد فهو الـ Analog Bandwidth.",
      "en": "Throughput represents the actual speed (rate in bits per second) at which information is transferred between devices across a network."
    },
    "keywords": [
      "Throughput",
      "Transfer Speed",
      "Network Performance"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid26-20",
    "number": 20,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 2,
    "topic": "security-vpn-wlan",
    "page": 4,
    "question": "The typical transmission rates for wireless local area networks are",
    "options": [
      "11, 56, 540 Mbps",
      "11, 54, 450 Kbps",
      "11, 54, 450 Mbps",
      "11, 56, 540 Kbps"
    ],
    "correctAnswerIndex": 2,
    "answer": "11, 54, 450 Mbps",
    "explanation": {
      "ar": "سرعات الـ WLAN القياسية عبر أجيال 802.11 هي بالـ Mbps: 11 Mbps (في 802.11b)، و54 Mbps (في 802.11a/g)، و450 Mbps (في 802.11n بثلاثة هوائيات MIMO).",
      "en": "Standard IEEE 802.11 wireless LAN transmission rates are 11 Mbps (802.11b), 54 Mbps (802.11a/g), and up to 450 Mbps (802.11n)."
    },
    "keywords": [
      "WLAN",
      "Transmission Rates",
      "11, 54, 450 Mbps",
      "802.11"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "mid26-21",
    "number": 21,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 5,
    "question": "The main difference that distinguishes HTTP/3 over earlier versions is",
    "options": [
      "The connection is persistent.",
      "Transmission order of requested objects based on client-specified object priority.",
      "It adds security, per object error- and congestion control (more pipelining) over UDP.",
      "The server responds in order (FCFS) to GET requests."
    ],
    "correctAnswerIndex": 2,
    "answer": "It adds security, per object error- and congestion control (more pipelining) over UDP.",
    "explanation": {
      "ar": "الفرق الجوهري في HTTP/3 إنه مبني فوق بروتوكول QUIC اللي بيشتغل فوق UDP (بدل TCP)، وبيوفر تشفير وأمان مدمج (security)، وتحكم في الأخطاء والـ congestion لكل object بشكل مستقل (per-object error and congestion control) فوق UDP.",
      "en": "HTTP/3 runs over QUIC (which operates over UDP rather than TCP), adding built-in security and per-object error and congestion control (more pipelining) over UDP."
    },
    "keywords": [
      "HTTP/3",
      "QUIC",
      "UDP",
      "Per-Object Congestion Control"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid26-22",
    "number": 22,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 5,
    "question": "Which protocol is used for retrieving emails from a mail server?",
    "options": [
      "SMTP",
      "POP3",
      "FTP",
      "IMAP"
    ],
    "correctAnswerIndex": 1,
    "answer": "POP3 (or IMAP)",
    "explanation": {
      "ar": "سواء POP3 (Post Office Protocol v3) أو IMAP الاتنين بيُستخدموا في استرجاع الإيميلات (retrieving emails) من السيرفر للـ client (بينما SMTP للإرسال فقط). في أسئلة الاختيارات القياسية غالباً POP3 (أو IMAP) بيكون مقصود كـ mail access protocol؛ في بنوك الأسئلة التقليدية POP3 هو الإجابة المباشرة لسحب الرسائل من السيرفر، وIMAP أيضاً صحيح.",
      "en": "Both POP3 (Post Office Protocol v3) and IMAP (Internet Mail Access Protocol) are mail access protocols used to retrieve emails from a mail server (whereas SMTP is used for sending/pushing email)."
    },
    "keywords": [
      "POP3",
      "IMAP",
      "Email Retrieval",
      "Mail Server"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid26-23",
    "number": 23,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 5,
    "question": "What happens when data packets collide in CSMA/CD?",
    "options": [
      "The packets are discarded",
      "The packets wait for a random time before retransmission",
      "The packets are combined into a single packet",
      "The packets are retransmitted immediately"
    ],
    "correctAnswerIndex": 1,
    "answer": "The packets wait for a random time before retransmission",
    "explanation": {
      "ar": "في بروتوكول CSMA/CD لما بيحصل تصادم (Collision)، الأجهزة بتوقف الإرسال فوراً وتبعت Jam signal، وبعدين بتستنى وقت عشوائي (Random backoff time) بيتحسب بخوارزمية Binary Exponential Backoff قبل ما تحاول تبعت تاني.",
      "en": "When a collision is detected in CSMA/CD, transmitting stations abort transmission, send a jam signal, and wait for a random backoff time (determined by binary exponential backoff) before attempting retransmission."
    },
    "keywords": [
      "CSMA/CD",
      "Collision",
      "Exponential Backoff",
      "Random Time"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "mid26-24",
    "number": 24,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 5,
    "question": "______ permit sites to learn a lot about the user on their site.",
    "options": [
      "Sessions",
      "Web caches",
      "Databases",
      "Cookies"
    ],
    "correctAnswerIndex": 3,
    "answer": "Cookies",
    "explanation": {
      "ar": "الـ Cookies بتسمح للمواقع إنها تتعرف على الـ user وتتابع نشاطه على الموقع، لأن الـ HTTP بطبيعته stateless، فالـ Cookies بتربط الطلبات ببعضها وبتخلي الموقع يعرف معلومات كتير عن الـ user.",
      "en": "Cookies allow stateless HTTP web servers to identify users, maintain state across requests, and learn a great deal about a user's activity on their site."
    },
    "keywords": [
      "Cookies",
      "HTTP State",
      "Privacy",
      "Web"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid26-25",
    "number": 25,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 5,
    "question": "What does MAN stand for?",
    "options": [
      "Metropolitan Area Network",
      "Metropolitan Access Network",
      "Mobile Area Network",
      "Multiple Area Network"
    ],
    "correctAnswerIndex": 0,
    "answer": "Metropolitan Area Network",
    "explanation": {
      "ar": "الـ MAN هي اختصار لـ Metropolitan Area Network، وهي شبكة بتغطي مساحة مدينة كاملة (أكبر من الـ LAN وأصغر من الـ WAN).",
      "en": "MAN stands for Metropolitan Area Network, a network that spans a city or large metropolitan area."
    },
    "keywords": [
      "MAN",
      "Metropolitan Area Network",
      "Network Types"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid26-26",
    "number": 26,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 6,
    "question": "Which layer handles the formatting, encryption, and compression of data in the OSI model?",
    "options": [
      "Data link layer",
      "Presentation layer",
      "Session layer",
      "Physical layer"
    ],
    "correctAnswerIndex": 1,
    "answer": "Presentation layer",
    "explanation": {
      "ar": "طبقة الـ Presentation layer (Layer 6 في الـ OSI model) هي المسؤولة عن شكل وتمثيل البيانات (data formatting/translation)، التشفير (encryption)، وضغط البيانات (compression).",
      "en": "The Presentation layer (Layer 6 of the OSI model) is responsible for data translation/formatting, encryption, and compression."
    },
    "keywords": [
      "Presentation Layer",
      "OSI Model",
      "Encryption",
      "Compression"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid26-27",
    "number": 27,
    "source": "midterm-2026",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 6,
    "question": "How many bits are used to represent the host portion of an IP address in Class B?",
    "options": [
      "24 bits",
      "8 bits",
      "32 bits",
      "16 bits"
    ],
    "correctAnswerIndex": 3,
    "answer": "16 bits",
    "explanation": {
      "ar": "عنوان الـ IPv4 طوله 32 bits (4 octets): في Class A بيكون 8 bits للـ Network و24 bits للـ Host؛ وفي Class B بيكون 16 bits للـ Network و16 bits للـ Host؛ وفي Class C بيكون 24 bits للـ Network و8 bits للـ Host.",
      "en": "In a Class B IPv4 address (32 bits total), the first 16 bits (2 octets) identify the network portion and the remaining 16 bits (2 octets) represent the host portion."
    },
    "keywords": [
      "Class B",
      "Host Bits",
      "16 bits",
      "IPv4 Addressing"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "mid26-28",
    "number": 28,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 6,
    "question": "______ is a standards organization for the Internet and is responsible for the technical standards that make up the Internet protocol suite (TCP/IP).",
    "options": [
      "ISP",
      "CMTS",
      "IETF",
      "RFC"
    ],
    "correctAnswerIndex": 2,
    "answer": "IETF",
    "explanation": {
      "ar": "منظمة الـ IETF (Internet Engineering Task Force) هي المنظمة المسؤولة عن وضع وتطوير المعايير التقنية لحزمة بروتوكولات الإنترنت (TCP/IP). أما RFC فهي اسم الوثائق نفسها مش المنظمة.",
      "en": "The Internet Engineering Task Force (IETF) is the standards organization responsible for developing and promoting the technical standards that comprise the TCP/IP Internet protocol suite."
    },
    "keywords": [
      "IETF",
      "TCP/IP Standards",
      "Internet Organization"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "mid26-29",
    "number": 29,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 6,
    "question": "______ method includes user data in the URL field of the HTTP request message following a '?'.",
    "options": [
      "PUT",
      "GET",
      "HEAD",
      "POST"
    ],
    "correctAnswerIndex": 1,
    "answer": "GET",
    "explanation": {
      "ar": "لما الموقع يستخدم الـ GET method لرفع بيانات بسيطة (زي كلمات البحث)، البيانات بتتبعت كـ query parameters جوه الـ URL نفسه بعد علامة الاستفهام `?`، وبيكون الـ entity body فاضي. أما في الـ POST فالبيانات بتتبعت جوه الـ entity body.",
      "en": "With the HTTP GET method, user-entered form or query data is appended directly to the requested URL following a '?' character."
    },
    "keywords": [
      "HTTP GET",
      "Query String",
      "URL Parameters",
      "HTTP Methods"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "mid26-30",
    "number": 30,
    "source": "midterm-2026",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 6,
    "question": "______ different channels are transmitted in different frequency bands.",
    "options": [
      "TDM",
      "FDD",
      "TDD",
      "FDM"
    ],
    "correctAnswerIndex": 3,
    "answer": "FDM",
    "explanation": {
      "ar": "في الـ FDM (Frequency Division Multiplexing)، بيتم إرسال القنوات المختلفة (different channels) في نطاقات ترددية مختلفة (different frequency bands) في نفس الوقت. أما في الـ TDM فبتتقسم لمقاطع زمنية (time slots).",
      "en": "Frequency Division Multiplexing (FDM) divides the available spectrum into multiple frequency bands so different channels are transmitted simultaneously in different frequency bands."
    },
    "keywords": [
      "FDM",
      "Frequency Division Multiplexing",
      "TDM"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  }
];

export const ch1Questions: Question[] = [
  {
    "id": "ch1-001",
    "number": 1,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 1,
    "question": "………is the network that physically Connects an end system to the first router.",
    "options": [
      "Access network",
      "Internet",
      "Network core",
      "Wired network"
    ],
    "correctAnswerIndex": 0,
    "answer": "Access network",
    "explanation": {
      "ar": "الـ `Access network` هي الشبكة الفيزيائية اللي بتربط جهاز المستخدم (`End system`) بأول راوتر (`Edge router`) على مساره للإنترنت.",
      "en": "An access network physically connects an end system to its first-hop edge router."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-002",
    "number": 2,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 1,
    "question": "All of the following are examples of network edges, except ......",
    "options": [
      "server",
      "mobile phone",
      "car",
      "router"
    ],
    "correctAnswerIndex": 2,
    "answer": "car",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `car` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'car'."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-003",
    "number": 3,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 1,
    "question": "...... is a private network that connects its data centers to the Internet, often bypassing tier-1 regional ISPs.",
    "options": [
      "Global ISP",
      "Content provider network",
      "IXP",
      "Local ISP"
    ],
    "correctAnswerIndex": 1,
    "answer": "Content provider network",
    "explanation": {
      "ar": "شبكة الـ `Content provider network` (زي Google أو Netflix) هي شبكة خاصة بتربط مراكز البيانات بتاعتها بالإنترنت مباشرةً وبتتخطى غالباً الـ Tier-1 ISPs.",
      "en": "A content provider network is a private network connecting its data centers directly to the Internet, often bypassing Tier-1 regional ISPs."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-004",
    "number": 4,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 1,
    "question": "…. define the format, order of messages sent and received among network entities, and actions taken on message transmission.",
    "options": [
      "Routers",
      "Protocols",
      "Switches",
      "Servers"
    ],
    "correctAnswerIndex": 1,
    "answer": "Protocols",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-005",
    "number": 5,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 1,
    "question": "...... define the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt.",
    "options": [
      "service",
      "ISP",
      "protocol",
      "router"
    ],
    "correctAnswerIndex": 2,
    "answer": "protocol",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-006",
    "number": 6,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 2,
    "question": "………protocol is responsible for datagram format, addressing and packet handling conventions.",
    "options": [
      "OSPF",
      "IP",
      "BGP",
      "ICMP"
    ],
    "correctAnswerIndex": 1,
    "answer": "IP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-007",
    "number": 7,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 2,
    "question": "In the home networks, all the following components are often combined in a single box, except ......",
    "options": [
      "cable or INR, modem",
      "router, firewall, NAT",
      "WiFi wireless access point",
      "Wireless and wired devices"
    ],
    "correctAnswerIndex": 3,
    "answer": "Wireless and wired devices",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Wireless and wired devices` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Wireless and wired devices'."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-008",
    "number": 8,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 2,
    "question": "In .... Fiber attaches homes to ISP router, homes share access network to cable headend.",
    "options": [
      "DSL",
      "Packet Transmission Delay",
      "TDM",
      "Cable-Based Access"
    ],
    "correctAnswerIndex": 3,
    "answer": "Cable-Based Access",
    "explanation": {
      "ar": "الـ `Access network` هي الشبكة الفيزيائية اللي بتربط جهاز المستخدم (`End system`) بأول راوتر (`Edge router`) على مساره للإنترنت.",
      "en": "An access network physically connects an end system to its first-hop edge router."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-009",
    "number": 9,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 2,
    "question": "In …. Use existing telephone line to central office, It has 24-52 Mbps dedicated downstream transmission rate and 3.5-16 Mbps dedicated upstream transmission rate.",
    "options": [
      "DSL",
      "TDM",
      "DSLAM",
      "CMTS"
    ],
    "correctAnswerIndex": 0,
    "answer": "DSL",
    "explanation": {
      "ar": "تقنية الـ `DSL` بتستخدم سلك التليفون النحاسي الموجود للوصول للـ `Central Office` (`DSLAM`) وبتدي سرعات مخصصة `24–52 Mbps` تحميل و`3.5–16 Mbps` رفع.",
      "en": "DSL uses existing telephone lines to the central office DSLAM, offering dedicated 24–52 Mbps downstream and 3.5–16 Mbps upstream rates."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-010",
    "number": 10,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 2,
    "question": "...... is a connection between host/router and physical link.",
    "options": [
      "Interface",
      "Subnet",
      "NAT",
      "WFQ"
    ],
    "correctAnswerIndex": 0,
    "answer": "Interface",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Interface` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Interface'."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-011",
    "number": 11,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 2,
    "question": "Which of this is not a guided media?",
    "options": [
      "Fiber optical cable",
      "Coaxial cable",
      "Wireless LAN",
      "Copper wire"
    ],
    "correctAnswerIndex": 2,
    "answer": "Wireless LAN",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Wireless LAN` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Wireless LAN'."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-012",
    "number": 12,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 3,
    "question": "The typical transmission rate(s) for the twisted pair cable category 5 is ......",
    "options": [
      "10 Mbps, 100 Mbps",
      "100 Mbps, 1 Gbps",
      "10 Gbps, 100 Gbps",
      "10Gbps"
    ],
    "correctAnswerIndex": 0,
    "answer": "10 Mbps, 100 Mbps",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `10 Mbps, 100 Mbps` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is '10 Mbps, 100 Mbps'."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-013",
    "number": 13,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 3,
    "question": "The typical transmission rates for wireless local area networks are ......",
    "options": [
      "11, 54, 450 Kbps",
      "11,56,540 Mbps",
      "11, 54, 450 Mbps",
      "11,56,540 Kbps"
    ],
    "correctAnswerIndex": 2,
    "answer": "11, 54, 450 Mbps",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `11, 54, 450 Mbps` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is '11, 54, 450 Mbps'."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-014",
    "number": 14,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 3,
    "question": "...... Cable is two concentric copper conductors that can work in bidirectional with multi frequency channels on cable.",
    "options": [
      "Coaxial",
      "Fiber optic",
      "Twisted pair category 5",
      "Twisted pair category 6"
    ],
    "correctAnswerIndex": 0,
    "answer": "Coaxial",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Coaxial` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Coaxial'."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-015",
    "number": 15,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 3,
    "question": "Coaxial cable consists of __ concentric copper conductors.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswerIndex": 1,
    "answer": "2",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `2` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is '2'."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-016",
    "number": 16,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 3,
    "question": "In ......",
    "options": [
      "packet switching",
      "routing",
      "forwarding",
      "circuit switching"
    ],
    "correctAnswerIndex": 3,
    "answer": "circuit switching",
    "explanation": {
      "ar": "في الـ `Circuit Switching` (المستخدم في شبكات التليفون التقليدية) الموارد بتتحجز بالكامل لطول المكالمة بدون مشاركة؛ ولو عندك `1 Gbps` وكل مستخدم `100 Kbps` فالعدد الأقصى = `1,000,000 / 100 = 10,000` بغض النظر عن `p`.",
      "en": "In circuit switching (used in traditional telephone networks), end-to-end resources are dedicated and reserved for the entire call duration."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-017",
    "number": 17,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 3,
    "question": "………. Is Commonly Used in Traditional Telephone Networks.",
    "options": [
      "Packet Switching",
      "Circuit Switching",
      "Routing",
      "Forwarding"
    ],
    "correctAnswerIndex": 1,
    "answer": "Circuit Switching",
    "explanation": {
      "ar": "في الـ `Circuit Switching` (المستخدم في شبكات التليفون التقليدية) الموارد بتتحجز بالكامل لطول المكالمة بدون مشاركة؛ ولو عندك `1 Gbps` وكل مستخدم `100 Kbps` فالعدد الأقصى = `1,000,000 / 100 = 10,000` بغض النظر عن `p`.",
      "en": "In circuit switching (used in traditional telephone networks), end-to-end resources are dedicated and reserved for the entire call duration."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-018",
    "number": 18,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 4,
    "question": "In ...... end-end resources allocated to, reserved for call between source and destination.",
    "options": [
      "Queueing",
      "TDM",
      "Packet-Switching",
      "Circuit Switching"
    ],
    "correctAnswerIndex": 3,
    "answer": "Circuit Switching",
    "explanation": {
      "ar": "في الـ `Circuit Switching` (المستخدم في شبكات التليفون التقليدية) الموارد بتتحجز بالكامل لطول المكالمة بدون مشاركة؛ ولو عندك `1 Gbps` وكل مستخدم `100 Kbps` فالعدد الأقصى = `1,000,000 / 100 = 10,000` بغض النظر عن `p`.",
      "en": "In circuit switching (used in traditional telephone networks), end-to-end resources are dedicated and reserved for the entire call duration."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-019",
    "number": 19,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 4,
    "question": "end-to-end resources allocated to reserved for call between Source and Dest and no sharing.",
    "options": [
      "packet-switching",
      "circuit switching",
      "line-switching",
      "frequency switching"
    ],
    "correctAnswerIndex": 1,
    "answer": "circuit switching",
    "explanation": {
      "ar": "في الـ `Circuit Switching` (المستخدم في شبكات التليفون التقليدية) الموارد بتتحجز بالكامل لطول المكالمة بدون مشاركة؛ ولو عندك `1 Gbps` وكل مستخدم `100 Kbps` فالعدد الأقصى = `1,000,000 / 100 = 10,000` بغض النظر عن `p`.",
      "en": "In circuit switching (used in traditional telephone networks), end-to-end resources are dedicated and reserved for the entire call duration."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-020",
    "number": 20,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 4,
    "question": "In __ systems, resources are allocated on demand.",
    "options": [
      "packet-switching",
      "circuit switching",
      "line-switching",
      "frequency switching"
    ],
    "correctAnswerIndex": 0,
    "answer": "packet-switching",
    "explanation": {
      "ar": "في الـ `Packet Switching` الموارد بتتوزع عند الطلب (`on demand`) ومش محجوزة مسبقاً، وده بيسمح بمشاركة الشبكة بين عدد أكبر من المستخدمين.",
      "en": "In packet switching, network resources are allocated on demand rather than reserved, allowing more users to share the network."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-021",
    "number": 21,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 4,
    "question": "Allows more users to use network and resource sharing.",
    "options": [
      "packet-switching",
      "circuit switching",
      "line-switching",
      "frequency switching"
    ],
    "correctAnswerIndex": 0,
    "answer": "packet-switching",
    "explanation": {
      "ar": "في الـ `Packet Switching` الموارد بتتوزع عند الطلب (`on demand`) ومش محجوزة مسبقاً، وده بيسمح بمشاركة الشبكة بين عدد أكبر من المستخدمين.",
      "en": "In packet switching, network resources are allocated on demand rather than reserved, allowing more users to share the network."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-022",
    "number": 22,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 4,
    "question": "FDM and TDM are two approaches for implementing circuit switching.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswerIndex": 0,
    "answer": "True",
    "explanation": {
      "ar": "في الـ `FDM` (`Frequency Division Multiplexing`) بيتم تقسيم النطاق الترددي لقنوات ترددية منفصلة، بحيث كل قناة تتبعت في `Frequency band` مختلف في نفس الوقت.",
      "en": "In Frequency Division Multiplexing (FDM), different channels are transmitted simultaneously in separate frequency bands."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-023",
    "number": 23,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 4,
    "question": "In …….., different channels transmitted in different frequency bands.",
    "options": [
      "HFC",
      "FDM",
      "CMTS",
      "DSL"
    ],
    "correctAnswerIndex": 1,
    "answer": "FDM",
    "explanation": {
      "ar": "في الـ `FDM` (`Frequency Division Multiplexing`) بيتم تقسيم النطاق الترددي لقنوات ترددية منفصلة، بحيث كل قناة تتبعت في `Frequency band` مختلف في نفس الوقت.",
      "en": "In Frequency Division Multiplexing (FDM), different channels are transmitted simultaneously in separate frequency bands."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-024",
    "number": 24,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 4,
    "question": "The sharing of a medium and its link by two or more devices is called __.",
    "options": [
      "Fully duplexing",
      "Multiplexing",
      "Microplexing",
      "Duplexing"
    ],
    "correctAnswerIndex": 1,
    "answer": "Multiplexing",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Multiplexing` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Multiplexing'."
    },
    "keywords": [
      "CH1",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-025",
    "number": 25,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 4,
    "question": "Multiplexing is used in __.",
    "options": [
      "Packet switching",
      "Circuit switching",
      "Data switching",
      "Packet & Circuit switching"
    ],
    "correctAnswerIndex": 3,
    "answer": "Packet & Circuit switching",
    "explanation": {
      "ar": "في الـ `Circuit Switching` (المستخدم في شبكات التليفون التقليدية) الموارد بتتحجز بالكامل لطول المكالمة بدون مشاركة؛ ولو عندك `1 Gbps` وكل مستخدم `100 Kbps` فالعدد الأقصى = `1,000,000 / 100 = 10,000` بغض النظر عن `p`.",
      "en": "In circuit switching (used in traditional telephone networks), end-to-end resources are dedicated and reserved for the entire call duration."
    },
    "keywords": [
      "CH1",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-026",
    "number": 26,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 5,
    "question": "Which multiplexing technique used to transmit digital signals?",
    "options": [
      "FDM",
      "TDM",
      "WDM",
      "FDM & WDM"
    ],
    "correctAnswerIndex": 1,
    "answer": "TDM",
    "explanation": {
      "ar": "الـ `TDM` (`Time Division Multiplexing`) بيقسم وقت الإرسال لـ `Slots` زمنية مقسمة بدورها لـ `Frames`، وبيُستخدم لنقل الإشارات الرقمية.",
      "en": "Time Division Multiplexing (TDM) divides transmission time into slots and frames, typically used to transmit digital signals."
    },
    "keywords": [
      "CH1",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-027",
    "number": 27,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 5,
    "question": "In TDM, slots are further divided into __.",
    "options": [
      "Seconds",
      "Frames",
      "Packets",
      "Bits"
    ],
    "correctAnswerIndex": 1,
    "answer": "Frames",
    "explanation": {
      "ar": "الـ `TDM` (`Time Division Multiplexing`) بيقسم وقت الإرسال لـ `Slots` زمنية مقسمة بدورها لـ `Frames`، وبيُستخدم لنقل الإشارات الرقمية.",
      "en": "Time Division Multiplexing (TDM) divides transmission time into slots and frames, typically used to transmit digital signals."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-028",
    "number": 28,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 5,
    "question": "__ is the multiplexing technique that shifts each signal to a different carrier frequency.",
    "options": [
      "FDM",
      "TDM",
      "WDM",
      "FDM & WDM"
    ],
    "correctAnswerIndex": 0,
    "answer": "FDM",
    "explanation": {
      "ar": "في الـ `FDM` (`Frequency Division Multiplexing`) بيتم تقسيم النطاق الترددي لقنوات ترددية منفصلة، بحيث كل قناة تتبعت في `Frequency band` مختلف في نفس الوقت.",
      "en": "In Frequency Division Multiplexing (FDM), different channels are transmitted simultaneously in separate frequency bands."
    },
    "keywords": [
      "CH1",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-029",
    "number": 29,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 5,
    "question": "A small object may have to wait for transmission behind a large object. This is called .... blocking.",
    "options": [
      "ICANN",
      "GDPR",
      "HOL",
      "FCFS"
    ],
    "correctAnswerIndex": 2,
    "answer": "HOL",
    "explanation": {
      "ar": "في `HTTP/1.1` بتحصل مشكلة `HOL Blocking` لما `Object` صغير يستنى ورا `Object` كبير؛ فجاء `HTTP/2` وحلها بتقسيم الـ Objects لـ Frames وترتيبها حسب أولوية الـ Client (`Client-specified priority`).",
      "en": "HTTP/1.1 suffers from Head-of-Line (HOL) blocking; HTTP/2 mitigates this by framing objects and scheduling them by client-specified priority."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-030",
    "number": 30,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 5,
    "question": "...... moves arriving packets from the router's input link to the appropriate router output link.",
    "options": [
      "Routing",
      "Multiplexing",
      "Demultiplexing",
      "Forwarding"
    ],
    "correctAnswerIndex": 3,
    "answer": "Forwarding",
    "explanation": {
      "ar": "الـ `Forwarding` هي عملية محلية جوه الراوتر لنقل الباكيت من الـ `Input port` للـ `Output port` المناسب، بينما الـ `Routing` هي عملية شاملة على مستوى الشبكة كلها لتحديد المسار من المصدر للهدف.",
      "en": "Forwarding moves packets from a router's input link to the appropriate output link, while routing determines the end-to-end paths from source to destination."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-031",
    "number": 31,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 5,
    "question": "...... determines source-destination paths taken by packets.",
    "options": [
      "Routing",
      "Forwarding",
      "Multiplexing",
      "Demultiplexing"
    ],
    "correctAnswerIndex": 0,
    "answer": "Routing",
    "explanation": {
      "ar": "الـ `Forwarding` هي عملية محلية جوه الراوتر لنقل الباكيت من الـ `Input port` للـ `Output port` المناسب، بينما الـ `Routing` هي عملية شاملة على مستوى الشبكة كلها لتحديد المسار من المصدر للهدف.",
      "en": "Forwarding moves packets from a router's input link to the appropriate output link, while routing determines the end-to-end paths from source to destination."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-032",
    "number": 32,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 5,
    "question": "What is difference between routing and forwarding?",
    "options": [
      "Routing determines the optimal path for data transmission, while forwarding sends the data to its destination",
      "Routing sends data to its destination, while forwarding determines the optimal path for data transmission",
      "They are the same thing",
      "Both are used for data encryption"
    ],
    "correctAnswerIndex": 0,
    "answer": "Routing determines the optimal path for data transmission, while forwarding sends the data to its destination",
    "explanation": {
      "ar": "الـ `Forwarding` هي عملية محلية جوه الراوتر لنقل الباكيت من الـ `Input port` للـ `Output port` المناسب، بينما الـ `Routing` هي عملية شاملة على مستوى الشبكة كلها لتحديد المسار من المصدر للهدف.",
      "en": "Forwarding moves packets from a router's input link to the appropriate output link, while routing determines the end-to-end paths from source to destination."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-033",
    "number": 33,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 6,
    "question": "In the router …… the destination IP address is looked up in a forwarding table to determine the appropriate output port.",
    "options": [
      "Switching fabric",
      "Routing process",
      "Input port",
      "Output port"
    ],
    "correctAnswerIndex": 2,
    "answer": "Input port",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL.",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-034",
    "number": 34,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 6,
    "question": "In router switching via ...... it fragments the datagram into fixed-length cells on entry. It switch cells through the fabric and reassembles the datagram at the exit.",
    "options": [
      "Memory",
      "Bus",
      "Interconnection network",
      "Path"
    ],
    "correctAnswerIndex": 2,
    "answer": "Interconnection network",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Interconnection network` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Interconnection network'."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-035",
    "number": 35,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 6,
    "question": "In a Router Longest prefix matching is often ……… it retrieves addresses in one cycle, regardless of table size.",
    "options": [
      "CAM",
      "RED",
      "ECN",
      "TCAMs"
    ],
    "correctAnswerIndex": 3,
    "answer": "TCAMs",
    "explanation": {
      "ar": "في الراوترات السريعة بيتم البحث بـ `Longest prefix matching` باستخدام ذاكرة `TCAMs` (`Ternary Content Addressable Memory`) اللي بتجيب العنوان في `Clock cycle` واحدة بغض النظر عن حجم الجدول.",
      "en": "Routers often use TCAMs (Ternary Content Addressable Memories) to perform longest prefix matching in a single clock cycle regardless of table size."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-036",
    "number": 36,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 6,
    "question": "...... takes L/R seconds to transmit (push out) an L-bit packet into the link at R bps.",
    "options": [
      "transmission delay",
      "queueing delay",
      "nodal processing",
      "propagation delay"
    ],
    "correctAnswerIndex": 0,
    "answer": "transmission delay",
    "explanation": {
      "ar": "الـ `Transmission delay` هو الزمن اللازم لضخ كل بتات الباكيت على السلك وبيتحسب بالقانون `d_trans = L / R` (ولا يعتمد على المسافة بين الراوترات). لو `L = 32 bits` و`R = 10 Mbps` يبقى `32 / 10 = 3.2 microseconds`.",
      "en": "Transmission delay (L/R) is the time to push all packet bits onto the link and does not depend on distance between routers."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-037",
    "number": 37,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 6,
    "question": "...... is a time waiting at the output link for transmission. It depends on the congestion level of router.",
    "options": [
      "Transmission delay",
      "Nodal processing",
      "Propagation delay",
      "Queuing delay"
    ],
    "correctAnswerIndex": 3,
    "answer": "Queuing delay",
    "explanation": {
      "ar": "الـ `Queueing delay` هو وقت انتظار الباكيت في الطابور عند مخرج الراوتر، وبيعتمد على حالة الازدحام (`Congestion`)؛ وممكن يساوي صفر لو مفيش باكيتات تانية في الطابور.",
      "en": "Queueing delay is the time a packet waits in the output buffer; it depends on congestion and is zero when the link is idle."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-038",
    "number": 38,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 7,
    "question": "……….. Checks bit errors and determine output link, it may typically take less than microsecs.",
    "options": [
      "Transmission delay",
      "Queuing delay",
      "Nodal processing",
      "Propagation delay"
    ],
    "correctAnswerIndex": 2,
    "answer": "Nodal processing",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL.",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-039",
    "number": 39,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 7,
    "question": "In a network, If P is the only packet being transmitted and there was no earlier transmission, which of the following delays could be zero?",
    "options": [
      "Propagation delay",
      "Queuing delay",
      "Transmission delay",
      "Processing delay"
    ],
    "correctAnswerIndex": 1,
    "answer": "Queuing delay",
    "explanation": {
      "ar": "الـ `Queueing delay` هو وقت انتظار الباكيت في الطابور عند مخرج الراوتر، وبيعتمد على حالة الازدحام (`Congestion`)؛ وممكن يساوي صفر لو مفيش باكيتات تانية في الطابور.",
      "en": "Queueing delay is the time a packet waits in the output buffer; it depends on congestion and is zero when the link is idle."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-040",
    "number": 40,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 7,
    "question": "Transmission delay does not depend on __.",
    "options": [
      "Packet length",
      "Distance between the routers",
      "Transmission rate",
      "Bandwidth of medium"
    ],
    "correctAnswerIndex": 1,
    "answer": "Distance between the routers",
    "explanation": {
      "ar": "الـ `Transmission delay` هو الزمن اللازم لضخ كل بتات الباكيت على السلك وبيتحسب بالقانون `d_trans = L / R` (ولا يعتمد على المسافة بين الراوترات). لو `L = 32 bits` و`R = 10 Mbps` يبقى `32 / 10 = 3.2 microseconds`.",
      "en": "Transmission delay (L/R) is the time to push all packet bits onto the link and does not depend on distance between routers."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-041",
    "number": 41,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 7,
    "question": "Propagation delay depends on __.",
    "options": [
      "Packet length",
      "Transmission rate",
      "Distance between the routers",
      "Speed of the CPU"
    ],
    "correctAnswerIndex": 2,
    "answer": "Distance between the routers",
    "explanation": {
      "ar": "الـ `Propagation delay` هو الزمن اللي بتاخده الإشارة عشان تسافر في السلك من راوتر للتاني (`d / s`)، ولذلك بيعتمد على المسافة (`Distance`) وسرعة الوسط.",
      "en": "Propagation delay (distance / propagation speed) depends directly on the physical distance between routers."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-042",
    "number": 42,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 7,
    "question": "The total nodal delay is given by __.",
    "options": [
      "( d{nodal} = d{proc} - d{queue} + d{trans} + d{prop} )",
      "( d{nodal} = d{proc} + d{trans} - d{queue} )",
      "( d{nodal} = d{proc} + d{queue} + d{trans} + d{prop} )",
      "( d{nodal} = d{proc} + d{queue} - d{trans} - d_{prop} )"
    ],
    "correctAnswerIndex": 2,
    "answer": "( d{nodal} = d{proc} + d{queue} + d{trans} + d{prop} )",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-043",
    "number": 43,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 7,
    "question": "Which of the following delay is faced by the packet in travelling from one end system to another?",
    "options": [
      "Propagation delay",
      "Queuing delay",
      "Transmission delay",
      "All of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "All of the mentioned",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `All of the mentioned` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'All of the mentioned'."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-044",
    "number": 44,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 7,
    "question": "The time required to examine the packet’s header and determine where to direct the packet is part of?",
    "options": [
      "Processing delay",
      "Queuing delay",
      "Transmission delay",
      "Propagation delay"
    ],
    "correctAnswerIndex": 0,
    "answer": "Processing delay",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Processing delay` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Processing delay'."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-045",
    "number": 45,
    "source": "ch1",
    "type": "practical",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 8,
    "question": "For a 10Mbps Ethernet link, if the length of the packet is 32bits, the transmission delay is ………(in microseconds).",
    "options": [
      "3.2",
      "32",
      "0.32",
      "320"
    ],
    "correctAnswerIndex": 0,
    "answer": "3.2",
    "explanation": {
      "ar": "الـ `Transmission delay` هو الزمن اللازم لضخ كل بتات الباكيت على السلك وبيتحسب بالقانون `d_trans = L / R` (ولا يعتمد على المسافة بين الراوترات). لو `L = 32 bits` و`R = 10 Mbps` يبقى `32 / 10 = 3.2 microseconds`.",
      "en": "Transmission delay (L/R) is the time to push all packet bits onto the link and does not depend on distance between routers."
    },
    "keywords": [
      "CH1",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-046",
    "number": 46,
    "source": "ch1",
    "type": "practical",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 8,
    "question": "Traffic intensity in the network can be calculated as ......",
    "options": [
      "(\\frac{L}{R})",
      "(\\frac{d}{dT})",
      "(\\frac{L \\times a}{R})",
      "(d{proc} + d{queue} + d{trans} + d{prop})"
    ],
    "correctAnswerIndex": 2,
    "answer": "(\\frac{L \\times a}{R})",
    "explanation": {
      "ar": "معدل كثافة الترافيك (`Traffic intensity`) بيتحسب بالقانون `(L × a) / R` حيث `L` طول الباكيت، `a` معدل الوصول، و`R` سرعة اللينك.",
      "en": "Traffic intensity is calculated as (L × a) / R, where L is packet length, a is arrival rate, and R is link transmission rate."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-047",
    "number": 47,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 8,
    "question": "………..rates (bit / time unit) at which bits transferred between sender/receiver.",
    "options": [
      "Bandwidth",
      "Bottleneck link",
      "Throughput",
      "None"
    ],
    "correctAnswerIndex": 2,
    "answer": "Throughput",
    "explanation": {
      "ar": "الـ `Throughput` هو المعدل الفعلي لنقل البتات من المرسل للمستقبل، وبيتحكم فيه أبطأ لينك في المسار (`Bottleneck link`) — يعني لو السرعات `10, 20, 30, 40 Mbps` يبقى الـ Throughput هو `10 Mbps`.",
      "en": "Throughput is the end-to-end bit transfer rate, constrained by the slowest (bottleneck) link along the path."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-048",
    "number": 48,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 8,
    "question": "………..link on end-end that constrains end-end throughput.",
    "options": [
      "Bandwidth",
      "Bottleneck link",
      "Throughput",
      "None"
    ],
    "correctAnswerIndex": 1,
    "answer": "Bottleneck link",
    "explanation": {
      "ar": "الـ `Throughput` هو المعدل الفعلي لنقل البتات من المرسل للمستقبل، وبيتحكم فيه أبطأ لينك في المسار (`Bottleneck link`) — يعني لو السرعات `10, 20, 30, 40 Mbps` يبقى الـ Throughput هو `10 Mbps`.",
      "en": "Throughput is the end-to-end bit transfer rate, constrained by the slowest (bottleneck) link along the path."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-049",
    "number": 49,
    "source": "ch1",
    "type": "practical",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 8,
    "question": "In the transfer of file between server and client, if the transmission rates along the path is 10Mbps, 20Mbps, 30Mbps, 40Mbps. The throughput is usually __.",
    "options": [
      "20Mbps",
      "10Mbps",
      "40Mbps",
      "50Mbps"
    ],
    "correctAnswerIndex": 1,
    "answer": "10Mbps",
    "explanation": {
      "ar": "الـ `Throughput` هو المعدل الفعلي لنقل البتات من المرسل للمستقبل، وبيتحكم فيه أبطأ لينك في المسار (`Bottleneck link`) — يعني لو السرعات `10, 20, 30, 40 Mbps` يبقى الـ Throughput هو `10 Mbps`.",
      "en": "Throughput is the end-to-end bit transfer rate, constrained by the slowest (bottleneck) link along the path."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-050",
    "number": 50,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 8,
    "question": "…… is the rate (bits/time unit) at which bits are being sent from sender to receiver.",
    "options": [
      "Throughput",
      "Queueing delay",
      "Transmission delay",
      "Nodal processing"
    ],
    "correctAnswerIndex": 0,
    "answer": "Throughput",
    "explanation": {
      "ar": "الـ `Throughput` هو المعدل الفعلي لنقل البتات من المرسل للمستقبل، وبيتحكم فيه أبطأ لينك في المسار (`Bottleneck link`) — يعني لو السرعات `10, 20, 30, 40 Mbps` يبقى الـ Throughput هو `10 Mbps`.",
      "en": "Throughput is the end-to-end bit transfer rate, constrained by the slowest (bottleneck) link along the path."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-051",
    "number": 51,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 8,
    "question": "...... is the time for small packet to travel from client to server and back.",
    "options": [
      "Internet delay",
      "RTT",
      "Access link delay",
      "LAN delay"
    ],
    "correctAnswerIndex": 1,
    "answer": "RTT",
    "explanation": {
      "ar": "الـ `RTT` (`Round-Trip Time`) هو الزمن اللي بتاخده باكيت صغيرة عشان تروح من الـ Client للسيرفر وترجع تاني.",
      "en": "RTT (Round-Trip Time) is the time it takes for a small packet to travel from client to server and back."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-052",
    "number": 52,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 9,
    "question": "…….. is the time for a small packet to travel from client to server and back.",
    "options": [
      "RTT",
      "HOL",
      "RFC",
      "GDPR"
    ],
    "correctAnswerIndex": 0,
    "answer": "RTT",
    "explanation": {
      "ar": "الـ `RTT` (`Round-Trip Time`) هو الزمن اللي بتاخده باكيت صغيرة عشان تروح من الـ Client للسيرفر وترجع تاني.",
      "en": "RTT (Round-Trip Time) is the time it takes for a small packet to travel from client to server and back."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-053",
    "number": 53,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 9,
    "question": "The time taken by a packet to travel from client to server and then back to the client is called ___.",
    "options": [
      "STT",
      "RTT",
      "PTT",
      "JTT"
    ],
    "correctAnswerIndex": 1,
    "answer": "RTT",
    "explanation": {
      "ar": "الـ `RTT` (`Round-Trip Time`) هو الزمن اللي بتاخده باكيت صغيرة عشان تروح من الـ Client للسيرفر وترجع تاني.",
      "en": "RTT (Round-Trip Time) is the time it takes for a small packet to travel from client to server and back."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-054",
    "number": 54,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 9,
    "question": "RTT Stand For __.",
    "options": [
      "Round Trip Time",
      "Rate Transmission Time",
      "None"
    ],
    "correctAnswerIndex": 0,
    "answer": "Round Trip Time",
    "explanation": {
      "ar": "الـ `RTT` (`Round-Trip Time`) هو الزمن اللي بتاخده باكيت صغيرة عشان تروح من الـ Client للسيرفر وترجع تاني.",
      "en": "RTT (Round-Trip Time) is the time it takes for a small packet to travel from client to server and back."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-055",
    "number": 55,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 9,
    "question": "__ provides delay measurement from source to router along end-end internet path forward dest.",
    "options": [
      "Ping",
      "Traceroute",
      "Ping & Traceroute",
      "None"
    ],
    "correctAnswerIndex": 1,
    "answer": "Traceroute",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Traceroute` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Traceroute'."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-056",
    "number": 56,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 9,
    "question": "In a router,……… is the rate at which packets can be Transfer from input to output links.",
    "options": [
      "switching rate",
      "transmission rate",
      "propagation rate",
      "None of them"
    ],
    "correctAnswerIndex": 0,
    "answer": "switching rate",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL.",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-057",
    "number": 57,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 9,
    "question": "Data communication system within a building or campus is __.",
    "options": [
      "LAN",
      "MAN",
      "WAN",
      "PAN"
    ],
    "correctAnswerIndex": 0,
    "answer": "LAN",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `LAN` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'LAN'."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-058",
    "number": 58,
    "source": "ch1",
    "type": "practical",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 9,
    "question": "Users are generating data at a rate of 100 Kbps when busy. But are busy generating data only with probability ( p = 0.1 ). Suppose that we have 1Gbps link. What is N, the maximum number of users that can be supported simultaneously under circuit switching?",
    "options": [
      "10000",
      "100000",
      "1000",
      "5000"
    ],
    "correctAnswerIndex": 0,
    "answer": "10000",
    "explanation": {
      "ar": "في الـ `Circuit Switching` (المستخدم في شبكات التليفون التقليدية) الموارد بتتحجز بالكامل لطول المكالمة بدون مشاركة؛ ولو عندك `1 Gbps` وكل مستخدم `100 Kbps` فالعدد الأقصى = `1,000,000 / 100 = 10,000` بغض النظر عن `p`.",
      "en": "In circuit switching (used in traditional telephone networks), end-to-end resources are dedicated and reserved for the entire call duration."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-059",
    "number": 59,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 10,
    "question": "In the network, all of the following are lines of defense, except ......",
    "options": [
      "access restrictions",
      "authentication",
      "DNS",
      "firewalls"
    ],
    "correctAnswerIndex": 2,
    "answer": "DNS",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-060",
    "number": 60,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 10,
    "question": "In ……. Attackers make resources (server, bandwidth) unavailable to legitimate traffic by overwhelming resource with bogus traffic.",
    "options": [
      "Wireshark",
      "DoS",
      "Spoofing",
      "Sniffing"
    ],
    "correctAnswerIndex": 1,
    "answer": "DoS",
    "explanation": {
      "ar": "في هجوم الـ `DoS` (`Denial of Service`) المهاجم بيغرق السيرفر أو الباندويث بترافيك مزيف عشان يعطل الخدمة عن المستخدمين الشرعيين.",
      "en": "In a Denial-of-Service (DoS) attack, attackers overwhelm a server or bandwidth with bogus traffic to deny service to legitimate users."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-061",
    "number": 61,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 10,
    "question": "Attackers makes resources unavailable to legitimate traffic by overwhelming resource with bogus traffic.",
    "options": [
      "Virus",
      "Worm",
      "Spyware Malware",
      "DoS"
    ],
    "correctAnswerIndex": 3,
    "answer": "DoS",
    "explanation": {
      "ar": "في هجوم الـ `DoS` (`Denial of Service`) المهاجم بيغرق السيرفر أو الباندويث بترافيك مزيف عشان يعطل الخدمة عن المستخدمين الشرعيين.",
      "en": "In a Denial-of-Service (DoS) attack, attackers overwhelm a server or bandwidth with bogus traffic to deny service to legitimate users."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-062",
    "number": 62,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 10,
    "question": "Send packet with false source address.",
    "options": [
      "Virus",
      "Worm",
      "IP Spoofing",
      "DoS"
    ],
    "correctAnswerIndex": 2,
    "answer": "IP Spoofing",
    "explanation": {
      "ar": "الـ `Spoofing` معناه التزوير — زي `IP Spoofing` (تزوير عنوان المرسل في الباكيت) أو `DNS Spoofing / Cache Poisoning` (إرجاع ردود DNS مزيفة).",
      "en": "Spoofing involves falsifying identity or replies, such as IP spoofing (fake source IP) or DNS cache poisoning (bogus DNS replies)."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-063",
    "number": 63,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 10,
    "question": "In ……… a promiscuous network interface reads/records all packets passing by.",
    "options": [
      "IP Spoofing",
      "DoS",
      "Packet Sniffing",
      "Malware"
    ],
    "correctAnswerIndex": 2,
    "answer": "Packet Sniffing",
    "explanation": {
      "ar": "الـ `Packet Sniffing` بيتم لما كارت الشبكة يشتغل في وضع `Promiscuous mode` ويقرأ ويسجل كل الباكيتات اللي بتعدي في الشبكة.",
      "en": "In packet sniffing, a passive receiver sets its network interface to promiscuous mode to capture and record all passing packets."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-064",
    "number": 64,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 10,
    "question": ".... attacks intercept DNS queries, returning bogus replies.",
    "options": [
      "ICANN",
      "DoS",
      "Spoofing",
      "DDoS"
    ],
    "correctAnswerIndex": 2,
    "answer": "Spoofing",
    "explanation": {
      "ar": "الـ `Spoofing` معناه التزوير — زي `IP Spoofing` (تزوير عنوان المرسل في الباكيت) أو `DNS Spoofing / Cache Poisoning` (إرجاع ردود DNS مزيفة).",
      "en": "Spoofing involves falsifying identity or replies, such as IP spoofing (fake source IP) or DNS cache poisoning (bogus DNS replies)."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-065",
    "number": 65,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 11,
    "question": "In the Network , all of the following are lines of defense, EXCEPT......",
    "options": [
      "Encryption",
      "Gateway",
      "Integrity Checks",
      "Firewalls"
    ],
    "correctAnswerIndex": 1,
    "answer": "Gateway",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Gateway` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Gateway'."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-066",
    "number": 66,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 11,
    "question": "...... layer allows applications to interpret the meaning of data, e.g., encryption, compression, and machine-specific conventions.",
    "options": [
      "Application",
      "Presentation",
      "Session",
      "Data link"
    ],
    "correctAnswerIndex": 1,
    "answer": "Presentation",
    "explanation": {
      "ar": "طبقة الـ `Presentation layer` هي المسؤولة عن تفسير شكل البيانات، التشفير (`Encryption`)، والضغط (`Compression`).",
      "en": "The Presentation layer handles data formatting, encryption, compression, and machine-specific conventions."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-067",
    "number": 67,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 11,
    "question": "The packet of information at the application layer is called __.",
    "options": [
      "Packet",
      "Message",
      "Segment",
      "Frame"
    ],
    "correctAnswerIndex": 1,
    "answer": "Message",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Message` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Message'."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-068",
    "number": 68,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 11,
    "question": "The main role of transport layer?",
    "options": [
      "The layer responsible of physical transmission of data",
      "The layer responsible for routing data packets",
      "The layer responsible for end-to-end communication between hosts",
      "The layer responsible for encryption of data"
    ],
    "correctAnswerIndex": 2,
    "answer": "The layer responsible for end-to-end communication between hosts",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `The layer responsible for end-to-end communication between hosts` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'The layer responsible for end-to-end communication between hosts'."
    },
    "keywords": [
      "CH1",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-069",
    "number": 69,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 11,
    "question": "The Following are true about transport layer except…",
    "options": [
      "Provide logical communication between hosts",
      "Uses TCP – UDP protocols",
      "Adds segment header",
      "Enhances network layer services"
    ],
    "correctAnswerIndex": 3,
    "answer": "Enhances network layer services",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Enhances network layer services` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Enhances network layer services'."
    },
    "keywords": [
      "CH1",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-070",
    "number": 70,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 11,
    "question": "In ...... demultiplexing uses 4-tuple: source and destination IP address and port numbers.",
    "options": [
      "UDP",
      "IP",
      "TCP",
      "Socket"
    ],
    "correctAnswerIndex": 2,
    "answer": "TCP",
    "explanation": {
      "ar": "في برمجة الـ `Sockets`: الدالة `bind()` بتربط الـ Socket برقم Port، و`accept()` في TCP بتفتح Socket جديد لكل Client؛ والـ `TCP` بيعمل `Demultiplexing` بـ `4-tuple` (Source/Dest IP & Port) بينما `UDP` بيستخدم `Dest Port` فقط.",
      "en": "In socket programming, bind() assigns a local port and accept() creates a new TCP connection socket. TCP demultiplexes using a 4-tuple, whereas UDP uses only destination port."
    },
    "keywords": [
      "CH1",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-071",
    "number": 71,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 12,
    "question": "In ...... , it handles garbled ACK/NAKs by adding a sequence number to the pkt.",
    "options": [
      "Rdt2.0",
      "Rdt2.1",
      "Rdt2.2",
      "Rdt3.0"
    ],
    "correctAnswerIndex": 1,
    "answer": "Rdt2.1",
    "explanation": {
      "ar": "في بروتوكولات النقل الموثوق: `rdt2.1` بيضيف `Sequence number` للتعامل مع أخطاء الـ `ACK/NAK` المشوهة، بينما `rdt3.0` بيتعامل مع الأخطاء + ضياع الباكيتات (`Packet loss`) باستخدام الـ Timer.",
      "en": "rdt2.1 adds sequence numbers to handle garbled ACK/NAKs, while rdt3.0 handles both bit errors and packet loss using timers."
    },
    "keywords": [
      "CH1",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-072",
    "number": 72,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 12,
    "question": "In ...... The Underlying Channel Can Have errors and loss packets(data,ACKs).",
    "options": [
      "Rdt2.2",
      "Rdt2.0",
      "Rdt3.0",
      "Rdt2.1"
    ],
    "correctAnswerIndex": 2,
    "answer": "Rdt3.0",
    "explanation": {
      "ar": "في بروتوكولات النقل الموثوق: `rdt2.1` بيضيف `Sequence number` للتعامل مع أخطاء الـ `ACK/NAK` المشوهة، بينما `rdt3.0` بيتعامل مع الأخطاء + ضياع الباكيتات (`Packet loss`) باستخدام الـ Timer.",
      "en": "rdt2.1 adds sequence numbers to handle garbled ACK/NAKs, while rdt3.0 handles both bit errors and packet loss using timers."
    },
    "keywords": [
      "CH1",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-073",
    "number": 73,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 12,
    "question": "In the network layer ...... plane determines how the datagram is routed among routers along the end-end path from source host to destination host.",
    "options": [
      "Data",
      "Control",
      "Service",
      "Information"
    ],
    "correctAnswerIndex": 1,
    "answer": "Control",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Control` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Control'."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-074",
    "number": 74,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 12,
    "question": "In...... control plane, Individual routing algorithm components in every router interact in the control plane.",
    "options": [
      "SDN",
      "DSL",
      "QoS",
      "Per-router"
    ],
    "correctAnswerIndex": 3,
    "answer": "Per-router",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Per-router` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Per-router'."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-075",
    "number": 75,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 12,
    "question": "Which one of the following is an architecture paradigms?",
    "options": [
      "Peer to peer",
      "Client-server",
      "HTTP",
      "Both Peer-to-Peer & Client-Server"
    ],
    "correctAnswerIndex": 3,
    "answer": "Both Peer-to-Peer & Client-Server",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Both Peer-to-Peer & Client-Server` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Both Peer-to-Peer & Client-Server'."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-076",
    "number": 76,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 12,
    "question": "Applications with P2P architectures have client processes & server processes.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswerIndex": 0,
    "answer": "True",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-077",
    "number": 77,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 12,
    "question": "...... Process initiates communications.",
    "options": [
      "P2P",
      "Server",
      "Inter",
      "Client"
    ],
    "correctAnswerIndex": 3,
    "answer": "Client",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-078",
    "number": 78,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 13,
    "question": "The following are examples of services for a flow of datagrams, except ......",
    "options": [
      "guaranteed delivery",
      "in-order datagram delivery",
      "guaranteed minimum bandwidth to flow",
      "restrictions on changes in inter-packet spacing"
    ],
    "correctAnswerIndex": 3,
    "answer": "restrictions on changes in inter-packet spacing",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-079",
    "number": 79,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 13,
    "question": "UDP can be used for all of the following, EXCEPT......",
    "options": [
      "DNS",
      "HTTP/3",
      "SNMP",
      "IMAP"
    ],
    "correctAnswerIndex": 3,
    "answer": "IMAP",
    "explanation": {
      "ar": "بروتوكولات سحب الإيميل (`Mail access protocols`): `POP3` و`IMAP`؛ والـ `IMAP` بيتميز إنه بيسمح بتنظيم الفولدرات وإدارة الإيميلات مباشرة على السيرفر.",
      "en": "IMAP and POP3 are pull-based mail access protocols; IMAP allows users to organize folders and manage messages directly on the server."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-080",
    "number": 80,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 13,
    "question": "……. Is the premier standards development organization for the internet.",
    "options": [
      "FDM",
      "HFC",
      "RFC",
      "IETF"
    ],
    "correctAnswerIndex": 3,
    "answer": "IETF",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `IETF` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'IETF'."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-081",
    "number": 81,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 13,
    "question": "...... Is a Standards Organization for Internet and is responsible for the technical standards that make up the Internet protocol suite(TCP/IP).",
    "options": [
      "RFC",
      "IETF",
      "ISP",
      "CMTS"
    ],
    "correctAnswerIndex": 1,
    "answer": "IETF",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH1",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-082",
    "number": 82,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 13,
    "question": "SMTP uses TCP to reliably transfer email message from client to server in port …..",
    "options": [
      "80",
      "29",
      "25",
      "27"
    ],
    "correctAnswerIndex": 2,
    "answer": "25",
    "explanation": {
      "ar": "بروتوكول `SMTP` (على `TCP Port 25`) هو `Push protocol` لإرسال الإيميلات في صورة `7-bit ASCII`، وبينهي جسم الرسالة بـ `CRLF.CRLF`.",
      "en": "SMTP (TCP port 25) is a push protocol that transfers 7-bit ASCII email messages using CRLF.CRLF to mark the end of the body."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-083",
    "number": 83,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 13,
    "question": "...... is the network that physically Connects an end system to the first router.",
    "options": [
      "Access network",
      "Internet",
      "Network core",
      "Wired network"
    ],
    "correctAnswerIndex": 0,
    "answer": "Access network",
    "explanation": {
      "ar": "الـ `Access network` هي الشبكة الفيزيائية اللي بتربط جهاز المستخدم (`End system`) بأول راوتر (`Edge router`) على مساره للإنترنت.",
      "en": "An access network physically connects an end system to its first-hop edge router."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-084",
    "number": 84,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 14,
    "question": "...... moves arriving packets from the router's input link to the appropriate router output link.",
    "options": [
      "Routing",
      "Multiplexing",
      "Demultiplexing",
      "Forwarding"
    ],
    "correctAnswerIndex": 3,
    "answer": "Forwarding",
    "explanation": {
      "ar": "الـ `Forwarding` هي عملية محلية جوه الراوتر لنقل الباكيت من الـ `Input port` للـ `Output port` المناسب، بينما الـ `Routing` هي عملية شاملة على مستوى الشبكة كلها لتحديد المسار من المصدر للهدف.",
      "en": "Forwarding moves packets from a router's input link to the appropriate output link, while routing determines the end-to-end paths from source to destination."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-085",
    "number": 85,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 14,
    "question": "...... determines source-destination paths taken by packets.",
    "options": [
      "Routing",
      "Forwarding",
      "Multiplexing",
      "Demultiplexing"
    ],
    "correctAnswerIndex": 0,
    "answer": "Routing",
    "explanation": {
      "ar": "الـ `Forwarding` هي عملية محلية جوه الراوتر لنقل الباكيت من الـ `Input port` للـ `Output port` المناسب، بينما الـ `Routing` هي عملية شاملة على مستوى الشبكة كلها لتحديد المسار من المصدر للهدف.",
      "en": "Forwarding moves packets from a router's input link to the appropriate output link, while routing determines the end-to-end paths from source to destination."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-086",
    "number": 86,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 14,
    "question": "...... is a time waiting at the output link for transmission. It depends on the congestion level of router.",
    "options": [
      "Transmission delay",
      "Nodal processing",
      "Propagation delay",
      "Queuing delay"
    ],
    "correctAnswerIndex": 3,
    "answer": "Queuing delay",
    "explanation": {
      "ar": "الـ `Queueing delay` هو وقت انتظار الباكيت في الطابور عند مخرج الراوتر، وبيعتمد على حالة الازدحام (`Congestion`)؛ وممكن يساوي صفر لو مفيش باكيتات تانية في الطابور.",
      "en": "Queueing delay is the time a packet waits in the output buffer; it depends on congestion and is zero when the link is idle."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-087",
    "number": 87,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 14,
    "question": "...... takes L/R seconds to transmit (push out) an L-bit packet into the link at R bps.",
    "options": [
      "transmission delay",
      "queueing delay",
      "nodal processing",
      "propagation delay"
    ],
    "correctAnswerIndex": 0,
    "answer": "transmission delay",
    "explanation": {
      "ar": "الـ `Transmission delay` هو الزمن اللازم لضخ كل بتات الباكيت على السلك وبيتحسب بالقانون `d_trans = L / R` (ولا يعتمد على المسافة بين الراوترات). لو `L = 32 bits` و`R = 10 Mbps` يبقى `32 / 10 = 3.2 microseconds`.",
      "en": "Transmission delay (L/R) is the time to push all packet bits onto the link and does not depend on distance between routers."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-088",
    "number": 88,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 14,
    "question": "In ......, different channels transmitted in different frequency bands.",
    "options": [
      "HFC",
      "FDM",
      "CMTS",
      "DSL"
    ],
    "correctAnswerIndex": 1,
    "answer": "FDM",
    "explanation": {
      "ar": "في الـ `FDM` (`Frequency Division Multiplexing`) بيتم تقسيم النطاق الترددي لقنوات ترددية منفصلة، بحيث كل قناة تتبعت في `Frequency band` مختلف في نفس الوقت.",
      "en": "In Frequency Division Multiplexing (FDM), different channels are transmitted simultaneously in separate frequency bands."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-089",
    "number": 89,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 14,
    "question": "...... is a private network that connects its data centers to the Internet, often bypassing tier-1 regional ISPs.",
    "options": [
      "Global ISP",
      "Content provider network",
      "IXP",
      "Local ISP"
    ],
    "correctAnswerIndex": 1,
    "answer": "Content provider network",
    "explanation": {
      "ar": "شبكة الـ `Content provider network` (زي Google أو Netflix) هي شبكة خاصة بتربط مراكز البيانات بتاعتها بالإنترنت مباشرةً وبتتخطى غالباً الـ Tier-1 ISPs.",
      "en": "A content provider network is a private network connecting its data centers directly to the Internet, often bypassing Tier-1 regional ISPs."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-090",
    "number": 90,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 14,
    "question": "...... Cable is two concentric copper conductors that can work in bidirectional with multi frequency channels on cable.",
    "options": [
      "Coaxial",
      "Fiber optic",
      "Twisted pair category 5",
      "Twisted pair category 6"
    ],
    "correctAnswerIndex": 0,
    "answer": "Coaxial",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Coaxial` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Coaxial'."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-091",
    "number": 91,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 15,
    "question": "In .... Fiber attaches homes to ISP router, homes share access network to cable headend.",
    "options": [
      "DSL",
      "Packet Transmission Delay",
      "TDM",
      "Cable-Based Access"
    ],
    "correctAnswerIndex": 3,
    "answer": "Cable-Based Access",
    "explanation": {
      "ar": "الـ `Access network` هي الشبكة الفيزيائية اللي بتربط جهاز المستخدم (`End system`) بأول راوتر (`Edge router`) على مساره للإنترنت.",
      "en": "An access network physically connects an end system to its first-hop edge router."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-092",
    "number": 92,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 15,
    "question": "In …. Use existing telephone line to central office, It has 24-52 Mbps dedicated downstream transmission rate and 3.5-16 Mbps dedicated upstream transmission rate.",
    "options": [
      "DSL",
      "TDM",
      "DSLAM",
      "CMTS"
    ],
    "correctAnswerIndex": 0,
    "answer": "DSL",
    "explanation": {
      "ar": "تقنية الـ `DSL` بتستخدم سلك التليفون النحاسي الموجود للوصول للـ `Central Office` (`DSLAM`) وبتدي سرعات مخصصة `24–52 Mbps` تحميل و`3.5–16 Mbps` رفع.",
      "en": "DSL uses existing telephone lines to the central office DSLAM, offering dedicated 24–52 Mbps downstream and 3.5–16 Mbps upstream rates."
    },
    "keywords": [
      "CH1",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-093",
    "number": 93,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 15,
    "question": "A small object may have to wait for transmission behind a large object. This is called .... blocking.",
    "options": [
      "ICANN",
      "GDPR",
      "HOL",
      "FCFS"
    ],
    "correctAnswerIndex": 2,
    "answer": "HOL",
    "explanation": {
      "ar": "في `HTTP/1.1` بتحصل مشكلة `HOL Blocking` لما `Object` صغير يستنى ورا `Object` كبير؛ فجاء `HTTP/2` وحلها بتقسيم الـ Objects لـ Frames وترتيبها حسب أولوية الـ Client (`Client-specified priority`).",
      "en": "HTTP/1.1 suffers from Head-of-Line (HOL) blocking; HTTP/2 mitigates this by framing objects and scheduling them by client-specified priority."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-094",
    "number": 94,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 15,
    "question": "…… is the rate (bits/time unit) at which bits are being sent from sender to receiver.",
    "options": [
      "Throughput",
      "Queueing delay",
      "Transmission delay",
      "Nodal processing"
    ],
    "correctAnswerIndex": 0,
    "answer": "Throughput",
    "explanation": {
      "ar": "الـ `Throughput` هو المعدل الفعلي لنقل البتات من المرسل للمستقبل، وبيتحكم فيه أبطأ لينك في المسار (`Bottleneck link`) — يعني لو السرعات `10, 20, 30, 40 Mbps` يبقى الـ Throughput هو `10 Mbps`.",
      "en": "Throughput is the end-to-end bit transfer rate, constrained by the slowest (bottleneck) link along the path."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-095",
    "number": 95,
    "source": "ch1",
    "type": "practical",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 15,
    "question": "Consider sending over HTTP/2 a Web page that consists of one video clip, and five images. Suppose that the video clip is transported as 2000 frames and each image has three frames. If all the video frames are sent first without interleaving, How many “Frame Times” are needed until all five images are sent?",
    "options": [
      "2000",
      "2015",
      "2030",
      "4030"
    ],
    "correctAnswerIndex": 1,
    "answer": "2015",
    "explanation": {
      "ar": "في `HTTP/1.1` بتحصل مشكلة `HOL Blocking` لما `Object` صغير يستنى ورا `Object` كبير؛ فجاء `HTTP/2` وحلها بتقسيم الـ Objects لـ Frames وترتيبها حسب أولوية الـ Client (`Client-specified priority`).",
      "en": "HTTP/1.1 suffers from Head-of-Line (HOL) blocking; HTTP/2 mitigates this by framing objects and scheduling them by client-specified priority."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-096",
    "number": 96,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 15,
    "question": "……. uploads new file (object) to server, it completely replaces a file at a specified URL with content in entity body of HTTP request message.",
    "options": [
      "POST",
      "HEAD",
      "GET",
      "PUT"
    ],
    "correctAnswerIndex": 3,
    "answer": "PUT",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL.",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-097",
    "number": 97,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 16,
    "question": "HTTP response status code equals to …. When the required object is moved to a new location specified later in the message.",
    "options": [
      "400",
      "305",
      "301",
      "505"
    ],
    "correctAnswerIndex": 2,
    "answer": "301",
    "explanation": {
      "ar": "أكواد حالة HTTP المهمة: `200 OK` (نجاح)، `301 Moved Permanently` (نقل دائم لعنوان جديد)، و`404 Not Found` (الصفحة غير موجودة).",
      "en": "Key HTTP status codes: 200 (OK), 301 (Moved Permanently), and 404 (Not Found)."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-098",
    "number": 98,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 16,
    "question": "In ……. Attackers make resources (server, bandwidth) unavailable to legitimate traffic by overwhelming resource with bogus traffic.",
    "options": [
      "Wireshark",
      "DoS",
      "Spoofing",
      "Sniffing"
    ],
    "correctAnswerIndex": 1,
    "answer": "DoS",
    "explanation": {
      "ar": "في هجوم الـ `DoS` (`Denial of Service`) المهاجم بيغرق السيرفر أو الباندويث بترافيك مزيف عشان يعطل الخدمة عن المستخدمين الشرعيين.",
      "en": "In a Denial-of-Service (DoS) attack, attackers overwhelm a server or bandwidth with bogus traffic to deny service to legitimate users."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-099",
    "number": 99,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 16,
    "question": "……. Is the premier standards development organization for the internet.",
    "options": [
      "FDM",
      "HFC",
      "RFC",
      "IETF"
    ],
    "correctAnswerIndex": 3,
    "answer": "IETF",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `IETF` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'IETF'."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-100",
    "number": 100,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 16,
    "question": "SMTP uses TCP to reliably transfer email message from client to server in port …..",
    "options": [
      "80",
      "29",
      "25",
      "27"
    ],
    "correctAnswerIndex": 2,
    "answer": "25",
    "explanation": {
      "ar": "بروتوكول `SMTP` (على `TCP Port 25`) هو `Push protocol` لإرسال الإيميلات في صورة `7-bit ASCII`، وبينهي جسم الرسالة بـ `CRLF.CRLF`.",
      "en": "SMTP (TCP port 25) is a push protocol that transfers 7-bit ASCII email messages using CRLF.CRLF to mark the end of the body."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-101",
    "number": 101,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "page": 16,
    "question": "………. Is Commonly Used in Traditional Telephone Networks.",
    "options": [
      "Packet Switching",
      "Circuit Switching",
      "Routing",
      "Forwarding"
    ],
    "correctAnswerIndex": 1,
    "answer": "Circuit Switching",
    "explanation": {
      "ar": "في الـ `Circuit Switching` (المستخدم في شبكات التليفون التقليدية) الموارد بتتحجز بالكامل لطول المكالمة بدون مشاركة؛ ولو عندك `1 Gbps` وكل مستخدم `100 Kbps` فالعدد الأقصى = `1,000,000 / 100 = 10,000` بغض النظر عن `p`.",
      "en": "In circuit switching (used in traditional telephone networks), end-to-end resources are dedicated and reserved for the entire call duration."
    },
    "keywords": [
      "CH1",
      "intro-models"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-102",
    "number": 102,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 16,
    "question": "………protocol is responsible for datagram format, addressing and packet handling conventions.",
    "options": [
      "OSPF",
      "IP",
      "BGP",
      "ICMP"
    ],
    "correctAnswerIndex": 1,
    "answer": "IP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-103",
    "number": 103,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 17,
    "question": "In a Router Longest prefix matching is often ……… it retrieves addresses in one cycle, regardless of table size.",
    "options": [
      "CAM",
      "RED",
      "ECN",
      "TCAMs"
    ],
    "correctAnswerIndex": 3,
    "answer": "TCAMs",
    "explanation": {
      "ar": "في الراوترات السريعة بيتم البحث بـ `Longest prefix matching` باستخدام ذاكرة `TCAMs` (`Ternary Content Addressable Memory`) اللي بتجيب العنوان في `Clock cycle` واحدة بغض النظر عن حجم الجدول.",
      "en": "Routers often use TCAMs (Ternary Content Addressable Memories) to perform longest prefix matching in a single clock cycle regardless of table size."
    },
    "keywords": [
      "CH1",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-104",
    "number": 104,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 17,
    "question": "……… Method includes user data to the URL field of HTTP request message following a ‘?’.",
    "options": [
      "GET",
      "HEAD",
      "PUT",
      "POST"
    ],
    "correctAnswerIndex": 0,
    "answer": "GET",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL.",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-105",
    "number": 105,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 17,
    "question": "The Non-Persistent HTTP response time equals to ……",
    "options": [
      "As little as one RTT for all the referenced objects",
      "As little as two RTT for all the referenced objects",
      "2RTT",
      "2RTT + File Transmission Time"
    ],
    "correctAnswerIndex": 3,
    "answer": "2RTT + File Transmission Time",
    "explanation": {
      "ar": "في الـ `Non-Persistent HTTP` كل ملف بيحتاج `2 RTT + File Transmission Time` (واحد لفتح TCP وواحد لطلب الملف واستقباله)، ولو عندنا ملف HTML و5 صور يبقى الإجمالي `6 TCP connections`.",
      "en": "Non-persistent HTTP requires 2 RTTs plus file transmission time per object, opening a new TCP connection for each object."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-106",
    "number": 106,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 17,
    "question": "In ……… a promiscuous network interface reads/records all packets passing by.",
    "options": [
      "IP Spoofing",
      "DoS",
      "Packet Sniffing",
      "Malware"
    ],
    "correctAnswerIndex": 2,
    "answer": "Packet Sniffing",
    "explanation": {
      "ar": "الـ `Packet Sniffing` بيتم لما كارت الشبكة يشتغل في وضع `Promiscuous mode` ويقرأ ويسجل كل الباكيتات اللي بتعدي في الشبكة.",
      "en": "In packet sniffing, a passive receiver sets its network interface to promiscuous mode to capture and record all passing packets."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-107",
    "number": 107,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 17,
    "question": "The Three major components of the E-mail are the following, EXCEPT….",
    "options": [
      "User agent",
      "IMAP",
      "Mail servers",
      "SMTP"
    ],
    "correctAnswerIndex": 1,
    "answer": "IMAP",
    "explanation": {
      "ar": "بروتوكولات سحب الإيميل (`Mail access protocols`): `POP3` و`IMAP`؛ والـ `IMAP` بيتميز إنه بيسمح بتنظيم الفولدرات وإدارة الإيميلات مباشرة على السيرفر.",
      "en": "IMAP and POP3 are pull-based mail access protocols; IMAP allows users to organize folders and manage messages directly on the server."
    },
    "keywords": [
      "CH1",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch1-108",
    "number": 108,
    "source": "ch1",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 17,
    "question": "The main difference that distinguishes HTTP/3 over the earlier versions is ......",
    "options": [
      "Transmission order of requested objects based on client-specified object priority",
      "The server responds in order (FCFS) to GET Requests",
      "The connection is persistent",
      "It adds security per object error and congestion control(more pipelining) over UDP"
    ],
    "correctAnswerIndex": 3,
    "answer": "It adds security per object error and congestion control(more pipelining) over UDP",
    "explanation": {
      "ar": "الـ `HTTP/3` شغال فوق `UDP` (عبر `QUIC`) وبيضيف أمان وتحكم في الأخطاء والازدحام لكل `Object` بشكل مستقل.",
      "en": "HTTP/3 runs over UDP (via QUIC), adding built-in security and per-object error and congestion control."
    },
    "keywords": [
      "CH1",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  }
];

export const ch2Questions: Question[] = [
  {
    "id": "ch2-001",
    "number": 1,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 1,
    "question": "...... define the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt.",
    "options": [
      "service",
      "ISP",
      "protocol",
      "router"
    ],
    "correctAnswerIndex": 2,
    "answer": "protocol",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `protocol`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (protocol)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-002",
    "number": 2,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 1,
    "question": "The fundamental architectural model where end systems (hosts) run application programs at the network edge is called the ...... model.",
    "options": [
      "Client-Server or P2P (Application Architecture)",
      "TCP/IP Layering",
      "Packet Switching",
      "Circuit Switching"
    ],
    "correctAnswerIndex": 0,
    "answer": "Client-Server or P2P (Application Architecture)",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Client-Server or P2P (Application Architecture)` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Client-Server or P2P (Application Architecture))",
      "en": "The correct answer is 'Client-Server or P2P (Application Architecture)'. (Client-Server or P2P (Application Architecture))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-003",
    "number": 3,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 1,
    "question": "Which of the following is NOT an application-layer protocol?",
    "options": [
      "HTTP",
      "SMTP",
      "TCP",
      "DNS"
    ],
    "correctAnswerIndex": 2,
    "answer": "TCP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `TCP (It's a transport-layer protocol)`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (TCP (It's a transport-layer protocol))"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-004",
    "number": 4,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "page": 1,
    "question": "An application-layer protocol defines all of the following, except:",
    "options": [
      "Types of messages exchanged (e.g., request, response).",
      "The syntax (format) of messages.",
      "The semantics (meaning) of message fields.",
      "The physical medium used for transmission."
    ],
    "correctAnswerIndex": 3,
    "answer": "The physical medium used for transmission.",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `The physical medium used for transmission.`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (The physical medium used for transmission.)"
    },
    "keywords": [
      "CH2",
      "physical-media"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-005",
    "number": 5,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 2,
    "question": "Which of the following is an example of a proprietary application-layer protocol?",
    "options": [
      "HTTP (Hypertext Transfer Protocol)",
      "SMTP (Simple Mail Transfer Protocol)",
      "Skype's protocol",
      "DNS (Domain Name System)"
    ],
    "correctAnswerIndex": 2,
    "answer": "Skype's protocol",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `Skype's protocol`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (Skype's protocol)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-006",
    "number": 6,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 2,
    "question": "The packet of information at the application layer is called a ......",
    "options": [
      "Segment",
      "Datagram",
      "Frame",
      "Message"
    ],
    "correctAnswerIndex": 3,
    "answer": "Message",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Message` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Message)",
      "en": "The correct answer is 'Message'. (Message)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-007",
    "number": 7,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 2,
    "question": "In client-server architecture, the server typically has a:",
    "options": [
      "Dynamic IP address and is intermittently connected.",
      "Permanent IP address and is always-on.",
      "Role of initiating communication.",
      "Lower bandwidth capacity than clients."
    ],
    "correctAnswerIndex": 1,
    "answer": "Permanent IP address and is always-on.",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Permanent IP address and is always-on.` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Permanent IP address and is always-on.)",
      "en": "The correct answer is 'Permanent IP address and is always-on.'. (Permanent IP address and is always-on.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-008",
    "number": 8,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 2,
    "question": "A process that initiates communication is called a ...... process.",
    "options": [
      "Server",
      "Peer",
      "Client",
      "Listening"
    ],
    "correctAnswerIndex": 2,
    "answer": "Client",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Client` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Client)",
      "en": "The correct answer is 'Client'. (Client)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-009",
    "number": 9,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 2,
    "question": "A process that waits to be contacted is called a ...... process.",
    "options": [
      "Client",
      "Peer",
      "Server",
      "Concurrent"
    ],
    "correctAnswerIndex": 2,
    "answer": "Server",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Server` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Server)",
      "en": "The correct answer is 'Server'. (Server)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-010",
    "number": 10,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 2,
    "question": "In the context of network applications, what does P2P stand for?",
    "options": [
      "Point-to-Point",
      "Peer-to-Peer",
      "Path-to-Path",
      "Port-to-Port"
    ],
    "correctAnswerIndex": 1,
    "answer": "Peer-to-Peer",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `Peer-to-Peer`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (Peer-to-Peer)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-011",
    "number": 11,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 3,
    "question": "A key characteristic of a pure P2P architecture is:",
    "options": [
      "There is an always-on central server.",
      "Peers communicate directly with each other.",
      "It is less scalable than client-server.",
      "Peers have permanent IP addresses."
    ],
    "correctAnswerIndex": 1,
    "answer": "Peers communicate directly with each other.",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Peers communicate directly with each other.` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Peers communicate directly with each other.)",
      "en": "The correct answer is 'Peers communicate directly with each other.'. (Peers communicate directly with each other.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-012",
    "number": 12,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 3,
    "question": "A major advantage of P2P architecture is:",
    "options": [
      "Simpler security management.",
      "Self-scalability: new peers add service capacity.",
      "Guaranteed quality of service (QoS).",
      "Easy to locate content."
    ],
    "correctAnswerIndex": 1,
    "answer": "Self-scalability: new peers add service capacity.",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Self-scalability: new peers add service capacity.` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Self-scalability: new peers add service capacity.)",
      "en": "The correct answer is 'Self-scalability: new peers add service capacity.'. (Self-scalability: new peers add service capacity.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-013",
    "number": 13,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 3,
    "question": "The statement \"Applications with P2P architectures have client processes & server processes\" is:",
    "options": [
      "True",
      "False"
    ],
    "correctAnswerIndex": 0,
    "answer": "True",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `True`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (True)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-014",
    "number": 14,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 3,
    "question": "A socket is best described as:",
    "options": [
      "A physical port on a router.",
      "The door between an application process and the network.",
      "The IP address of a host.",
      "A type of web cache."
    ],
    "correctAnswerIndex": 1,
    "answer": "The door between an application process and the network.",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `The door between an application process and the network.` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (The door between an application process and the network.)",
      "en": "The correct answer is 'The door between an application process and the network.'. (The door between an application process and the network.)"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-015",
    "number": 15,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 3,
    "question": "Processes on different hosts communicate by exchanging ...... through their sockets.",
    "options": [
      "Electrical signals",
      "Messages",
      "Port numbers",
      "IP addresses"
    ],
    "correctAnswerIndex": 1,
    "answer": "Messages",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Messages` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Messages)",
      "en": "The correct answer is 'Messages'. (Messages)"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-016",
    "number": 16,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 4,
    "question": "To identify a specific process on a host for communication, we need:",
    "options": [
      "The host's IP address only.",
      "The host's MAC address only.",
      "The host's IP address and the process's port number.",
      "The host's domain name only."
    ],
    "correctAnswerIndex": 2,
    "answer": "The host's IP address and the process's port number.",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `The host's IP address and the process's port number.` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (The host's IP address and the process's port number.)",
      "en": "The correct answer is 'The host's IP address and the process's port number.'. (The host's IP address and the process's port number.)"
    },
    "keywords": [
      "CH2",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-017",
    "number": 17,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 4,
    "question": "Which transport protocol would be most suitable for a real-time voice application that can tolerate some loss but is delay-sensitive?",
    "options": [
      "TCP",
      "UDP",
      "SMTP",
      "HTTP"
    ],
    "correctAnswerIndex": 1,
    "answer": "UDP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `UDP`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (UDP)"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-018",
    "number": 18,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 4,
    "question": "Which transport protocol would be most suitable for a file transfer application that requires 100% reliable delivery?",
    "options": [
      "TCP",
      "UDP",
      "ICMP",
      "DNS"
    ],
    "correctAnswerIndex": 0,
    "answer": "TCP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `TCP`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (TCP)"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-019",
    "number": 19,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 4,
    "question": "What is the primary purpose of Transport Layer Security (TLS) at the application layer?",
    "options": [
      "To compress data for faster transmission.",
      "To provide encrypted TCP connections, data integrity, and authentication.",
      "To route packets across the Internet.",
      "To convert domain names to IP addresses."
    ],
    "correctAnswerIndex": 1,
    "answer": "To provide encrypted TCP connections, data integrity, and authentication.",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `To provide encrypted TCP connections, data integrity, and authentication.`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (To provide encrypted TCP connections, data integrity, and authentication.)"
    },
    "keywords": [
      "CH2",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-020",
    "number": 20,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 4,
    "question": "Which port does HTTP typically use?",
    "options": [
      "80",
      "443",
      "22",
      "8080"
    ],
    "correctAnswerIndex": 0,
    "answer": "80",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `80` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (80)",
      "en": "The correct answer is '80'. (80)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-021",
    "number": 21,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 5,
    "question": "When an HTTP client opens a TCP connection to port 80 on a server, it is intending to communicate with:",
    "options": [
      "An FTP server",
      "A DNS server",
      "An HTTP (Web) server",
      "An Email server"
    ],
    "correctAnswerIndex": 2,
    "answer": "An HTTP (Web) server",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `An HTTP (Web) server`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (An HTTP (Web) server)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-022",
    "number": 22,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 5,
    "question": "The \"http://\" in a URL specifies the:",
    "options": [
      "Hostname",
      "Application-layer protocol to use",
      "Path to the object",
      "Port number"
    ],
    "correctAnswerIndex": 1,
    "answer": "Application-layer protocol to use",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `Application-layer protocol to use`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (Application-layer protocol to use)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-023",
    "number": 23,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 5,
    "question": "A web page object can be:",
    "options": [
      "Only an HTML file.",
      "An HTML file, JPEG image, JavaScript file, or CSS file.",
      "Only text-based files.",
      "Only files located on the same server as the main HTML."
    ],
    "correctAnswerIndex": 1,
    "answer": "An HTML file, JPEG image, JavaScript file, or CSS file.",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `An HTML file, JPEG image, JavaScript file, or CSS file.` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (An HTML file, JPEG image, JavaScript file, or CSS file.)",
      "en": "The correct answer is 'An HTML file, JPEG image, JavaScript file, or CSS file.'. (An HTML file, JPEG image, JavaScript file, or CSS file.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-024",
    "number": 24,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 5,
    "question": "What does \"HTTP is stateless\" mean?",
    "options": [
      "The connection is closed after each request.",
      "The server maintains no information about past client requests.",
      "It only works over TCP.",
      "It cannot handle multimedia content."
    ],
    "correctAnswerIndex": 1,
    "answer": "The server maintains no information about past client requests.",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `The server maintains no information about past client requests.`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (The server maintains no information about past client requests.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-025",
    "number": 25,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 5,
    "question": "...... is a time for a small packet to travel from client to server and back.",
    "options": [
      "STT",
      "RTT (Round Trip Time)",
      "PTT",
      "JTT"
    ],
    "correctAnswerIndex": 1,
    "answer": "RTT (Round Trip Time)",
    "explanation": {
      "ar": "الـ `RTT` (`Round-Trip Time`) هو الزمن اللي بتاخده باكيت صغيرة عشان تروح من الـ Client للسيرفر وترجع تاني. (ملاحظة الإجابة: `RTT (Round Trip Time)`)",
      "en": "RTT (Round-Trip Time) is the time it takes for a small packet to travel from client to server and back. (RTT (Round Trip Time))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-026",
    "number": 26,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 6,
    "question": "Each header line in the HTTP request message should end with ......",
    "options": [
      "carriage return and line feed",
      "colon and line feed",
      "carriage return and semi-colon",
      "carriage return"
    ],
    "correctAnswerIndex": 0,
    "answer": "carriage return and line feed",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `carriage return and line feed` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (carriage return and line feed)",
      "en": "The correct answer is 'carriage return and line feed'. (carriage return and line feed)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-027",
    "number": 27,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 6,
    "question": "In an HTTP request message, the first line is called the ...... and includes the method, URL, and version.",
    "options": [
      "Request line",
      "Status line",
      "Header line",
      "Entity line"
    ],
    "correctAnswerIndex": 0,
    "answer": "Request line",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Request line` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Request line)",
      "en": "The correct answer is 'Request line'. (Request line)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-028",
    "number": 28,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 6,
    "question": "In an HTTP response message, the first line is called the ...... and includes a status code.",
    "options": [
      "Request line",
      "Status line",
      "Header line",
      "Entity line"
    ],
    "correctAnswerIndex": 1,
    "answer": "Status line",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Status line` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Status line)",
      "en": "The correct answer is 'Status line'. (Status line)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-029",
    "number": 29,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 6,
    "question": "What is the purpose of the Host: header field in an HTTP request message?",
    "options": [
      "To specify the IP address of the client",
      "To indicate the domain name of the server being requested (required for virtual hosting)",
      "To identify the type of web browser being used",
      "To set cookies for the session"
    ],
    "correctAnswerIndex": 1,
    "answer": "To indicate the domain name of the server being requested (required for virtual hosting)",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `To indicate the domain name of the server being requested (required for virtual hosting)` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (To indicate the domain name of the server being requested (required for virtual hosting))",
      "en": "The correct answer is 'To indicate the domain name of the server being requested (required for virtual hosting)'. (To indicate the domain name of the server being requested (required for virtual hosting))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-030",
    "number": 30,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 6,
    "question": "Which HTTP method is used to retrieve a resource from a server?",
    "options": [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    "correctAnswerIndex": 0,
    "answer": "GET",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL. (ملاحظة الإجابة: `GET`)",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL. (GET)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-031",
    "number": 31,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 7,
    "question": "The ...... method includes user data in the URL field of an HTTP request message (following a '?').",
    "options": [
      "GET",
      "HEAD",
      "PUT",
      "POST"
    ],
    "correctAnswerIndex": 0,
    "answer": "GET",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL. (ملاحظة الإجابة: `GET`)",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL. (GET)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-032",
    "number": 32,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 7,
    "question": "What does the GET method with a query string in the URL (e.g.,  ?search=term ) typically imply about the request?",
    "options": [
      "It is idempotent and should not have side effects on the server.",
      "It is uploading a large file to the server.",
      "It is deleting a resource on the server.",
      "It is creating a new session on the server."
    ],
    "correctAnswerIndex": 0,
    "answer": "It is idempotent and should not have side effects on the server.",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL. (ملاحظة الإجابة: `It is idempotent and should not have side effects on the server.`)",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL. (It is idempotent and should not have side effects on the server.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-033",
    "number": 33,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 7,
    "question": "...... method uploads a new file or object to the server. It also completely replaces files that exist at specified URLs.",
    "options": [
      "POST",
      "GET",
      "HEAD",
      "PUT"
    ],
    "correctAnswerIndex": 3,
    "answer": "PUT",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL. (ملاحظة الإجابة: `PUT`)",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL. (PUT)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-034",
    "number": 34,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 7,
    "question": "The HTTP response message leaves out the requested object when ...... method is used.",
    "options": [
      "GET",
      "POST",
      "HEAD",
      "PUT"
    ],
    "correctAnswerIndex": 2,
    "answer": "HEAD",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL. (ملاحظة الإجابة: `HEAD`)",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL. (HEAD)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-035",
    "number": 35,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 7,
    "question": "The Non-Persistent HTTP response time equals to ......",
    "options": [
      "As little as one RTT for all the referenced objects",
      "As little as two RTT for all the referenced objects",
      "2RTT",
      "2RTT + File Transmission Time"
    ],
    "correctAnswerIndex": 3,
    "answer": "2RTT + File Transmission Time",
    "explanation": {
      "ar": "في الـ `Non-Persistent HTTP` كل ملف بيحتاج `2 RTT + File Transmission Time` (واحد لفتح TCP وواحد لطلب الملف واستقباله)، ولو عندنا ملف HTML و5 صور يبقى الإجمالي `6 TCP connections`. (ملاحظة الإجابة: `2RTT + File Transmission Time`)",
      "en": "Non-persistent HTTP requires 2 RTTs plus file transmission time per object, opening a new TCP connection for each object. (2RTT + File Transmission Time)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-036",
    "number": 36,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 8,
    "question": "The persistent HTTP response time equals to ......",
    "options": [
      "2RTT + file transmission time",
      "as little as one RTT for all the referenced objects",
      "as little as two RTT for all the referenced objects",
      "2RTT"
    ],
    "correctAnswerIndex": 1,
    "answer": "as little as one RTT for all the referenced objects",
    "explanation": {
      "ar": "الـ `RTT` (`Round-Trip Time`) هو الزمن اللي بتاخده باكيت صغيرة عشان تروح من الـ Client للسيرفر وترجع تاني. (ملاحظة الإجابة: `as little as one RTT for all the referenced objects`)",
      "en": "RTT (Round-Trip Time) is the time it takes for a small packet to travel from client to server and back. (as little as one RTT for all the referenced objects)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-037",
    "number": 37,
    "source": "ch2",
    "type": "practical",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 8,
    "question": "In the process of fetching a web page with one base HTML file and 5 embedded images using non-persistent HTTP without parallel connections, how many TCP connections are required in total?",
    "options": [
      "1",
      "5",
      "6",
      "2"
    ],
    "correctAnswerIndex": 2,
    "answer": "6",
    "explanation": {
      "ar": "في الـ `Non-Persistent HTTP` كل ملف بيحتاج `2 RTT + File Transmission Time` (واحد لفتح TCP وواحد لطلب الملف واستقباله)، ولو عندنا ملف HTML و5 صور يبقى الإجمالي `6 TCP connections`. (ملاحظة الإجابة: `6 (1 for the HTML + 5 for the images)`)",
      "en": "Non-persistent HTTP requires 2 RTTs plus file transmission time per object, opening a new TCP connection for each object. (6 (1 for the HTML + 5 for the images))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-038",
    "number": 38,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 8,
    "question": "Which HTTP version first introduced persistent connections as the default?",
    "options": [
      "HTTP/1.0",
      "HTTP/1.1",
      "HTTP/2",
      "HTTP/3"
    ],
    "correctAnswerIndex": 1,
    "answer": "HTTP/1.1",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `HTTP/1.1`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (HTTP/1.1)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-039",
    "number": 39,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 8,
    "question": "In a browser's Conditional GET request, the server responds with \"304 Not Modified\" to indicate:",
    "options": [
      "The requested object has been permanently moved.",
      "The client's cached copy is up-to-date.",
      "The server is temporarily unavailable.",
      "There was an error in the request."
    ],
    "correctAnswerIndex": 1,
    "answer": "The client's cached copy is up-to-date.",
    "explanation": {
      "ar": "في الـ `Conditional GET` لو النسخة اللي في الـ Cache لسه حديثة، السيرفر بيرد بكود `304 Not Modified` من غير ما يبعت الملف تاني. (ملاحظة الإجابة: `The client's cached copy is up-to-date.`)",
      "en": "In a conditional GET, the server replies with '304 Not Modified' when the client's cached copy is still up to date. (The client's cached copy is up-to-date.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-040",
    "number": 40,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 8,
    "question": "Websites and client browsers use ...... to maintain some state between transactions.",
    "options": [
      "cookies",
      "sessions",
      "databases",
      "Web caches"
    ],
    "correctAnswerIndex": 0,
    "answer": "cookies",
    "explanation": {
      "ar": "الـ `Cookies` بتستخدمها المواقع عشان تحفظ حالة المستخدم (`Maintain state`) وتتعرف عليه عبر طلبات `HTTP` المختلفة لأن HTTP بطبيعته `Stateless`. (ملاحظة الإجابة: `cookies`)",
      "en": "Cookies allow stateless HTTP servers to identify users and maintain state across transactions. (cookies)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-041",
    "number": 41,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 9,
    "question": "A \"cookie\" is primarily used to:",
    "options": [
      "Store a web page's HTML code on the client.",
      "Identify a user/browser and maintain state across HTTP transactions.",
      "Increase the security of a TCP connection.",
      "Speed up DNS lookups."
    ],
    "correctAnswerIndex": 1,
    "answer": "Identify a user/browser and maintain state across HTTP transactions.",
    "explanation": {
      "ar": "الـ `Cookies` بتستخدمها المواقع عشان تحفظ حالة المستخدم (`Maintain state`) وتتعرف عليه عبر طلبات `HTTP` المختلفة لأن HTTP بطبيعته `Stateless`. (ملاحظة الإجابة: `Identify a user/browser and maintain state across HTTP transactions.`)",
      "en": "Cookies allow stateless HTTP servers to identify users and maintain state across transactions. (Identify a user/browser and maintain state across HTTP transactions.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-042",
    "number": 42,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 9,
    "question": "...... satisfy client requests without involving the origin server.",
    "options": [
      "Cookies",
      "Sessions",
      "Web caches",
      "Databases"
    ],
    "correctAnswerIndex": 2,
    "answer": "Web caches",
    "explanation": {
      "ar": "الـ `Web Cache` (Proxy Server) بيخزن نسخ من الصفحات المطلوبة عشان يقلل الترافيك على خط المؤسسة ويقلل وقت الاستجابة (`Response time`). (ملاحظة الإجابة: `Web caches`)",
      "en": "A Web cache satisfies client requests locally without contacting the origin server, reducing access-link traffic and response time. (Web caches)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-043",
    "number": 43,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 9,
    "question": "What is the primary benefit of using a web cache (proxy server) for an institution?",
    "options": [
      "It generates new web content.",
      "It reduces traffic on the institution's access link and improves response time.",
      "It provides a permanent backup of all internet content.",
      "It encrypts all web traffic by default."
    ],
    "correctAnswerIndex": 1,
    "answer": "It reduces traffic on the institution's access link and improves response time.",
    "explanation": {
      "ar": "الـ `Web Cache` (Proxy Server) بيخزن نسخ من الصفحات المطلوبة عشان يقلل الترافيك على خط المؤسسة ويقلل وقت الاستجابة (`Response time`). (ملاحظة الإجابة: `It reduces traffic on the institution's access link and improves response time.`)",
      "en": "A Web cache satisfies client requests locally without contacting the origin server, reducing access-link traffic and response time. (It reduces traffic on the institution's access link and improves response time.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-044",
    "number": 44,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 9,
    "question": "Which HTTP status code indicates that the requested resource could not be found on the server?",
    "options": [
      "200",
      "404",
      "500",
      "503"
    ],
    "correctAnswerIndex": 1,
    "answer": "404",
    "explanation": {
      "ar": "أكواد حالة HTTP المهمة: `200 OK` (نجاح)، `301 Moved Permanently` (نقل دائم لعنوان جديد)، و`404 Not Found` (الصفحة غير موجودة). (ملاحظة الإجابة: `404`)",
      "en": "Key HTTP status codes: 200 (OK), 301 (Moved Permanently), and 404 (Not Found). (404)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-045",
    "number": 45,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 9,
    "question": "What does a \"301 Moved Permanently\" HTTP status code signify?",
    "options": [
      "The request was successful.",
      "The requested resource has been permanently moved to a new URL.",
      "The server encountered an internal error.",
      "The client is not authorized."
    ],
    "correctAnswerIndex": 1,
    "answer": "The requested resource has been permanently moved to a new URL.",
    "explanation": {
      "ar": "أكواد حالة HTTP المهمة: `200 OK` (نجاح)، `301 Moved Permanently` (نقل دائم لعنوان جديد)، و`404 Not Found` (الصفحة غير موجودة). (ملاحظة الإجابة: `The requested resource has been permanently moved to a new URL.`)",
      "en": "Key HTTP status codes: 200 (OK), 301 (Moved Permanently), and 404 (Not Found). (The requested resource has been permanently moved to a new URL.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-046",
    "number": 46,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 10,
    "question": "Which HTTP status code indicates a permanent redirect?",
    "options": [
      "302",
      "307",
      "301",
      "303"
    ],
    "correctAnswerIndex": 2,
    "answer": "301",
    "explanation": {
      "ar": "أكواد حالة HTTP المهمة: `200 OK` (نجاح)، `301 Moved Permanently` (نقل دائم لعنوان جديد)، و`404 Not Found` (الصفحة غير موجودة). (ملاحظة الإجابة: `301`)",
      "en": "Key HTTP status codes: 200 (OK), 301 (Moved Permanently), and 404 (Not Found). (301)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-047",
    "number": 47,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 10,
    "question": "A small object may have to wait for transmission behind a large object in HTTP/1.1. This is called ...... blocking.",
    "options": [
      "FCFS",
      "HOL (Head-of-Line)",
      "RTT",
      "QoS"
    ],
    "correctAnswerIndex": 1,
    "answer": "HOL (Head-of-Line)",
    "explanation": {
      "ar": "في `HTTP/1.1` بتحصل مشكلة `HOL Blocking` لما `Object` صغير يستنى ورا `Object` كبير؛ فجاء `HTTP/2` وحلها بتقسيم الـ Objects لـ Frames وترتيبها حسب أولوية الـ Client (`Client-specified priority`). (ملاحظة الإجابة: `HOL (Head-of-Line)`)",
      "en": "HTTP/1.1 suffers from Head-of-Line (HOL) blocking; HTTP/2 mitigates this by framing objects and scheduling them by client-specified priority. (HOL (Head-of-Line))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-048",
    "number": 48,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 10,
    "question": "The term \"head-of-line (HOL) blocking\" in HTTP/1.1 refers to:",
    "options": [
      "A browser blocking a malicious website.",
      "A small object waiting for its turn behind a large object on a single TCP connection.",
      "A firewall blocking an HTTP request.",
      "A server queue being full."
    ],
    "correctAnswerIndex": 1,
    "answer": "A small object waiting for its turn behind a large object on a single TCP connection.",
    "explanation": {
      "ar": "في `HTTP/1.1` بتحصل مشكلة `HOL Blocking` لما `Object` صغير يستنى ورا `Object` كبير؛ فجاء `HTTP/2` وحلها بتقسيم الـ Objects لـ Frames وترتيبها حسب أولوية الـ Client (`Client-specified priority`). (ملاحظة الإجابة: `A small object waiting for its turn behind a large object on a single TCP connection.`)",
      "en": "HTTP/1.1 suffers from Head-of-Line (HOL) blocking; HTTP/2 mitigates this by framing objects and scheduling them by client-specified priority. (A small object waiting for its turn behind a large object on a single TCP connection.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-049",
    "number": 49,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 10,
    "question": "The main difference that distinguishes HTTP/2 over HTTP/1.1 is ......",
    "options": [
      "The server responds in order (FCFS) to GET requests.",
      "The connection is persistent.",
      "It adds security, per object error- and congestion control over UDP.",
      "Transmission order of requested objects based on client-specified object priority."
    ],
    "correctAnswerIndex": 3,
    "answer": "Transmission order of requested objects based on client-specified object priority.",
    "explanation": {
      "ar": "في `HTTP/1.1` بتحصل مشكلة `HOL Blocking` لما `Object` صغير يستنى ورا `Object` كبير؛ فجاء `HTTP/2` وحلها بتقسيم الـ Objects لـ Frames وترتيبها حسب أولوية الـ Client (`Client-specified priority`). (ملاحظة الإجابة: `Transmission order of requested objects based on client-specified object priority.`)",
      "en": "HTTP/1.1 suffers from Head-of-Line (HOL) blocking; HTTP/2 mitigates this by framing objects and scheduling them by client-specified priority. (Transmission order of requested objects based on client-specified object priority.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-050",
    "number": 50,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 10,
    "question": "The main limitation of HTTP/2 over TCP is:",
    "options": [
      "Loss of packet stalls all object transmissions.",
      "Increased server load.",
      "Reduced security.",
      "Slower transmission speeds."
    ],
    "correctAnswerIndex": 0,
    "answer": "Loss of packet stalls all object transmissions.",
    "explanation": {
      "ar": "في `HTTP/1.1` بتحصل مشكلة `HOL Blocking` لما `Object` صغير يستنى ورا `Object` كبير؛ فجاء `HTTP/2` وحلها بتقسيم الـ Objects لـ Frames وترتيبها حسب أولوية الـ Client (`Client-specified priority`). (ملاحظة الإجابة: `Loss of packet stalls all object transmissions.`)",
      "en": "HTTP/1.1 suffers from Head-of-Line (HOL) blocking; HTTP/2 mitigates this by framing objects and scheduling them by client-specified priority. (Loss of packet stalls all object transmissions.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-051",
    "number": 51,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 11,
    "question": "The main difference that distinguishes HTTP/3 is ......",
    "options": [
      "Transmission order based on client priority.",
      "The server responds in order (FCFS).",
      "The connection is persistent.",
      "It adds security and per-object control over UDP."
    ],
    "correctAnswerIndex": 3,
    "answer": "It adds security and per-object control over UDP.",
    "explanation": {
      "ar": "الـ `HTTP/3` شغال فوق `UDP` (عبر `QUIC`) وبيضيف أمان وتحكم في الأخطاء والازدحام لكل `Object` بشكل مستقل. (ملاحظة الإجابة: `It adds security and per-object control over UDP.`)",
      "en": "HTTP/3 runs over UDP (via QUIC), adding built-in security and per-object error and congestion control. (It adds security and per-object control over UDP.)"
    },
    "keywords": [
      "CH2",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-052",
    "number": 52,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 11,
    "question": "What does SMTP stand for?",
    "options": [
      "Simple Mail Transfer Protocol",
      "Secure Mail Transfer Protocol",
      "Simple Message Transfer Protocol",
      "Secure Message Transfer Protocol"
    ],
    "correctAnswerIndex": 0,
    "answer": "Simple Mail Transfer Protocol",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `Simple Mail Transfer Protocol`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (Simple Mail Transfer Protocol)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-053",
    "number": 53,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 11,
    "question": "Which port does SMTP typically use?",
    "options": [
      "25",
      "80",
      "110",
      "443"
    ],
    "correctAnswerIndex": 0,
    "answer": "25",
    "explanation": {
      "ar": "بروتوكول `SMTP` (على `TCP Port 25`) هو `Push protocol` لإرسال الإيميلات في صورة `7-bit ASCII`، وبينهي جسم الرسالة بـ `CRLF.CRLF`. (ملاحظة الإجابة: `25`)",
      "en": "SMTP (TCP port 25) is a push protocol that transfers 7-bit ASCII email messages using CRLF.CRLF to mark the end of the body. (25)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-054",
    "number": 54,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 11,
    "question": "SMTP uses ...... to reliably transfer email messages.",
    "options": [
      "UDP",
      "TCP",
      "Either TCP or UDP",
      "IMAP"
    ],
    "correctAnswerIndex": 1,
    "answer": "TCP",
    "explanation": {
      "ar": "بروتوكول `SMTP` (على `TCP Port 25`) هو `Push protocol` لإرسال الإيميلات في صورة `7-bit ASCII`، وبينهي جسم الرسالة بـ `CRLF.CRLF`. (ملاحظة الإجابة: `TCP`)",
      "en": "SMTP (TCP port 25) is a push protocol that transfers 7-bit ASCII email messages using CRLF.CRLF to mark the end of the body. (TCP)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-055",
    "number": 55,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 11,
    "question": "All of the following are the main features of SMTP, except ......",
    "options": [
      "It has ASCII command/response interaction and status codes.",
      "Client pull.",
      "Multiple objects sent in a multipart message.",
      "The server uses CRLF.CRLF to determine the end of the message."
    ],
    "correctAnswerIndex": 1,
    "answer": "Client pull.",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `Client pull. (SMTP is a push protocol)`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (Client pull. (SMTP is a push protocol))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-056",
    "number": 56,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 12,
    "question": "The three main phases of an SMTP session are:",
    "options": [
      "Handshaking, transfer of messages, acknowledgment.",
      "Connection, authentication, closure.",
      "Handshaking, transfer of messages, closure.",
      "Request, response, termination."
    ],
    "correctAnswerIndex": 2,
    "answer": "Handshaking, transfer of messages, closure.",
    "explanation": {
      "ar": "بروتوكول `SMTP` (على `TCP Port 25`) هو `Push protocol` لإرسال الإيميلات في صورة `7-bit ASCII`، وبينهي جسم الرسالة بـ `CRLF.CRLF`. (ملاحظة الإجابة: `Handshaking, transfer of messages, closure.`)",
      "en": "SMTP (TCP port 25) is a push protocol that transfers 7-bit ASCII email messages using CRLF.CRLF to mark the end of the body. (Handshaking, transfer of messages, closure.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-057",
    "number": 57,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 12,
    "question": "For an email message to be sent using SMTP, it must be encoded in:",
    "options": [
      "Binary",
      "7-bit ASCII",
      "UTF-8",
      "Base64"
    ],
    "correctAnswerIndex": 1,
    "answer": "7-bit ASCII",
    "explanation": {
      "ar": "بروتوكول `SMTP` (على `TCP Port 25`) هو `Push protocol` لإرسال الإيميلات في صورة `7-bit ASCII`، وبينهي جسم الرسالة بـ `CRLF.CRLF`. (ملاحظة الإجابة: `7-bit ASCII`)",
      "en": "SMTP (TCP port 25) is a push protocol that transfers 7-bit ASCII email messages using CRLF.CRLF to mark the end of the body. (7-bit ASCII)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-058",
    "number": 58,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 12,
    "question": "In the context of SMTP, what is the role of CRLF.CRLF?",
    "options": [
      "It encrypts the email message.",
      "It signals the end of the email message body to the server.",
      "It separates multiple email attachments.",
      "It indicates the start of a new email transaction."
    ],
    "correctAnswerIndex": 1,
    "answer": "It signals the end of the email message body to the server.",
    "explanation": {
      "ar": "بروتوكول `SMTP` (على `TCP Port 25`) هو `Push protocol` لإرسال الإيميلات في صورة `7-bit ASCII`، وبينهي جسم الرسالة بـ `CRLF.CRLF`. (ملاحظة الإجابة: `It signals the end of the email message body to the server.`)",
      "en": "SMTP (TCP port 25) is a push protocol that transfers 7-bit ASCII email messages using CRLF.CRLF to mark the end of the body. (It signals the end of the email message body to the server.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-059",
    "number": 59,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 12,
    "question": "The three major components of the e-mail system are:",
    "options": [
      "User agent, Web browser, Mail server.",
      "User agent, Mail servers, SMTP.",
      "SMTP, IMAP, DNS.",
      "Client, Server, Router."
    ],
    "correctAnswerIndex": 1,
    "answer": "User agent, Mail servers, SMTP.",
    "explanation": {
      "ar": "بروتوكول `SMTP` (على `TCP Port 25`) هو `Push protocol` لإرسال الإيميلات في صورة `7-bit ASCII`، وبينهي جسم الرسالة بـ `CRLF.CRLF`. (ملاحظة الإجابة: `User agent, Mail servers, SMTP.`)",
      "en": "SMTP (TCP port 25) is a push protocol that transfers 7-bit ASCII email messages using CRLF.CRLF to mark the end of the body. (User agent, Mail servers, SMTP.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-060",
    "number": 60,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 12,
    "question": "In the email journey from Alice to Bob, which protocol is used to transfer the message from Alice's mail server to Bob's mail server?",
    "options": [
      "IMAP",
      "POP3",
      "SMTP",
      "HTTP"
    ],
    "correctAnswerIndex": 2,
    "answer": "SMTP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `SMTP`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (SMTP)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-061",
    "number": 61,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 13,
    "question": "Which protocol is used by a mail client to send an email message from the client to its designated outgoing mail server?",
    "options": [
      "SMTP",
      "IMAP",
      "POP3",
      "HTTP"
    ],
    "correctAnswerIndex": 0,
    "answer": "SMTP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `SMTP`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (SMTP)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-062",
    "number": 62,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 13,
    "question": "What is the primary function of a mail access protocol like IMAP or POP3?",
    "options": [
      "To transfer mail from the sender's server to the receiver's server.",
      "To allow a user agent to retrieve email from a mail server.",
      "To translate email addresses to server IP addresses.",
      "To compose and send new email messages."
    ],
    "correctAnswerIndex": 1,
    "answer": "To allow a user agent to retrieve email from a mail server.",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `To allow a user agent to retrieve email from a mail server.`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (To allow a user agent to retrieve email from a mail server.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-063",
    "number": 63,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 13,
    "question": "What is the purpose of IMAP?",
    "options": [
      "To send emails from a client to a server.",
      "To receive and manage emails stored on a server.",
      "To translate domain names to IP addresses.",
      "To provide a web-based email interface."
    ],
    "correctAnswerIndex": 1,
    "answer": "To receive and manage emails stored on a server.",
    "explanation": {
      "ar": "بروتوكولات سحب الإيميل (`Mail access protocols`): `POP3` و`IMAP`؛ والـ `IMAP` بيتميز إنه بيسمح بتنظيم الفولدرات وإدارة الإيميلات مباشرة على السيرفر. (ملاحظة الإجابة: `To receive and manage emails stored on a server.`)",
      "en": "IMAP and POP3 are pull-based mail access protocols; IMAP allows users to organize folders and manage messages directly on the server. (To receive and manage emails stored on a server.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-064",
    "number": 64,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 13,
    "question": "Which protocol provides retrieval, deletion, and folder management of messages stored on a server?",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "HTTP"
    ],
    "correctAnswerIndex": 2,
    "answer": "IMAP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `IMAP`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (IMAP)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-065",
    "number": 65,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 13,
    "question": "Which component in the email infrastructure is responsible for storing incoming messages for a user until they are retrieved?",
    "options": [
      "User Agent (e.g., Outlook)",
      "SMTP Server (Sender's)",
      "Mail Access Server (e.g., IMAP/POP3 Server)",
      "DNS Server"
    ],
    "correctAnswerIndex": 2,
    "answer": "Mail Access Server (e.g., IMAP/POP3 Server)",
    "explanation": {
      "ar": "بروتوكولات سحب الإيميل (`Mail access protocols`): `POP3` و`IMAP`؛ والـ `IMAP` بيتميز إنه بيسمح بتنظيم الفولدرات وإدارة الإيميلات مباشرة على السيرفر. (ملاحظة الإجابة: `Mail Access Server (e.g., IMAP/POP3 Server)`)",
      "en": "IMAP and POP3 are pull-based mail access protocols; IMAP allows users to organize folders and manage messages directly on the server. (Mail Access Server (e.g., IMAP/POP3 Server))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-066",
    "number": 66,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 14,
    "question": "When you use a web-based email service like Gmail, which protocol is primarily used for the interface you see in the browser?",
    "options": [
      "SMTP",
      "IMAP",
      "HTTP/HTTPS",
      "POP3"
    ],
    "correctAnswerIndex": 2,
    "answer": "HTTP/HTTPS",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `HTTP/HTTPS`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (HTTP/HTTPS)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-067",
    "number": 67,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 14,
    "question": "What does DNS stand for?",
    "options": [
      "Domain Number System",
      "Digital Naming Service",
      "Domain Name System",
      "Data Network Signal"
    ],
    "correctAnswerIndex": 2,
    "answer": "Domain Name System",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `Domain Name System`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (Domain Name System)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-068",
    "number": 68,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 14,
    "question": "The DNS service that maps a hostname to an IP address is called:",
    "options": [
      "Host aliasing",
      "Mail server aliasing",
      "Load distribution",
      "Name-Address translation"
    ],
    "correctAnswerIndex": 3,
    "answer": "Name-Address translation",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `Name-Address translation`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (Name-Address translation)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-069",
    "number": 69,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 14,
    "question": "...... is the highest level of the DNS hierarchy and knows how to reach servers responsible for top-level domains.",
    "options": [
      "Authoritative DNS server",
      "Local DNS server",
      "TLD server",
      "Root DNS server"
    ],
    "correctAnswerIndex": 3,
    "answer": "Root DNS server",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `Root DNS server`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (Root DNS server)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-070",
    "number": 70,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 14,
    "question": "The \"www\" in \"www.example.com\" is an example of a:",
    "options": [
      "Top-Level Domain (TLD)",
      "Root domain",
      "Subdomain or hostname",
      "Authoritative server alias"
    ],
    "correctAnswerIndex": 2,
    "answer": "Subdomain or hostname",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Subdomain or hostname` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Subdomain or hostname)",
      "en": "The correct answer is 'Subdomain or hostname'. (Subdomain or hostname)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-071",
    "number": 71,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 15,
    "question": "Which DNS server is responsible for a specific organization (e.g., amazon.com)?",
    "options": [
      "Root DNS server",
      "TLD DNS server (.com)",
      "Authoritative DNS server",
      "Local DNS server"
    ],
    "correctAnswerIndex": 2,
    "answer": "Authoritative DNS server",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `Authoritative DNS server`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (Authoritative DNS server)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-072",
    "number": 72,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 15,
    "question": "The primary reason an organization might deploy a local DNS server is to:",
    "options": [
      "Act as the authoritative server for all internet domains.",
      "Cache DNS responses to reduce latency for local hosts and reduce external traffic.",
      "Replace the root DNS servers.",
      "Encrypt all DNS queries from the organization."
    ],
    "correctAnswerIndex": 1,
    "answer": "Cache DNS responses to reduce latency for local hosts and reduce external traffic.",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `Cache DNS responses to reduce latency for local hosts and reduce external traffic.`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (Cache DNS responses to reduce latency for local hosts and reduce external traffic.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-073",
    "number": 73,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 15,
    "question": "In DNS records, if the type is A, the name is a ...... and the value is an ......",
    "options": [
      "hostname, IP address",
      "alias name, canonical name",
      "domain, hostname of authoritative server",
      "hostname, name of mail server"
    ],
    "correctAnswerIndex": 0,
    "answer": "hostname, IP address",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `hostname, IP address`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (hostname, IP address)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-074",
    "number": 74,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 15,
    "question": "In DNS records, if the type is NS, the name is a ...... and the value is the ......",
    "options": [
      "hostname, IP address",
      "alias name, canonical name",
      "domain, hostname of authoritative name server",
      "hostname, name of mail server"
    ],
    "correctAnswerIndex": 2,
    "answer": "domain, hostname of authoritative name server",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `domain, hostname of authoritative name server`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (domain, hostname of authoritative name server)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-075",
    "number": 75,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 15,
    "question": "In DNS records, if the type is CNAME, the value is the ......",
    "options": [
      "IP address",
      "canonical (real) name",
      "mail server name",
      "authoritative server name"
    ],
    "correctAnswerIndex": 1,
    "answer": "canonical (real) name",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `canonical (real) name`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (canonical (real) name)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-076",
    "number": 76,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 16,
    "question": "Which DNS record type is used to specify a mail server for a domain?",
    "options": [
      "A record",
      "NS record",
      "CNAME record",
      "MX record"
    ],
    "correctAnswerIndex": 3,
    "answer": "MX record",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `MX record`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (MX record)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-077",
    "number": 77,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 16,
    "question": "Which DNS query type would a mail server use to find the mail exchanger (MX record) for a domain?",
    "options": [
      "A query (Address record)",
      "NS query (Name Server record)",
      "MX query (Mail Exchange record)",
      "CNAME query (Canonical Name record)"
    ],
    "correctAnswerIndex": 2,
    "answer": "MX query (Mail Exchange record)",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `MX query (Mail Exchange record)`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (MX query (Mail Exchange record))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-078",
    "number": 78,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 16,
    "question": "Which field in a DNS resource record (RR) specifies how long (in seconds) the record can be cached?",
    "options": [
      "Type",
      "Value",
      "TTL (Time to Live)",
      "Name"
    ],
    "correctAnswerIndex": 2,
    "answer": "TTL (Time to Live)",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `TTL (Time to Live)`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (TTL (Time to Live))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-079",
    "number": 79,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 16,
    "question": "The DNS resource record field TTL (Time to Live) indicates:",
    "options": [
      "How long a record should be cached before it should be discarded.",
      "The time it takes for a query to be resolved.",
      "The lifetime of a DNS server.",
      "The type of the record (A, NS, etc.)."
    ],
    "correctAnswerIndex": 0,
    "answer": "How long a record should be cached before it should be discarded.",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `How long a record should be cached before it should be discarded.`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (How long a record should be cached before it should be discarded.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-080",
    "number": 80,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 16,
    "question": "The primary reason for DNS caching is to:",
    "options": [
      "Improve security",
      "Reduce traffic and improve response time",
      "Ensure permanent record storage",
      "Encrypt DNS queries"
    ],
    "correctAnswerIndex": 1,
    "answer": "Reduce traffic and improve response time",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `Reduce traffic and improve response time`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (Reduce traffic and improve response time)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-081",
    "number": 81,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 17,
    "question": "Which of the following best describes iterative query in DNS resolution?",
    "options": [
      "The contacted server replies with the final answer.",
      "The contacted server replies with the name of another server to ask.",
      "The client's query is forwarded through a chain of servers automatically.",
      "It is only used between root servers."
    ],
    "correctAnswerIndex": 1,
    "answer": "The contacted server replies with the name of another server to ask.",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `The contacted server replies with the name of another server to ask.`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (The contacted server replies with the name of another server to ask.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-082",
    "number": 82,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 17,
    "question": "In a recursive query to a local DNS server, the local DNS server is responsible for:",
    "options": [
      "Giving the client the name of the next server to ask.",
      "Obtaining the final answer and returning it to the client.",
      "Only checking its own cache.",
      "Contacting the root server directly every time."
    ],
    "correctAnswerIndex": 1,
    "answer": "Obtaining the final answer and returning it to the client.",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `Obtaining the final answer and returning it to the client.`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (Obtaining the final answer and returning it to the client.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-083",
    "number": 83,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 17,
    "question": "Load distribution in DNS is achieved by:",
    "options": [
      "Having multiple IP addresses correspond to one domain name.",
      "Using a single, very powerful server.",
      "Encrypting DNS queries.",
      "Increasing the TTL value."
    ],
    "correctAnswerIndex": 0,
    "answer": "Having multiple IP addresses correspond to one domain name.",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `Having multiple IP addresses correspond to one domain name.`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (Having multiple IP addresses correspond to one domain name.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-084",
    "number": 84,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 17,
    "question": "The primary reason UDP is used for DNS queries is:",
    "options": [
      "DNS requires reliable, in-order delivery.",
      "DNS transactions are short and the overhead of TCP connection setup is undesirable.",
      "DNS servers only support UDP.",
      "UDP provides congestion control."
    ],
    "correctAnswerIndex": 1,
    "answer": "DNS transactions are short and the overhead of TCP connection setup is undesirable.",
    "explanation": {
      "ar": "طرق HTTP الأساسية: `GET` لطلب صفحة (وممكن تبعت داتا في الـ URL بعد `?`)، `HEAD` بترجع الـ Headers بس من غير الـ Object، و`PUT` بترفع ملف وتستبدل الموجود في الـ URL. (ملاحظة الإجابة: `DNS transactions are short and the overhead of TCP connection setup is undesirable.`)",
      "en": "HTTP methods: GET retrieves resources (and appends query data after '?'), HEAD omits the object body, and PUT uploads/replaces a file at a URL. (DNS transactions are short and the overhead of TCP connection setup is undesirable.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-085",
    "number": 85,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 17,
    "question": "DNS cache poisoning is a type of ...... attack.",
    "options": [
      "DDoS",
      "Spoofing",
      "Phishing",
      "Malware"
    ],
    "correctAnswerIndex": 1,
    "answer": "Spoofing",
    "explanation": {
      "ar": "الـ `Spoofing` معناه التزوير — زي `IP Spoofing` (تزوير عنوان المرسل في الباكيت) أو `DNS Spoofing / Cache Poisoning` (إرجاع ردود DNS مزيفة). (ملاحظة الإجابة: `Spoofing`)",
      "en": "Spoofing involves falsifying identity or replies, such as IP spoofing (fake source IP) or DNS cache poisoning (bogus DNS replies). (Spoofing)"
    },
    "keywords": [
      "CH2",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-086",
    "number": 86,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 18,
    "question": "What is the main challenge that P2P file sharing systems like BitTorrent solve compared to client-server?",
    "options": [
      "Providing a centralized user database.",
      "Scaling to a very large number of clients without overloading a central server.",
      "Guaranteeing faster download speeds for every single peer.",
      "Simplifying the legal copyright framework."
    ],
    "correctAnswerIndex": 1,
    "answer": "Scaling to a very large number of clients without overloading a central server.",
    "explanation": {
      "ar": "في شبكة `BitTorrent` (`P2P`): الـ `Tracker` بيتابع الـ Peers في الـ Swarm، و`Rarest-first` بيزود تنوع الأجزاء، و`Tit-for-tat` بيبعت لأسرع 4 Peers بيبعتوله، و`Optimistic unchoking` بيكتشف Peers جداد. (ملاحظة الإجابة: `Scaling to a very large number of clients without overloading a central server.`)",
      "en": "In BitTorrent P2P: the tracker tracks swarm peers, rarest-first increases chunk diversity, tit-for-tat rewards top 4 uploaders, and optimistic unchoking discovers new peers. (Scaling to a very large number of clients without overloading a central server.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-087",
    "number": 87,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 18,
    "question": "Which of the following best describes the role of a tracker in BitTorrent?",
    "options": [
      "It stores all the chunks of the file.",
      "It keeps track of which peers are in the torrent swarm.",
      "It acts as the final download source for all peers.",
      "It encrypts the file transfer."
    ],
    "correctAnswerIndex": 1,
    "answer": "It keeps track of which peers are in the torrent swarm.",
    "explanation": {
      "ar": "في شبكة `BitTorrent` (`P2P`): الـ `Tracker` بيتابع الـ Peers في الـ Swarm، و`Rarest-first` بيزود تنوع الأجزاء، و`Tit-for-tat` بيبعت لأسرع 4 Peers بيبعتوله، و`Optimistic unchoking` بيكتشف Peers جداد. (ملاحظة الإجابة: `It keeps track of which peers are in the torrent swarm.`)",
      "en": "In BitTorrent P2P: the tracker tracks swarm peers, rarest-first increases chunk diversity, tit-for-tat rewards top 4 uploaders, and optimistic unchoking discovers new peers. (It keeps track of which peers are in the torrent swarm.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-088",
    "number": 88,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 18,
    "question": "In the BitTorrent P2P protocol, a peer sending chunks to the four peers that are currently sending data to it at the highest rate is an example of:",
    "options": [
      "Random selection",
      "Tit-for-tat",
      "Optimistic unchoking",
      "Rarest-first"
    ],
    "correctAnswerIndex": 1,
    "answer": "Tit-for-tat",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `Tit-for-tat`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (Tit-for-tat)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-089",
    "number": 89,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 18,
    "question": "In BitTorrent, requesting the rarest chunk first helps to:",
    "options": [
      "Punish free-riders.",
      "Increase the diversity of chunks in the swarm.",
      "Prioritize high-bandwidth peers.",
      "Establish a TCP connection."
    ],
    "correctAnswerIndex": 1,
    "answer": "Increase the diversity of chunks in the swarm.",
    "explanation": {
      "ar": "في شبكة `BitTorrent` (`P2P`): الـ `Tracker` بيتابع الـ Peers في الـ Swarm، و`Rarest-first` بيزود تنوع الأجزاء، و`Tit-for-tat` بيبعت لأسرع 4 Peers بيبعتوله، و`Optimistic unchoking` بيكتشف Peers جداد. (ملاحظة الإجابة: `Increase the diversity of chunks in the swarm.`)",
      "en": "In BitTorrent P2P: the tracker tracks swarm peers, rarest-first increases chunk diversity, tit-for-tat rewards top 4 uploaders, and optimistic unchoking discovers new peers. (Increase the diversity of chunks in the swarm.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-090",
    "number": 90,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 18,
    "question": "In BitTorrent, what is the purpose of optimistic unchoking?",
    "options": [
      "To prioritize peers with the fastest upload speed.",
      "To discover new peers that might provide better download rates in the future.",
      "To punish free-riders by choking them.",
      "To request the rarest chunk first."
    ],
    "correctAnswerIndex": 1,
    "answer": "To discover new peers that might provide better download rates in the future.",
    "explanation": {
      "ar": "في شبكة `BitTorrent` (`P2P`): الـ `Tracker` بيتابع الـ Peers في الـ Swarm، و`Rarest-first` بيزود تنوع الأجزاء، و`Tit-for-tat` بيبعت لأسرع 4 Peers بيبعتوله، و`Optimistic unchoking` بيكتشف Peers جداد. (ملاحظة الإجابة: `To discover new peers that might provide better download rates in the future.`)",
      "en": "In BitTorrent P2P: the tracker tracks swarm peers, rarest-first increases chunk diversity, tit-for-tat rewards top 4 uploaders, and optimistic unchoking discovers new peers. (To discover new peers that might provide better download rates in the future.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-091",
    "number": 91,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 19,
    "question": "The primary goal of Content Distribution Networks (CDNs) is to:",
    "options": [
      "Encrypt video content.",
      "Distribute content to geographically dispersed servers to improve user experience.",
      "Replace the Internet's core routing infrastructure.",
      "Provide permanent storage for user data."
    ],
    "correctAnswerIndex": 1,
    "answer": "Distribute content to geographically dispersed servers to improve user experience.",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `Distribute content to geographically dispersed servers to improve user experience.`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (Distribute content to geographically dispersed servers to improve user experience.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-092",
    "number": 92,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 19,
    "question": "A key advantage of a CDN like Akamai using the \"enter deep\" strategy is:",
    "options": [
      "Lower cost of deploying few servers in centralized data centers.",
      "Having servers within many access ISPs, close to end users, reducing latency.",
      "Simplifying content management and updates.",
      "Better security against DDoS attacks."
    ],
    "correctAnswerIndex": 1,
    "answer": "Having servers within many access ISPs, close to end users, reducing latency.",
    "explanation": {
      "ar": "الـ `CDN` بيوزع السيرفرات جغرافياً قريب من المستخدم (`Enter deep`) لتقليل الـ Latency؛ و`DASH` بيسمح للـ Client يختار جودة الفيديو المناسبة لسرعته من ملف الـ `Manifest`، والـ `Playout buffering` بيعالج الـ Network jitter. (ملاحظة الإجابة: `Having servers within many access ISPs, close to end users, reducing latency.`)",
      "en": "CDNs distribute content close to users; DASH uses a manifest file to adapt video bitrates dynamically, and client playout buffering absorbs network jitter. (Having servers within many access ISPs, close to end users, reducing latency.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-093",
    "number": 93,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 19,
    "question": "In video streaming, DASH (Dynamic Adaptive Streaming over HTTP) allows the client to:",
    "options": [
      "Control the server's upload speed.",
      "Dynamically choose which video encoding rate to request based on current bandwidth.",
      "Broadcast the video to multiple users simultaneously.",
      "Edit the video content in real-time."
    ],
    "correctAnswerIndex": 1,
    "answer": "Dynamically choose which video encoding rate to request based on current bandwidth.",
    "explanation": {
      "ar": "الـ `CDN` بيوزع السيرفرات جغرافياً قريب من المستخدم (`Enter deep`) لتقليل الـ Latency؛ و`DASH` بيسمح للـ Client يختار جودة الفيديو المناسبة لسرعته من ملف الـ `Manifest`، والـ `Playout buffering` بيعالج الـ Network jitter. (ملاحظة الإجابة: `Dynamically choose which video encoding rate to request based on current bandwidth.`)",
      "en": "CDNs distribute content close to users; DASH uses a manifest file to adapt video bitrates dynamically, and client playout buffering absorbs network jitter. (Dynamically choose which video encoding rate to request based on current bandwidth.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-094",
    "number": 94,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 19,
    "question": "A manifest file in DASH streaming contains:",
    "options": [
      "The complete video data.",
      "URLs for different video chunks encoded at different rates.",
      "The user's login credentials.",
      "The IP addresses of all CDN servers."
    ],
    "correctAnswerIndex": 1,
    "answer": "URLs for different video chunks encoded at different rates.",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`. (ملاحظة الإجابة: `URLs for different video chunks encoded at different rates.`)",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds. (URLs for different video chunks encoded at different rates.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-095",
    "number": 95,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 19,
    "question": "In the context of video streaming, the purpose of playout buffering on the client side is to:",
    "options": [
      "Compress the video data.",
      "Compensate for network jitter and ensure smooth playback.",
      "Encrypt the video stream.",
      "Send feedback to the server about video quality."
    ],
    "correctAnswerIndex": 1,
    "answer": "Compensate for network jitter and ensure smooth playback.",
    "explanation": {
      "ar": "الـ `CDN` بيوزع السيرفرات جغرافياً قريب من المستخدم (`Enter deep`) لتقليل الـ Latency؛ و`DASH` بيسمح للـ Client يختار جودة الفيديو المناسبة لسرعته من ملف الـ `Manifest`، والـ `Playout buffering` بيعالج الـ Network jitter. (ملاحظة الإجابة: `Compensate for network jitter and ensure smooth playback.`)",
      "en": "CDNs distribute content close to users; DASH uses a manifest file to adapt video bitrates dynamically, and client playout buffering absorbs network jitter. (Compensate for network jitter and ensure smooth playback.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-096",
    "number": 96,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 20,
    "question": "In socket programming, the  bind()  system call is used to:",
    "options": [
      "Connect to a remote server.",
      "Associate a socket with a specific local port number (and IP address).",
      "Listen for incoming connections.",
      "Send data over the network."
    ],
    "correctAnswerIndex": 1,
    "answer": "Associate a socket with a specific local port number (and IP address).",
    "explanation": {
      "ar": "في برمجة الـ `Sockets`: الدالة `bind()` بتربط الـ Socket برقم Port، و`accept()` في TCP بتفتح Socket جديد لكل Client؛ والـ `TCP` بيعمل `Demultiplexing` بـ `4-tuple` (Source/Dest IP & Port) بينما `UDP` بيستخدم `Dest Port` فقط. (ملاحظة الإجابة: `Associate a socket with a specific local port number (and IP address).`)",
      "en": "In socket programming, bind() assigns a local port and accept() creates a new TCP connection socket. TCP demultiplexes using a 4-tuple, whereas UDP uses only destination port. (Associate a socket with a specific local port number (and IP address).)"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-097",
    "number": 97,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 20,
    "question": "In TCP socket programming, the server uses the ...... method to create a new socket for each client connection.",
    "options": [
      "socket()",
      "bind()",
      "listen()",
      "accept()"
    ],
    "correctAnswerIndex": 3,
    "answer": "accept()",
    "explanation": {
      "ar": "في برمجة الـ `Sockets`: الدالة `bind()` بتربط الـ Socket برقم Port، و`accept()` في TCP بتفتح Socket جديد لكل Client؛ والـ `TCP` بيعمل `Demultiplexing` بـ `4-tuple` (Source/Dest IP & Port) بينما `UDP` بيستخدم `Dest Port` فقط. (ملاحظة الإجابة: `accept()`)",
      "en": "In socket programming, bind() assigns a local port and accept() creates a new TCP connection socket. TCP demultiplexes using a 4-tuple, whereas UDP uses only destination port. (accept())"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-098",
    "number": 98,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 20,
    "question": "In UDP socket programming, the server identifies the client's address using:",
    "options": [
      "The source IP and port in the received datagram.",
      "A prior handshake.",
      "The client's hostname.",
      "A fixed port number for all clients."
    ],
    "correctAnswerIndex": 0,
    "answer": "The source IP and port in the received datagram.",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `The source IP and port in the received datagram.` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (The source IP and port in the received datagram.)",
      "en": "The correct answer is 'The source IP and port in the received datagram.'. (The source IP and port in the received datagram.)"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-099",
    "number": 99,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 20,
    "question": "What is the key difference between how TCP and UDP handle demultiplexing incoming segments to sockets?",
    "options": [
      "TCP uses only the destination port number; UDP uses a 4-tuple.",
      "UDP uses only the destination port number; TCP uses a 4-tuple (source IP, source port, dest IP, dest port).",
      "Both use only the destination port number.",
      "Both require a 4-tuple."
    ],
    "correctAnswerIndex": 1,
    "answer": "UDP uses only the destination port number; TCP uses a 4-tuple (source IP, source port, dest IP, dest port).",
    "explanation": {
      "ar": "في برمجة الـ `Sockets`: الدالة `bind()` بتربط الـ Socket برقم Port، و`accept()` في TCP بتفتح Socket جديد لكل Client؛ والـ `TCP` بيعمل `Demultiplexing` بـ `4-tuple` (Source/Dest IP & Port) بينما `UDP` بيستخدم `Dest Port` فقط. (ملاحظة الإجابة: `UDP uses only the destination port number; TCP uses a 4-tuple (source IP, source port, dest IP, dest port).`)",
      "en": "In socket programming, bind() assigns a local port and accept() creates a new TCP connection socket. TCP demultiplexes using a 4-tuple, whereas UDP uses only destination port. (UDP uses only the destination port number; TCP uses a 4-tuple (source IP, source port, dest IP, dest port).)"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-100",
    "number": 100,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 21,
    "question": "Which field in a socket programming context is NOT part of the 4-tuple used for TCP demultiplexing?",
    "options": [
      "Source IP address",
      "Destination IP address",
      "Destination port number",
      "Sequence number"
    ],
    "correctAnswerIndex": 3,
    "answer": "Sequence number",
    "explanation": {
      "ar": "في برمجة الـ `Sockets`: الدالة `bind()` بتربط الـ Socket برقم Port، و`accept()` في TCP بتفتح Socket جديد لكل Client؛ والـ `TCP` بيعمل `Demultiplexing` بـ `4-tuple` (Source/Dest IP & Port) بينما `UDP` بيستخدم `Dest Port` فقط. (ملاحظة الإجابة: `Sequence number`)",
      "en": "In socket programming, bind() assigns a local port and accept() creates a new TCP connection socket. TCP demultiplexes using a 4-tuple, whereas UDP uses only destination port. (Sequence number)"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-101",
    "number": 101,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 21,
    "question": "The act of a server using the information in an incoming segment's headers to direct it to the correct socket is called:",
    "options": [
      "Multiplexing",
      "Demultiplexing",
      "Encapsulation",
      "Forwarding"
    ],
    "correctAnswerIndex": 1,
    "answer": "Demultiplexing",
    "explanation": {
      "ar": "في برمجة الـ `Sockets`: الدالة `bind()` بتربط الـ Socket برقم Port، و`accept()` في TCP بتفتح Socket جديد لكل Client؛ والـ `TCP` بيعمل `Demultiplexing` بـ `4-tuple` (Source/Dest IP & Port) بينما `UDP` بيستخدم `Dest Port` فقط. (ملاحظة الإجابة: `Demultiplexing`)",
      "en": "In socket programming, bind() assigns a local port and accept() creates a new TCP connection socket. TCP demultiplexes using a 4-tuple, whereas UDP uses only destination port. (Demultiplexing)"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-102",
    "number": 102,
    "source": "ch2",
    "type": "practical",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 21,
    "question": "How many RTTs are there in the interval from a client's first contact to email server by initiating a TCP session till the client can begin sending the email message itself?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswerIndex": 1,
    "answer": "2",
    "explanation": {
      "ar": "بروتوكول `SMTP` (على `TCP Port 25`) هو `Push protocol` لإرسال الإيميلات في صورة `7-bit ASCII`، وبينهي جسم الرسالة بـ `CRLF.CRLF`. (ملاحظة الإجابة: `2 (1 for TCP connection, 1 for SMTP handshake)`)",
      "en": "SMTP (TCP port 25) is a push protocol that transfers 7-bit ASCII email messages using CRLF.CRLF to mark the end of the body. (2 (1 for TCP connection, 1 for SMTP handshake))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-103",
    "number": 103,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 21,
    "question": "The HTTP request message is sent in __ part of three-way handshake.",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "correctAnswerIndex": 2,
    "answer": "Third",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Third` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (Third (After TCP SYN, SYN-ACK, then ACK + HTTP request))",
      "en": "The correct answer is 'Third'. (Third (After TCP SYN, SYN-ACK, then ACK + HTTP request))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-104",
    "number": 104,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 21,
    "question": "...... protocol supports multiple objects to be sent in multipart Message",
    "options": [
      "POP3",
      "DNS",
      "SMTP",
      "IMAP"
    ],
    "correctAnswerIndex": 2,
    "answer": "SMTP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة. (ملاحظة الإجابة: `SMTP`)",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt. (SMTP)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-105",
    "number": 105,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 22,
    "question": "UDP can be used for all of the following, EXCEPT......",
    "options": [
      "DNS",
      "HTTP/3",
      "SNMP",
      "IMAP"
    ],
    "correctAnswerIndex": 3,
    "answer": "IMAP",
    "explanation": {
      "ar": "بروتوكولات سحب الإيميل (`Mail access protocols`): `POP3` و`IMAP`؛ والـ `IMAP` بيتميز إنه بيسمح بتنظيم الفولدرات وإدارة الإيميلات مباشرة على السيرفر. (ملاحظة الإجابة: `IMAP (IMAP uses TCP)`)",
      "en": "IMAP and POP3 are pull-based mail access protocols; IMAP allows users to organize folders and manage messages directly on the server. (IMAP (IMAP uses TCP))"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-106",
    "number": 106,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 22,
    "question": "A cookie is a code used by a server to access information the server had earlier stored about an earlier interaction with this web browser.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswerIndex": 0,
    "answer": "True",
    "explanation": {
      "ar": "الـ `Cookies` بتستخدمها المواقع عشان تحفظ حالة المستخدم (`Maintain state`) وتتعرف عليه عبر طلبات `HTTP` المختلفة لأن HTTP بطبيعته `Stateless`. (ملاحظة الإجابة: `True`)",
      "en": "Cookies allow stateless HTTP servers to identify users and maintain state across transactions. (True)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-107",
    "number": 107,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 22,
    "question": "TLD servers responsible for a domain and knows how to contact authoritative name servers.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswerIndex": 0,
    "answer": "True",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `True` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء. (True)",
      "en": "The correct answer is 'True'. (True)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-108",
    "number": 108,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 22,
    "question": "Which of the following are changes between HTTP 1.1 and HTTP/2?",
    "options": [
      "HTTP/2 allows objects in a persistent connection to be sent in a client-specified priority order.",
      "HTTP/2 provides enhanced security by using transport layer security (TLS)",
      "HTTP/2 has many new HTTP methods and status codes.",
      "all of them"
    ],
    "correctAnswerIndex": 0,
    "answer": "HTTP/2 allows objects in a persistent connection to be sent in a client-specified priority order.",
    "explanation": {
      "ar": "في `HTTP/1.1` بتحصل مشكلة `HOL Blocking` لما `Object` صغير يستنى ورا `Object` كبير؛ فجاء `HTTP/2` وحلها بتقسيم الـ Objects لـ Frames وترتيبها حسب أولوية الـ Client (`Client-specified priority`). (ملاحظة الإجابة: `HTTP/2 allows objects in a persistent connection to be sent in a client- specified priority order.`)",
      "en": "HTTP/1.1 suffers from Head-of-Line (HOL) blocking; HTTP/2 mitigates this by framing objects and scheduling them by client-specified priority. (HTTP/2 allows objects in a persistent connection to be sent in a client- specified priority order.)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-109",
    "number": 109,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 22,
    "question": "In ...... demultiplexing is using 4-tuple: source and destination IP addresses, and port numbers.",
    "options": [
      "UDP",
      "TCP",
      "Both of them",
      "None of them"
    ],
    "correctAnswerIndex": 1,
    "answer": "TCP",
    "explanation": {
      "ar": "في برمجة الـ `Sockets`: الدالة `bind()` بتربط الـ Socket برقم Port، و`accept()` في TCP بتفتح Socket جديد لكل Client؛ والـ `TCP` بيعمل `Demultiplexing` بـ `4-tuple` (Source/Dest IP & Port) بينما `UDP` بيستخدم `Dest Port` فقط. (ملاحظة الإجابة: `TCP`)",
      "en": "In socket programming, bind() assigns a local port and accept() creates a new TCP connection socket. TCP demultiplexes using a 4-tuple, whereas UDP uses only destination port. (TCP)"
    },
    "keywords": [
      "CH2",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch2-110",
    "number": 110,
    "source": "ch2",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 22,
    "question": "Web Cache is used for reduced response time for client request and reduced traffic",
    "options": [
      "True",
      "False"
    ],
    "correctAnswerIndex": 0,
    "answer": "True",
    "explanation": {
      "ar": "الـ `Web Cache` (Proxy Server) بيخزن نسخ من الصفحات المطلوبة عشان يقلل الترافيك على خط المؤسسة ويقلل وقت الاستجابة (`Response time`). (ملاحظة الإجابة: `True`)",
      "en": "A Web cache satisfies client requests locally without contacting the origin server, reducing access-link traffic and response time. (True)"
    },
    "keywords": [
      "CH2",
      "application-web-mail"
    ],
    "isDuplicate": false
  }
];

export const ch5Questions: Question[] = [
  {
    "id": "ch5-001",
    "number": 1,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 2,
    "question": "A ........ is a set of rules for communication between computers on a network",
    "options": [
      "topology",
      "protocol",
      "a & b",
      "none of above"
    ],
    "correctAnswerIndex": 1,
    "answer": "protocol",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-002",
    "number": 2,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 2,
    "question": "The essential elements of a protocol are ........",
    "options": [
      "semantics",
      "syntax",
      "timing",
      "all of above"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of above",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-003",
    "number": 3,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 2,
    "question": "The collection of protocols that define the various interfaces between all the layers is called a ............",
    "options": [
      "Syntax",
      "Semantics",
      "Protocol stack",
      "none of above"
    ],
    "correctAnswerIndex": 2,
    "answer": "Protocol stack",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-004",
    "number": 4,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 2,
    "question": "ARP stands for ...............",
    "options": [
      "Address Routing Protocol",
      "Automated Routing Protocol",
      "Address Resolution Protocol",
      "Application Routing Protocol"
    ],
    "correctAnswerIndex": 2,
    "answer": "Address Resolution Protocol",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-005",
    "number": 5,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 2,
    "question": "What does the Address Resolution Protocol (ARP) do?",
    "options": [
      "Maps a logical address to a physical address",
      "Maps a physical address to a logical address",
      "Identifies routers in a network",
      "Encrypts data packets"
    ],
    "correctAnswerIndex": 0,
    "answer": "Maps a logical address to a physical address",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-006",
    "number": 6,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 3,
    "question": "Why is it necessary to use both a physical address and a logical address for communication between different networks?",
    "options": [
      "To increase network speed",
      "To ensure proper assignment and routing of addresses",
      "To avoid data packet loss",
      "To enhance security protocols"
    ],
    "correctAnswerIndex": 1,
    "answer": "To ensure proper assignment and routing of addresses",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `To ensure proper assignment and routing of addresses` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'To ensure proper assignment and routing of addresses'."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-007",
    "number": 7,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 3,
    "question": "What is the primary purpose of a physical address (MAC) in a local network?",
    "options": [
      "To identify devices for local communication",
      "To encrypt data packets",
      "To assign IP addresses to hosts",
      "To monitor data traffic"
    ],
    "correctAnswerIndex": 0,
    "answer": "To identify devices for local communication",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `To identify devices for local communication` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'To identify devices for local communication'."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-008",
    "number": 8,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 3,
    "question": "Which protocol assigns a physical address to a logical address?",
    "options": [
      "ARP",
      "DNS",
      "RARP",
      "ICMP"
    ],
    "correctAnswerIndex": 2,
    "answer": "RARP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-009",
    "number": 9,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 3,
    "question": "What are the two protocols mentioned for mapping addresses?",
    "options": [
      "ARP and ICMP",
      "RARP and DNS",
      "ARP and RARP",
      "DHCP and ARP"
    ],
    "correctAnswerIndex": 2,
    "answer": "ARP and RARP",
    "explanation": {
      "ar": "بروتوكول `ARP` (`Address Resolution Protocol`) بيحول الـ `Logical IP Address` لـ `Physical MAC Address` في طبقة الـ Data Link (والعكس بيعمله `RARP`)، وأخطر تهديد ليه هو `ARP Poisoning`.",
      "en": "ARP maps a logical IP address to a physical MAC address (while RARP maps MAC to IP) at the Data Link layer; ARP poisoning is its primary security risk."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-010",
    "number": 10,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 3,
    "question": "What is the function of data packets in a network?",
    "options": [
      "Encrypting network traffic",
      "Carrying data between networks",
      "Assigning logical addresses to devices",
      "Monitoring physical addresses"
    ],
    "correctAnswerIndex": 1,
    "answer": "Carrying data between networks",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Carrying data between networks` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Carrying data between networks'."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-011",
    "number": 11,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 4,
    "question": "Which protocol assigns a logical address to a logical physical address?",
    "options": [
      "ARP",
      "DNS",
      "RARP",
      "ICMP"
    ],
    "correctAnswerIndex": 0,
    "answer": "ARP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-012",
    "number": 12,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 4,
    "question": "Which of the following is NOT a characteristic governed by network protocols?",
    "options": [
      "Physical topologies",
      "Cable types",
      "Device warranties",
      "Access methods"
    ],
    "correctAnswerIndex": 2,
    "answer": "Device warranties",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Device warranties` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Device warranties'."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-013",
    "number": 13,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 4,
    "question": "What are the essential elements of a protocol",
    "options": [
      "Syntax, semantics, timing",
      "Addressing, syntax, semantics",
      "Timing, encryption, addressing",
      "Syntax, semantics, encryption"
    ],
    "correctAnswerIndex": 0,
    "answer": "Syntax, semantics, timing",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-014",
    "number": 14,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 4,
    "question": "Syntax in a protocol refers to:",
    "options": [
      "Data structure and order of data",
      "Actions based on data",
      "Timing of data delivery",
      "Error correction"
    ],
    "correctAnswerIndex": 0,
    "answer": "Data structure and order of data",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-015",
    "number": 15,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 4,
    "question": "What is the main function of Address Resolution Protocol (ARP)",
    "options": [
      "Assign logical addresses to devices",
      "Map IP addresses to MAC addresses",
      "Encrypt network communication",
      "Manage TCP/IP headers"
    ],
    "correctAnswerIndex": 1,
    "answer": "Map IP addresses to MAC addresses",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-016",
    "number": 16,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 5,
    "question": "Reverse Address Resolution Protocol (RARP) is used to",
    "options": [
      "Map IP addresses to physical addresses",
      "Assign MAC addresses dynamically",
      "Determine IP addresses using physical addresses",
      "Encrypt logical addresses"
    ],
    "correctAnswerIndex": 2,
    "answer": "Determine IP addresses using physical addresses",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-017",
    "number": 17,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 5,
    "question": "Which protocol uses port numbers to support process-to-process communication",
    "options": [
      "TCP",
      "UDP",
      "IPX",
      "FTP"
    ],
    "correctAnswerIndex": 1,
    "answer": "UDP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-018",
    "number": 18,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 5,
    "question": "Which protocol is used for transferring emails between servers",
    "options": [
      "POP3",
      "IMAP",
      "SMTP",
      "FTP"
    ],
    "correctAnswerIndex": 2,
    "answer": "SMTP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-019",
    "number": 19,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 5,
    "question": "IMAP is primarily used to:",
    "options": [
      "Send emails",
      "Download emails locally",
      "Access emails on remote servers",
      "Encrypt email data"
    ],
    "correctAnswerIndex": 2,
    "answer": "Access emails on remote servers",
    "explanation": {
      "ar": "بروتوكولات سحب الإيميل (`Mail access protocols`): `POP3` و`IMAP`؛ والـ `IMAP` بيتميز إنه بيسمح بتنظيم الفولدرات وإدارة الإيميلات مباشرة على السيرفر.",
      "en": "IMAP and POP3 are pull-based mail access protocols; IMAP allows users to organize folders and manage messages directly on the server."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-020",
    "number": 20,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 5,
    "question": "HTTP operates at which layer of the OSI model",
    "options": [
      "Network",
      "Transport",
      "Application",
      "Data Link"
    ],
    "correctAnswerIndex": 2,
    "answer": "Application",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Application` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Application'."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-021",
    "number": 21,
    "source": "ch5",
    "type": "practical",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 5,
    "question": "FTP uses how many channels for communication",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswerIndex": 1,
    "answer": "2",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `2` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is '2'."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-022",
    "number": 22,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 6,
    "question": "In the TCP/IP model, the transport layer is responsible for",
    "options": [
      "Addressing and routing",
      "Fragmentation and reassembly",
      "Reliable data transfer",
      "Physical transmission"
    ],
    "correctAnswerIndex": 2,
    "answer": "Reliable data transfer",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Reliable data transfer` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Reliable data transfer'."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-023",
    "number": 23,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 6,
    "question": "Which layer of the TCP/IP model handles packet addressing and routing",
    "options": [
      "Application",
      "Transport",
      "Internet",
      "Network interface"
    ],
    "correctAnswerIndex": 2,
    "answer": "Internet",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Internet` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Internet'."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-024",
    "number": 24,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 6,
    "question": "TCP/IP is considered",
    "options": [
      "Stateless",
      "Stateful",
      "Unreliable",
      "Error-free"
    ],
    "correctAnswerIndex": 0,
    "answer": "Stateless",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Stateless` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Stateless'."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-025",
    "number": 25,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 6,
    "question": "The most popular LAN architecture for Ethernet uses",
    "options": [
      "CSMA/CD",
      "Token Ring",
      "FDDI",
      "X.25"
    ],
    "correctAnswerIndex": 0,
    "answer": "CSMA/CD",
    "explanation": {
      "ar": "من بروتوكولات ومعايير الشبكات: `IEEE 802.3` للـ Ethernet (`CSMA/CD`)، `IEEE 802.5` للـ Token Ring، `HDLC` بروتوكول `Bit-oriented`، `ATM` بيستخدم خلايا ثابتة الحجم (`155 Mbps`)، `SNMP` لإدارة الشبكة، `PPTP` لأنفاق الـ VPN، و`X.25` لشبكات الـ WAN.",
      "en": "Key standards: IEEE 802.3 (Ethernet/CSMA-CD), IEEE 802.5 (Token Ring), HDLC (bit-oriented), ATM (fixed-size cells), SNMP (network management), PPTP (VPN tunneling), and X.25 (WANs)."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-026",
    "number": 26,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 6,
    "question": "What happens if two data sets are transmitted simultaneously in a CSMA/CD network",
    "options": [
      "Data is retransmitted automatically",
      "Data collides and is destroyed",
      "Data packets are prioritized",
      "Data is routed to an alternate path"
    ],
    "correctAnswerIndex": 1,
    "answer": "Data collides and is destroyed",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-027",
    "number": 27,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 7,
    "question": "Which protocol is commonly used in VPNs for tunneling",
    "options": [
      "PPTP",
      "FTP",
      "SMTP",
      "HTTP"
    ],
    "correctAnswerIndex": 0,
    "answer": "PPTP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-028",
    "number": 28,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 7,
    "question": "ATM handles data at a speed of",
    "options": [
      "155 Mbps",
      "100 Mbps",
      "200 Mbps",
      "1 Gbps"
    ],
    "correctAnswerIndex": 0,
    "answer": "155 Mbps",
    "explanation": {
      "ar": "من بروتوكولات ومعايير الشبكات: `IEEE 802.3` للـ Ethernet (`CSMA/CD`)، `IEEE 802.5` للـ Token Ring، `HDLC` بروتوكول `Bit-oriented`، `ATM` بيستخدم خلايا ثابتة الحجم (`155 Mbps`)، `SNMP` لإدارة الشبكة، `PPTP` لأنفاق الـ VPN، و`X.25` لشبكات الـ WAN.",
      "en": "Key standards: IEEE 802.3 (Ethernet/CSMA-CD), IEEE 802.5 (Token Ring), HDLC (bit-oriented), ATM (fixed-size cells), SNMP (network management), PPTP (VPN tunneling), and X.25 (WANs)."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-029",
    "number": 29,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 7,
    "question": "SNMP is used for",
    "options": [
      "Secure data transfer",
      "Network management",
      "Dynamic IP address assignment",
      "File transfer"
    ],
    "correctAnswerIndex": 1,
    "answer": "Network management",
    "explanation": {
      "ar": "من بروتوكولات ومعايير الشبكات: `IEEE 802.3` للـ Ethernet (`CSMA/CD`)، `IEEE 802.5` للـ Token Ring، `HDLC` بروتوكول `Bit-oriented`، `ATM` بيستخدم خلايا ثابتة الحجم (`155 Mbps`)، `SNMP` لإدارة الشبكة، `PPTP` لأنفاق الـ VPN، و`X.25` لشبكات الـ WAN.",
      "en": "Key standards: IEEE 802.3 (Ethernet/CSMA-CD), IEEE 802.5 (Token Ring), HDLC (bit-oriented), ATM (fixed-size cells), SNMP (network management), PPTP (VPN tunneling), and X.25 (WANs)."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-030",
    "number": 30,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 7,
    "question": "Which of the following is TRUE about the TCP/IP model compared to the OSI model",
    "options": [
      "TCP/IP has more layers than OSI",
      "TCP/IP includes error recovery in the physical layer",
      "TCP/IP has only four layers compared to OSI's seven layers",
      "OSI uses less popular protocols than TCP/IP"
    ],
    "correctAnswerIndex": 2,
    "answer": "TCP/IP has only four layers compared to OSI's seven layers",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `TCP/IP has only four layers compared to OSI's seven layers` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'TCP/IP has only four layers compared to OSI's seven layers'."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-031",
    "number": 31,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 7,
    "question": "The OSI model defines Token Ring technology in which standard",
    "options": [
      "IEEE 802.3",
      "IEEE 802.5",
      "IEEE 802.1",
      "IEEE 803.3"
    ],
    "correctAnswerIndex": 1,
    "answer": "IEEE 802.5",
    "explanation": {
      "ar": "من بروتوكولات ومعايير الشبكات: `IEEE 802.3` للـ Ethernet (`CSMA/CD`)، `IEEE 802.5` للـ Token Ring، `HDLC` بروتوكول `Bit-oriented`، `ATM` بيستخدم خلايا ثابتة الحجم (`155 Mbps`)، `SNMP` لإدارة الشبكة، `PPTP` لأنفاق الـ VPN، و`X.25` لشبكات الـ WAN.",
      "en": "Key standards: IEEE 802.3 (Ethernet/CSMA-CD), IEEE 802.5 (Token Ring), HDLC (bit-oriented), ATM (fixed-size cells), SNMP (network management), PPTP (VPN tunneling), and X.25 (WANs)."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-032",
    "number": 32,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 7,
    "question": "ARP assigns the physical address to logical address",
    "options": [
      "true",
      "false"
    ],
    "correctAnswerIndex": 1,
    "answer": "false",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-033",
    "number": 33,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 8,
    "question": "Which layer of the OSI model does ARP operate on",
    "options": [
      "Network layer",
      "Transport layer",
      "Data Link layer",
      "Application layer"
    ],
    "correctAnswerIndex": 2,
    "answer": "Data Link layer",
    "explanation": {
      "ar": "بروتوكول `ARP` (`Address Resolution Protocol`) بيحول الـ `Logical IP Address` لـ `Physical MAC Address` في طبقة الـ Data Link (والعكس بيعمله `RARP`)، وأخطر تهديد ليه هو `ARP Poisoning`.",
      "en": "ARP maps a logical IP address to a physical MAC address (while RARP maps MAC to IP) at the Data Link layer; ARP poisoning is its primary security risk."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-034",
    "number": 34,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 8,
    "question": "What is stored in an ARP cache",
    "options": [
      "Logical-to-physical address mappings",
      "IP-to-hostname mappings",
      "Port-to-IP mappings",
      "Physical-to-logical topology"
    ],
    "correctAnswerIndex": 0,
    "answer": "Logical-to-physical address mappings",
    "explanation": {
      "ar": "بروتوكول `ARP` (`Address Resolution Protocol`) بيحول الـ `Logical IP Address` لـ `Physical MAC Address` في طبقة الـ Data Link (والعكس بيعمله `RARP`)، وأخطر تهديد ليه هو `ARP Poisoning`.",
      "en": "ARP maps a logical IP address to a physical MAC address (while RARP maps MAC to IP) at the Data Link layer; ARP poisoning is its primary security risk."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-035",
    "number": 35,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 8,
    "question": "What is the primary risk associated with ARP",
    "options": [
      "Packet loss",
      "High latency",
      "ARP poisoning",
      "Excessive broadcasts"
    ],
    "correctAnswerIndex": 2,
    "answer": "ARP poisoning",
    "explanation": {
      "ar": "بروتوكول `ARP` (`Address Resolution Protocol`) بيحول الـ `Logical IP Address` لـ `Physical MAC Address` في طبقة الـ Data Link (والعكس بيعمله `RARP`)، وأخطر تهديد ليه هو `ARP Poisoning`.",
      "en": "ARP maps a logical IP address to a physical MAC address (while RARP maps MAC to IP) at the Data Link layer; ARP poisoning is its primary security risk."
    },
    "keywords": [
      "CH5",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-036",
    "number": 36,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 8,
    "question": "ICMP is primarily used for",
    "options": [
      "Sending data packets",
      "Handling control and error messages",
      "Establishing connections",
      "Managing encryption"
    ],
    "correctAnswerIndex": 1,
    "answer": "Handling control and error messages",
    "explanation": {
      "ar": "بروتوكول `ICMP` مسؤول عن رسائل الأخطاء والتحكم في طبقة الشبكة (زي `ping` و`traceroute`).",
      "en": "ICMP handles network-layer control and error diagnostic messages."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-037",
    "number": 37,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 8,
    "question": "What is the typical size of a UDP header",
    "options": [
      "4 bytes",
      "8 bytes",
      "16 bytes",
      "20 bytes"
    ],
    "correctAnswerIndex": 1,
    "answer": "8 bytes",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `8 bytes` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is '8 bytes'."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-038",
    "number": 38,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 8,
    "question": "Which of the following uses connectionless communication",
    "options": [
      "TCP",
      "FTP",
      "UDP",
      "HTTP"
    ],
    "correctAnswerIndex": 2,
    "answer": "UDP",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `UDP` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'UDP'."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-039",
    "number": 39,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 9,
    "question": "What type of protocol is HDLC",
    "options": [
      "Connectionless",
      "Bit-oriented",
      "Byte-oriented",
      "Stateless"
    ],
    "correctAnswerIndex": 1,
    "answer": "Bit-oriented",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-040",
    "number": 40,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 9,
    "question": "In HTTP, which status code indicates success",
    "options": [
      "100",
      "200",
      "404",
      "500"
    ],
    "correctAnswerIndex": 1,
    "answer": "200",
    "explanation": {
      "ar": "أكواد حالة HTTP المهمة: `200 OK` (نجاح)، `301 Moved Permanently` (نقل دائم لعنوان جديد)، و`404 Not Found` (الصفحة غير موجودة).",
      "en": "Key HTTP status codes: 200 (OK), 301 (Moved Permanently), and 404 (Not Found)."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-041",
    "number": 41,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 9,
    "question": "Which protocol is simpler but less capable than FTP",
    "options": [
      "TFTP",
      "SMTP",
      "IMAP",
      "POP3"
    ],
    "correctAnswerIndex": 0,
    "answer": "TFTP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-042",
    "number": 42,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 9,
    "question": "DHCP works in four phases. What does the \"A\" in DORA stand for",
    "options": [
      "Allocate",
      "Assign",
      "Acknowledge",
      "Authorize"
    ],
    "correctAnswerIndex": 2,
    "answer": "Acknowledge",
    "explanation": {
      "ar": "بروتوكول `DHCP` بيوزع عناوين الـ `IP` والـ Subnet mask والـ DNS تلقائياً في 4 مراحل اسمها `DORA`: `Discover`, `Offer`, `Request`, `Acknowledge`.",
      "en": "DHCP automatically assigns IP configuration in four DORA phases: Discover, Offer, Request, and Acknowledge."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-043",
    "number": 43,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 9,
    "question": "What is the primary purpose of SNMP",
    "options": [
      "File sharing",
      "IP address allocation",
      "Network management",
      "VPN tunneling"
    ],
    "correctAnswerIndex": 2,
    "answer": "Network management",
    "explanation": {
      "ar": "من بروتوكولات ومعايير الشبكات: `IEEE 802.3` للـ Ethernet (`CSMA/CD`)، `IEEE 802.5` للـ Token Ring، `HDLC` بروتوكول `Bit-oriented`، `ATM` بيستخدم خلايا ثابتة الحجم (`155 Mbps`)، `SNMP` لإدارة الشبكة، `PPTP` لأنفاق الـ VPN، و`X.25` لشبكات الـ WAN.",
      "en": "Key standards: IEEE 802.3 (Ethernet/CSMA-CD), IEEE 802.5 (Token Ring), HDLC (bit-oriented), ATM (fixed-size cells), SNMP (network management), PPTP (VPN tunneling), and X.25 (WANs)."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-044",
    "number": 44,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 9,
    "question": "ATM uses packets of",
    "options": [
      "Fixed size",
      "Variable size",
      "Segmented data",
      "Single datagrams"
    ],
    "correctAnswerIndex": 0,
    "answer": "Fixed size",
    "explanation": {
      "ar": "من بروتوكولات ومعايير الشبكات: `IEEE 802.3` للـ Ethernet (`CSMA/CD`)، `IEEE 802.5` للـ Token Ring، `HDLC` بروتوكول `Bit-oriented`، `ATM` بيستخدم خلايا ثابتة الحجم (`155 Mbps`)، `SNMP` لإدارة الشبكة، `PPTP` لأنفاق الـ VPN، و`X.25` لشبكات الـ WAN.",
      "en": "Key standards: IEEE 802.3 (Ethernet/CSMA-CD), IEEE 802.5 (Token Ring), HDLC (bit-oriented), ATM (fixed-size cells), SNMP (network management), PPTP (VPN tunneling), and X.25 (WANs)."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-045",
    "number": 45,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 9,
    "question": "Which protocol is primarily used for email retrieval and allows users to manage messages directly on the server",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "HTTP"
    ],
    "correctAnswerIndex": 2,
    "answer": "IMAP",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-046",
    "number": 46,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 10,
    "question": "In the TCP/IP model, which layer ensures error recovery",
    "options": [
      "Internet layer",
      "Transport layer",
      "Network interface layer",
      "Application layer"
    ],
    "correctAnswerIndex": 1,
    "answer": "Transport layer",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Transport layer` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Transport layer'."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-047",
    "number": 47,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 10,
    "question": "Which of the following is NOT a function of the TCP protocol",
    "options": [
      "Breaking data into packets",
      "Ensuring delivery of packets",
      "Assigning IP addresses",
      "Reassembling packets at the destination"
    ],
    "correctAnswerIndex": 2,
    "answer": "Assigning IP addresses",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-048",
    "number": 48,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 10,
    "question": "Which protocol in the TCP/IP suite is used for resolving domain names to IP addresses",
    "options": [
      "DHCP",
      "DNS",
      "ICMP",
      "ARP"
    ],
    "correctAnswerIndex": 1,
    "answer": "DNS",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-049",
    "number": 49,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "page": 10,
    "question": "TCP/IP follows which communication model",
    "options": [
      "Peer-to-peer",
      "Client-server",
      "Stateless",
      "Stateful"
    ],
    "correctAnswerIndex": 1,
    "answer": "Client-server",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Client-server` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Client-server'."
    },
    "keywords": [
      "CH5",
      "application-web-mail"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-050",
    "number": 50,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 10,
    "question": "Which Ethernet frame type is the most commonly used",
    "options": [
      "IEEE 802.3",
      "IEEE 802.5",
      "Token Ring",
      "ARCNET"
    ],
    "correctAnswerIndex": 0,
    "answer": "IEEE 802.3",
    "explanation": {
      "ar": "من بروتوكولات ومعايير الشبكات: `IEEE 802.3` للـ Ethernet (`CSMA/CD`)، `IEEE 802.5` للـ Token Ring، `HDLC` بروتوكول `Bit-oriented`، `ATM` بيستخدم خلايا ثابتة الحجم (`155 Mbps`)، `SNMP` لإدارة الشبكة، `PPTP` لأنفاق الـ VPN، و`X.25` لشبكات الـ WAN.",
      "en": "Key standards: IEEE 802.3 (Ethernet/CSMA-CD), IEEE 802.5 (Token Ring), HDLC (bit-oriented), ATM (fixed-size cells), SNMP (network management), PPTP (VPN tunneling), and X.25 (WANs)."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-051",
    "number": 51,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 10,
    "question": "What is the primary purpose of CSMA/CD in Ethernet networks",
    "options": [
      "Avoid collisions",
      "Establish connections",
      "Detect unauthorized access",
      "Manage routing tables"
    ],
    "correctAnswerIndex": 0,
    "answer": "Avoid collisions",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-052",
    "number": 52,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 11,
    "question": "What happens after a collision is detected in a CSMA/CD network",
    "options": [
      "Data is dropped, and transmission stops",
      "Hosts wait a short time and retransmit data",
      "The network shuts down temporarily",
      "Data is routed through alternate paths"
    ],
    "correctAnswerIndex": 1,
    "answer": "Hosts wait a short time and retransmit data",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-053",
    "number": 53,
    "source": "ch5",
    "type": "practical",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 11,
    "question": "How many layers does the OSI model have compared to the TCP/IP model",
    "options": [
      "3 more layers",
      "1 fewer layer",
      "4 fewer layers",
      "Same number of layers"
    ],
    "correctAnswerIndex": 0,
    "answer": "3 more layers",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `3 more layers` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is '3 more layers'."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-054",
    "number": 54,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 11,
    "question": "Which OSI layer corresponds to the application layer in the TCP/IP model",
    "options": [
      "Network layer",
      "Presentation and session layers",
      "Transport layer",
      "Data link layer"
    ],
    "correctAnswerIndex": 1,
    "answer": "Presentation and session layers",
    "explanation": {
      "ar": "طبقة الـ `Presentation layer` هي المسؤولة عن تفسير شكل البيانات، التشفير (`Encryption`)، والضغط (`Compression`).",
      "en": "The Presentation layer handles data formatting, encryption, compression, and machine-specific conventions."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-055",
    "number": 55,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "page": 11,
    "question": "Which of the following access methods is used in Ethernet according to the TCP/IP model",
    "options": [
      "Token passing",
      "CSMA/CD",
      "FDDI",
      "X.25"
    ],
    "correctAnswerIndex": 1,
    "answer": "CSMA/CD",
    "explanation": {
      "ar": "من بروتوكولات ومعايير الشبكات: `IEEE 802.3` للـ Ethernet (`CSMA/CD`)، `IEEE 802.5` للـ Token Ring، `HDLC` بروتوكول `Bit-oriented`، `ATM` بيستخدم خلايا ثابتة الحجم (`155 Mbps`)، `SNMP` لإدارة الشبكة، `PPTP` لأنفاق الـ VPN، و`X.25` لشبكات الـ WAN.",
      "en": "Key standards: IEEE 802.3 (Ethernet/CSMA-CD), IEEE 802.5 (Token Ring), HDLC (bit-oriented), ATM (fixed-size cells), SNMP (network management), PPTP (VPN tunneling), and X.25 (WANs)."
    },
    "keywords": [
      "CH5",
      "transport-tcp-udp"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-056",
    "number": 56,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 11,
    "question": "Which of the following is NOT a function of DHCP",
    "options": [
      "Assigning IP addresses",
      "Managing DNS settings",
      "Ensuring packet delivery",
      "Configuring subnet masks"
    ],
    "correctAnswerIndex": 2,
    "answer": "Ensuring packet delivery",
    "explanation": {
      "ar": "بروتوكول `DHCP` بيوزع عناوين الـ `IP` والـ Subnet mask والـ DNS تلقائياً في 4 مراحل اسمها `DORA`: `Discover`, `Offer`, `Request`, `Acknowledge`.",
      "en": "DHCP automatically assigns IP configuration in four DORA phases: Discover, Offer, Request, and Acknowledge."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-057",
    "number": 57,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 12,
    "question": "What is the primary purpose of PPTP",
    "options": [
      "Assigning IP addresses",
      "Managing network resources",
      "Creating VPN tunnels",
      "Transferring files"
    ],
    "correctAnswerIndex": 2,
    "answer": "Creating VPN tunnels",
    "explanation": {
      "ar": "من بروتوكولات ومعايير الشبكات: `IEEE 802.3` للـ Ethernet (`CSMA/CD`)، `IEEE 802.5` للـ Token Ring، `HDLC` بروتوكول `Bit-oriented`، `ATM` بيستخدم خلايا ثابتة الحجم (`155 Mbps`)، `SNMP` لإدارة الشبكة، `PPTP` لأنفاق الـ VPN، و`X.25` لشبكات الـ WAN.",
      "en": "Key standards: IEEE 802.3 (Ethernet/CSMA-CD), IEEE 802.5 (Token Ring), HDLC (bit-oriented), ATM (fixed-size cells), SNMP (network management), PPTP (VPN tunneling), and X.25 (WANs)."
    },
    "keywords": [
      "CH5",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-058",
    "number": 58,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 12,
    "question": "Which protocol is often used by older network- connected printers",
    "options": [
      "SNMP",
      "DLC",
      "HTTP",
      "X.25"
    ],
    "correctAnswerIndex": 1,
    "answer": "DLC",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-059",
    "number": 59,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "page": 12,
    "question": "Which protocol splits data into fixed-size packets to ensure consistent transmission",
    "options": [
      "TCP",
      "ATM",
      "UDP",
      "TFTP"
    ],
    "correctAnswerIndex": 1,
    "answer": "ATM",
    "explanation": {
      "ar": "الـ `Protocol` هو مجموعة القواعد القياسية اللي بتحدد صيغة وترتيب الرسائل المتبادلة بين أجهزة الشبكة، والإجراءات اللي بتحصل عند إرسال أو استقبال كل رسالة.",
      "en": "A protocol defines the format, order of messages sent and received among network entities, and actions taken on message transmission and receipt."
    },
    "keywords": [
      "CH5",
      "datalink-ethernet"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-060",
    "number": 60,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "page": 12,
    "question": "What does the \"S\" in HTTPS stand for",
    "options": [
      "Security",
      "Simple",
      "Stateless",
      "Service"
    ],
    "correctAnswerIndex": 0,
    "answer": "Security",
    "explanation": {
      "ar": "الإجابة الصحيحة هي `Security` بناءً على مفاهيم الشبكات الأساسية في هذا الجزء.",
      "en": "The correct answer is 'Security'."
    },
    "keywords": [
      "CH5",
      "security-vpn-wlan"
    ],
    "isDuplicate": false
  },
  {
    "id": "ch5-061",
    "number": 61,
    "source": "ch5",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "page": 12,
    "question": "X.25 protocols are typically used for",
    "options": [
      "Local Area Networks",
      "High-speed fiber networks",
      "Wide Area Networks (WANs)",
      "Virtual Private Networks"
    ],
    "correctAnswerIndex": 2,
    "answer": "Wide Area Networks (WANs)",
    "explanation": {
      "ar": "نظام `DNS` بيحول أسماء النطاقات لـ `IP` عبر `UDP` (لأن معاملاته سريعة)، وسجلاته تشمل `A` (IP)، `NS` (Name Server)، `CNAME` (الاسم الحقيقي/Canonical)، و`MX` (Mail Server)، مع مدة تخزين `TTL`.",
      "en": "DNS resolves hostnames to IP addresses over UDP using hierarchical servers (Root, TLD, Authoritative) and records (A, NS, CNAME, MX) cached for TTL seconds."
    },
    "keywords": [
      "CH5",
      "network-ip"
    ],
    "isDuplicate": false
  }
];

export const bankPart1Mcqs: Question[] = [
  {
    "id": "bank-p1-01",
    "number": 1,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 2,
    "question": "A network consists of interconnected:",
    "options": [
      "Computers",
      "Nodes",
      "Workstations",
      "Servers"
    ],
    "correctAnswerIndex": 1,
    "answer": "Nodes",
    "explanation": {
      "ar": "أي شبكة بتتكون بشكل عام من أجهزة متصلة ببعضها اسمها Nodes (والـ Node مصطلح أشمل بيشمل الـ computers, servers, printers, routers, switches).",
      "en": "A network consists of interconnected nodes (a general term encompassing computers, workstations, servers, printers, and networking devices)."
    },
    "keywords": [
      "Nodes",
      "Network Definition"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-02",
    "number": 2,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "intro-models",
    "page": 2,
    "question": "In which model do users' computers process information independently from each other?",
    "options": [
      "Centralized",
      "Distributed",
      "Collaborative",
      "None of the above"
    ],
    "correctAnswerIndex": 1,
    "answer": "Distributed",
    "explanation": {
      "ar": "في الـ Distributed computing model، كل جهاز كمبيوتر خاص بمستخدم بيعالج البيانات بشكل مستقل (independently) بقدرات المعالجة الخاصة بيه، على عكس الـ Centralized اللي بيعتمد على جهاز مركزي واحد (Mainframe)، والـ Collaborative اللي الأجهزة بتتعاون فيه لمعالجة نفس المهمة.",
      "en": "In the distributed computing model, users' computers process information independently using their own local CPUs."
    },
    "keywords": [
      "Distributed Model",
      "Centralized",
      "Collaborative",
      "Computing Models"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-03",
    "number": 3,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "intro-models",
    "page": 2,
    "question": "Which network computing model does not take advantage of the processing capability of a user's desktop computer?",
    "options": [
      "Centralized",
      "Distributed",
      "Collaborative",
      "All of the above"
    ],
    "correctAnswerIndex": 0,
    "answer": "Centralized",
    "explanation": {
      "ar": "الـ Centralized model بيعتمد بالكامل على كمبيوتر مركزي (زي الـ Mainframe) وبيستخدم شاشات طرفية (dumb terminals) عند المستخدمين، وبالتالي مش بيستفيد من قدرات المعالجة بتاعة الـ desktop computer.",
      "en": "The centralized computing model performs all processing on a central mainframe/host and does not utilize the local processing capability of a user's desktop computer."
    },
    "keywords": [
      "Centralized Model",
      "Dumb Terminals",
      "Desktop Processing"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-04",
    "number": 4,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 3,
    "question": "For networking within a building, we use:",
    "options": [
      "LAN",
      "WAN",
      "MAN",
      "VAN"
    ],
    "correctAnswerIndex": 0,
    "answer": "LAN",
    "explanation": {
      "ar": "لما نربط أجهزة جوه مبنى واحد أو مكتب أو حرم جامعي صغير بنستخدم LAN (Local Area Network).",
      "en": "A Local Area Network (LAN) is used for networking within a single building, office, or small campus."
    },
    "keywords": [
      "LAN",
      "Local Area Network",
      "Building Network"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-05",
    "number": 5,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 3,
    "question": "A basic computer network is:",
    "options": [
      "Minimum of five computers linked together.",
      "Computer and cables that link the network together.",
      "Two or more computers that are linked together.",
      "The use of satellites linking computers together."
    ],
    "correctAnswerIndex": 2,
    "answer": "Two or more computers that are linked together.",
    "explanation": {
      "ar": "أبسط تعريف للشبكة (Basic computer network) هو اتصال جهازين كمبيوتر أو أكتر ببعض (Two or more computers linked together) لمشاركة البيانات والموارد.",
      "en": "A basic computer network is defined as two or more computers linked together to share data and resources."
    },
    "keywords": [
      "Basic Computer Network",
      "Definition"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-06",
    "number": 6,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "intro-models",
    "page": 3,
    "question": "The three basic elements of each computer system are all of the following EXCEPT:",
    "options": [
      "Software.",
      "Hardware.",
      "People or users.",
      "Cables."
    ],
    "correctAnswerIndex": 3,
    "answer": "Cables.",
    "explanation": {
      "ar": "العناصر التلاتة الأساسية لأي Computer system هي: الـ Hardware، والـ Software، والـ People/Users. أما الـ Cables فهي وسيلة توصيل في الشبكات ومش ركن أساسي منفصل لنظام الكمبيوتر نفسه.",
      "en": "The three fundamental elements of a computer system are hardware, software, and people (users); cables are networking media rather than one of the three basic system elements."
    },
    "keywords": [
      "Computer System Elements",
      "Hardware",
      "Software",
      "Users"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-07",
    "number": 7,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 4,
    "question": "Which statement is FALSE for wireless networks?",
    "options": [
      "Wireless networks are convenient.",
      "Wireless networks are slower than wired LANs.",
      "Wireless networks use radio transmitters.",
      "Wireless networks are faster than wired networks."
    ],
    "correctAnswerIndex": 3,
    "answer": "Wireless networks are faster than wired networks.",
    "explanation": {
      "ar": "الجملة الخاطئة هي إن الشبكات اللاسلكية أسرع من الشبكات السلكية؛ في الحقيقة الشبكات السلكية (Wired LANs وخصوصاً Fiber/Gigabit Ethernet) أسرع وأكتر استقراراً من الـ Wireless networks.",
      "en": "It is false that wireless networks are faster than wired networks; wired LANs generally offer higher speeds, lower latency, and less interference than wireless LANs."
    },
    "keywords": [
      "Wireless Networks",
      "Wired vs Wireless",
      "LAN Speed"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-08",
    "number": 8,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 4,
    "question": "LAN stands for:",
    "options": [
      "Local area nodes.",
      "The logical arrangement of networks.",
      "Local area network.",
      "Linked area network."
    ],
    "correctAnswerIndex": 2,
    "answer": "Local area network.",
    "explanation": {
      "ar": "اختصار LAN معناه Local Area Network (الشبكة المحلية).",
      "en": "LAN stands for Local Area Network."
    },
    "keywords": [
      "LAN",
      "Local Area Network"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-09",
    "number": 9,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 4,
    "question": "The main difference between a LAN and a WAN is:",
    "options": [
      "Number of software programs available.",
      "Distance.",
      "The variety of hardware devices.",
      "The number of hardware devices."
    ],
    "correctAnswerIndex": 1,
    "answer": "Distance.",
    "explanation": {
      "ar": "الفرق الرئيسي بين الـ LAN والـ WAN هو المسافة الجغرافية (Distance) اللي بتغطيها الشبكة: الـ LAN بتغطي مبنى أو مساحة صغيرة، بينما الـ WAN بتغطي دول أو قارات.",
      "en": "The primary distinction between a LAN and a WAN is the geographical distance (area) spanned by the network."
    },
    "keywords": [
      "LAN vs WAN",
      "Distance"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-10",
    "number": 10,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 5,
    "question": "Each component attached to a network is a:",
    "options": [
      "Node.",
      "Connection point.",
      "Switch.",
      "Hub."
    ],
    "correctAnswerIndex": 0,
    "answer": "Node.",
    "explanation": {
      "ar": "أي عنصر أو جهاز متوصل بالشبكة (كمبيوتر، طابعة، راوتر، إلخ) بيُسمى Node.",
      "en": "Every device or component attached to a network is referred to as a node."
    },
    "keywords": [
      "Node",
      "Network Component"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-11",
    "number": 11,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 5,
    "question": "Every node on the wired network is connected by:",
    "options": [
      "Cables.",
      "Satellites.",
      "Microwaves.",
      "Wireless transmission."
    ],
    "correctAnswerIndex": 0,
    "answer": "Cables.",
    "explanation": {
      "ar": "في الشبكات الأساسية التقليدية، كل الـ nodes بتتوصل ببعض عن طريق الكابلات (Cables).",
      "en": "In a standard wired network, nodes are physically connected by cables."
    },
    "keywords": [
      "Cables",
      "Network Nodes"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-12",
    "number": 12,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 5,
    "question": "MAN stands for:",
    "options": [
      "Metropolitan area network.",
      "Marked area network.",
      "Metropolitan arranged network.",
      "Manufactured arrangement of networks."
    ],
    "correctAnswerIndex": 0,
    "answer": "Metropolitan area network.",
    "explanation": {
      "ar": "اختصار MAN هو Metropolitan Area Network (الشبكة الإقليمية أو شبكة المدن).",
      "en": "MAN stands for Metropolitan Area Network."
    },
    "keywords": [
      "MAN",
      "Metropolitan Area Network"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-13",
    "number": 13,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "intro-models",
    "page": 6,
    "question": "The main path on a WAN is:",
    "options": [
      "Nodes.",
      "Hubs.",
      "The backbone.",
      "Routers."
    ],
    "correctAnswerIndex": 2,
    "answer": "The backbone.",
    "explanation": {
      "ar": "المسار الرئيسي عالي السرعة اللي بيربط الشبكات على مستوى الـ WAN بيُسمى الـ Backbone (العمود الفقري للشبكة).",
      "en": "The high-capacity main transmission path on a WAN is called the backbone."
    },
    "keywords": [
      "Backbone",
      "WAN"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-14",
    "number": 14,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 6,
    "question": "Crossing from LAN to LAN or a WAN is done by:",
    "options": [
      "Bridges and gateways.",
      "Routers.",
      "Backbones.",
      "MANs."
    ],
    "correctAnswerIndex": 0,
    "answer": "Bridges and gateways.",
    "explanation": {
      "ar": "في منهج المقدمة ده: الانتقال بين LAN وLAN تانية مماثلة بيتم بالـ Bridge، والانتقال بين LAN وشبكة مختلفة (زي WAN) بيتم بالـ Gateway، فالإجابة الشاملة للاتنين هي Bridges and gateways.",
      "en": "Crossing between similar LANs or from a LAN to a dissimilar WAN is accomplished using bridges and gateways."
    },
    "keywords": [
      "Bridges",
      "Gateways",
      "LAN to WAN"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-15",
    "number": 15,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 6,
    "question": "The hardware component or software that sends messages over networks (directing traffic between networks) is known as a:",
    "options": [
      "Bridge.",
      "Router.",
      "Backbone.",
      "Gateway."
    ],
    "correctAnswerIndex": 1,
    "answer": "Router.",
    "explanation": {
      "ar": "الـ Router هو الجهاز أو البرنامج المسؤول عن توجيه وإرسال الرسائل (routing packets/messages) عبر الشبكات المختلفة لأفضل مسار.",
      "en": "A router is the hardware or software component that directs and sends messages (packets) between networks."
    },
    "keywords": [
      "Router",
      "Message Routing"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-16",
    "number": 16,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 7,
    "question": "It finds any position on Earth:",
    "options": [
      "GPS.",
      "LAN.",
      "Receiver.",
      "MAN."
    ],
    "correctAnswerIndex": 0,
    "answer": "GPS.",
    "explanation": {
      "ar": "نظام الـ GPS (Global Positioning System) بيعتمد على الأقمار الصناعية لتحديد أي موقع جغرافي على الأرض.",
      "en": "The Global Positioning System (GPS) uses satellite signals to determine any geographical position."
    },
    "keywords": [
      "GPS",
      "Global Positioning System"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-17",
    "number": 17,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 7,
    "question": "A port (in computer hardware) is:",
    "options": [
      "the socket that enables information transfer over a system.",
      "A hardware device that allows connection to the Internet.",
      "a peripheral device attached to a computer.",
      "the space in front of a computer to install additional drives."
    ],
    "correctAnswerIndex": 0,
    "answer": "the socket that enables information transfer over a system.",
    "explanation": {
      "ar": "الـ Port في الهاردوير هو المنفذ أو المقبس (socket) اللي بيسمح بنقل البيانات والمعلومات بين النظام والأجهزة الخارجية.",
      "en": "A hardware port is a socket on the computer system that enables information transfer to and from external devices."
    },
    "keywords": [
      "Port",
      "Hardware Socket"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-18",
    "number": 18,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 7,
    "question": "Older printers connected to computers over:",
    "options": [
      "Serial port.",
      "NIC card.",
      "Parallel port.",
      "Jack."
    ],
    "correctAnswerIndex": 2,
    "answer": "Parallel port.",
    "explanation": {
      "ar": "الطابعات القديمة كانت بتتوصل بالكمبيوتر عن طريق الـ Parallel port (منفذ التوازي LPT1) قبل انتشار الـ USB.",
      "en": "Older printers traditionally connected to computers via a parallel port."
    },
    "keywords": [
      "Parallel Port",
      "Printers"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-19",
    "number": 19,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 8,
    "question": "An external dial-up modem is traditionally connected to a computer over:",
    "options": [
      "Serial port.",
      "NIC card.",
      "Parallel port.",
      "Jack."
    ],
    "correctAnswerIndex": 0,
    "answer": "Serial port.",
    "explanation": {
      "ar": "الـ Modem الخارجي التقليدي كان بيتوصل بالكمبيوتر عن طريق الـ Serial port (RS-232 COM port) اللي بيبعت الـ bits ورا بعضها بالتوالي.",
      "en": "Traditional external modems connect to a computer via a serial port."
    },
    "keywords": [
      "Serial Port",
      "Modem"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-20",
    "number": 20,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 8,
    "question": "Which port is faster than a serial or parallel port?",
    "options": [
      "Serial",
      "USB",
      "Parallel",
      "None"
    ],
    "correctAnswerIndex": 1,
    "answer": "USB",
    "explanation": {
      "ar": "منفذ الـ USB (Universal Serial Bus)(وكمان الـ Ethernet للشبكات) أسرع بكتير من المنافذ القديمة زي الـ Serial والـ Parallel، واستبدلهم في توصيل الـ peripherals.",
      "en": "USB (Universal Serial Bus) is significantly faster than legacy serial and parallel ports."
    },
    "keywords": [
      "USB",
      "Serial Port",
      "Parallel Port"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-21",
    "number": 21,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 8,
    "question": "NIC stands for:",
    "options": [
      "Network internal card.",
      "Newer industrial computer.",
      "Networking Internet connection.",
      "Network interface card."
    ],
    "correctAnswerIndex": 3,
    "answer": "Network interface card.",
    "explanation": {
      "ar": "اختصار NIC هو Network Interface Card (كارت الشبكة).",
      "en": "NIC stands for Network Interface Card."
    },
    "keywords": [
      "NIC",
      "Network Interface Card"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-22",
    "number": 22,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 9,
    "question": "A NIC makes a direct connection to:",
    "options": [
      "The Internet.",
      "A network.",
      "A printer.",
      "A modem."
    ],
    "correctAnswerIndex": 1,
    "answer": "A network.",
    "explanation": {
      "ar": "كارت الشبكة (NIC) بيوصل الكمبيوتر بشكل مباشر بالشبكة المحلية (A network).",
      "en": "A Network Interface Card (NIC) provides a direct connection between a computer and a network."
    },
    "keywords": [
      "NIC",
      "Network Connection"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-23",
    "number": 23,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 9,
    "question": "The NIC manages the flow of data between the computer's RAM and the:",
    "options": [
      "Network cable.",
      "Internet.",
      "Hard drive.",
      "CD drive."
    ],
    "correctAnswerIndex": 0,
    "answer": "Network cable.",
    "explanation": {
      "ar": "الـ NIC بينظم تدفق البيانات بين ذاكرة الكمبيوتر (RAM) وكابل الشبكة (Network cable).",
      "en": "The NIC manages the flow of data between the computer's RAM and the network cable."
    },
    "keywords": [
      "NIC",
      "RAM",
      "Network Cable"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-24",
    "number": 24,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 9,
    "question": "Bits should be converted to ............ to travel over traditional analog phone lines.",
    "options": [
      "analog signals",
      "digital signals",
      "modem signals",
      "converted to bytes"
    ],
    "correctAnswerIndex": 0,
    "answer": "analog signals",
    "explanation": {
      "ar": "خطوط التليفون التقليدية بتنقل إشارات تماثلية، فلازم الـ Modem يحول الـ digital bits لـ analog signals (عملية الـ Modulation) عشان تمشي في سلك التليفون.",
      "en": "Digital bits must be modulated into analog signals to travel over traditional analog telephone lines."
    },
    "keywords": [
      "Analog Signals",
      "Modem",
      "Modulation",
      "Phone Lines"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-25",
    "number": 25,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 10,
    "question": "Prior to a bit entering a modem from the computer, the bit is:",
    "options": [
      "Stored on the hard drive.",
      "Bitmapped.",
      "Digital.",
      "Analog."
    ],
    "correctAnswerIndex": 2,
    "answer": "Digital.",
    "explanation": {
      "ar": "قبل ما الـ bit تدخل الـ Modem وهي طالعة من الكمبيوتر، بتكون في صورتها الرقمية (Digital)، والـ Modem هو اللي بيحولها لـ Analog.",
      "en": "Before entering a modem from a computer, data bits are in digital form."
    },
    "keywords": [
      "Digital",
      "Modem",
      "Bits"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-26",
    "number": 26,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 10,
    "question": "Modems connect to a telephone network over a ........... jack.",
    "options": [
      "phone",
      "coaxial",
      "digital",
      "analog"
    ],
    "correctAnswerIndex": 0,
    "answer": "phone",
    "explanation": {
      "ar": "الـ Dial-up/DSL Modem بيتوصل بشبكة التليفون عن طريق مقبس التليفون القياسي (Phone jack - RJ-11).",
      "en": "Telephone modems connect to the telephone network via a standard phone jack (RJ-11)."
    },
    "keywords": [
      "Phone Jack",
      "Modem",
      "RJ-11"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-27",
    "number": 27,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 10,
    "question": "Modem speeds are measured in:",
    "options": [
      "Bits per second.",
      "Bytes per second.",
      "Bits per millisecond.",
      "Bytes per minute."
    ],
    "correctAnswerIndex": 0,
    "answer": "Bits per second.",
    "explanation": {
      "ar": "سرعة الـ Modem ومعدلات نقل البيانات في الشبكات بتتقاس بالـ Bits per second (bps) ومضاعفاتها (Kbps, Mbps, Gbps).",
      "en": "Modem transmission speeds are measured in bits per second (bps)."
    },
    "keywords": [
      "Bits per second",
      "bps",
      "Modem Speed"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-28",
    "number": 28,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 11,
    "question": "How much information can be transmitted over a communication medium in a definite time?",
    "options": [
      "DPI",
      "BPS",
      "Bandwidth",
      "Baud rate"
    ],
    "correctAnswerIndex": 2,
    "answer": "Bandwidth",
    "explanation": {
      "ar": "كمية المعلومات اللي يقدر وسط الاتصال ينقلها في فترة زمنية محددة هي تعريف الـ Bandwidth (سعة النطاق). بينما BPS هي وحدة القياس، وDPI خاصة بدقة الطباعة والشاشات.",
      "en": "Bandwidth refers to the capacity or amount of information that can be transmitted over a communication medium in a given amount of time."
    },
    "keywords": [
      "Bandwidth",
      "Channel Capacity"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-29",
    "number": 29,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 11,
    "question": "Broadband connections include all of the following EXCEPT:",
    "options": [
      "Cable modems.",
      "DSL.",
      "Wireless.",
      "Phone modems."
    ],
    "correctAnswerIndex": 3,
    "answer": "Phone modems.",
    "explanation": {
      "ar": "الـ Phone modems التقليدية (Dial-up) سرعتها بطيئة جداً (أقصاها 56 Kbps) وبتعتبر Narrowband/Baseband، بينما الـ Cable modems والـ DSL والـ Wireless بيعتبروا اتصالات فائقة السرعة (Broadband).",
      "en": "Traditional dial-up phone modems are narrowband connections, whereas cable modems, DSL, and high-speed wireless are broadband connections."
    },
    "keywords": [
      "Broadband",
      "Phone Modems",
      "DSL",
      "Cable Modems"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-30",
    "number": 30,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 11,
    "question": "It uses light waves to carry information at high speed:",
    "options": [
      "Cable modems",
      "Fiber optic cables",
      "Wireless cables",
      "Phone lines"
    ],
    "correctAnswerIndex": 1,
    "answer": "Fiber optic cables",
    "explanation": {
      "ar": "كابلات الألياف الضوئية (Fiber optic cables) بتستخدم نبضات وموجات الضوء (light waves/pulses) لنقل البيانات بسرعات فائقة جداً وبدون تأثر بالتداخل الكهرومغناطيسي.",
      "en": "Fiber optic cables use light waves (pulses) to transmit information at very high speeds."
    },
    "keywords": [
      "Fiber Optic Cables",
      "Light Waves",
      "Physical Media"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-31",
    "number": 31,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 12,
    "question": "Which wired guided medium supports the longest distance (or overall medium with longest distance)?",
    "options": [
      "Twisted pair",
      "Wireless",
      "Coaxial cable",
      "Fiber optic"
    ],
    "correctAnswerIndex": 3,
    "answer": "Fiber optic (or Wireless via satellite)",
    "explanation": {
      "ar": "من بين الكابلات السلكية، كابلات الـ Fiber optic بتغطي أطول مسافة بدون مكررات إشارة (عشرات الكيلومترات) بفضل الـ attenuation القليل جداً. (ولو المقصود الفضاء المفتوح فالـ Wireless via satellite بيغطي آلاف الكيلومترات، لكن في أسئلة الكابلات القياسية الإجابة هي Fiber optic).",
      "en": "Among cabled media, fiber optic cable supports the longest transmission distances with minimal signal attenuation."
    },
    "keywords": [
      "Fiber Optic",
      "Transmission Distance",
      "Physical Media"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-32",
    "number": 32,
    "source": "question-bank",
    "type": "mcq",
    "tier": 3,
    "topic": "physical-media",
    "page": 12,
    "question": "Palm (PDA) users frequently connect over:",
    "options": [
      "Cable modems.",
      "Fiber optic cables.",
      "Infrared wireless.",
      "Phone lines."
    ],
    "correctAnswerIndex": 2,
    "answer": "Infrared wireless.",
    "explanation": {
      "ar": "الأجهزة الكفية القديمة (Palm PDAs) كانت بتستخدم الأشعة تحت الحمراء (Infrared wireless - IrDA) لنقل البيانات عن قرب.",
      "en": "Palm handheld/PDA devices traditionally connected over short-range infrared wireless links."
    },
    "keywords": [
      "Infrared Wireless",
      "PDA",
      "Wireless"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-33",
    "number": 33,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "security-vpn-wlan",
    "page": 12,
    "question": "The generation of wireless cellular technology among the following (at the time of the textbook) is:",
    "options": [
      "G4.",
      "modem wireless.",
      "3G.",
      "NIC wireless."
    ],
    "correctAnswerIndex": 2,
    "answer": "3G. (or G4/4G in newer editions)",
    "explanation": {
      "ar": "في الطبعة الكلاسيكية للكتاب ده كانت الإجابة 3G (الجيل الثالث المكتوب بالصيغة الصحيحة 3G، بينما G4 مكتوبة مقلوبة كمشتت، وإن كان الجيل الرابع 4G أحدث منها).",
      "en": "In the textbook from which this question originates, 3G is the properly formatted cellular generation option (with 'G4' written backwards as a distractor, though 4G is newer)."
    },
    "keywords": [
      "3G",
      "4G",
      "Wireless Generations"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-34",
    "number": 34,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 12,
    "question": "The policy (set of rules) for exchanging data between a terminal and computers is a:",
    "options": [
      "Protocol.",
      "Algorithm.",
      "Procedure.",
      "Set of laws."
    ],
    "correctAnswerIndex": 0,
    "answer": "Protocol.",
    "explanation": {
      "ar": "القواعد والسياسات اللي بتحكم تبادل البيانات بين الأجهزة في الشبكة اسمها Protocol.",
      "en": "A protocol is the set of rules and policies governing data exchange between terminals and computers."
    },
    "keywords": [
      "Protocol",
      "Data Exchange Rules"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-35",
    "number": 35,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 13,
    "question": "............... has one or more dedicated computers, and all others act as recipients?",
    "options": [
      "Peer-to-peer model",
      "P-to-P model",
      "Ring network",
      "Client/server model"
    ],
    "correctAnswerIndex": 3,
    "answer": "Client/server model",
    "explanation": {
      "ar": "في الـ Client/server model بيكون فيه جهاز أو أكتر مخصص كـ Server بيقدم الخدمات، وباقي الأجهزة بتشتغل كـ Clients (مستقبلين للخدمة).",
      "en": "In the client/server model, one or more dedicated servers provide resources and services while the other computers act as client recipients."
    },
    "keywords": [
      "Client/Server Model",
      "Dedicated Server"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-36",
    "number": 36,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 13,
    "question": "............... is a high-speed, high-performance computer with data and resources to be shared.",
    "options": [
      "server",
      "supercomputer",
      "client",
      "PDA"
    ],
    "correctAnswerIndex": 0,
    "answer": "server",
    "explanation": {
      "ar": "الـ Server هو جهاز كمبيوتر عالي الأداء والسرعة بيحتوي على البيانات والموارد المشتركة لخدمة باقي الأجهزة في الشبكة.",
      "en": "A server is a high-speed, high-performance computer that holds data and resources to be shared across a network."
    },
    "keywords": [
      "Server",
      "Shared Resources"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-37",
    "number": 37,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 13,
    "question": "In a client/server network, the network operating system (NOS) resides on the:",
    "options": [
      "Client machine.",
      "CD.",
      "Server computer.",
      "Mainframe."
    ],
    "correctAnswerIndex": 2,
    "answer": "Server computer.",
    "explanation": {
      "ar": "في شبكات الـ Client/server، نظام تشغيل الشبكة الأساسي (Network Operating System) بيكون موجود على الـ Server computer عشان يدير الصلاحيات والموارد المشتركة.",
      "en": "In a client/server network, the core Network Operating System (NOS) resides on the server computer."
    },
    "keywords": [
      "Server Computer",
      "Network Operating System",
      "Client/Server"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-38",
    "number": 38,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 14,
    "question": "............... allows every computer to act as both a client and a server:",
    "options": [
      "client/server model.",
      "Host system.",
      "Server network.",
      "Peer-to-peer network."
    ],
    "correctAnswerIndex": 3,
    "answer": "Peer-to-peer network.",
    "explanation": {
      "ar": "في شبكة الند للند (Peer-to-peer network - P2P)، كل جهاز كمبيوتر يقدر يشتغل كـ Client وكـ Server في نفس الوقت من غير الحاجة لسيرفر مركزي مخصص.",
      "en": "A peer-to-peer (P2P) network allows every connected computer to act simultaneously as both a client and a server."
    },
    "keywords": [
      "Peer-to-Peer",
      "P2P",
      "Client and Server"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-39",
    "number": 39,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 14,
    "question": "............... is the computer that accepts, prioritizes, and processes print jobs:",
    "options": [
      "Print client.",
      "Printer file server.",
      "Print server.",
      "Mainframe."
    ],
    "correctAnswerIndex": 2,
    "answer": "Print server.",
    "explanation": {
      "ar": "الـ Print server هو الجهاز المسؤول عن استقبال مهام الطباعة (print jobs) من المستخدمين، وترتيب أولوياتها في طابور (print queue)، ومعالجتها.",
      "en": "A print server accepts, prioritizes, queues, and processes print jobs sent by network clients."
    },
    "keywords": [
      "Print Server",
      "Print Jobs"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-40",
    "number": 40,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 14,
    "question": "............... stores data and software shared by several users.",
    "options": [
      "file server",
      "mainframe",
      "print server",
      "client"
    ],
    "correctAnswerIndex": 0,
    "answer": "file server",
    "explanation": {
      "ar": "الـ File server هو السيرفر المخصص لتخزين الملفات والبيانات والبرامج المشتركة بين عدة مستخدمين على الشبكة.",
      "en": "A file server stores data files and software applications shared by multiple users on a network."
    },
    "keywords": [
      "File Server",
      "Shared Data"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-41",
    "number": 41,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 15,
    "question": "IM session stands for:",
    "options": [
      "Internal messaging.",
      "Instant messaging.",
      "Instantaneous market.",
      "Instantaneous messages."
    ],
    "correctAnswerIndex": 1,
    "answer": "Instant messaging.",
    "explanation": {
      "ar": "اختصار IM معناه Instant Messaging (المراسلة الفورية).",
      "en": "IM stands for Instant Messaging."
    },
    "keywords": [
      "IM",
      "Instant Messaging"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-42",
    "number": 42,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 15,
    "question": "Which component blocks unauthorized access and data transfer?",
    "options": [
      "A bridge",
      "A VPN",
      "A WEB",
      "A firewall"
    ],
    "correctAnswerIndex": 3,
    "answer": "A firewall",
    "explanation": {
      "ar": "الـ Firewall (جدار الحماية) هو نظام الأمان (هاردوير أو سوفتوير) اللي بيراقب الترافيك ويمنع الوصول غير المصرح به (unauthorized access) للشبكة.",
      "en": "A firewall filters network traffic and blocks unauthorized access and data transfers."
    },
    "keywords": [
      "Firewall",
      "Security",
      "Unauthorized Access"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-43",
    "number": 43,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 15,
    "question": "An IPv4 address has:",
    "options": [
      "a portion of the address that identifies the network to which the individual belongs",
      "a portion of the address that identifies an individual host on a destination network",
      "a 32-bit addressing scheme",
      "all of the above"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the above",
    "explanation": {
      "ar": "عنوان الـ IPv4 طوله 32-bit، وبيتكون من جزئين: جزء بيعرف الشبكة (Network ID) وجزء بيعرف الجهاز جوه الشبكة (Host ID)، فالإجابة هي all of the above.",
      "en": "An IPv4 address uses a 32-bit addressing scheme divided into a network portion and a host portion."
    },
    "keywords": [
      "IPv4 Address",
      "32-bit",
      "Network ID",
      "Host ID"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-44",
    "number": 44,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 16,
    "question": "The medium that has the fastest transmission rate is:",
    "options": [
      "shielded twisted pair",
      "coaxial cable",
      "type 3 unshielded twisted pair",
      "fiber optics"
    ],
    "correctAnswerIndex": 3,
    "answer": "fiber optics",
    "explanation": {
      "ar": "كابلات الألياف الضوئية (Fiber optics) هي أسرع وسط نقل بيانات على الإطلاق مقارنة بكابلات النحاس (STP, UTP, Coaxial).",
      "en": "Fiber optic cable has the fastest data transmission rate among all physical transmission media."
    },
    "keywords": [
      "Fiber Optics",
      "Transmission Rate",
      "Physical Media"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p1-45",
    "number": 45,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 16,
    "question": "It is a network technology that supports voice, video, and data (using fixed 53-byte cells):",
    "options": [
      "Asynchronous Transfer Mode (ATM)",
      "X.25",
      "frame relay",
      "None of the above"
    ],
    "correctAnswerIndex": 0,
    "answer": "Asynchronous Transfer Mode (ATM)",
    "explanation": {
      "ar": "تقنية الـ ATM (Asynchronous Transfer Mode) اتصممت خصيصاً لدعم نقل الصوت (voice) والفيديو (video) والبيانات (data) بجودة خدمة عالية (QoS) عن طريق خلايا ثابتة الحجم (53 bytes).",
      "en": "Asynchronous Transfer Mode (ATM) is a high-speed cell-switching network technology designed to support real-time voice, video, and data."
    },
    "keywords": [
      "ATM",
      "Voice Video Data",
      "Asynchronous Transfer Mode"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  }
];

export const bankPart2ShortAnswers: Question[] = [
  {
    "id": "bank-p2-01",
    "number": 46,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 16,
    "question": "Abbreviation NIC is:",
    "options": [
      "Network Interface Card",
      "Network Internal Control",
      "Node Interconnection Circuit",
      "National Internet Center"
    ],
    "correctAnswerIndex": 0,
    "answer": "Network Interface Card",
    "explanation": {
      "ar": "اختصار NIC هو Network Interface Card (بطاقة واجهة الشبكة أو كارت الشبكة).",
      "en": "NIC stands for Network Interface Card."
    },
    "keywords": [
      "NIC",
      "Abbreviation"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-02",
    "number": 47,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 17,
    "question": "Abbreviation MAC is:",
    "options": [
      "Media Access Control",
      "Multiple Address Channel",
      "Message Authentication Code",
      "Main Access Controller"
    ],
    "correctAnswerIndex": 0,
    "answer": "Media Access Control",
    "explanation": {
      "ar": "اختصار MAC هو Media Access Control (التحكم في الوصول للوسط)، وهي طبقة فرعية من الـ Data Link Layer مسؤولة عن العنوان الفيزيائي (MAC Address - 48 bits).",
      "en": "MAC stands for Media Access Control."
    },
    "keywords": [
      "MAC",
      "Media Access Control",
      "Abbreviation"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-03",
    "number": 48,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "intro-models",
    "page": 17,
    "question": "Abbreviation LAN is:",
    "options": [
      "Local Area Network",
      "Logical Access Node",
      "Large Area Network",
      "Link Access Network"
    ],
    "correctAnswerIndex": 0,
    "answer": "Local Area Network",
    "explanation": {
      "ar": "اختصار LAN هو Local Area Network (الشبكة المحلية).",
      "en": "LAN stands for Local Area Network."
    },
    "keywords": [
      "LAN",
      "Local Area Network",
      "Abbreviation"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-04",
    "number": 49,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "intro-models",
    "page": 17,
    "question": "Abbreviation WAN is:",
    "options": [
      "Wide Area Network",
      "World Area Network",
      "Wireless Access Network",
      "Web Area Network"
    ],
    "correctAnswerIndex": 0,
    "answer": "Wide Area Network",
    "explanation": {
      "ar": "اختصار WAN هو Wide Area Network (الشبكة الواسعة أو الممتدة).",
      "en": "WAN stands for Wide Area Network."
    },
    "keywords": [
      "WAN",
      "Wide Area Network",
      "Abbreviation"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-05",
    "number": 50,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "intro-models",
    "page": 17,
    "question": "Protocol is:",
    "options": [
      "A set of rules and conventions that govern how devices exchange data across a network",
      "A physical cable connecting two switches",
      "A hardware device that amplifies electrical signals",
      "A type of computer virus"
    ],
    "correctAnswerIndex": 0,
    "answer": "A set of rules and conventions that govern how devices communicate and exchange data over a network (defining message format, order, and actions taken).",
    "explanation": {
      "ar": "الـ Protocol هو مجموعة القواعد والاتفاقيات القياسية اللي بتحكم إزاي الأجهزة تتواصل وتتبادل البيانات عبر الشبكة (بيحدد الـ syntax, semantics, timing/order).",
      "en": "A protocol is a set of rules and conventions governing the format, order, and actions of data communication between network devices."
    },
    "keywords": [
      "Protocol",
      "Definition"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-06",
    "number": 51,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 17,
    "question": "Hub and a switch difference is:",
    "options": [
      "A Hub (Layer 1) broadcasts frames to all ports in a single collision domain; a Switch (Layer 2) inspects MAC addresses and forwards frames only to the destination port, giving each port its own collision domain.",
      "A Hub operates at Layer 3 using IP addresses while a Switch operates at Layer 1.",
      "A Hub is faster and more secure than a Switch.",
      "There is no difference between a Hub and a Switch."
    ],
    "correctAnswerIndex": 0,
    "answer": "A Hub operates at the Physical Layer (Layer 1) and broadcasts incoming bits to all ports (single collision domain), whereas a Switch operates at the Data Link Layer (Layer 2), learns MAC addresses, and forwards frames selectively to the target port (each port is a separate collision domain).",
    "explanation": {
      "ar": "الفرق الجوهري بين الـ Hub والـ Switch: الـ Hub شغال في الـ Physical Layer (Layer 1) ومبيفهمش عناوين، فبيبعت الإشارة لكل البورتات (Broadcast) وكل البورتات بتشترك في Collision domain واحد. أما الـ Switch فشغال في الـ Data Link Layer (Layer 2)، بيقرأ الـ MAC address في الـ frame ويبعتها للبورت المقصود بس (Unicast)، وكل بورت ليه Collision domain مستقل.",
      "en": "A hub is a Layer 1 repeater that floods signals out all ports in a single collision domain, while a switch is an intelligent Layer 2 device that filters and forwards frames based on MAC addresses, isolating each port into its own collision domain."
    },
    "keywords": [
      "Hub vs Switch",
      "MAC Address",
      "Collision Domain",
      "Layer 1 vs Layer 2"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-07",
    "number": 52,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 17,
    "question": "CSMA/CD is ............. and the protocol CSMA/CD is .............",
    "options": [
      "Carrier Sense Multiple Access with Collision Detection; a Media Access Control (MAC) protocol used in IEEE 802.3 Ethernet to coordinate shared channel access and handle collisions.",
      "Carrier System Multiple Address with Code Division; a routing protocol.",
      "Channel Sense Media Access with Cyclic Detection; an encryption protocol.",
      "Client Server Multiple Access with Connection Detection; an application protocol."
    ],
    "correctAnswerIndex": 0,
    "answer": "CSMA/CD stands for Carrier Sense Multiple Access with Collision Detection. It is a MAC protocol (IEEE 802.3 Ethernet) where nodes listen to the carrier before transmitting, detect collisions if two nodes transmit simultaneously, abort transmission, send a jam signal, and wait a random backoff time before retrying.",
    "explanation": {
      "ar": "اختصار CSMA/CD هو Carrier Sense Multiple Access with Collision Detection. وهو بروتوكول وصول للوسط المشترك (MAC protocol) في شبكات الـ Ethernet، فيه الجهاز بيسمع الكابل الأول (Carrier Sense) لو فاضي يبعت، ولو حصل تصادم (Collision Detection) يوقف الإرسال ويستنى وقت عشوائي (Exponential Backoff) قبل ما يعيد الإرسال.",
      "en": "CSMA/CD stands for Carrier Sense Multiple Access with Collision Detection, the IEEE 802.3 Ethernet MAC protocol that senses the channel before sending and uses random backoff upon detecting collisions."
    },
    "keywords": [
      "CSMA/CD",
      "Carrier Sense",
      "Collision Detection",
      "Ethernet"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-08",
    "number": 53,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 17,
    "question": "Information that is NOT included directly as an Ethernet frame header field is .........?",
    "options": [
      "IP address (or Port number, which belong to Layer 3/Layer 4 headers inside the payload)",
      "Destination MAC address",
      "Source MAC address",
      "Frame Check Sequence (FCS) / CRC"
    ],
    "correctAnswerIndex": 0,
    "answer": "IP addresses (and TCP/UDP port numbers) are not part of the Ethernet frame header/trailer; an Ethernet frame contains Preamble, SFD, Destination MAC, Source MAC, Type/Length, Data Payload, and FCS (CRC).",
    "explanation": {
      "ar": "الـ Ethernet frame بيحتوي في الـ Header والـ Trailer بتوعه على: Preamble, SFD, Destination MAC, Source MAC, Type/Length, Data, FCS. المعلومة اللي مش موجودة كحقل في الـ Ethernet header هي الـ IP Address (لأنها في Layer 3 جوه الـ Data payload).",
      "en": "IP addresses are not fields of the Layer 2 Ethernet frame header (which uses 48-bit MAC addresses); IP headers are encapsulated inside the Ethernet data payload."
    },
    "keywords": [
      "Ethernet Frame",
      "IP Address",
      "MAC Address"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-09",
    "number": 54,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 18,
    "question": "The minimum data payload size in an Ethernet frame is .......?",
    "options": [
      "46 bytes",
      "64 bytes",
      "1500 bytes",
      "18 bytes"
    ],
    "correctAnswerIndex": 0,
    "answer": "46 bytes",
    "explanation": {
      "ar": "الحد الأدنى لحجم الـ Data Payload في الـ Ethernet frame هو 46 bytes (ولو الداتا أقل من 46 bytes بيتضاف ليها Padding لحد ما توصل 46 bytes، عشان مع الـ 18 bytes بتوع الـ Header + FCS يبقى أقل حجم للـ Frame كله 64 bytes).",
      "en": "The minimum data payload size in a standard Ethernet frame is 46 bytes (padded if necessary so the total frame size reaches the 64-byte minimum)."
    },
    "keywords": [
      "Minimum Payload",
      "46 bytes",
      "Ethernet Frame"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-10",
    "number": 55,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 18,
    "question": "The minimum and maximum size of an Ethernet frame is ........?",
    "options": [
      "Minimum: 64 bytes, Maximum: 1518 bytes (excluding Preamble/SFD)",
      "Minimum: 46 bytes, Maximum: 1500 bytes",
      "Minimum: 32 bytes, Maximum: 1024 bytes",
      "Minimum: 128 bytes, Maximum: 2048 bytes"
    ],
    "correctAnswerIndex": 0,
    "answer": "Minimum size: 64 bytes; Maximum size: 1518 bytes (comprising 14 bytes header + 46 to 1500 bytes payload + 4 bytes FCS, excluding the 8-byte Preamble/SFD).",
    "explanation": {
      "ar": "حجم الـ Ethernet frame نفسه (من غير الـ 8 bytes بتوع الـ Preamble والـ SFD): الحد الأدنى هو 64 bytes (46 payload + 18 header/FCS)، والحد الأقصى هو 1518 bytes (1500 payload + 18 header/FCS).",
      "en": "A standard IEEE 802.3 Ethernet frame has a minimum size of 64 bytes and a maximum size of 1518 bytes (with payload ranging from 46 to 1500 bytes plus 18 bytes of MAC header and FCS)."
    },
    "keywords": [
      "Ethernet Frame Size",
      "64 bytes",
      "1518 bytes"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-11",
    "number": 56,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 18,
    "question": "Abbreviation OUI is .........",
    "options": [
      "Organizationally Unique Identifier",
      "Optical Unit Interface",
      "Open User Interconnection",
      "Operational Unique Index"
    ],
    "correctAnswerIndex": 0,
    "answer": "Organizationally Unique Identifier",
    "explanation": {
      "ar": "اختصار OUI هو Organizationally Unique Identifier، وهو أول 24 bits (أول 3 bytes) من الـ MAC address.",
      "en": "OUI stands for Organizationally Unique Identifier."
    },
    "keywords": [
      "OUI",
      "Organizationally Unique Identifier",
      "MAC Address"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-12",
    "number": 57,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 18,
    "question": "OUI represents ...........?",
    "options": [
      "The first 3 bytes (24 bits) of a MAC address assigned by IEEE to identify the NIC manufacturer/vendor",
      "The last 3 bytes of an IP address",
      "The port number of a web server",
      "The encryption key of a wireless router"
    ],
    "correctAnswerIndex": 0,
    "answer": "The first 24 bits (first 3 bytes / 6 hexadecimal digits) of a 48-bit MAC address, assigned by the IEEE to uniquely identify the hardware manufacturer (vendor) of the Network Interface Card.",
    "explanation": {
      "ar": "الـ OUI بيمثل أول 3 bytes (24 bits أو 6 أرقام Hex) على الشمال في الـ MAC Address، وبتخصصه منظمة الـ IEEE عشان يحدد الشركة المصنعة لكارت الشبكة (Vendor/Manufacturer) زي Dell أو Apple أو 3Com.",
      "en": "The OUI represents the first 3 bytes (24 bits) of a MAC address, identifying the specific manufacturer or vendor of the network interface card."
    },
    "keywords": [
      "OUI",
      "NIC Manufacturer",
      "24 bits",
      "MAC Address"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-13",
    "number": 58,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 18,
    "question": "How to find the Ethernet (MAC) address in Windows Vista (or Windows OS)?",
    "options": [
      "Open Command Prompt (cmd) and run 'ipconfig /all' (listed as Physical Address)",
      "Open Notepad and type 'macconfig'",
      "Run 'ping localhost' in Command Prompt",
      "Check the browser history"
    ],
    "correctAnswerIndex": 0,
    "answer": "Open Command Prompt (cmd.exe) and type 'ipconfig /all' (or 'getmac'); the MAC address is displayed under the network adapter as 'Physical Address'.",
    "explanation": {
      "ar": "لمعرفة الـ MAC address في نظام Windows بنفتح الـ Command Prompt (cmd) ونكتب الأمر `ipconfig /all`، فبيظهر الـ MAC address قدام خانة `Physical Address`.",
      "en": "In Windows, open the Command Prompt and execute 'ipconfig /all' to view the Ethernet MAC address listed as the 'Physical Address'."
    },
    "keywords": [
      "ipconfig /all",
      "Physical Address",
      "MAC Address",
      "Windows"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-14",
    "number": 59,
    "source": "question-bank",
    "type": "practical",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 18,
    "question": "Determine the device manufacturer for the Ethernet MAC address: 00-C0-4F-49-68-AB",
    "options": [
      "DELL",
      "APPLE",
      "3Com",
      "ATARI"
    ],
    "correctAnswerIndex": 0,
    "answer": "DELL",
    "explanation": {
      "ar": "أول 3 بايت (OUI) هما `00-C0-4F`، والكود ده مخصص لشركة DELL (كما هو مذكور في شيت د. أحمد عطوان ص 19).",
      "en": "The OUI prefix 00-C0-4F belongs to DELL."
    },
    "keywords": [
      "OUI",
      "00-C0-4F",
      "DELL",
      "MAC Address"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-15",
    "number": 60,
    "source": "question-bank",
    "type": "practical",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 19,
    "question": "Determine the device manufacturer for the Ethernet MAC address: 00-0A-27-B7-3E-F8",
    "options": [
      "APPLE",
      "DELL",
      "3Com",
      "ATARI"
    ],
    "correctAnswerIndex": 0,
    "answer": "APPLE",
    "explanation": {
      "ar": "أول 3 بايت (OUI) هما `00-0A-27`، والكود ده مخصص لشركة APPLE (مذكور في الشيت ص 19).",
      "en": "The OUI prefix 00-0A-27 belongs to APPLE."
    },
    "keywords": [
      "OUI",
      "00-0A-27",
      "APPLE",
      "MAC Address"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-16",
    "number": 61,
    "source": "question-bank",
    "type": "practical",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 19,
    "question": "Determine the device manufacturer for the Ethernet MAC address: 00-04-76-B6-9D-06",
    "options": [
      "3Com",
      "DELL",
      "APPLE",
      "ATARI"
    ],
    "correctAnswerIndex": 0,
    "answer": "3Com",
    "explanation": {
      "ar": "أول 3 بايت (OUI) هما `00-04-76`، والكود ده مخصص لشركة 3Com (مذكور في الشيت ص 19).",
      "en": "The OUI prefix 00-04-76 belongs to 3Com."
    },
    "keywords": [
      "OUI",
      "00-04-76",
      "3Com",
      "MAC Address"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-17",
    "number": 62,
    "source": "question-bank",
    "type": "practical",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 19,
    "question": "Determine the device manufacturer for the Ethernet MAC address: 00-00-36-69-42-27",
    "options": [
      "ATARI",
      "DELL",
      "APPLE",
      "3Com"
    ],
    "correctAnswerIndex": 0,
    "answer": "ATARI",
    "explanation": {
      "ar": "أول 3 بايت (OUI) هما `00-00-36`، والكود ده مخصص لشركة ATARI (مذكور في الشيت ص 19).",
      "en": "The OUI prefix 00-00-36 belongs to ATARI."
    },
    "keywords": [
      "OUI",
      "00-00-36",
      "ATARI",
      "MAC Address"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-18",
    "number": 63,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 19,
    "question": "Determine the IPv4 class for: 46.39.42.05",
    "options": [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    "correctAnswerIndex": 0,
    "answer": "Class A",
    "explanation": {
      "ar": "بص على أول رقم على الشمال (First Octet): الرقم هو 46، وبما إنه يقع في الرينج من 1 لـ 126، يبقى العنوان ده Class A.",
      "en": "The first octet is 46, which falls in the Class A range (1 to 126)."
    },
    "keywords": [
      "IPv4 Class",
      "Class A",
      "46.39.42.05"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-19",
    "number": 64,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 19,
    "question": "Determine the IPv4 class for: 220.244.38.168",
    "options": [
      "Class C",
      "Class A",
      "Class B",
      "Class D"
    ],
    "correctAnswerIndex": 0,
    "answer": "Class C",
    "explanation": {
      "ar": "أول Octet هو 220، وبما إنه في الرينج من 192 لـ 223، يبقى العنوان ده Class C.",
      "en": "The first octet is 220, which falls in the Class C range (192 to 223)."
    },
    "keywords": [
      "IPv4 Class",
      "Class C",
      "220.244.38.168"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-20",
    "number": 65,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 19,
    "question": "Determine the IPv4 class for: 198.1.0.4",
    "options": [
      "Class C",
      "Class A",
      "Class B",
      "Class D"
    ],
    "correctAnswerIndex": 0,
    "answer": "Class C",
    "explanation": {
      "ar": "أول Octet هو 198، وبما إنه في الرينج من 192 لـ 223، يبقى العنوان ده Class C.",
      "en": "The first octet is 198, which falls in the Class C range (192 to 223)."
    },
    "keywords": [
      "IPv4 Class",
      "Class C",
      "198.1.0.4"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-21",
    "number": 66,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 19,
    "question": "Determine the IPv4 class for: 126.87.12.34",
    "options": [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    "correctAnswerIndex": 0,
    "answer": "Class A",
    "explanation": {
      "ar": "أول Octet هو 126، وهو آخر رقم في رينج Class A (من 1 لـ 126، بينما 127 محجوز للـ Loopback).",
      "en": "The first octet is 126, which falls within the Class A range (1 to 126)."
    },
    "keywords": [
      "IPv4 Class",
      "Class A",
      "126.87.12.34"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-22",
    "number": 67,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 20,
    "question": "Determine the IPv4 class for: 99.150.200.251",
    "options": [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    "correctAnswerIndex": 0,
    "answer": "Class A",
    "explanation": {
      "ar": "أول Octet هو 99، ويقع في الرينج من 1 لـ 126، إذن هو Class A.",
      "en": "The first octet is 99, which falls within the Class A range (1 to 126)."
    },
    "keywords": [
      "IPv4 Class",
      "Class A",
      "99.150.200.251"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-23",
    "number": 68,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 20,
    "question": "Determine the IPv4 class for: 128.64.32.16",
    "options": [
      "Class B",
      "Class A",
      "Class C",
      "Class D"
    ],
    "correctAnswerIndex": 0,
    "answer": "Class B",
    "explanation": {
      "ar": "أول Octet هو 128، وهو بداية رينج Class B (من 128 لـ 191).",
      "en": "The first octet is 128, which is the starting value of the Class B range (128 to 191)."
    },
    "keywords": [
      "IPv4 Class",
      "Class B",
      "128.64.32.16"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-24",
    "number": 69,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "intro-models",
    "page": 20,
    "question": "Abbreviation TCP/IP is:",
    "options": [
      "Transmission Control Protocol / Internet Protocol",
      "Telecommunication Channel Protocol / Internal Process",
      "Transfer Code Program / Internet Packet",
      "Transport Control Packet / Interface Protocol"
    ],
    "correctAnswerIndex": 0,
    "answer": "Transmission Control Protocol / Internet Protocol",
    "explanation": {
      "ar": "اختصار TCP/IP هو Transmission Control Protocol / Internet Protocol، وهي حزمة البروتوكولات القياسية اللي بيقوم عليها الإنترنت.",
      "en": "TCP/IP stands for Transmission Control Protocol / Internet Protocol."
    },
    "keywords": [
      "TCP/IP",
      "Abbreviation"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-25",
    "number": 70,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "physical-media",
    "page": 20,
    "question": "A wired network's advantages are:",
    "options": [
      "Higher speed/bandwidth, lower latency, stronger security, and greater reliability/immunity to wireless interference",
      "Complete mobility without cables",
      "Lower speed than wireless networks",
      "No hardware required"
    ],
    "correctAnswerIndex": 0,
    "answer": "Higher data transfer speeds (bandwidth), lower latency, better security (physical access is required to tap the line), and higher reliability with less susceptibility to radio interference.",
    "explanation": {
      "ar": "مميزات الشبكة السلكية (Wired network): سرعة أعلى ومعدل نقل بيانات أكبر، أمان أعلى (لأن الداتا ماشية جوه سلك مش في الهوا)، واستقرار واعتمادية أعلى بعيداً عن التداخل اللاسلكي.",
      "en": "Wired networks provide higher speeds, greater reliability, lower latency, and stronger security compared to wireless networks."
    },
    "keywords": [
      "Wired Network",
      "Advantages"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-26",
    "number": 71,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "security-vpn-wlan",
    "page": 20,
    "question": "A wireless network's advantage is:",
    "options": [
      "Mobility, convenience, and ease of installation without running physical cables",
      "Complete immunity to electromagnetic interference",
      "Faster speed than fiber optics",
      "Impossible to intercept signals"
    ],
    "correctAnswerIndex": 0,
    "answer": "Mobility, flexibility, convenience, and easy scalability/installation without the cost and effort of running physical cables through walls.",
    "explanation": {
      "ar": "أهم ميزة للشبكات اللاسلكية (Wireless networks) هي حرية الحركة (Mobility) وسهولة التوصيل والتركيب من غير تكسير أو مد كابلات.",
      "en": "The main advantages of wireless networks are user mobility, convenience, and ease of installation without physical cabling."
    },
    "keywords": [
      "Wireless Network",
      "Mobility",
      "Advantages"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-27",
    "number": 72,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 21,
    "question": "Wi-Fi is ...........................",
    "options": [
      "Wireless Fidelity — a wireless local area network (WLAN) technology based on the IEEE 802.11 standards using radio waves",
      "Wide Fiber — an optical fiber backbone standard",
      "Wired Firewall — a hardware packet filter",
      "Window File Interface — an operating system protocol"
    ],
    "correctAnswerIndex": 0,
    "answer": "Wi-Fi (Wireless Fidelity) is a wireless networking technology based on the IEEE 802.11 family of standards that uses radio waves to provide high-speed wireless local area network (WLAN) and Internet connections.",
    "explanation": {
      "ar": "الـ Wi-Fi (Wireless Fidelity) هي تقنية الشبكات المحلية اللاسلكية (WLAN) المبنية على معايير IEEE 802.11 وبتستخدم موجات الراديو لتوصيل الأجهزة بالشبكة والإنترنت.",
      "en": "Wi-Fi is a wireless LAN technology based on the IEEE 802.11 standards that enables devices to communicate over radio frequencies."
    },
    "keywords": [
      "Wi-Fi",
      "IEEE 802.11",
      "WLAN"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-28",
    "number": 73,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "physical-media",
    "page": 21,
    "question": "Equipment used to establish a broadband connection to the ISP?",
    "options": [
      "A Broadband Modem (DSL Modem, Cable Modem, or Fiber ONT) and a Router/Gateway",
      "A Parallel Printer Port",
      "A Repeater only",
      "A Terminated Coaxial Bus"
    ],
    "correctAnswerIndex": 0,
    "answer": "A broadband modem (such as a DSL modem, Cable modem, or Fiber optic ONT) along with a home router/wireless gateway.",
    "explanation": {
      "ar": "عشان نعمل اتصال Broadband مع الـ ISP بنحتاج Broadband Modem (زي الـ DSL modem أو الـ Cable modem) وغالباً بيكون مدمج معاه Router/Wireless Access Point.",
      "en": "Establishing a broadband connection to an ISP requires a broadband modem (DSL or cable modem) and typically a router."
    },
    "keywords": [
      "Broadband Equipment",
      "Modem",
      "ISP"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-29",
    "number": 74,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 3,
    "topic": "security-vpn-wlan",
    "page": 21,
    "question": "Planning a home network needs?",
    "options": [
      "Determining user requirements, choosing wired/wireless media, selecting a broadband ISP/modem, router/switch/AP placement, and configuring security (WPA2/WPA3, firewall, passwords)",
      "Buying a mainframe computer",
      "Leasing a transoceanic submarine cable",
      "Assigning public Class A networks to every room"
    ],
    "correctAnswerIndex": 0,
    "answer": "Assessing the number and types of devices, choosing between wired (Ethernet Cat5e/Cat6) and wireless (Wi-Fi) connectivity, selecting an ISP and broadband modem/router, choosing optimal central placement for wireless coverage, and planning network security.",
    "explanation": {
      "ar": "تخطيط الشبكة المنزلية بيحتاج: تحديد الأجهزة اللي هتتوصل، اختيار نوع التوصيل (سلكي Ethernet ولا لاسلكي Wi-Fi)، اختيار الـ Router/Modem ومكانه المناسب للتغطية، وإعدادات الحماية (تغيير الباسورد الافتراضي وتفعيل تشفير WPA2/WPA3 والـ Firewall).",
      "en": "Planning a home network requires identifying connected devices, selecting wired/wireless technologies, choosing a modem/router and its central placement, and planning security settings."
    },
    "keywords": [
      "Home Network Planning",
      "Router",
      "Wi-Fi"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-30",
    "number": 75,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "physical-media",
    "page": 21,
    "question": "Checking the lights (LEDs) of an ISP networking device is important for ................",
    "options": [
      "Verifying power, physical link connectivity, Internet/WAN synchronization, and troubleshooting network faults",
      "Increasing the bandwidth of the fiber cable",
      "Encrypting wireless packets",
      "Assigning MAC addresses to laptops"
    ],
    "correctAnswerIndex": 0,
    "answer": "Verifying operational status, power, physical link connection, synchronization with the ISP, active data transmission, and troubleshooting connectivity problems.",
    "explanation": {
      "ar": "فحص لمبات البيان (Status LEDs) على جهاز المودم أو الراوتر مهم جداً للتأكد من توصيل الكهرباء (Power)، وتزامن خط الـ DSL/Cable مع السنترال (Sync/Link)، ووجود اتصال بالإنترنت، وتشخيص الأعطال بسرعة (Troubleshooting).",
      "en": "Checking the indicator lights (LEDs) on an ISP modem/router is important for verifying power, line synchronization, active data activity, and troubleshooting connection issues."
    },
    "keywords": [
      "ISP Device Lights",
      "Troubleshooting",
      "LED Indicators"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-31",
    "number": 76,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "security-vpn-wlan",
    "page": 22,
    "question": "To protect the home network ......................................................",
    "options": [
      "Change default admin passwords, enable WPA2/WPA3 encryption, enable the SPI firewall and NAT, change/hide default SSID, and use MAC filtering",
      "Leave the router with factory default passwords and open Wi-Fi",
      "Disable the firewall and use WEP only",
      "Disconnect the CPU fan"
    ],
    "correctAnswerIndex": 0,
    "answer": "Change default factory administrator passwords, enable strong wireless encryption (WPA/WPA2/WPA3), change the default SSID (and optionally disable SSID broadcast), enable MAC address filtering, and enable the NAT/SPI firewall.",
    "explanation": {
      "ar": "لحماية الشبكة المنزلية: لازم نغير الـ default factory password للراوتر، نفعل تشفير قوي زي WPA/WPA2 بدل WEP، نغير اسم الشبكة الافتراضي (SSID)، ونفعل الـ MAC filtering والـ Firewall (NAT + SPI).",
      "en": "To protect a home network: change default admin passwords, enable WPA/WPA2 encryption, change the default SSID, enable MAC filtering, and activate the router's NAT and SPI firewall."
    },
    "keywords": [
      "Home Network Security",
      "WPA",
      "Firewall",
      "SSID"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-32",
    "number": 77,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 22,
    "question": "Select a network device with WEP or WPA. Which gives better security?",
    "options": [
      "WPA (Wi-Fi Protected Access) gives much better security than WEP",
      "WEP gives better security than WPA",
      "Both provide identical security",
      "Neither provides encryption"
    ],
    "correctAnswerIndex": 0,
    "answer": "WPA (Wi-Fi Protected Access) gives significantly better security than WEP (Wired Equivalent Privacy) because WPA uses stronger dynamic key encryption (TKIP/AES), whereas WEP uses weak static keys that are easily cracked.",
    "explanation": {
      "ar": "أكيد WPA (Wi-Fi Protected Access) بيدي حماية وأمان أقوى بكتير من WEP (Wired Equivalent Privacy)، لأن WEP بيستخدم مفاتيح تشفير ثابتة وضعيفة سهل كسرها في دقايق، بينما WPA بيستخدم تشفير ديناميكي متغير (TKIP/AES).",
      "en": "WPA provides far better security than WEP because it uses dynamic key generation (TKIP/AES) and stronger authentication, whereas WEP uses weak, easily cracked static keys."
    },
    "keywords": [
      "WPA vs WEP",
      "Wireless Security",
      "Encryption"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-33",
    "number": 78,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 22,
    "question": "Using the default factory passwords is good. Yes or NO? Why?",
    "options": [
      "NO — because default factory passwords are publicly known to hackers and allow anyone to hijack the router's administrative settings.",
      "YES — because they are easy to remember and secure.",
      "YES — because manufacturers give every single user a secret password.",
      "NO — because they slow down the CPU clock speed."
    ],
    "correctAnswerIndex": 0,
    "answer": "NO. Default factory passwords are publicly documented and well-known to attackers, allowing unauthorized users or hackers to easily log into the router and compromise the network.",
    "explanation": {
      "ar": "الإجابة NO طبعاً! لأن الباسوردات الافتراضية للمصنع (زي admin/admin) بتكون معروفة ومنشورة على الإنترنت لكل موديل راوتر، فأي هاكر يقدر يدخل بيها ويتحكم في الشبكة بالكامل.",
      "en": "No, because default factory passwords are publicly known and published online, making it trivial for attackers to gain administrative control of the network device."
    },
    "keywords": [
      "Default Passwords",
      "Security",
      "Router Admin"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-34",
    "number": 79,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 23,
    "question": "The reason for the SSID is ................ , and what can the network administrator do to protect the network from hackers who need to know it?",
    "options": [
      "The SSID (Service Set Identifier) uniquely names/identifies a wireless network; the administrator should change the default SSID and disable SSID broadcasting.",
      "The SSID assigns IP addresses; the administrator should disable DHCP.",
      "The SSID encrypts emails; the administrator should close port 25.",
      "The SSID amplifies radio signals; the administrator should unplug the antenna."
    ],
    "correctAnswerIndex": 0,
    "answer": "The SSID (Service Set Identifier) is used to uniquely identify a wireless network (WLAN) so clients can connect to it. To protect the network, the administrator should change the default SSID (so it doesn't reveal the router brand/model) and disable SSID broadcasting.",
    "explanation": {
      "ar": "الـ SSID (Service Set Identifier) هو الاسم التعريفي لشبكة الـ Wi-Fi اللي بيسمح للأجهزة تميزها وتتصل بيها. وعشان الـ network administrator يحمي الشبكة: يغير الـ default SSID (عشان ميفضحش نوع وموديل الراوتر للهاكر) ويقفل الـ SSID Broadcast (إخفاء الشبكة).",
      "en": "The SSID identifies a specific wireless network. Administrators can protect the network by changing the default SSID and disabling SSID beacon broadcasting."
    },
    "keywords": [
      "SSID",
      "Service Set Identifier",
      "Wireless Security"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-35",
    "number": 80,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 23,
    "question": "What is the reason for MAC filtering in a wireless network?",
    "options": [
      "To restrict wireless network access so only specific pre-approved devices (based on their physical 48-bit MAC addresses) are permitted to connect",
      "To increase the wireless frequency from 2.4 GHz to 5 GHz",
      "To compress web pages before transmission",
      "To translate domain names to IP addresses"
    ],
    "correctAnswerIndex": 0,
    "answer": "MAC filtering restricts access to the wireless network by permitting (whitelisting) or blocking (blacklisting) specific devices based on their unique hardware MAC addresses.",
    "explanation": {
      "ar": "الـ MAC filtering في الشبكة اللاسلكية بيُستخدم لتحديد الأجهزة المسموح ليها فقط بالاتصال بالشبكة بناءً على الـ Physical MAC Address بتاع كل جهاز، ومنع أي جهاز غريب حتى لو معاه الباسورد.",
      "en": "MAC filtering enhances wireless security by allowing only devices with explicitly permitted hardware MAC addresses to associate with the access point."
    },
    "keywords": [
      "MAC Filtering",
      "Wireless Security",
      "Access Control"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-36",
    "number": 81,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "network-ip",
    "page": 24,
    "question": "How does NAT help protect against outsider access to computers in the network?",
    "options": [
      "NAT hides internal private IP addresses behind a single public IP address, preventing external hosts from directly addressing or initiating unsolicited connections to internal computers",
      "NAT encrypts all hard drives on the local computers",
      "NAT blocks all outgoing HTTP web requests",
      "NAT physically disconnects the cable when an attacker sends a ping"
    ],
    "correctAnswerIndex": 0,
    "answer": "NAT (Network Address Translation) hides the private IP addresses of internal computers from the outside Internet by translating them to the router's public IP address. Outsiders only see the router's public IP and cannot directly address internal machines unless a session was initiated from inside.",
    "explanation": {
      "ar": "الـ NAT بيحمي الأجهزة الداخلية لأنه بيخفي الـ Private IP addresses بتاعتها ورا الـ Public IP بتاع الراوتر؛ فأي شخص بره على الإنترنت بيشوف بس الـ Public IP بتاع الراوتر وميقدرش يوصل مباشرة لأي جهاز جوه الشبكة.",
      "en": "NAT conceals internal private IP addresses behind the router's public IP address, acting as a natural shield against unsolicited inbound connections from external attackers."
    },
    "keywords": [
      "NAT",
      "Network Security",
      "Private IP",
      "Public IP"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-37",
    "number": 82,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "security-vpn-wlan",
    "page": 24,
    "question": "'SPI' is important for ...............?",
    "options": [
      "Stateful Packet Inspection — a firewall technology that tracks active connections and verifies that incoming packets match a legitimate request initiated from inside the network",
      "Serial Port Interface — connecting old mice",
      "Single Protocol Indexing — sorting DNS records",
      "Static Path Identification — fixing broken fiber cables"
    ],
    "correctAnswerIndex": 0,
    "answer": "SPI (Stateful Packet Inspection) is important for firewall security: it monitors the state of active network connections and inspects incoming packets to ensure they are legitimate responses to requests initiated by internal hosts, blocking unsolicited malicious traffic.",
    "explanation": {
      "ar": "الـ SPI (Stateful Packet Inspection) مهم جداً في الـ Firewalls لأنه بيراقب حالة الاتصالات النشطة (state of connections) ويتأكد إن أي packet جاية من بره هي فعلاً رد على طلب خرج من جهاز جوه الشبكة، ويرفض أي packets متطفلة.",
      "en": "Stateful Packet Inspection (SPI) tracks active connection states in a firewall and blocks incoming packets that were not requested by an internal host."
    },
    "keywords": [
      "SPI",
      "Stateful Packet Inspection",
      "Firewall"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-38",
    "number": 83,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 24,
    "question": "VPN is ............... , and how does it protect the wireless network data transferred?",
    "options": [
      "Virtual Private Network; it protects transferred data by encapsulating and encrypting packets inside a secure tunnel across public/wireless networks",
      "Visual Protocol Node; it speeds up video streaming without security",
      "Virtual Public Node; it broadcasts passwords to all routers",
      "Variable Packet Numbering; it changes packet sizes randomly"
    ],
    "correctAnswerIndex": 0,
    "answer": "VPN stands for Virtual Private Network. It protects data transferred over wireless or public networks by creating an encrypted 'tunnel' (using protocols like IPsec, L2TP, or SSL/TLS) so intercepted packets cannot be read or tampered with.",
    "explanation": {
      "ar": "اختصار VPN هو Virtual Private Network (الشبكة الخاصة الافتراضية). وبيحمي البيانات المنقولة عبر الشبكات اللاسلكية أو العامة عن طريق تشفير البيانات (Encryption) وتغليفها جوه نفق آمن (Secure Tunneling) فحتى لو حد اعترض الـ packets مش هيقدر يفكها أو يقرأها.",
      "en": "A Virtual Private Network (VPN) extends a private network across a public/wireless network and protects transferred data by encrypting and encapsulating traffic inside a secure tunnel."
    },
    "keywords": [
      "VPN",
      "Virtual Private Network",
      "Tunneling",
      "Encryption"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-39",
    "number": 84,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "network-ip",
    "page": 25,
    "question": "How does IP addressing handle a home network?",
    "options": [
      "The ISP assigns one public IP address to the home router's WAN port, while the router's DHCP server assigns private IP addresses (e.g., 192.168.x.x) to internal home devices and uses NAT/PAT to share the public IP",
      "Every home device is manually assigned a Class A public IP by the IETF",
      "Home networks do not use IP addresses at all",
      "All computers in a home share the exact same private IP address simultaneously"
    ],
    "correctAnswerIndex": 0,
    "answer": "The ISP assigns a single public IP address to the home router, while the router uses DHCP to automatically assign unique private IP addresses (such as 192.168.1.x) to each device inside the home network, using NAT/PAT to translate between private and public addresses.",
    "explanation": {
      "ar": "في الشبكة المنزلية: الـ ISP بيدي للراوتر Public IP واحد بس من بره، والراوتر بيشغل DHCP server داخلي يوزع Private IP addresses (زي `192.168.1.x`) على الأجهزة في البيت، وبيستخدم NAT/PAT عشان يترجم الـ Private IPs للـ Public IP لما الأجهزة تطلع على الإنترنت.",
      "en": "A home network uses DHCP on the local router to assign private IP addresses (e.g., 192.168.x.x) to internal devices, while NAT/PAT maps those private addresses to the single public IP address provided by the ISP."
    },
    "keywords": [
      "Home Network IP",
      "Private IP",
      "Public IP",
      "DHCP",
      "NAT"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-40",
    "number": 85,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "network-ip",
    "page": 25,
    "question": "What is Port Address Translation 'PAT'?",
    "options": [
      "An extension of NAT (also called NAT Overload) that maps multiple private IP addresses to a single public IP address by assigning each session a unique TCP/UDP source port number",
      "A protocol that converts MAC addresses into physical cable lengths",
      "A routing algorithm that replaces BGP",
      "A method for encrypting email attachments"
    ],
    "correctAnswerIndex": 0,
    "answer": "Port Address Translation (PAT), also known as NAT overload, maps multiple internal private IP addresses to a single public IP address by tracking and differentiating each connection using unique source TCP/UDP port numbers (e.g., 128.123.45.67:1922).",
    "explanation": {
      "ar": "الـ PAT (Port Address Translation) هو نوع من الـ NAT بيسمح لعدة أجهزة ليها Private IPs مختلفة إنها تتشارك في Public IP واحد بس، عن طريق تمييز اتصال كل جهاز برقم Port فريد (Port number) بيتضاف جنب الـ Public IP في جدول الـ NAT.",
      "en": "Port Address Translation (PAT) allows many internal hosts with private IP addresses to share a single public IP address by distinguishing traffic flows via unique TCP/UDP port numbers."
    },
    "keywords": [
      "PAT",
      "Port Address Translation",
      "NAT Overload",
      "Port Numbers"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-41",
    "number": 86,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 25,
    "question": "A router on a network has IP address 128.123.45.67. A computer in the home network has a private IP address of 192.168.10.62. The public translated address is 128.123.45.67:1922. Which IP address is used for routing data packets over the public Internet?",
    "options": [
      "128.123.45.67 (the public IP address)",
      "192.168.10.62 (the private IP address)",
      "1922",
      "255.255.255.0"
    ],
    "correctAnswerIndex": 0,
    "answer": "128.123.45.67 (the router's public IP address is used by Internet routers to route data packets; the port 1922 is used by PAT on the home router to forward the packet back to 192.168.10.62).",
    "explanation": {
      "ar": "الـ Routers على الإنترنت العام مش بتشوف ولا بتعمل routing للـ Private IP (`192.168.10.62`)؛ العنوان اللي بيُستخدم في توجيه الـ packets على الإنترنت هو الـ Public IP بتاع الراوتر: `128.123.45.67` (ولما الباكيت توصل للراوتر، بيستخدم رقم البورت `1922` عشان يحولها للجهاز الداخلي `192.168.10.62`).",
      "en": "Public Internet routers route packets using the globally routable public IP address 128.123.45.67 (private addresses like 192.168.10.62 are not routable on the public Internet)."
    },
    "keywords": [
      "NAT Routing",
      "Public IP",
      "128.123.45.67",
      "PAT"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-42",
    "number": 87,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "physical-media",
    "page": 26,
    "question": "RJ-45 is ....................?",
    "options": [
      "An 8-pin (8P8C) standardized physical network connector used for terminating twisted-pair (UTP/STP) Ethernet cables",
      "A 4-pin connector used exclusively for analog telephone handsets",
      "A fiber-optic laser transceiver",
      "A wireless encryption protocol"
    ],
    "correctAnswerIndex": 0,
    "answer": "RJ-45 (Registered Jack 45) is the standard 8-position, 8-contact (8P8C) physical modular connector used on twisted-pair (UTP/STP) Ethernet network cables.",
    "explanation": {
      "ar": "الـ RJ-45 (Registered Jack 45) هو الكونكتور القياسي ذو الـ 8 أطراف نحاسية (8 pins/wires) اللي بيركب في طرف كابلات الـ Twisted Pair (UTP/STP) لتوصيل كروت الشبكة والـ Switches والـ Routers في شبكات الـ Ethernet.",
      "en": "RJ-45 is the standard 8-pin modular connector used with twisted-pair cables in Ethernet networks."
    },
    "keywords": [
      "RJ-45",
      "Ethernet Connector",
      "Twisted Pair"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-43",
    "number": 88,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 26,
    "question": "Uplink port is ..............?",
    "options": [
      "A special port on a hub or switch (where Tx and Rx pins are internally crossed) used to connect to another hub, switch, or router using a standard straight-through cable",
      "A port used exclusively for connecting printers",
      "A power socket on the back of a PC",
      "A TCP port number used by HTTP"
    ],
    "correctAnswerIndex": 0,
    "answer": "An uplink port is a designated port on a switch or hub (with internally reversed transmit/receive pairs) designed to connect to another switch, hub, or router (daisy-chaining/cascading) using a standard straight-through cable.",
    "explanation": {
      "ar": "الـ Uplink port هو منفذ خاص في الـ Switch أو الـ Hub بتكون أطراف الإرسال والاستقبال فيه معكوسة داخلياً، وبيُستخدم عشان يوصل الـ Switch بـ Switch تاني أو بـ Router باستخدام كابل عادي (Straight-through cable) لتوسيع الشبكة.",
      "en": "An uplink port is a port on a hub or switch designed to connect to another hub, switch, or router so the network can be expanded."
    },
    "keywords": [
      "Uplink Port",
      "Switch",
      "Hub"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-44",
    "number": 89,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "physical-media",
    "page": 26,
    "question": "Maximum speed and length for Category 6 (Cat 6) cable are .............?",
    "options": [
      "Speed: up to 1 Gbps (1000 Mbps) at 100 meters (and up to 10 Gbps over shorter distances up to 55 m); Maximum standard channel length: 100 meters",
      "Speed: 10 Mbps; Maximum length: 10 meters",
      "Speed: 100 Kbps; Maximum length: 500 meters",
      "Speed: 100 Gbps; Maximum length: 10 kilometers"
    ],
    "correctAnswerIndex": 0,
    "answer": "Maximum standard length: 100 meters (328 feet). Maximum speed: 1 Gbps (1000 Mbps) over the full 100 meters (and up to 10 Gbps over shorter runs up to 55 meters).",
    "explanation": {
      "ar": "كابل الـ Category 6 (Cat 6 UTP) أقصى طول قياسي ليه هو 100 متر (328 قدم)، وأقصى سرعة ليه هي 1 Gbps (1000 Mbps) لمسافة 100 متر (وبيوصل لـ 10 Gbps لمسافات قصيرة لحد 55 متر).",
      "en": "Category 6 (Cat 6) twisted-pair cable supports a maximum standard segment length of 100 meters and speeds of 1 Gbps (up to 10 Gbps at up to 55 meters)."
    },
    "keywords": [
      "Category 6",
      "Cat 6",
      "100 meters",
      "1 Gbps",
      "10 Gbps"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-45",
    "number": 90,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 2,
    "topic": "physical-media",
    "page": 27,
    "question": "Cross-connected (crossover cable) is ...........?",
    "options": [
      "A twisted-pair cable where transmit (Tx) and receive (Rx) wire pairs are swapped at one end, used to directly connect two similar devices (e.g., PC-to-PC, Switch-to-Switch, or Router-to-Router)",
      "A fiber optic cable broken in the middle",
      "A cable used to connect a PC to a wall power outlet",
      "A wireless Bluetooth connection"
    ],
    "correctAnswerIndex": 0,
    "answer": "A crossover connection (crossover cable) reverses the transmit (Tx) and receive (Rx) wire pairs between the two ends of an Ethernet cable, allowing two similar devices (such as computer-to-computer or switch-to-switch without an uplink/auto-MDIX port) to communicate directly.",
    "explanation": {
      "ar": "الـ Cross-connected (أو Crossover cable) هو توصيل بيتم فيه عكس أطراف الإرسال (Tx) مع أطراف الاستقبال (Rx) في طرفي الكابل، وبيُستخدم لتوصيل جهازين متشابهين ببعض مباشرة (زي كمبيوتر بكمبيوتر أو Switch بـ Switch).",
      "en": "A crossover cable swaps the transmit and receive pin pairs at one end to directly connect two like devices (such as two computers or two switches)."
    },
    "keywords": [
      "Crossover Cable",
      "Cross-connected",
      "Tx/Rx"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-46",
    "number": 91,
    "source": "question-bank",
    "type": "practical",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 27,
    "question": "In the star topology switch diagram on page 253 (3 Desktops: 192.168.5.20, 192.168.5.21, 192.168.5.22 and 1 Network Printer: 192.168.5.10 connected to a central Switch), how does the network operate?",
    "options": [
      "All 4 nodes belong to the 192.168.5.0/24 Class C LAN connected in a physical Star topology via a central Layer 2 Switch, which learns each device's MAC address and forwards frames directly to the target port",
      "The devices are in different WANs and require a satellite to print",
      "The switch broadcasts every packet to the Internet without MAC addresses",
      "The printer acts as a DHCP and DNS server for the Internet"
    ],
    "correctAnswerIndex": 0,
    "answer": "The diagram shows a Local Area Network (192.168.5.0/24) in a Star topology where three desktops (.20, .21, .22) and one printer (.10) connect to a central Switch using straight-through UTP cables. Each node has a unique 48-bit MAC address and 32-bit IP address; the switch uses its MAC address table to forward frames directly between any desktop and the printer.",
    "explanation": {
      "ar": "الرسمة في صفحة 253 بتوضح شبكة LAN على شكل Star Topology فيها 3 أجهزة Desktop (بعناوين `192.168.5.20`, `.21`, `.22`) وطابعة شبكية (`192.168.5.10`) متوصلين بـ Switch مركزي. كل جهاز ليه IP address في نفس الشبكة (Class C) وليه MAC address فريد، والـ Switch بيسجل الـ MAC address بتاع كل بورت عشان يوجه الـ frames مباشرة للجهاز المطلوب.",
      "en": "The diagram illustrates a star-topology Ethernet LAN on subnet 192.168.5.0/24 where three desktops and a printer connect to a central Layer 2 switch that forwards frames using their MAC addresses."
    },
    "keywords": [
      "Star Topology Diagram",
      "Switch",
      "MAC Table",
      "192.168.5.0"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-47",
    "number": 92,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 28,
    "question": "What is the command to ping 10.3.9.42 indefinitely (continuously until stopped) in Windows?",
    "options": [
      "ping -t 10.3.9.42",
      "ping -n 10.3.9.42",
      "ping -l 10.3.9.42",
      "ping -a 10.3.9.42"
    ],
    "correctAnswerIndex": 0,
    "answer": "ping -t 10.3.9.42",
    "explanation": {
      "ar": "في نظام Windows، عشان تعمل ping مستمر لما لا نهاية (indefinitely) لحد ما توقفه بـ `Ctrl+C`، بنستخدم الـ flag `-t`: يعني `ping -t 10.3.9.42`.",
      "en": "In Windows Command Prompt, the '-t' switch pings the specified host indefinitely until interrupted: 'ping -t 10.3.9.42'."
    },
    "keywords": [
      "ping -t",
      "Indefinite Ping",
      "ICMP",
      "CLI"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-48",
    "number": 93,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 28,
    "question": "What is the command to ping 192.168.5.36 20 times with 1024 bytes of data in Windows?",
    "options": [
      "ping -n 20 -l 1024 192.168.5.36",
      "ping -t 20 -s 1024 192.168.5.36",
      "ping -c 20 -b 1024 192.168.5.36",
      "ping 192.168.5.36 20 1024"
    ],
    "correctAnswerIndex": 0,
    "answer": "ping -n 20 -l 1024 192.168.5.36",
    "explanation": {
      "ar": "في أمر `ping` على Windows: الـ flag `-n` بيحدد عدد مرات الـ ping (هنا `-n 20`)، والـ flag `-l` (حرف L سمول من length) بيحدد حجم الـ data buffer بالـ bytes (هنا `-l 1024`). فيكون الأمر الكامل: `ping -n 20 -l 1024 192.168.5.36`.",
      "en": "In Windows, '-n 20' sets the echo request count to 20 and '-l 1024' sets the send buffer size to 1024 bytes: 'ping -n 20 -l 1024 192.168.5.36'."
    },
    "keywords": [
      "ping -n",
      "ping -l",
      "Ping Command",
      "CLI"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-49",
    "number": 94,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "network-ip",
    "page": 28,
    "question": "Abbreviation ARP is ................",
    "options": [
      "Address Resolution Protocol",
      "Automatic Routing Process",
      "Application Request Protocol",
      "Asynchronous Repeater Port"
    ],
    "correctAnswerIndex": 0,
    "answer": "Address Resolution Protocol",
    "explanation": {
      "ar": "اختصار ARP هو Address Resolution Protocol (بروتوكول تحليل العناوين).",
      "en": "ARP stands for Address Resolution Protocol."
    },
    "keywords": [
      "ARP",
      "Address Resolution Protocol",
      "Abbreviation"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-50",
    "number": 95,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "network-ip",
    "page": 29,
    "question": "An ARP request purpose is ..............?",
    "options": [
      "To resolve/map a known 32-bit IPv4 address to its corresponding 48-bit physical MAC address on a local network",
      "To translate a domain name like google.com into an IP address",
      "To assign a new IP address to a host when it boots up",
      "To encrypt TCP segments"
    ],
    "correctAnswerIndex": 0,
    "answer": "To discover (resolve) the 48-bit hardware MAC address of a host on the same LAN when only its 32-bit IPv4 address is known (by broadcasting an ARP request to all nodes on the subnet).",
    "explanation": {
      "ar": "الغرض من الـ ARP request هو معرفة الـ Physical MAC Address (48-bit) لجهاز معين في الشبكة المحلية لما نكون عارفين الـ IP Address (32-bit) بتاعه بس، فالجهاز بيبعت ARP Broadcast لكل الأجهزة يسأل: مين اللي معاه الـ IP ده يبعتلي الـ MAC بتاعه؟",
      "en": "The purpose of an ARP request is to resolve a known IPv4 address into its corresponding physical MAC address on a local area network."
    },
    "keywords": [
      "ARP Request",
      "IP to MAC",
      "Address Resolution"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-51",
    "number": 96,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "network-ip",
    "page": 29,
    "question": "Abbreviation ICMP is .............",
    "options": [
      "Internet Control Message Protocol",
      "Internal Connection Management Process",
      "Internet Configuration Media Protocol",
      "Integrated Channel Multiplexing Protocol"
    ],
    "correctAnswerIndex": 0,
    "answer": "Internet Control Message Protocol",
    "explanation": {
      "ar": "اختصار ICMP هو Internet Control Message Protocol، وهو البروتوكول المسؤول عن رسائل التحكم والأخطاء والفحص (زي `ping`) في طبقة الـ Network.",
      "en": "ICMP stands for Internet Control Message Protocol."
    },
    "keywords": [
      "ICMP",
      "Internet Control Message Protocol",
      "Abbreviation"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p2-52",
    "number": 97,
    "source": "question-bank",
    "type": "short-answer",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 29,
    "question": "Protocol analyzer (packet sniffer), the purpose is ...........?",
    "options": [
      "To capture, decode, inspect, and analyze network packets/traffic in real time for troubleshooting, performance analysis, and security auditing (e.g., Wireshark)",
      "To physically crimp RJ-45 connectors onto UTP cables",
      "To boost the Wi-Fi signal range across multiple floors",
      "To store backup copies of user hard drives"
    ],
    "correctAnswerIndex": 0,
    "answer": "To capture, decode, and analyze network traffic (frames/packets) flowing across a network for troubleshooting, performance monitoring, protocol debugging, and security analysis (e.g., Wireshark).",
    "explanation": {
      "ar": "الـ Protocol analyzer (أو الـ Packet Sniffer زي برنامج Wireshark) وظيفته التقاط وتحليل الـ packets اللي بتمر في الشبكة عشان نفحص محتويات الـ headers، نشخص أعطال الشبكة (Troubleshooting)، ونراقب الأداء والأمان.",
      "en": "A protocol analyzer (such as Wireshark) captures, decodes, and inspects network packets to troubleshoot network issues, analyze performance, and monitor security."
    },
    "keywords": [
      "Protocol Analyzer",
      "Wireshark",
      "Packet Sniffer"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  }
];

export const bankPart3Mcqs: Question[] = [
  {
    "id": "bank-p3-001",
    "number": 98,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 30,
    "question": "In a computer network, nodes are:",
    "options": [
      "the computer that originates the data",
      "the computer that routes the data",
      "the computer that terminates the data",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "الـ Node في الشبكة ممكن تكون الجهاز اللي بيبدأ إرسال الداتا (originates)، أو اللي بيوجهها في النص زي الراوتر (routes)، أو اللي بيستقبلها في النهاية (terminates)، فالإجابة هي all of the mentioned.",
      "en": "In a computer network, a node can be any device that originates, routes, or terminates data."
    },
    "keywords": [
      "Nodes",
      "Originate",
      "Route",
      "Terminate"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-002",
    "number": 99,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 30,
    "question": "Communication channel is shared by all the machines on the network in:",
    "options": [
      "broadcast network",
      "unicast network",
      "multicast network",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "broadcast network",
    "explanation": {
      "ar": "في الـ Broadcast network، كل الأجهزة في الشبكة بتتشارك في قناة اتصال واحدة (shared communication channel)، وأي packet بيبعتها جهاز بتوصل لكل الأجهزة التانية.",
      "en": "In a broadcast network, a single communication channel is shared by all machines on the network."
    },
    "keywords": [
      "Broadcast Network",
      "Shared Channel"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-003",
    "number": 100,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 30,
    "question": "Bluetooth is an example of:",
    "options": [
      "a personal area network",
      "local area network",
      "virtual private network",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "a personal area network",
    "explanation": {
      "ar": "تقنية الـ Bluetooth هي أشهر مثال على الـ PAN (Personal Area Network) اللي بتربط الأجهزة الشخصية لمسافة قصيرة جداً (حوالي 10 أمتار).",
      "en": "Bluetooth is a short-range wireless technology that forms a Personal Area Network (PAN)."
    },
    "keywords": [
      "Bluetooth",
      "PAN",
      "Personal Area Network"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-004",
    "number": 101,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 31,
    "question": "A _____ is a device that processes the routing information in the packet (and forwards packets between networks).",
    "options": [
      "bridge",
      "firewall",
      "router",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "router",
    "explanation": {
      "ar": "الـ Router هو الجهاز اللي بيقرأ ويعالج معلومات التوجيه (Routing information / IP address) في الـ packet عشان يوجهها بين الشبكات المختلفة.",
      "en": "A router is a Layer 3 device that inspects and processes routing information in packets to forward them across networks."
    },
    "keywords": [
      "Router",
      "Routing Information",
      "Packet"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-005",
    "number": 102,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 31,
    "question": "A list of protocols used by a certain system, one protocol per layer, is called a:",
    "options": [
      "protocol architecture",
      "protocol stack",
      "protocol suite",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "protocol stack",
    "explanation": {
      "ar": "قائمة البروتوكولات اللي بيستخدمها نظام معين بمعدل بروتوكول واحد في كل طبقة (one protocol per layer) بتتسمى Protocol stack (تعريف كتاب Tanenbaum).",
      "en": "A list of protocols used by a certain system, with one protocol per layer, is called a protocol stack."
    },
    "keywords": [
      "Protocol Stack",
      "Layered Architecture"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-006",
    "number": 103,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 31,
    "question": "Network congestion occurs:",
    "options": [
      "in case of traffic overloading",
      "when a system terminates",
      "when connection between two nodes terminates",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "in case of traffic overloading",
    "explanation": {
      "ar": "ازدحام الشبكة (Network congestion) بيحصل لما يكون فيه ضغط وترافيك زيادة عن سعة الشبكة والراوترات (traffic overloading).",
      "en": "Network congestion occurs in the event of traffic overloading when too many packets are present in a subnet."
    },
    "keywords": [
      "Network Congestion",
      "Traffic Overloading"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-007",
    "number": 104,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 32,
    "question": "Which of the following extends a private network across public networks?",
    "options": [
      "local area networks",
      "virtual private networks",
      "enterprise private networks",
      "storage area networks"
    ],
    "correctAnswerIndex": 1,
    "answer": "virtual private networks",
    "explanation": {
      "ar": "الـ VPN (Virtual Private Network) هي التقنية اللي بتمتد بيها شبكة خاصة (private network) عبر شبكة عامة زي الإنترنت (public network) بشكل آمن ومشفر.",
      "en": "A Virtual Private Network (VPN) extends a private network across a public network such as the Internet."
    },
    "keywords": [
      "VPN",
      "Virtual Private Network",
      "Public Network"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-008",
    "number": 105,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 32,
    "question": "The IETF standards documents are called:",
    "options": [
      "RFC",
      "RCF",
      "ID",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "RFC",
    "explanation": {
      "ar": "وثائق المعايير القياسية الصادرة عن منظمة IETF اسمها RFC (Request For Comments).",
      "en": "The Internet Engineering Task Force (IETF) publishes its technical standards documents as RFCs (Requests for Comments)."
    },
    "keywords": [
      "IETF",
      "RFC",
      "Request for Comments"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-009",
    "number": 106,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 33,
    "question": "The structure or format of data is called:",
    "options": [
      "Syntax",
      "Semantics",
      "Struct",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "Syntax",
    "explanation": {
      "ar": "في عناصر البروتوكول (Syntax, Semantics, Timing): الـ Syntax هو شكل أو تركيبة وترتيب البيانات (structure or format of data)، بينما الـ Semantics هو معنى كل قسم من الـ bits.",
      "en": "Syntax refers to the structure or format of the data, meaning the order in which they are presented."
    },
    "keywords": [
      "Syntax",
      "Semantics",
      "Protocol Elements"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-010",
    "number": 107,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 33,
    "question": "Data transfer between a computer and a traditional keyboard involves .............. transmission.",
    "options": [
      "Automatic",
      "Half-duplex",
      "Full-duplex",
      "Simplex"
    ],
    "correctAnswerIndex": 3,
    "answer": "Simplex",
    "explanation": {
      "ar": "الاتصال بين الـ Keyboard والكمبيوتر هو مثال كلاسيكي على الـ Simplex transmission (اتجاه واحد فقط: الكيبورد بيبعت بس ومبيستقبلش بيانات عرض من الشاشة).",
      "en": "Communication between a traditional keyboard and a computer is simplex because data flows in only one direction (from keyboard to computer)."
    },
    "keywords": [
      "Simplex",
      "Keyboard",
      "Transmission Modes"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-011",
    "number": 108,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 33,
    "question": "The primary (first) packet-switched network that became the foundation of the Internet was:",
    "options": [
      "CNNET",
      "NSFNET",
      "ASAPNET",
      "ARPANET"
    ],
    "correctAnswerIndex": 3,
    "answer": "ARPANET",
    "explanation": {
      "ar": "شبكة الـ ARPANET (Advanced Research Projects Agency Network) هي أول شبكة Packet-switched وهي النواة الأساسية اللي اتطور منها الإنترنت الحالي.",
      "en": "ARPANET was the first operational packet-switching network and the direct predecessor of the modern Internet."
    },
    "keywords": [
      "ARPANET",
      "Internet History"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-012",
    "number": 109,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 34,
    "question": "It is the physical path over which a message travels:",
    "options": [
      "Path",
      "Medium",
      "Protocol",
      "Route"
    ],
    "correctAnswerIndex": 1,
    "answer": "Medium",
    "explanation": {
      "ar": "المسار الفيزيائي اللي بتمشي فيه الرسالة من المرسل للمستقبل (سواء كابل نحاس، فايبر، أو موجات راديو) بيتسمى الـ Transmission Medium.",
      "en": "The transmission medium is the physical path by which a message travels from sender to receiver."
    },
    "keywords": [
      "Transmission Medium",
      "Physical Path"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-013",
    "number": 110,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "intro-models",
    "page": 34,
    "question": "Which organization has authority over interstate and international commerce in the communications field (in the US)?",
    "options": [
      "ITU-T",
      "IEEE",
      "FCC",
      "ISOC"
    ],
    "correctAnswerIndex": 2,
    "answer": "FCC",
    "explanation": {
      "ar": "هيئة الاتصالات الفيدرالية FCC (Federal Communications Commission) هي الجهة المسؤولة عن تنظيم التجارة والاتصالات السلكية واللاسلكية الدولية وبين الولايات.",
      "en": "The Federal Communications Commission (FCC) has authority over interstate and international commerce in the communications field."
    },
    "keywords": [
      "FCC",
      "Communications Standards"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-014",
    "number": 111,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 34,
    "question": "Which of these is NOT a network edge device?",
    "options": [
      "PC",
      "Smartphones",
      "Servers",
      "Switch"
    ],
    "correctAnswerIndex": 3,
    "answer": "Switch",
    "explanation": {
      "ar": "أجهزة الـ Network Edge (End systems / Hosts) بتشمل الـ PCs والـ Smartphones والـ Servers. أما الـ Switch والـ Router فبيعتبروا من أجهزة الـ Network Core / Switching devices.",
      "en": "PCs, smartphones, and servers are network edge devices (end systems/hosts), whereas a switch is a network core/access switching device."
    },
    "keywords": [
      "Network Edge",
      "Network Core",
      "Switch",
      "Hosts"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-015",
    "number": 112,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 35,
    "question": "A set of rules that manage/govern data communication:",
    "options": [
      "Protocols",
      "Standards",
      "RFCs",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "Protocols",
    "explanation": {
      "ar": "مجموعة القواعد اللي بتحكم وتدير عملية نقل البيانات (Data communication) هي الـ Protocols.",
      "en": "A protocol is a set of rules that governs data communications."
    },
    "keywords": [
      "Protocols",
      "Data Communication"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-016",
    "number": 113,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 35,
    "question": "Three or more devices share a single link in a ________ connection.",
    "options": [
      "Unipoint",
      "Multipoint",
      "Point to point",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "Multipoint",
    "explanation": {
      "ar": "لما يتشارك أكتر من جهازين في نفس الـ Link، الاتصال ده بيتسمى Multipoint (أو Multidrop) connection. أما لو بين جهازين اتنين بس فاسمه Point-to-point.",
      "en": "A multipoint (or multidrop) connection is one in which more than two specific devices share a single link."
    },
    "keywords": [
      "Multipoint",
      "Point-to-Point",
      "Line Configuration"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-017",
    "number": 114,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 35,
    "question": "OSI stands for:",
    "options": [
      "open system interconnection",
      "operating system interface",
      "optical service implementation",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "open system interconnection",
    "explanation": {
      "ar": "اختصار OSI هو Open Systems Interconnection، وهو النموذج المرجعي المكون من 7 طبقات اللي طورته منظمة ISO.",
      "en": "OSI stands for Open Systems Interconnection."
    },
    "keywords": [
      "OSI",
      "Open Systems Interconnection"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-018",
    "number": 115,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 36,
    "question": "The OSI model has ...... layers.",
    "options": [
      "3",
      "5",
      "6",
      "7"
    ],
    "correctAnswerIndex": 3,
    "answer": "7",
    "explanation": {
      "ar": "الـ OSI model بيتكون من 7 طبقات (Physical, Data Link, Network, Transport, Session, Presentation, Application).",
      "en": "The ISO/OSI reference model consists of 7 layers."
    },
    "keywords": [
      "OSI Model",
      "7 Layers"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-019",
    "number": 116,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 36,
    "question": "The TCP/IP model does not have .......... layer.",
    "options": [
      "session layer",
      "presentation layer",
      "application layer",
      "both (1) and (2)"
    ],
    "correctAnswerIndex": 3,
    "answer": "both (1) and (2)",
    "explanation": {
      "ar": "نموذج الـ TCP/IP مفيهوش Session layer ولا Presentation layer كطبقات منفصلة (وظائفهم مدمجة جوه الـ Application layer في حال الاحتياج ليها)، فالإجابة هي both (1) and (2).",
      "en": "The TCP/IP protocol suite does not have separate session or presentation layers (both 1 and 2)."
    },
    "keywords": [
      "TCP/IP Model",
      "Session Layer",
      "Presentation Layer"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-020",
    "number": 117,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 36,
    "question": "Which layer links the network support layers and user support layers in the OSI model?",
    "options": [
      "session layer",
      "data link layer",
      "transport layer",
      "network layer"
    ],
    "correctAnswerIndex": 2,
    "answer": "transport layer",
    "explanation": {
      "ar": "في الـ OSI model: الطبقات 1 و2 و3 اسمها Network support layers، والطبقات 5 و6 و7 اسمها User support layers، وطبقة الـ Transport layer (Layer 4) هي حلقة الوصل اللي بتربط المجموعتين ببعض.",
      "en": "The Transport layer (Layer 4) links the lower network support layers (Layers 1–3) and the upper user support layers (Layers 5–7)."
    },
    "keywords": [
      "Transport Layer",
      "Network Support Layers",
      "User Support Layers",
      "OSI Model"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-021",
    "number": 118,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 37,
    "question": "Which address is used in the TCP/IP protocols?",
    "options": [
      "physical address and logical address",
      "port address",
      "specific address",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "بروتوكولات الـ TCP/IP بتستخدم 4 مستويات من العناوين (حسب كتاب Forouzan): Physical address (MAC)، وLogical address (IP)، وPort address (TCP/UDP port)، وSpecific address (زي الـ URL أو الـ Email address)، فالإجابة هي all of the mentioned.",
      "en": "TCP/IP utilizes four levels of addresses: physical (MAC) addresses, logical (IP) addresses, port addresses, and application-specific addresses (all of the mentioned)."
    },
    "keywords": [
      "TCP/IP Addressing",
      "Physical Address",
      "Logical Address",
      "Port Address",
      "Specific Address"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-022",
    "number": 119,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 37,
    "question": "The TCP/IP model was developed _____ the OSI model.",
    "options": [
      "prior to",
      "after",
      "simultaneous to",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "prior to",
    "explanation": {
      "ar": "نموذج الـ TCP/IP اتطور فعلياً قبل (prior to) نموذج الـ OSI القياسي بحوالي عقد من الزمن.",
      "en": "The TCP/IP protocol suite was developed prior to the ISO OSI reference model."
    },
    "keywords": [
      "TCP/IP vs OSI",
      "Prior to"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-023",
    "number": 120,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 37,
    "question": "The physical layer is responsible for:",
    "options": [
      "bit-by-bit delivery",
      "process to process delivery",
      "application to application delivery",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "bit-by-bit delivery",
    "explanation": {
      "ar": "الـ Physical layer مسؤولة عن نقل الـ bits الفردية من عقدة للتانية عبر الوسط الفيزيائي (bit-by-bit delivery). أما الـ process-to-process فهي مسؤولية الـ Transport layer.",
      "en": "The physical layer is responsible for bit-by-bit delivery over a physical transmission medium."
    },
    "keywords": [
      "Physical Layer",
      "Bit-by-bit Delivery"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-024",
    "number": 121,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 38,
    "question": "Which transmission media has the highest transmission speed in a network?",
    "options": [
      "coaxial cable",
      "twisted pair cable",
      "optical fiber",
      "electrical cable"
    ],
    "correctAnswerIndex": 2,
    "answer": "optical fiber",
    "explanation": {
      "ar": "كابلات الألياف الضوئية (Optical fiber) ليها أعلى سرعة نقل بيانات (Transmission speed) في الشبكات.",
      "en": "Optical fiber provides the highest transmission speed among all networking transmission media."
    },
    "keywords": [
      "Optical Fiber",
      "Transmission Speed"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-025",
    "number": 122,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 38,
    "question": "Bits can be sent over guided and unguided media as analog signal by:",
    "options": [
      "digital modulation",
      "amplitude modulation",
      "frequency modulation",
      "phase modulation"
    ],
    "correctAnswerIndex": 0,
    "answer": "digital modulation",
    "explanation": {
      "ar": "تحويل الـ Digital bits لإشارات Analog عشان تتبعت في الأوساط السلكية أو اللاسلكية بيتم عن طريق الـ Digital modulation (اللي بيشمل ASK, FSK, PSK, QAM).",
      "en": "Digital modulation converts digital bits into analog signals (using techniques such as ASK, FSK, PSK, and QAM) for transmission over guided and unguided media."
    },
    "keywords": [
      "Digital Modulation",
      "Analog Signal",
      "Physical Layer"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-026",
    "number": 123,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 39,
    "question": "The physical layer provides:",
    "options": [
      "mechanical specifications of electrical connectors and cables",
      "electrical specification of transmission line signal level",
      "specification for IR over optical fiber",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "الـ Physical layer بتحدد المواصفات الميكانيكية للكونكتورات والكابلات، والمواصفات الكهربائية لمستوى الفولت والإشارات، والمواصفات الضوئية للفايبر، فالإجابة هي all of the mentioned.",
      "en": "The physical layer defines mechanical, electrical, and optical specifications for cables, connectors, voltage levels, and optical fiber."
    },
    "keywords": [
      "Physical Layer Specifications",
      "Mechanical",
      "Electrical",
      "Optical"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-027",
    "number": 124,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 39,
    "question": "In asynchronous serial communication, the physical layer provides:",
    "options": [
      "start and stop signaling",
      "flow control",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "both (1) and (2)",
    "explanation": {
      "ar": "في الـ Asynchronous serial communication (زي RS-232)، الـ Physical layer بتوفر إشارات البداية والنهاية (start and stop signaling) وكمان التحكم في التدفق على مستوى الإشارات (hardware/software flow control)، فالإجابة هي both (1) and (2).",
      "en": "In asynchronous serial communication, the physical layer provides both start/stop bit signaling and hardware/character flow control."
    },
    "keywords": [
      "Asynchronous Serial",
      "Start and Stop Signaling",
      "Flow Control"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-028",
    "number": 125,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "physical-media",
    "page": 39,
    "question": "The physical layer is responsible for:",
    "options": [
      "line coding",
      "channel coding",
      "modulation",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "الـ Physical layer مسؤولة عن الـ Line coding (تحويل الـ bits لإشارات رقمية)، والـ Channel coding (تصحيح الأخطاء الفيزيائي FEC)، والـ Modulation (التعديل التماثلي)، فالإجابة هي all of the mentioned.",
      "en": "The physical layer performs line coding, physical-layer channel coding (FEC), and modulation."
    },
    "keywords": [
      "Line Coding",
      "Channel Coding",
      "Modulation",
      "Physical Layer"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-029",
    "number": 126,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 40,
    "question": "The physical layer translates logical communication requests from the ______ into hardware-specific operations.",
    "options": [
      "data link layer",
      "network layer",
      "transport layer",
      "application layer"
    ],
    "correctAnswerIndex": 0,
    "answer": "data link layer",
    "explanation": {
      "ar": "بما إن الـ Data link layer (Layer 2) هي الطبقة اللي فوق الـ Physical layer (Layer 1) مباشرةً، فالـ Physical layer بتستقبل طلبات الإرسال من الـ Data link layer وتحولها لعمليات هاردوير وإشارات فيزيائية.",
      "en": "The physical layer sits directly below the data link layer and translates logical transmission requests from the data link layer into hardware-specific signal operations."
    },
    "keywords": [
      "Physical Layer",
      "Data Link Layer",
      "Layer Interaction"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-030",
    "number": 127,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 40,
    "question": "A single channel is shared by multiple signals by:",
    "options": [
      "analog modulation",
      "digital modulation",
      "multiplexing",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "multiplexing",
    "explanation": {
      "ar": "عملية مشاركة قناة اتصال واحدة (single channel) بين عدة إشارات في نفس الوقت بتتسمى Multiplexing (زي FDM, TDM, WDM).",
      "en": "Multiplexing is the set of techniques that allows the simultaneous transmission of multiple signals across a single data link."
    },
    "keywords": [
      "Multiplexing",
      "Shared Channel"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-031",
    "number": 128,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 41,
    "question": "Wireless transmission of data can be done via:",
    "options": [
      "radio waves",
      "microwaves",
      "infrared",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "الأوساط اللاسلكية (Unguided media) لنقل البيانات بتشمل موجات الراديو (Radio waves)، الميكروويف (Microwaves)، والأشعة تحت الحمراء (Infrared)، فالإجابة هي all of the mentioned.",
      "en": "Wireless (unguided) communication uses electromagnetic waves including radio waves, microwaves, and infrared."
    },
    "keywords": [
      "Wireless Media",
      "Radio Waves",
      "Microwaves",
      "Infrared"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-032",
    "number": 129,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 41,
    "question": "The data link layer takes the packets from ......... and encapsulates them into frames for transmission.",
    "options": [
      "network layer",
      "physical layer",
      "transport layer",
      "application layer"
    ],
    "correctAnswerIndex": 0,
    "answer": "network layer",
    "explanation": {
      "ar": "طبقة الـ Data link layer (Layer 2) بتاخد الـ packets (datagrams) من طبقة الـ Network layer (Layer 3) اللي فوقيها وتعملها تغليف (encapsulation) جوه frames عشان تتبعت.",
      "en": "The data link layer receives packets from the network layer and encapsulates them into frames for transmission."
    },
    "keywords": [
      "Data Link Layer",
      "Network Layer",
      "Encapsulation",
      "Frames"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-033",
    "number": 130,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 41,
    "question": "Which of the following is NOT done by the data link layer?",
    "options": [
      "framing",
      "error control",
      "flow control",
      "channel coding"
    ],
    "correctAnswerIndex": 3,
    "answer": "channel coding",
    "explanation": {
      "ar": "الـ Data link layer بتقوم بـ Framing، وError control، وFlow control. أما الـ Channel coding فهي من مهام الـ Physical layer.",
      "en": "Framing, error control, and flow control are functions of the data link layer, whereas channel coding is a physical layer function."
    },
    "keywords": [
      "Data Link Layer",
      "Channel Coding",
      "Framing"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-034",
    "number": 131,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 42,
    "question": "Header of a frame generally includes:",
    "options": [
      "synchronization bytes",
      "addresses",
      "frame identifier",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "الـ Frame header بيضم وحدات التزامن (synchronization bytes/preamble)، العناوين الفيزيائية (MAC addresses)، ومعرف نوع أو رقم الإطار (frame identifier/type)، فالإجابة هي all of the mentioned.",
      "en": "A data link frame header generally contains synchronization bytes, source/destination hardware addresses, and frame identifiers/control fields."
    },
    "keywords": [
      "Frame Header",
      "Synchronization",
      "Addresses"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-035",
    "number": 132,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 42,
    "question": "When 2 or more bits in a data unit have been changed during transmission, the error is called:",
    "options": [
      "random error",
      "burst error",
      "inverted error",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "burst error",
    "explanation": {
      "ar": "لما يتغير 2 bits أو أكتر في وحدة البيانات أثناء النقل نتيجة الشوشرة، الخطأ ده بيتسمى Burst error (ولو bit واحدة بس اسمها Single-bit error).",
      "en": "A burst error means that two or more bits in the data unit have changed from 1 to 0 or from 0 to 1 during transmission."
    },
    "keywords": [
      "Burst Error",
      "Error Detection",
      "Data Link Layer"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-036",
    "number": 133,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 43,
    "question": "CRC stands for:",
    "options": [
      "cyclic redundancy check",
      "code repeat check",
      "code redundancy check",
      "cyclic repeat check"
    ],
    "correctAnswerIndex": 0,
    "answer": "cyclic redundancy check",
    "explanation": {
      "ar": "اختصار CRC هو Cyclic Redundancy Check، وهي خوارزمية قوية جداً لاكتشاف الأخطاء مبنية على القسمة المطولة الثنائية (binary division) وتُستخدم في الـ Ethernet FCS.",
      "en": "CRC stands for Cyclic Redundancy Check."
    },
    "keywords": [
      "CRC",
      "Cyclic Redundancy Check",
      "Error Detection"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-037",
    "number": 134,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 43,
    "question": "Which of the following is a data link protocol?",
    "options": [
      "Ethernet",
      "point to point protocol",
      "HDLC",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "بروتوكول الـ Ethernet، والـ PPP (Point-to-Point Protocol)، والـ HDLC (High-Level Data Link Control) كلها بروتوكولات شغالة في طبقة الـ Data Link Layer، فالإجابة هي all of the mentioned.",
      "en": "Ethernet, Point-to-Point Protocol (PPP), and High-Level Data Link Control (HDLC) are all data link layer protocols."
    },
    "keywords": [
      "Data Link Protocols",
      "Ethernet",
      "PPP",
      "HDLC"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-038",
    "number": 135,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 43,
    "question": "............ is the multiple access protocol for channel access control?",
    "options": [
      "CSMA/CD",
      "CSMA/CA",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "both (1) and (2)",
    "explanation": {
      "ar": "كل من CSMA/CD (في الـ Wired Ethernet) وCSMA/CA (في الـ Wireless LAN 802.11) هم بروتوكولات Multiple Access للتحكم في الوصول للقناة المشتركة، فالإجابة هي both (1) and (2).",
      "en": "Both CSMA/CD (Collision Detection) and CSMA/CA (Collision Avoidance) are random-access multiple access protocols for channel access control."
    },
    "keywords": [
      "CSMA/CD",
      "CSMA/CA",
      "Multiple Access"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-039",
    "number": 136,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 44,
    "question": "The network layer is concerned with __________ of data.",
    "options": [
      "bits",
      "frames",
      "packets",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "packets",
    "explanation": {
      "ar": "وحدة البيانات (PDU) في الـ Physical layer هي bits، وفي الـ Data link layer هي frames، وفي الـ Network layer هي packets (أو datagrams)، وفي الـ Transport layer هي segments.",
      "en": "The network layer processes data in units called packets (or datagrams)."
    },
    "keywords": [
      "Network Layer",
      "Packets",
      "PDU"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-040",
    "number": 137,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "network-ip",
    "page": 44,
    "question": "Which one of the following is NOT a function of the network layer?",
    "options": [
      "routing",
      "inter-networking",
      "congestion control",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "none of the mentioned",
    "explanation": {
      "ar": "في منهج Tanenbaum (اللي متاخد منه السؤال ده بالنص من Sanfoundry): الـ Routing والـ Inter-networking والـ Congestion control كلها من وظائف الـ Network layer، وبالتالي مفيش ولا واحدة منهم مش تبعها، فالإجابة هي none of the mentioned.",
      "en": "Routing, internetworking, and subnet congestion control are all functions of the network layer, so the answer is 'none of the mentioned'."
    },
    "keywords": [
      "Network Layer Functions",
      "Routing",
      "Internetworking",
      "Congestion Control"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-041",
    "number": 138,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 44,
    "question": "The 4-byte IPv4 address consists of:",
    "options": [
      "network address",
      "host address",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "both (1) and (2)",
    "explanation": {
      "ar": "عنوان الـ IPv4 (طوله 4 bytes = 32 bits) بيتكون من جزئين مع بعض: الـ Network address (معرف الشبكة) والـ Host address (معرف الجهاز)، فالإجابة هي both (1) and (2).",
      "en": "A 4-byte (32-bit) IPv4 address consists of both a network address prefix and a host address identifier."
    },
    "keywords": [
      "IPv4 Address",
      "Network Address",
      "Host Address"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-042",
    "number": 139,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 45,
    "question": "In a virtual circuit network, each packet contains:",
    "options": [
      "full source and destination address",
      "a short VC number",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "a short VC number",
    "explanation": {
      "ar": "في شبكات الـ Virtual Circuit (VC)، بما إن المسار بيتحدد مسبقاً وقت الـ setup، فكل packet مش محتاجة تشيل عنوان المرسل والمستقبل الكامل، بل بتشيل بس رقم تعريفي قصير للدائرة الافتراضية اسمه Short VC number (VCI).",
      "en": "In a virtual-circuit network, once the circuit is established, each data packet carries a short Virtual Circuit (VC) number in its header rather than full source and destination addresses."
    },
    "keywords": [
      "Virtual Circuit",
      "VC Number",
      "Packet Header"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-043",
    "number": 140,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 45,
    "question": "Which one of the following routing algorithms can be used for network layer design?",
    "options": [
      "shortest path algorithm",
      "distance vector routing",
      "link state routing",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "خوارزميات الـ Shortest path (Dijkstra)، والـ Distance vector (Bellman-Ford / RIP)، والـ Link state (OSPF) كلها خوارزميات توجيه أساسية في طبقة الـ Network layer.",
      "en": "Shortest path routing, distance vector routing, and link state routing are all standard routing algorithms used in the network layer."
    },
    "keywords": [
      "Routing Algorithms",
      "Shortest Path",
      "Distance Vector",
      "Link State"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-044",
    "number": 141,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "network-ip",
    "page": 45,
    "question": "Multi-destination routing:",
    "options": [
      "is the same as broadcast routing",
      "contains the list of all destinations",
      "data is not sent by packets",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "contains the list of all destinations",
    "explanation": {
      "ar": "في الـ Multi-destination routing، كل packet بتحتوي على قائمة بكل الـ destinations المطلوب الوصول ليها (أو bitmap بتحددهم)، والراوتر بيقسم القائمة لما المسارات تتفرع.",
      "en": "In multi-destination routing, each packet contains either a list of all target destinations or a bit map indicating the desired destinations."
    },
    "keywords": [
      "Multi-destination Routing",
      "Routing"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-045",
    "number": 142,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 46,
    "question": "A subset of a network that includes all the routers but contains no loops is called:",
    "options": [
      "spanning tree",
      "spider structure",
      "spider tree",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "spanning tree",
    "explanation": {
      "ar": "الـ Spanning tree هي مجموعة جزئية من الشبكة بتضم كل الـ routers (أو الـ bridges/switches) ولكن بدون أي حلقات مغلقة (no loops) لمنع دوران الـ broadcast إلى ما لا نهاية.",
      "en": "A spanning tree is a subset of a network graph that includes all routers (vertices) but contains no loops (cycles)."
    },
    "keywords": [
      "Spanning Tree",
      "Loop-Free",
      "Routing"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-046",
    "number": 143,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "network-ip",
    "page": 46,
    "question": "Which one of the following algorithms is NOT used for congestion control?",
    "options": [
      "traffic aware routing",
      "admission control",
      "load shedding",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "none of the mentioned",
    "explanation": {
      "ar": "الـ Traffic-aware routing، والـ Admission control، والـ Load shedding كلها طرق قياسية للتحكم في الازدحام (Congestion control) في الـ Network layer، فالإجابة هي none of the mentioned.",
      "en": "Traffic-aware routing, admission control, and load shedding are all legitimate congestion control techniques, so the answer is 'none of the mentioned'."
    },
    "keywords": [
      "Congestion Control",
      "Traffic Aware Routing",
      "Admission Control",
      "Load Shedding"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-047",
    "number": 144,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 47,
    "question": "The network layer protocol of the Internet is:",
    "options": [
      "ethernet",
      "internet protocol",
      "hypertext transfer protocol",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "internet protocol",
    "explanation": {
      "ar": "البروتوكول الأساسي لطبقة الـ Network layer في الإنترنت هو الـ IP (Internet Protocol). أما Ethernet فهو Data link، وHTTP هو Application.",
      "en": "The primary network layer protocol of the Internet is the Internet Protocol (IP)."
    },
    "keywords": [
      "Internet Protocol",
      "IP",
      "Network Layer"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-048",
    "number": 145,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 47,
    "question": "ICMP is primarily used for:",
    "options": [
      "error and diagnostic functions",
      "addressing",
      "forwarding",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "error and diagnostic functions",
    "explanation": {
      "ar": "بروتوكول الـ ICMP (Internet Control Message Protocol) بيُستخدم بشكل أساسي للإبلاغ عن الأخطاء (error reporting) ووظائف التشخيص والفحص (diagnostic functions زي `ping` و`traceroute`).",
      "en": "ICMP is primarily used by hosts and routers for error reporting and network diagnostic functions."
    },
    "keywords": [
      "ICMP",
      "Error and Diagnostic Functions"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-049",
    "number": 146,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 47,
    "question": "Transport layer aggregates data from different applications into a single stream before passing it to:",
    "options": [
      "network layer",
      "data link layer",
      "application layer",
      "physical layer"
    ],
    "correctAnswerIndex": 0,
    "answer": "network layer",
    "explanation": {
      "ar": "عملية الـ Multiplexing في طبقة الـ Transport بتجمع الداتا من التطبيقات المختلفة وتغلفها بـ transport header وتمررها للطبقة اللي تحتيها مباشرة وهي الـ Network layer.",
      "en": "The transport layer multiplexes data from various application processes and passes the resulting segments down to the network layer."
    },
    "keywords": [
      "Transport Layer",
      "Multiplexing",
      "Network Layer"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-050",
    "number": 147,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 48,
    "question": "Which one of the following is a transport layer protocol used on the Internet?",
    "options": [
      "TCP",
      "UDP",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "both (1) and (2)",
    "explanation": {
      "ar": "أشهر بروتوكولين في طبقة الـ Transport على الإنترنت هما الـ TCP (Transmission Control Protocol) والـ UDP (User Datagram Protocol)، فالإجابة هي both (1) and (2).",
      "en": "Both TCP and UDP are core transport layer protocols used on the Internet."
    },
    "keywords": [
      "TCP",
      "UDP",
      "Transport Layer"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-051",
    "number": 148,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 48,
    "question": "User Datagram Protocol (UDP) is called connectionless because:",
    "options": [
      "all UDP packets are treated independently by the transport layer",
      "it sends data as a stream of related packets",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "all UDP packets are treated independently by the transport layer",
    "explanation": {
      "ar": "الـ UDP بيتسمى Connectionless لأن مفيش handshaking قبل الإرسال، وكل UDP datagram بتتعامل بشكل مستقل تماماً (independently) عن غيرها في طبقة الـ Transport.",
      "en": "UDP is connectionless because there is no connection setup and each UDP datagram is handled independently by the transport layer."
    },
    "keywords": [
      "UDP",
      "Connectionless",
      "Independent Packets"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-052",
    "number": 149,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 49,
    "question": "The Transmission Control Protocol (TCP) is:",
    "options": [
      "connection oriented protocol",
      "uses a three-way handshake to establish a connection",
      "receives data from an application as a single stream",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "بروتوكول الـ TCP هو بروتوكول Connection-oriented، بيستخدم الـ Three-way handshake (SYN, SYN-ACK, ACK) لبدء الاتصال، وبيستلم الداتا من الأبلكيشن كـ byte stream متصل، فالإجابة هي all of the mentioned.",
      "en": "TCP is a connection-oriented protocol that establishes connections via a three-way handshake and treats application data as a continuous byte stream."
    },
    "keywords": [
      "TCP",
      "Connection-Oriented",
      "Three-Way Handshake",
      "Byte Stream"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-053",
    "number": 150,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 49,
    "question": "An endpoint of an inter-process communication flow across a computer network is called:",
    "options": [
      "socket",
      "pipe",
      "port",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "socket",
    "explanation": {
      "ar": "الـ Socket هو نقطة النهاية (endpoint) للتواصل بين البرامج (inter-process communication) عبر الشبكة، وبيمثل البوابة بين الـ Application layer والـ Transport layer (بيتكون من IP + Port).",
      "en": "A socket is an endpoint of a two-way inter-process communication flow across an IP-based computer network."
    },
    "keywords": [
      "Socket",
      "IPC Endpoint",
      "Transport Layer"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-054",
    "number": 151,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "transport-tcp-udp",
    "page": 49,
    "question": "Socket-style API for Windows is called:",
    "options": [
      "wsock",
      "Winsock",
      "wins",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "Winsock",
    "explanation": {
      "ar": "واجهة برمجة الـ Sockets في نظام Windows اسمها Winsock (Windows Sockets API).",
      "en": "The socket programming API for Microsoft Windows is called Winsock (Windows Sockets)."
    },
    "keywords": [
      "Winsock",
      "Socket API",
      "Windows"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-055",
    "number": 152,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "transport-tcp-udp",
    "page": 50,
    "question": "Which one of the following is a version of UDP with congestion control?",
    "options": [
      "datagram congestion control protocol",
      "stream control transmission protocol",
      "structured stream transport",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "datagram congestion control protocol",
    "explanation": {
      "ar": "بروتوكول DCCP (Datagram Congestion Control Protocol) هو بروتوكول transport بيشبه الـ UDP في نقل الـ datagrams لكن مزود بآليات Congestion control.",
      "en": "Datagram Congestion Control Protocol (DCCP) is a message-oriented transport layer protocol that acts like UDP with built-in congestion control."
    },
    "keywords": [
      "DCCP",
      "Datagram Congestion Control Protocol",
      "UDP"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-056",
    "number": 153,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 50,
    "question": "Transport layer protocols deal with:",
    "options": [
      "application to application communication",
      "process to process communication",
      "node-to-node communication",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "process to process communication",
    "explanation": {
      "ar": "طبقة الـ Transport مسؤولة عن التواصل من عملية لعملية شغالة على الأجهزة (Process-to-process communication) باستخدام الـ Port numbers. أما الـ Node-to-node فهي Data Link، والـ Host-to-host هي Network.",
      "en": "Transport layer protocols provide logical process-to-process communication between application processes running on different hosts."
    },
    "keywords": [
      "Process to Process",
      "Transport Layer"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-057",
    "number": 154,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "transport-tcp-udp",
    "page": 50,
    "question": "Which one of the following is a transport layer protocol?",
    "options": [
      "stream control transmission protocol",
      "internet control message protocol",
      "neighbor discovery protocol",
      "dynamic host configuration protocol"
    ],
    "correctAnswerIndex": 0,
    "answer": "stream control transmission protocol",
    "explanation": {
      "ar": "بروتوكول الـ SCTP (Stream Control Transmission Protocol) هو بروتوكول في طبقة الـ Transport layer (زي TCP وUDP). أما ICMP وNDP فهم في الـ Network layer، وDHCP في الـ Application layer.",
      "en": "Stream Control Transmission Protocol (SCTP) is a transport layer protocol, whereas ICMP and NDP operate at the network layer and DHCP operates at the application layer."
    },
    "keywords": [
      "SCTP",
      "Stream Control Transmission Protocol",
      "Transport Layer"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-058",
    "number": 155,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 51,
    "question": "Which protocol allows a user at one site to establish a connection to another site and then pass keystrokes from the local host to the remote host?",
    "options": [
      "HTTP",
      "FTP",
      "telnet",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "telnet",
    "explanation": {
      "ar": "بروتوكول الـ Telnet هو بروتوكول دخول عن بعد (Remote login) بيسمح للمستخدم إنه يفتح جلسة اتصال مع جهاز بعيد (remote host) ويبعتله ضغطات الكيبورد (keystrokes) كأنه قاعد قدامه.",
      "en": "Telnet is an application protocol that enables remote login, passing keystrokes from the local host to a remote host over TCP port 23."
    },
    "keywords": [
      "Telnet",
      "Remote Login",
      "Application Layer"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-059",
    "number": 156,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 51,
    "question": "An application layer protocol defines:",
    "options": [
      "types of messages exchanged",
      "message format, syntax, and semantics",
      "rules for when and how processes send and respond to messages",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "أي بروتوكول في الـ Application layer بيحدد: أنواع الرسائل المتبادلة (requests/responses)، الـ syntax والـ semantics بتاعة الرسائل، وقواعد إمتى وإزاي الـ processes تبعت وترد على الرسائل، فالإجابة هي all of the mentioned.",
      "en": "An application-layer protocol defines message types, message syntax and semantics, and rules for when and how processes send and respond to messages."
    },
    "keywords": [
      "Application Layer Protocol",
      "Syntax",
      "Semantics",
      "Message Types"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-060",
    "number": 157,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 52,
    "question": "Which one of the following protocols delivers/stores mail to the receiver's mail server?",
    "options": [
      "simple mail transfer protocol",
      "post office protocol",
      "internet mail access protocol",
      "hypertext transfer protocol"
    ],
    "correctAnswerIndex": 0,
    "answer": "simple mail transfer protocol",
    "explanation": {
      "ar": "بروتوكول الـ SMTP (Simple Mail Transfer Protocol) هو المسؤول عن إرسال وتوصيل الإيميل من الـ sender ولحد ما يتخزن في الـ mail server بتاع المستلم (Push protocol). أما POP3 وIMAP فبيسحبوا الإيميل من السيرفر لجهاز المستلم.",
      "en": "Simple Mail Transfer Protocol (SMTP) pushes and delivers email messages from the sender's mail server to the receiver's mail server."
    },
    "keywords": [
      "SMTP",
      "Simple Mail Transfer Protocol",
      "Email Delivery"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-061",
    "number": 158,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 52,
    "question": "The ASCII encoding of binary data (commonly used in MIME email attachments) is called:",
    "options": [
      "base 64 encoding",
      "base 32 encoding",
      "base 16 encoding",
      "base 8 encoding"
    ],
    "correctAnswerIndex": 0,
    "answer": "base 64 encoding",
    "explanation": {
      "ar": "تشفير أو ترميز البيانات الثنائية (Binary data زي الصور والصوت) إلى حروف 7-bit ASCII عشان تتبعت عبر الإيميل (MIME) بيتسمى Base64 encoding.",
      "en": "Base64 encoding converts binary data into a 64-character subset of US-ASCII so it can be safely transmitted over 7-bit ASCII protocols like SMTP."
    },
    "keywords": [
      "Base64 Encoding",
      "ASCII",
      "MIME"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-062",
    "number": 159,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 52,
    "question": "Which one of the following is an Internet standard protocol for managing devices on an IP network?",
    "options": [
      "dynamic host configuration protocol",
      "simple network management protocol",
      "internet message access protocol",
      "media gateway protocol"
    ],
    "correctAnswerIndex": 1,
    "answer": "simple network management protocol",
    "explanation": {
      "ar": "بروتوكول الـ SNMP (Simple Network Management Protocol) هو البروتوكول القياسي لإدارة ومراقبة الأجهزة (الراوترات، السويتشات، السيرفرات) على شبكات الـ IP.",
      "en": "Simple Network Management Protocol (SNMP) is the Internet standard protocol for monitoring and managing devices on IP networks."
    },
    "keywords": [
      "SNMP",
      "Simple Network Management Protocol",
      "Network Management"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-063",
    "number": 160,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 53,
    "question": "Which one of the following is NOT an application layer protocol?",
    "options": [
      "media gateway protocol",
      "dynamic host configuration protocol",
      "resource reservation protocol",
      "session initiation protocol"
    ],
    "correctAnswerIndex": 2,
    "answer": "resource reservation protocol",
    "explanation": {
      "ar": "بروتوكول الـ RSVP (Resource Reservation Protocol) هو بروتوكول تحكم وتشوير في طبقة الـ Network/Transport لحجز الموارد (QoS)، ومش بروتوكول Application layer (بينما DHCP وSIP وMGCP في الـ Application layer).",
      "en": "Resource Reservation Protocol (RSVP) is a network/transport-layer control signaling protocol for reserving resources, not an application layer protocol."
    },
    "keywords": [
      "RSVP",
      "Resource Reservation Protocol",
      "Application Layer"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-064",
    "number": 161,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 53,
    "question": "Which protocol is a signaling communication protocol used for controlling multimedia communication sessions (such as voice and video calls over IP)?",
    "options": [
      "session initiation protocol",
      "session modeling protocol",
      "session maintenance protocol",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "session initiation protocol",
    "explanation": {
      "ar": "بروتوكول الـ SIP (Session Initiation Protocol) هو بروتوكول الـ signaling القياسي المستخدم لإنشاء وإدارة وإنهاء جلسات الملتميديا والمكالمات الصوتية والمرئية (VoIP).",
      "en": "Session Initiation Protocol (SIP) is a signaling protocol used for initiating, maintaining, and terminating real-time multimedia sessions (voice, video, and messaging)."
    },
    "keywords": [
      "SIP",
      "Session Initiation Protocol",
      "VoIP",
      "Multimedia"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-065",
    "number": 162,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 54,
    "question": "Which one of the following is NOT correct?",
    "options": [
      "application layer protocols are used by both source and destination devices during a communication session",
      "application layer protocols implemented on the source and destination host must match",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "none of the mentioned",
    "explanation": {
      "ar": "الجملتين (1) و(2) صحيحتين تماماً (لازم البروتوكول في الـ source والـ destination يكون متطابق وبيشتغل في الطرفين)، وبما إنه بيسأل عن الجملة غير الصحيحة (NOT correct)، فالإجابة هي none of the mentioned.",
      "en": "Both statements (1) and (2) are true regarding application layer protocols, so neither is incorrect ('none of the mentioned')."
    },
    "keywords": [
      "Application Layer Protocols",
      "Source and Destination"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-066",
    "number": 163,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 54,
    "question": "The application layer uses ........... when displaying a web page.",
    "options": [
      "HTTP protocol",
      "FTP protocol",
      "SMTP protocol",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "HTTP protocol",
    "explanation": {
      "ar": "لطلب وعرض صفحات الويب (Web pages)، المتصفح في طبقة الـ Application بيستخدم بروتوكول HTTP (HyperText Transfer Protocol).",
      "en": "The application layer uses the HyperText Transfer Protocol (HTTP) to request and display web pages."
    },
    "keywords": [
      "HTTP",
      "Web Page",
      "Application Layer"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-067",
    "number": 164,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 54,
    "question": "Which of the following is NOT an application layer protocol?",
    "options": [
      "HTTP",
      "SMTP",
      "FTP",
      "TCP"
    ],
    "correctAnswerIndex": 3,
    "answer": "TCP",
    "explanation": {
      "ar": "الـ HTTP والـ SMTP والـ FTP كلها بروتوكولات في الـ Application layer، أما الـ TCP فهو بروتوكول في الـ Transport layer.",
      "en": "TCP is a Transport layer protocol, whereas HTTP, SMTP, and FTP are Application layer protocols."
    },
    "keywords": [
      "TCP",
      "Transport Layer",
      "Application Layer"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-068",
    "number": 165,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 55,
    "question": "The packet of information at the application layer is called a:",
    "options": [
      "Packet",
      "Message",
      "Segment",
      "Frame"
    ],
    "correctAnswerIndex": 1,
    "answer": "Message",
    "explanation": {
      "ar": "وحدة البيانات (PDU) في طبقة الـ Application اسمها Message (وفي الـ Transport اسمها Segment، وفي الـ Network اسمها Packet/Datagram، وفي الـ Data Link اسمها Frame).",
      "en": "At the application layer, the protocol data unit (PDU) exchanged between processes is called a Message."
    },
    "keywords": [
      "Message",
      "Application Layer PDU",
      "Segment",
      "Frame"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-069",
    "number": 166,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 55,
    "question": "................... is one of the application architecture paradigms.",
    "options": [
      "Peer to peer",
      "Client-server",
      "HTTP",
      "Both a and b"
    ],
    "correctAnswerIndex": 3,
    "answer": "Both a and b",
    "explanation": {
      "ar": "المعماريات الأساسية لتطبيقات الشبكات (Application architectures) هي الـ Client-server والـ Peer-to-Peer (P2P)، فالإجابة هي Both a and b.",
      "en": "Client-server and peer-to-peer (P2P) are the two primary network application architecture paradigms."
    },
    "keywords": [
      "Application Architecture",
      "Client-Server",
      "Peer-to-Peer"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-070",
    "number": 167,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "transport-tcp-udp",
    "page": 55,
    "question": "The application developer has permission to decide the following on the transport layer side:",
    "options": [
      "Transport layer protocol",
      "Maximum buffer size",
      "Both of the mentioned",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "Both of the mentioned",
    "explanation": {
      "ar": "مطور التطبيق (Application developer) يقدر يختار نوع بروتوكول الـ Transport (سواء TCP أو UDP) وكمان يضبط بعض الإعدادات زي أقصى حجم للـ Socket buffers والـ variables، فالإجابة هي Both of the mentioned.",
      "en": "An application developer can choose the transport-layer protocol (TCP vs. UDP) and configure transport-layer parameters such as maximum socket buffer sizes."
    },
    "keywords": [
      "Application Developer",
      "Transport Layer",
      "Buffer Size"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-071",
    "number": 168,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 56,
    "question": "Application layer offers .............. service.",
    "options": [
      "End to end",
      "Process to process",
      "Both of the mentioned",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "End to end",
    "explanation": {
      "ar": "في بنك أسئلة Sanfoundry (المأخوذ منه السؤال ده بالنص): الـ Application layer بتقدم خدمة شاملة من الطرف للطرف للمستخدم والتطبيق (End-to-end service)، بينما الـ Process-to-process مصطلح مرتبط بالـ Transport layer (وفي بعض المراجع Both).",
      "en": "The application layer provides end-to-end application services directly to the user/application."
    },
    "keywords": [
      "Application Layer",
      "End to End Service"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-072",
    "number": 169,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 56,
    "question": "E-mail is a(n):",
    "options": [
      "Loss-tolerant application",
      "Bandwidth-sensitive application",
      "Elastic application",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "Elastic application",
    "explanation": {
      "ar": "الـ E-mail (ومعاه الـ File transfer والـ Web browsing) بيُصنف كـ Elastic application (تطبيق مرن): يعني يقدر يشتغل بأي bandwidth متاح سواء كبير أو صغير، لكنه مش بيستحمل ضياع البيانات (No loss).",
      "en": "Email is an elastic application: it can make use of as much or as little bandwidth as happens to be available, though it requires 100% reliable (no-loss) data transfer."
    },
    "keywords": [
      "Elastic Application",
      "Email",
      "Bandwidth"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-073",
    "number": 170,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 56,
    "question": "Pick the odd one out:",
    "options": [
      "File transfer",
      "File download",
      "E-mail",
      "Interactive games"
    ],
    "correctAnswerIndex": 3,
    "answer": "Interactive games",
    "explanation": {
      "ar": "الـ File transfer، والـ File download، والـ E-mail كلها تطبيقات غير حساسة للوقت (not time-sensitive / elastic)، بينما الـ Interactive games هي تطبيقات Real-time حساسة جداً للتأخير (Time-sensitive).",
      "en": "Interactive games are real-time, time-sensitive applications, whereas file transfer, file download, and email are elastic, non-time-sensitive applications."
    },
    "keywords": [
      "Interactive Games",
      "Time-Sensitive",
      "Elastic Applications"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-074",
    "number": 171,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 57,
    "question": "Which of the following is an application layer service?",
    "options": [
      "Network virtual terminal",
      "File transfer, access, and management",
      "Mail service",
      "All of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "All of the mentioned",
    "explanation": {
      "ar": "الـ Network virtual terminal (زي Telnet/SSH)، والـ File transfer/access/management (زي FTP)، والـ Mail service (زي SMTP) كلها خدمات أساسية بتقدمها طبقة الـ Application layer.",
      "en": "Network virtual terminal, file transfer/access/management (FTAM), and mail services are all standard services provided by the application layer."
    },
    "keywords": [
      "Application Layer Services",
      "NVT",
      "FTAM",
      "Mail Service"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-075",
    "number": 172,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 57,
    "question": "To deliver a message to the correct application program running on a host, the .............. address must be consulted.",
    "options": [
      "IP",
      "MAC",
      "Port",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "Port",
    "explanation": {
      "ar": "الـ MAC والـ IP بيوصلوا الـ packet لحد الجهاز (Host) الصح، لكن عشان نسلم الرسالة للبرنامج أو التطبيق المحدد (application program/process) اللي شغال جوه الجهاز ده، لازم نستخدم الـ Port address.",
      "en": "While MAC and IP addresses deliver a packet to the destination host, the Port address (port number) identifies the specific application process running on that host."
    },
    "keywords": [
      "Port Address",
      "Process Delivery",
      "Demultiplexing"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-076",
    "number": 173,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 58,
    "question": "Which of the following is a time-sensitive service?",
    "options": [
      "File transfer",
      "File download",
      "E-mail",
      "Internet telephony"
    ],
    "correctAnswerIndex": 3,
    "answer": "Internet telephony",
    "explanation": {
      "ar": "الـ Internet telephony (مكالمات الصوت عبر الإنترنت VoIP) هي خدمة حساسة جداً للوقت (Time-sensitive) لأن أي تأخير كبير (delay) بيبوظ المكالمة المباشرة.",
      "en": "Internet telephony (VoIP) is a real-time, time-sensitive service that requires low end-to-end delay."
    },
    "keywords": [
      "Internet Telephony",
      "VoIP",
      "Time-Sensitive"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-077",
    "number": 174,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 58,
    "question": "Transport services available to applications in one or another form (or dimensions along which applications require transport services) include:",
    "options": [
      "Reliable data transfer",
      "Timing",
      "Security",
      "All of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "All of the mentioned",
    "explanation": {
      "ar": "الأبعاد الأربعة لخدمات طبقة الـ Transport اللي ممكن تحتاجها التطبيقات (حسب كتاب Kurose) هي: Reliable data transfer، وThroughput، وTiming، وSecurity، فالإجابة هي All of the mentioned.",
      "en": "Transport service dimensions classified for network applications include reliable data transfer, throughput, timing, and security."
    },
    "keywords": [
      "Transport Services",
      "Reliable Data Transfer",
      "Timing",
      "Security"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-078",
    "number": 175,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 58,
    "question": "Electronic mail uses this Application layer protocol:",
    "options": [
      "SMTP",
      "HTTP",
      "FTP",
      "SIP"
    ],
    "correctAnswerIndex": 0,
    "answer": "SMTP",
    "explanation": {
      "ar": "البريد الإلكتروني (Electronic mail) بيستخدم بروتوكول الـ SMTP (Simple Mail Transfer Protocol) كالبروتوكول الأساسي لإرسال ونقل الرسائل.",
      "en": "Electronic mail relies on SMTP (Simple Mail Transfer Protocol) as its principal application-layer protocol."
    },
    "keywords": [
      "SMTP",
      "Electronic Mail"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-079",
    "number": 176,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 59,
    "question": "Multiple objects can be sent over a single TCP connection between client and server in:",
    "options": [
      "persistent HTTP",
      "nonpersistent HTTP",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "persistent HTTP",
    "explanation": {
      "ar": "في الـ Persistent HTTP (الافتراضي في HTTP/1.1)، السيرفر بيسيب الـ TCP connection مفتوحة بعد إرسال الـ response، فبنقدر نبعت objects متعددة على نفس الـ TCP connection الواحدة.",
      "en": "In persistent HTTP, the server leaves the TCP connection open after sending a response, allowing multiple objects to be sent over a single TCP connection."
    },
    "keywords": [
      "Persistent HTTP",
      "TCP Connection",
      "Multiple Objects"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-080",
    "number": 177,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 59,
    "question": "HTTP is a(n) ________ protocol.",
    "options": [
      "application layer",
      "transport layer",
      "network layer",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "application layer",
    "explanation": {
      "ar": "بروتوكول الـ HTTP هو بروتوكول يعمل في طبقة الـ Application layer.",
      "en": "HTTP (HyperText Transfer Protocol) is an application layer protocol."
    },
    "keywords": [
      "HTTP",
      "Application Layer"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-081",
    "number": 178,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 59,
    "question": "An HTTP client initiates a request by establishing a __________ connection to a particular port (usually 80) on the server.",
    "options": [
      "user datagram protocol",
      "transmission control protocol",
      "border gateway protocol",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "transmission control protocol",
    "explanation": {
      "ar": "بروتوكول HTTP (في إصدارات HTTP/1.0 وHTTP/1.1 وHTTP/2) بيعتمد على بروتوكول TCP (Transmission Control Protocol) كـ underlying transport protocol للاتصال بالسيرفر على بورت 80.",
      "en": "An HTTP client initiates communication by establishing a Transmission Control Protocol (TCP) connection to port 80 on the server."
    },
    "keywords": [
      "HTTP",
      "TCP",
      "Transmission Control Protocol"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-082",
    "number": 179,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 60,
    "question": "An FTP server listens for a control connection on port number:",
    "options": [
      "20",
      "21",
      "22",
      "23"
    ],
    "correctAnswerIndex": 1,
    "answer": "21",
    "explanation": {
      "ar": "سيرفر الـ FTP بيستمع لطلبات الاتصال والتحكم (Control connection) على Port 21 (بينما Port 20 للـ Data، و22 للـ SSH، و23 للـ Telnet).",
      "en": "An FTP server listens for incoming control connections on TCP port 21."
    },
    "keywords": [
      "FTP",
      "Port 21",
      "Control Connection"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-083",
    "number": 180,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 60,
    "question": "In the FTP protocol, the client contacts the server using ____ as the transport protocol.",
    "options": [
      "transmission control protocol",
      "a user datagram protocol",
      "datagram congestion control protocol",
      "stream control transmission protocol"
    ],
    "correctAnswerIndex": 0,
    "answer": "transmission control protocol",
    "explanation": {
      "ar": "بروتوكول الـ FTP بيستخدم الـ TCP (Transmission Control Protocol) لأن نقل الملفات لازم يكون موثوق 100% ومفيهوش أي ضياع للبيانات.",
      "en": "FTP uses the Transmission Control Protocol (TCP) to guarantee reliable file transfer."
    },
    "keywords": [
      "FTP",
      "TCP",
      "Transport Protocol"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-084",
    "number": 181,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 60,
    "question": "In which mode of FTP does the client initiate both the control and data connections?",
    "options": [
      "active mode",
      "passive mode",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "passive mode",
    "explanation": {
      "ar": "في الـ Passive mode (PASV) في FTP، الـ Client هو اللي بيبدأ كلاً من الـ Control connection والـ Data connection (عشان يتفادى مشاكل الـ Firewall عند الـ Client). أما في الـ Active mode فالسيرفر هو اللي بيبدأ الـ Data connection من بورت 20.",
      "en": "In FTP passive mode, the client initiates both the control connection and the data connection to the server."
    },
    "keywords": [
      "FTP Passive Mode",
      "Active Mode",
      "Control and Data Connections"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-085",
    "number": 182,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 61,
    "question": "The File Transfer Protocol (FTP) is built on:",
    "options": [
      "data-centric architecture",
      "service-oriented architecture",
      "client-server architecture",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "client-server architecture",
    "explanation": {
      "ar": "بروتوكول الـ FTP مبني على معمارية الـ Client-server architecture (فيه FTP Client بيطلب رفع أو تحميل الملفات من FTP Server).",
      "en": "FTP is built on a client-server architecture."
    },
    "keywords": [
      "FTP",
      "Client-Server Architecture"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-086",
    "number": 183,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 61,
    "question": "In File Transfer Protocol (FTP), data transfer can be done in:",
    "options": [
      "stream mode",
      "block mode",
      "compressed mode",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "في بروتوكول FTP، نقل البيانات ممكن يتم بـ 3 أنماط (Transmission modes): الـ Stream mode (الافتراضي)، والـ Block mode، والـ Compressed mode، فالإجابة هي all of the mentioned.",
      "en": "FTP supports three data transmission modes: stream mode, block mode, and compressed mode."
    },
    "keywords": [
      "FTP Modes",
      "Stream Mode",
      "Block Mode",
      "Compressed Mode"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-087",
    "number": 184,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 62,
    "question": "An Ethernet frame header consists of:",
    "options": [
      "MAC address",
      "IP address",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "MAC address",
    "explanation": {
      "ar": "الـ Ethernet frame في طبقة الـ Data Link بيحتوي على عناوين الـ MAC address (Source & Destination MAC). أما الـ IP address فهو في الـ Network layer packet.",
      "en": "An Ethernet frame header contains source and destination MAC addresses."
    },
    "keywords": [
      "Ethernet Frame",
      "MAC Address"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-088",
    "number": 185,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 62,
    "question": "What is the Start Frame Delimiter (SFD) in an Ethernet frame?",
    "options": [
      "10101010",
      "10101011",
      "00000000",
      "11111111"
    ],
    "correctAnswerIndex": 1,
    "answer": "10101011",
    "explanation": {
      "ar": "حقل الـ SFD (Start Frame Delimiter) في الـ Ethernet frame طوله 1 byte وقيمته الثنائية هي `10101011` (بينما الـ 7 بايت بتوع الـ Preamble اللي قبله كل بايت فيهم `10101010`). آخر بتّين `11` بيعرفوا المستقبِل إن الـ Destination MAC هيبدأ فوراً.",
      "en": "The Start Frame Delimiter (SFD) in an IEEE 802.3 Ethernet frame is the 1-byte sequence 10101011 that signals the start of the frame fields."
    },
    "keywords": [
      "SFD",
      "Start Frame Delimiter",
      "10101011",
      "Ethernet Frame"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-089",
    "number": 186,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 62,
    "question": "A MAC address is of:",
    "options": [
      "24 bits",
      "36 bits",
      "42 bits",
      "48 bits"
    ],
    "correctAnswerIndex": 3,
    "answer": "48 bits",
    "explanation": {
      "ar": "حجم الـ MAC address القياسي هو 48 bits (يعني 6 bytes أو 12 رقم Hexadecimal).",
      "en": "A standard IEEE 802 MAC address is 48 bits (6 bytes) long."
    },
    "keywords": [
      "MAC Address",
      "48 bits",
      "6 bytes"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-090",
    "number": 187,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 63,
    "question": "What is auto-negotiation in Ethernet?",
    "options": [
      "a procedure by which two connected devices choose common transmission parameters",
      "a security algorithm",
      "a routing algorithm",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "a procedure by which two connected devices choose common transmission parameters",
    "explanation": {
      "ar": "الـ Auto-negotiation في الـ Ethernet هي آلية بيتفق بيها جهازين متوصلين ببعض تلقائياً على أفضل إعدادات نقل مشتركة بينهم (زي السرعة 10/100/1000 Mbps ونوع الـ Duplex: Full أو Half).",
      "en": "Auto-negotiation is an Ethernet procedure by which two connected devices automatically select the best common transmission parameters, such as speed and duplex mode."
    },
    "keywords": [
      "Auto-negotiation",
      "Ethernet",
      "Speed and Duplex"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-091",
    "number": 188,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 63,
    "question": "Ethernet in Metropolitan Area Network (MAN) can be used as:",
    "options": [
      "pure ethernet",
      "ethernet over SDH",
      "ethernet over MPLS",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "في شبكات المدن (Metro Ethernet / MAN)، يمكن تشغيل الـ Ethernet كـ Pure Ethernet، أو فوق شبكات الألياف المتزامنة (Ethernet over SDH)، أو فوق بروتوكول MPLS (Ethernet over MPLS)، فالإجابة هي all of the mentioned.",
      "en": "In a Metropolitan Area Network (MAN), Metro Ethernet can be deployed as pure Ethernet, Ethernet over SDH, or Ethernet over MPLS."
    },
    "keywords": [
      "Metro Ethernet",
      "MAN",
      "SDH",
      "MPLS"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-092",
    "number": 189,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 63,
    "question": "Point-to-Point Protocol over Ethernet (PPPoE) is a network protocol for:",
    "options": [
      "encapsulating PPP frames inside ethernet frames",
      "encapsulating ethernet frames inside PPP frames",
      "for the security of ethernet frames",
      "for the security of PPP frames"
    ],
    "correctAnswerIndex": 0,
    "answer": "encapsulating PPP frames inside ethernet frames",
    "explanation": {
      "ar": "من اسمه PPP over Ethernet (PPPoE): بيقوم بتغليف (encapsulating) إطارات الـ PPP جوه إطارات الـ Ethernet، وبيُستخدم بكثرة في اتصالات الـ DSL مع مزودي خدمة الإنترنت.",
      "en": "PPPoE (Point-to-Point Protocol over Ethernet) encapsulates PPP frames inside Ethernet frames, commonly used in DSL broadband connections."
    },
    "keywords": [
      "PPPoE",
      "PPP Frames",
      "Ethernet Frames"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-093",
    "number": 190,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 64,
    "question": "High-speed Ethernet (such as 10GBASE-SR/LR and beyond) primarily works on:",
    "options": [
      "coaxial cable",
      "twisted pair cable",
      "optical fiber",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "optical fiber",
    "explanation": {
      "ar": "الـ High-speed Ethernet (السرعات العالية جداً في الـ Gigabit/10-Gigabit Ethernet لمسافات طويلة) بيعتمد بشكل أساسي على كابلات الألياف الضوئية (Optical fiber).",
      "en": "High-speed Ethernet primarily operates over optical fiber cables to achieve multi-gigabit data rates and longer distances."
    },
    "keywords": [
      "High-Speed Ethernet",
      "Optical Fiber"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-094",
    "number": 191,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 64,
    "question": "The maximum size of the payload field in a standard Ethernet frame is:",
    "options": [
      "1000 bytes",
      "1200 bytes",
      "1300 bytes",
      "1500 bytes"
    ],
    "correctAnswerIndex": 3,
    "answer": "1500 bytes",
    "explanation": {
      "ar": "أقصى حجم لحقل البيانات (Payload / Data field) في الـ Ethernet frame القياسي هو 1500 bytes.",
      "en": "The maximum payload (data field) size in a standard IEEE 802.3 Ethernet frame is 1500 bytes."
    },
    "keywords": [
      "Ethernet Payload",
      "1500 bytes",
      "MTU"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-095",
    "number": 192,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 64,
    "question": "What is an interframe gap (IFG)?",
    "options": [
      "idle time between frames",
      "idle time between frame bits",
      "idle time between packets",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "idle time between frames",
    "explanation": {
      "ar": "الـ Interframe Gap (IFG) أو Interpacket Gap هو وقت التوقف الإجباري القصير (idle time) بين إرسال Frame والـ Frame اللي بعدها على الكابل (يعادل زمن نقل 96 bits) عشان كروت الشبكة تلحق تجهز لاستقبال الـ Frame الجديدة.",
      "en": "The interframe gap (IFG) is the mandatory minimum idle time (96 bit times) between transmissions of successive Ethernet frames."
    },
    "keywords": [
      "Interframe Gap",
      "IFG",
      "Idle Time",
      "Ethernet"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-096",
    "number": 193,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 65,
    "question": "An Ethernet frame that is less than the IEEE 802.3 minimum length of 64 octets is called a:",
    "options": [
      "short frame",
      "runt frame (printed as 'run frame')",
      "mini frame",
      "man frame"
    ],
    "correctAnswerIndex": 1,
    "answer": "runt frame (run frame)",
    "explanation": {
      "ar": "أي Ethernet frame حجمها أقل من الحد الأدنى القياسي (64 bytes/octets) — وبتنتج غالباً بسبب حدوث Collision أو عطل — بتتسمى Runt frame (مكتوبة في الشيت run frame).",
      "en": "An Ethernet frame smaller than the IEEE 802.3 minimum length of 64 octets (bytes) is called a runt frame (printed as 'run frame')."
    },
    "keywords": [
      "Runt Frame",
      "64 octets",
      "Ethernet Minimum Length"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-097",
    "number": 194,
    "source": "question-bank",
    "type": "mcq",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 65,
    "isDuplicate": true,
    "duplicateOf": "bank-p3-087",
    "question": "Ethernet frame consists of (Repeated on p. 291):",
    "options": [
      "MAC address",
      "IP address",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "MAC address",
    "explanation": {
      "ar": "الـ Ethernet frame في طبقة الـ Data Link بيحتوي على عناوين الـ MAC address (Source & Destination MAC).",
      "en": "An Ethernet frame header contains source and destination MAC addresses."
    },
    "keywords": [
      "Ethernet Frame",
      "MAC Address"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches"
  },
  {
    "id": "bank-p3-098",
    "number": 195,
    "source": "question-bank",
    "type": "mcq",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 66,
    "isDuplicate": true,
    "duplicateOf": "bank-p3-088",
    "question": "What is Start Frame Delimiter (SFD) in an Ethernet frame? (Repeated on p. 292)",
    "options": [
      "10101010",
      "10101011",
      "00000000",
      "11111111"
    ],
    "correctAnswerIndex": 1,
    "answer": "10101011",
    "explanation": {
      "ar": "قيمة الـ SFD (Start Frame Delimiter) في الـ Ethernet frame هي `10101011`.",
      "en": "The Start Frame Delimiter (SFD) in an Ethernet frame is the 1-byte bit pattern 10101011."
    },
    "keywords": [
      "SFD",
      "10101011"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches"
  },
  {
    "id": "bank-p3-099",
    "number": 196,
    "source": "question-bank",
    "type": "mcq",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 66,
    "isDuplicate": true,
    "duplicateOf": "bank-p3-089",
    "question": "MAC address is of (Repeated on p. 292):",
    "options": [
      "24 bits",
      "36 bits",
      "42 bits",
      "48 bits"
    ],
    "correctAnswerIndex": 3,
    "answer": "48 bits",
    "explanation": {
      "ar": "طول الـ MAC address هو 48 bits (6 bytes).",
      "en": "A standard MAC address is 48 bits (6 bytes) in length."
    },
    "keywords": [
      "MAC Address",
      "48 bits"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches"
  },
  {
    "id": "bank-p3-100",
    "number": 197,
    "source": "question-bank",
    "type": "mcq",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 66,
    "isDuplicate": true,
    "duplicateOf": "bank-p3-091",
    "question": "Ethernet in metropolitan area network (MAN) can be used as (Repeated on p. 292):",
    "options": [
      "pure ethernet",
      "ethernet over SDH",
      "ethernet over MPLS",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "في شبكات الـ MAN يمكن استخدام الـ Ethernet كـ Pure Ethernet أو فوق SDH أو فوق MPLS.",
      "en": "Ethernet in a MAN can be deployed as pure Ethernet, Ethernet over SDH, or Ethernet over MPLS."
    },
    "keywords": [
      "Metro Ethernet",
      "MAN"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches"
  },
  {
    "id": "bank-p3-101",
    "number": 198,
    "source": "question-bank",
    "type": "mcq",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 67,
    "isDuplicate": true,
    "duplicateOf": "bank-p3-092",
    "question": "A point-to-point protocol over Ethernet (PPPoE) is a network protocol for (Repeated on p. 293):",
    "options": [
      "encapsulating PPP frames inside Ethernet frames",
      "encapsulating ethernet frames inside PPP frames",
      "for security of Ethernet frames",
      "for security of PPP frames"
    ],
    "correctAnswerIndex": 0,
    "answer": "encapsulating PPP frames inside Ethernet frames",
    "explanation": {
      "ar": "بروتوكول PPPoE بيغلف الـ PPP frames جوه الـ Ethernet frames.",
      "en": "PPPoE encapsulates PPP frames inside Ethernet frames."
    },
    "keywords": [
      "PPPoE",
      "Encapsulation"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches"
  },
  {
    "id": "bank-p3-102",
    "number": 199,
    "source": "question-bank",
    "type": "mcq",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 67,
    "isDuplicate": true,
    "duplicateOf": "bank-p3-093",
    "question": "High-speed ethernet works on (Repeated on p. 293):",
    "options": [
      "coaxial cable",
      "twisted pair cable",
      "optical fiber",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "optical fiber",
    "explanation": {
      "ar": "الـ High-speed Ethernet بيشتغل بشكل أساسي على الألياف الضوئية (Optical fiber).",
      "en": "High-speed Ethernet operates over optical fiber."
    },
    "keywords": [
      "High-Speed Ethernet",
      "Optical Fiber"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches"
  },
  {
    "id": "bank-p3-103",
    "number": 200,
    "source": "question-bank",
    "type": "mcq",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 67,
    "isDuplicate": true,
    "duplicateOf": "bank-p3-094",
    "question": "The maximum size of the payload field in an Ethernet frame is (Repeated on p. 293):",
    "options": [
      "1000 bytes",
      "1200 bytes",
      "1300 bytes",
      "1500 bytes"
    ],
    "correctAnswerIndex": 3,
    "answer": "1500 bytes",
    "explanation": {
      "ar": "أقصى حجم للـ Payload في الـ Ethernet frame هو 1500 bytes.",
      "en": "The maximum payload size in a standard Ethernet frame is 1500 bytes."
    },
    "keywords": [
      "Ethernet Payload",
      "1500 bytes"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches"
  },
  {
    "id": "bank-p3-104",
    "number": 201,
    "source": "question-bank",
    "type": "mcq",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 68,
    "isDuplicate": true,
    "duplicateOf": "bank-p3-095",
    "question": "What is an interframe gap? (Repeated on p. 294)",
    "options": [
      "idle time between frames",
      "idle time between frame bits",
      "idle time between packets",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "idle time between frames",
    "explanation": {
      "ar": "الـ Interframe gap هو وقت التوقف (idle time) بين الـ frames المتتالية.",
      "en": "The interframe gap is the idle time between frames."
    },
    "keywords": [
      "Interframe Gap",
      "Idle Time"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches"
  },
  {
    "id": "bank-p3-105",
    "number": 202,
    "source": "question-bank",
    "type": "mcq",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 68,
    "isDuplicate": true,
    "duplicateOf": "bank-p3-096",
    "question": "An ethernet frame that is less than the IEEE 802.3 minimum length of 64 octets is called (Repeated on p. 294):",
    "options": [
      "short frame",
      "run frame",
      "mini frame",
      "man frame"
    ],
    "correctAnswerIndex": 1,
    "answer": "run frame (runt frame)",
    "explanation": {
      "ar": "الـ Frame اللي طولها أقل من 64 bytes اسمها Runt frame (مكتوبة run frame).",
      "en": "A frame shorter than 64 octets is called a runt frame (run frame)."
    },
    "keywords": [
      "Runt Frame",
      "64 octets"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches"
  },
  {
    "id": "bank-p3-106",
    "number": 203,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 69,
    "question": "A local telephone network is an example of a _______ network.",
    "options": [
      "Packet-switched",
      "Circuit switched",
      "both of the mentioned",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "Circuit switched",
    "explanation": {
      "ar": "شبكة التليفون الأرضي المحلية (Local telephone network) هي المثال الكلاسيكي على شبكات الـ Circuit-switched.",
      "en": "A traditional local telephone network is an example of a circuit-switched network."
    },
    "keywords": [
      "Telephone Network",
      "Circuit Switched"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-107",
    "number": 204,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 69,
    "question": "Most packet switches use this principle:",
    "options": [
      "Stop and wait",
      "Store and forward",
      "Both of the mentioned",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "Store and forward",
    "explanation": {
      "ar": "معظم الـ Packet switches (الراوترات والسويتشات) بتشتغل بمبدأ الـ Store-and-forward transmission: يعني لازم الراوتر يستقبل الـ packet بالكامل ويخزنها في الـ buffer ويتأكد من سلامتها قبل ما يبدأ يبعتها على الـ outbound link.",
      "en": "Most packet switches use store-and-forward transmission, meaning the switch must receive the entire packet before it can begin transmitting the first bit of the packet onto the outbound link."
    },
    "keywords": [
      "Store and Forward",
      "Packet Switches"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-108",
    "number": 205,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "intro-models",
    "page": 69,
    "question": "If there are N routers from source to destination, the total end-to-end transmission delay in sending one packet P (L -> number of bits in the packet, R -> transmission rate) is:",
    "options": [
      "N",
      "(N*L)/R",
      "(2N*L)/R",
      "L/R (Note: exact formula is (N+1)*L/R; in Sanfoundry/sheet key, (N*L)/R is the closest option for N links)"
    ],
    "correctAnswerIndex": 1,
    "answer": "(N*L)/R",
    "explanation": {
      "ar": "في السؤال ده (المأخوذ من Sanfoundry): لو عندنا N links (أو N hops) كل واحد سرعته R وحجم الباكيت L، فالـ transmission delay للـ link الواحد هو `L/R`، وللـ N مراحل هو `(N * L) / R` (ملاحظة أكاديمية: في كتاب Kurose لو فيه N routers بيكون فيه N+1 links فيكون `(N+1)*L/R`، لكن بما إن `(N+1)*L/R` مش في الاختيارات، فالاختيار المعتمد في نموذج الإجابة هو `(N*L)/R`).",
      "en": "With each hop adding a store-and-forward transmission delay of L/R, the cumulative delay across N stages in this question's key is (N*L)/R."
    },
    "keywords": [
      "End-to-End Delay",
      "Store and Forward",
      "(N*L)/R"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-109",
    "number": 206,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 70,
    "question": "What are the fundamental method(s) to move data through a network of links and switches?",
    "options": [
      "Packet switching",
      "Circuit switching",
      "Line switching",
      "Both a and b"
    ],
    "correctAnswerIndex": 3,
    "answer": "Both a and b",
    "explanation": {
      "ar": "الطريقتين الأساسيتين لنقل البيانات عبر شبكة من الـ links والـ switches هما الـ Packet switching والـ Circuit switching، فالإجابة هي Both a and b.",
      "en": "There are two fundamental approaches to moving data through a network of links and switches: circuit switching and packet switching (Both a and b)."
    },
    "keywords": [
      "Packet Switching",
      "Circuit Switching",
      "Network Core"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-110",
    "number": 207,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 70,
    "question": "The resources needed for communication between end systems are reserved for the duration of a session between end systems in ________.",
    "options": [
      "Packet switching",
      "Circuit switching",
      "Line switching",
      "Frequency switching"
    ],
    "correctAnswerIndex": 1,
    "answer": "Circuit switching",
    "explanation": {
      "ar": "في الـ Circuit switching، بيتم حجز الموارد (resources are reserved) طول مدة الجلسة أو المكالمة بين الطرفين.",
      "en": "In circuit switching, the resources needed along a path to provide for communication between end systems are reserved for the duration of the communication session."
    },
    "keywords": [
      "Circuit Switching",
      "Reserved Resources"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-111",
    "number": 208,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 71,
    "question": "As the resources are reserved between two communicating end systems in circuit switching, this is achieved:",
    "options": [
      "authentication",
      "guaranteed a constant rate",
      "reliability",
      "store and forward"
    ],
    "correctAnswerIndex": 1,
    "answer": "guaranteed a constant rate",
    "explanation": {
      "ar": "بما إن الـ Circuit switching بيحجز bandwidth مخصص وثابت للمكالمة، فده بيضمن معدل نقل بيانات ثابت ومضمون (guaranteed a constant transmission rate).",
      "en": "Because dedicated link bandwidth is reserved end-to-end in circuit switching, the sender can transfer data to the receiver at a guaranteed constant rate."
    },
    "keywords": [
      "Circuit Switching",
      "Guaranteed Constant Rate"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-112",
    "number": 209,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 71,
    "question": "In _________ resources are allocated on demand.",
    "options": [
      "packet switching",
      "circuit switching",
      "line switching",
      "frequency switching"
    ],
    "correctAnswerIndex": 0,
    "answer": "packet switching",
    "explanation": {
      "ar": "في الـ Packet switching مفيش حجز مسبق للموارد، بل الـ resources بتُخصص عند الطلب فقط (allocated on demand) لما يكون فيه packets محتاجة تتبعت.",
      "en": "In packet switching, network resources (bandwidth and buffers) are not reserved in advance; they are allocated on demand."
    },
    "keywords": [
      "Packet Switching",
      "On Demand"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-113",
    "number": 210,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 71,
    "question": "Physical or logical arrangement of network is:",
    "options": [
      "Topology",
      "Routing",
      "Networking",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "Topology",
    "explanation": {
      "ar": "التخطيط أو الترتيب الفيزيائي أو المنطقي للأجهزة والكابلات في الشبكة بيتسمى الـ Topology (زي Star, Bus, Ring, Mesh).",
      "en": "Network topology refers to the physical or logical geometric arrangement of links and nodes in a network."
    },
    "keywords": [
      "Topology",
      "Network Arrangement"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-114",
    "number": 211,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 72,
    "question": "In this topology, there is a central controller or hub:",
    "options": [
      "Star",
      "Mesh",
      "Ring",
      "Bus"
    ],
    "correctAnswerIndex": 0,
    "answer": "Star",
    "explanation": {
      "ar": "في الـ Star topology، كل الأجهزة بتتوصل بجهاز مركزي واحد في النص (Central controller / Hub / Switch).",
      "en": "In a star topology, each device has a dedicated point-to-point link only to a central controller, usually called a hub or switch."
    },
    "keywords": [
      "Star Topology",
      "Central Hub"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-115",
    "number": 212,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 72,
    "question": "This topology requires a multipoint connection:",
    "options": [
      "Star",
      "Mesh",
      "Ring",
      "Bus"
    ],
    "correctAnswerIndex": 3,
    "answer": "Bus",
    "explanation": {
      "ar": "الـ Bus topology بتعتمد على كابل رئيسي واحد (backbone cable) بتتشارك فيه كل الأجهزة، وبالتالي بتتطلب اتصال متعدد النقاط (Multipoint connection). أما الـ Star والـ Mesh والـ Ring فبتستخدم وصلات Point-to-point.",
      "en": "A bus topology is a multipoint configuration in which one long cable acts as a backbone to link all the devices in a network."
    },
    "keywords": [
      "Bus Topology",
      "Multipoint Connection"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-116",
    "number": 213,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 72,
    "question": "Data communication system spanning states, countries, or the whole world is:",
    "options": [
      "LAN",
      "WAN",
      "MAN",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "WAN",
    "explanation": {
      "ar": "الشبكة اللي بتمتد عبر ولايات أو دول أو العالم كله هي الـ WAN (Wide Area Network).",
      "en": "A Wide Area Network (WAN) provides long-distance transmission of data over large geographic areas that may comprise a country, a continent, or even the whole world."
    },
    "keywords": [
      "WAN",
      "Wide Area Network"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-117",
    "number": 214,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 73,
    "question": "The data communication system within a building or campus is:",
    "options": [
      "LAN",
      "WAN",
      "MAN",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "LAN",
    "explanation": {
      "ar": "نظام الاتصالات داخل مبنى واحد أو حرم جامعي (campus) هو الـ LAN (Local Area Network).",
      "en": "A Local Area Network (LAN) is privately owned and links the devices in a single office, building, or campus."
    },
    "keywords": [
      "LAN",
      "Building or Campus"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-118",
    "number": 215,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 73,
    "question": "Expand WAN:",
    "options": [
      "World area network",
      "Wide area network",
      "Web area network",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "Wide area network",
    "explanation": {
      "ar": "اختصار WAN هو Wide Area Network.",
      "en": "WAN stands for Wide Area Network."
    },
    "keywords": [
      "WAN",
      "Wide Area Network"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-119",
    "number": 216,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 74,
    "question": "What is the Internet?",
    "options": [
      "a single network",
      "a vast collection of different networks",
      "interconnection of local area networks",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "a vast collection of different networks",
    "explanation": {
      "ar": "الإنترنت مش شبكة واحدة، بل هو شبكة الشبكات: مجموعة ضخمة جداً من الشبكات المختلفة المتصلة ببعضها (a vast collection of different networks).",
      "en": "The Internet is a vast global collection of interconnected networks ('network of networks')."
    },
    "keywords": [
      "Internet",
      "Collection of Networks"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-120",
    "number": 217,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 74,
    "question": "To join the Internet, the computer has to be connected to a(n):",
    "options": [
      "internet architecture board",
      "internet society",
      "internet service provider",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "internet service provider",
    "explanation": {
      "ar": "عشان أي جهاز كمبيوتر يتصل بالإنترنت، لازم يتوصل بمزود خدمة الإنترنت ISP (Internet Service Provider).",
      "en": "To access the Internet, a host computer must connect through an Internet Service Provider (ISP)."
    },
    "keywords": [
      "ISP",
      "Internet Service Provider"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-121",
    "number": 218,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "physical-media",
    "page": 74,
    "question": "Internet access by transmitting digital data over the wires of a local telephone network is provided by:",
    "options": [
      "leased line",
      "digital subscriber line",
      "digital signal line",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "digital subscriber line",
    "explanation": {
      "ar": "نقل البيانات الرقمية (Digital data) عبر أسلاك شبكة التليفون الأرضي المحلية لتوفير الإنترنت بيتم عن طريق تقنية الـ DSL (Digital Subscriber Line).",
      "en": "Digital Subscriber Line (DSL) provides high-speed Internet access by transmitting digital data over the copper wires of a local telephone network."
    },
    "keywords": [
      "DSL",
      "Digital Subscriber Line",
      "Telephone Wires"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-122",
    "number": 219,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "intro-models",
    "page": 75,
    "question": "ISPs exchange Internet traffic between their networks by:",
    "options": [
      "internet exchange point",
      "subscriber end point",
      "ISP endpoint",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "internet exchange point",
    "explanation": {
      "ar": "مزودو خدمات الإنترنت (ISPs) بيتبادلوا ترافيك الإنترنت بين شبكاتهم في نقاط ربط مخصصة اسمها IXP (Internet Exchange Point).",
      "en": "ISPs interconnect and exchange Internet traffic between their autonomous networks at an Internet Exchange Point (IXP)."
    },
    "keywords": [
      "IXP",
      "Internet Exchange Point",
      "ISP"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-123",
    "number": 220,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 75,
    "question": "Which one of the following protocols is NOT used on the Internet?",
    "options": [
      "HTTP",
      "DHCP",
      "DNS",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "none of the mentioned",
    "explanation": {
      "ar": "الـ HTTP والـ DHCP والـ DNS كلها بروتوكولات أساسية مستخدمة على الإنترنت، فالإجابة هي none of the mentioned.",
      "en": "HTTP, DHCP, and DNS are all fundamental protocols used on the Internet, so the answer is 'none of the mentioned'."
    },
    "keywords": [
      "HTTP",
      "DHCP",
      "DNS",
      "Internet Protocols"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-124",
    "number": 221,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 75,
    "question": "IPv6 addresses have a size of:",
    "options": [
      "32 bits",
      "64 bits",
      "128 bits",
      "265 bits"
    ],
    "correctAnswerIndex": 2,
    "answer": "128 bits",
    "explanation": {
      "ar": "حجم عنوان الـ IPv6 هو 128 bits (أي 16 bytes)، بينما عنوان الـ IPv4 حجمه 32 bits (أي 4 bytes).",
      "en": "IPv6 addresses are 128 bits (16 bytes) in length."
    },
    "keywords": [
      "IPv6",
      "128 bits"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-125",
    "number": 222,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "intro-models",
    "page": 76,
    "question": "The Internet works on:",
    "options": [
      "packet switching",
      "circuit switching",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "packet switching",
    "explanation": {
      "ar": "شبكة الإنترنت مبنية بالكامل على مبدأ الـ Packet switching (تبادل الحزم).",
      "en": "The Internet is fundamentally a packet-switched network."
    },
    "keywords": [
      "Internet",
      "Packet Switching"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-126",
    "number": 223,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 76,
    "question": "Which one of the following is NOT an application layer protocol used on the Internet?",
    "options": [
      "remote procedure call",
      "internet relay chat",
      "resource reservation protocol",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "resource reservation protocol",
    "explanation": {
      "ar": "بروتوكول الـ RSVP (Resource Reservation Protocol) هو بروتوكول تحكم في طبقة الـ Network/Transport لحجز الموارد، ومش بروتوكول Application layer.",
      "en": "Resource Reservation Protocol (RSVP) is a network/transport control protocol rather than an application layer protocol."
    },
    "keywords": [
      "RSVP",
      "Application Layer"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-127",
    "number": 224,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 77,
    "question": "Which protocol assigns an IP address to the client connected in the Internet?",
    "options": [
      "DHCP",
      "IP",
      "RPC",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "DHCP",
    "explanation": {
      "ar": "بروتوكول الـ DHCP (Dynamic Host Configuration Protocol) هو المسؤول عن إعطاء وتخصيص IP address تلقائياً لأي جهاز client بيتصل بالشبكة.",
      "en": "DHCP (Dynamic Host Configuration Protocol) dynamically assigns IP addresses and network configuration parameters to client hosts."
    },
    "keywords": [
      "DHCP",
      "IP Assignment"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-128",
    "number": 225,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 77,
    "question": "Which one of the following is NOT used in media access control?",
    "options": [
      "ethernet",
      "digital subscriber line",
      "fiber-distributed data interface",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "digital subscriber line",
    "explanation": {
      "ar": "الـ Ethernet والـ FDDI بيحتووا على بروتوكولات MAC (Media Access Control) لمشاركة الوسط، بينما الـ DSL (Digital Subscriber Line) هو خط Point-to-point مخصص على مستوى الـ Physical layer ومش بروتوكول MAC.",
      "en": "Digital Subscriber Line (DSL) is a dedicated point-to-point physical access technology, unlike Ethernet and FDDI which use shared-medium MAC protocols."
    },
    "keywords": [
      "DSL",
      "Media Access Control",
      "Ethernet",
      "FDDI"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-129",
    "number": 226,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 77,
    "question": "DHCP (dynamic host configuration protocol) provides _____ to the client.",
    "options": [
      "IP address",
      "MAC address",
      "URL",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "IP address",
    "explanation": {
      "ar": "الـ DHCP بيزود الـ client بـ IP address (ومعاه الـ Subnet mask، والـ Default gateway، والـ DNS server address). أما الـ MAC address فبيكون محروق في كارت الشبكة من المصنع.",
      "en": "DHCP provides an IP address (along with subnet mask, default gateway, and DNS server addresses) to the client."
    },
    "keywords": [
      "DHCP",
      "IP Address"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-130",
    "number": 227,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 78,
    "question": "DHCP is used for:",
    "options": [
      "IPv6",
      "IPv4",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "both (1) and (2)",
    "explanation": {
      "ar": "بروتوكول الـ DHCP بيُستخدم في كل من IPv4 وIPv6 (باسم DHCPv6)، فالإجابة هي both (1) and (2).",
      "en": "DHCP is used for both IPv4 and IPv6 (via DHCPv6)."
    },
    "keywords": [
      "DHCP",
      "IPv4",
      "IPv6"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-131",
    "number": 228,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 78,
    "question": "The DHCP server:",
    "options": [
      "maintains a database of available IP addresses",
      "maintains the information about client configuration parameters",
      "grants an IP address when receives a request from a client",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "سيرفر الـ DHCP بيحتفظ بقاعدة بيانات لعناوين الـ IP المتاحة (pool)، وبيحفظ إعدادات الشبكة الخاصة بالـ clients، وبيمنح IP address لما يستقبل طلب من client، فالإجابة هي all of the mentioned.",
      "en": "A DHCP server maintains a pool of available IP addresses, stores client configuration parameters, and leases IP addresses upon receiving client requests."
    },
    "keywords": [
      "DHCP Server",
      "Address Pool"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-132",
    "number": 229,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 78,
    "question": "An IP address assigned to a client by the DHCP server is:",
    "options": [
      "for a limited period",
      "for an unlimited period",
      "not time-dependent",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "for a limited period",
    "explanation": {
      "ar": "سيرفر الـ DHCP بيأجر الـ IP address للـ client لفترة زمنية محددة (for a limited period) بتتسمى الـ Lease time.",
      "en": "DHCP assigns IP addresses to clients on a lease basis for a limited period of time."
    },
    "keywords": [
      "DHCP Lease",
      "Limited Period"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-133",
    "number": 230,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 79,
    "question": "DHCP uses UDP port _____ for sending data to the server.",
    "options": [
      "66",
      "67",
      "68",
      "69"
    ],
    "correctAnswerIndex": 1,
    "answer": "67",
    "explanation": {
      "ar": "بروتوكول الـ DHCP بيستخدم UDP Port 67 للسيرفر (عشان نبعت داتا للـ DHCP server)، وUDP Port 68 للـ Client. أما Port 69 فهو خاص بـ TFTP.",
      "en": "DHCP uses UDP port 67 as the destination port for sending messages to the DHCP server (and UDP port 68 for the DHCP client)."
    },
    "keywords": [
      "DHCP",
      "UDP Port 67",
      "Port 68"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-134",
    "number": 231,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "network-ip",
    "page": 79,
    "question": "The DHCP server can provide the _______ of the IP addresses.",
    "options": [
      "dynamic allocation",
      "automatic allocation",
      "static allocation",
      "all of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "all of the mentioned",
    "explanation": {
      "ar": "بروتوكول الـ DHCP بيدعم 3 طرق لتخصيص الـ IP: الـ Dynamic allocation (لفترة محددة)، والـ Automatic allocation (بشكل دائم من الـ pool)، والـ Static/Manual allocation (حجز IP ثابت لـ MAC address معين)، فالإجابة هي all of the mentioned.",
      "en": "DHCP supports three mechanisms for IP address allocation: dynamic allocation, automatic allocation, and static (manual) allocation."
    },
    "keywords": [
      "DHCP Allocation",
      "Dynamic",
      "Automatic",
      "Static"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-135",
    "number": 232,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 80,
    "question": "DHCP clients and servers on the same subnet communicate via:",
    "options": [
      "UDP broadcast",
      "UDP unicast",
      "TCP broadcast",
      "TCP unicast"
    ],
    "correctAnswerIndex": 0,
    "answer": "UDP broadcast",
    "explanation": {
      "ar": "لما الجهاز يفتح في الأول مبيكونش معاه IP أصلاً وميعرفش عنوان الـ DHCP server، فبيتواصل مع السيرفر عن طريق رسائل UDP Broadcast (لعنوان `255.255.255.255`).",
      "en": "Because a newly booted client does not yet have an IP address, DHCP clients and servers on the same subnet communicate primarily via UDP broadcast messages."
    },
    "keywords": [
      "DHCP",
      "UDP Broadcast"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-136",
    "number": 233,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "network-ip",
    "page": 80,
    "question": "After obtaining the IP address, to prevent an IP conflict the client may use:",
    "options": [
      "internet relay chat",
      "border gateway protocol",
      "address resolution protocol",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "address resolution protocol",
    "explanation": {
      "ar": "بعد ما الـ Client يستلم الـ IP من الـ DHCP، بيبعت Gratuitous ARP (باستخدام Address Resolution Protocol) يسأل فيه عن الـ IP الجديد ده عشان يتأكد إن مفيش جهاز تاني في الشبكة بيستخدم نفس الـ IP ويمنع الـ IP conflict.",
      "en": "After obtaining an IP address, a DHCP client uses the Address Resolution Protocol (specifically a gratuitous ARP request) to verify that no other host on the subnet is already using that IP address."
    },
    "keywords": [
      "ARP",
      "IP Conflict",
      "DHCP",
      "Gratuitous ARP"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-137",
    "number": 234,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "security-vpn-wlan",
    "page": 80,
    "question": "What is DHCP snooping?",
    "options": [
      "techniques applied to ensure the security of an existing DHCP infrastructure",
      "encryption of the DHCP server requests",
      "algorithm for DHCP",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "techniques applied to ensure the security of an existing DHCP infrastructure",
    "explanation": {
      "ar": "الـ DHCP snooping هي ميزة أمان على الـ Layer 2 switches بتحمي بنية الـ DHCP من السيرفرات المزيفة (Rogue DHCP servers) عن طريق تصنيف بورتات السويتش لـ Trusted وUntrusted.",
      "en": "DHCP snooping is a Layer 2 security technique applied on switches to protect an existing DHCP infrastructure against rogue DHCP servers and spoofing attacks."
    },
    "keywords": [
      "DHCP Snooping",
      "Security",
      "Switch"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-138",
    "number": 235,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "security-vpn-wlan",
    "page": 81,
    "question": "If DHCP snooping is configured on a LAN switch, then clients having specific ______ can access the network.",
    "options": [
      "MAC address",
      "IP address",
      "both (1) and (2)",
      "none of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "both (1) and (2)",
    "explanation": {
      "ar": "الـ DHCP snooping بيبني جدول اسمه DHCP Snooping Binding Database بيربط فيه الـ MAC address بالـ IP address ورقم الـ Switch port لكل جهاز، فلازم الـ MAC والـ IP الاتنين يطابقوا الجدول عشان يُسمح للجهاز بالوصول للشبكة.",
      "en": "DHCP snooping builds a binding table matching each client's MAC address and assigned IP address (along with VLAN and port), permitting traffic only from clients with matching MAC and IP addresses."
    },
    "keywords": [
      "DHCP Snooping",
      "MAC and IP Binding"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-139",
    "number": 236,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 81,
    "question": "Expansion of FTP is:",
    "options": [
      "Fine Transfer Protocol",
      "File Transfer Protocol",
      "First Transfer Protocol",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "File Transfer Protocol",
    "explanation": {
      "ar": "اختصار FTP هو File Transfer Protocol (بروتوكول نقل الملفات).",
      "en": "FTP stands for File Transfer Protocol."
    },
    "keywords": [
      "FTP",
      "File Transfer Protocol"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-140",
    "number": 237,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 81,
    "question": "FTP is built on _____ architecture.",
    "options": [
      "Client-server",
      "P2P",
      "Both of the mentioned",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "Client-server",
    "explanation": {
      "ar": "بروتوكول الـ FTP مبني على معمارية الـ Client-server.",
      "en": "FTP operates on a client-server architecture."
    },
    "keywords": [
      "FTP",
      "Client-Server"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-141",
    "number": 238,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 82,
    "question": "FTP uses _____ parallel TCP connections to transfer a file.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswerIndex": 1,
    "answer": "2",
    "explanation": {
      "ar": "بروتوكول الـ FTP بيستخدم 2 parallel TCP connections: اتصال للتحكم وإرسال الأوامر (Control connection على بورت 21)، واتصال لنقل الملف نفسه (Data connection على بورت 20).",
      "en": "FTP uses 2 parallel TCP connections to transfer a file: a control connection (port 21) and a data connection (port 20)."
    },
    "keywords": [
      "FTP",
      "2 Parallel TCP Connections"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-142",
    "number": 239,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 82,
    "question": "Identify the INCORRECT statement regarding FTP:",
    "options": [
      "FTP stands for File Transfer Protocol",
      "FTP uses two parallel TCP connections",
      "FTP sends its control information in-band",
      "FTP sends exactly one file over the data connection"
    ],
    "correctAnswerIndex": 2,
    "answer": "FTP sends its control information in-band",
    "explanation": {
      "ar": "الجملة الغلط هي إن FTP بيبعت معلومات التحكم in-band! الصح إن الـ FTP بيبعت معلومات التحكم out-of-band في اتصال TCP منفصل تماماً عن اتصال البيانات (على عكس الـ HTTP اللي بيبعت الـ headers والداتا in-band في نفس الـ connection).",
      "en": "The statement 'FTP sends its control information in-band' is incorrect because FTP uses a separate control connection, meaning it sends its control information out-of-band."
    },
    "keywords": [
      "FTP",
      "Out-of-Band",
      "In-Band"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-143",
    "number": 240,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 83,
    "question": "If 5 files are transferred from server A to client B in the same FTP session, the total number of TCP connections between A and B is:",
    "options": [
      "5",
      "10",
      "2",
      "6"
    ],
    "correctAnswerIndex": 3,
    "answer": "6",
    "explanation": {
      "ar": "في الـ FTP: الـ Control connection الواحدة بتفضل مفتوحة طول الـ Session كلها (ادي 1 connection)، لكن الـ Data connection بتكون non-persistent يعني بيتفتح Data connection جديدة لكل ملف ويتقفل بعد ما الملف يخلص (ادي 5 connections للـ 5 ملفات). إذن الإجمالي = 1 + 5 = 6 TCP connections.",
      "en": "FTP maintains 1 persistent control connection across the entire session and opens a separate non-persistent data connection for each of the 5 files transferred, totaling 1 + 5 = 6 TCP connections."
    },
    "keywords": [
      "FTP Connections",
      "Calculation",
      "6 TCP Connections"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-144",
    "number": 241,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 83,
    "question": "An FTP server:",
    "options": [
      "Maintains state",
      "Is stateless",
      "Has a single TCP connection for a file transfer",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "Maintains state",
    "explanation": {
      "ar": "على عكس الـ HTTP (اللي هو stateless)، سيرفر الـ FTP هو Stateful (Maintains state) لأنه لازم يفتكر حالة الـ user، وهل عمل login ولا لأ، وإيه الـ current directory اللي واقف فيه حالياً.",
      "en": "An FTP server maintains state about the user throughout a session (tracking user authentication and the current working directory across the control connection)."
    },
    "keywords": [
      "FTP State",
      "Maintains State",
      "Stateful"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-145",
    "number": 242,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 83,
    "question": "The commands, from client to server, and replies, from server to client, are sent across the FTP control connection in ____ bit ASCII format.",
    "options": [
      "8",
      "7",
      "3",
      "5"
    ],
    "correctAnswerIndex": 1,
    "answer": "7",
    "explanation": {
      "ar": "أوامر وردود الـ FTP اللي بتتبعت عبر الـ Control connection بتكون مكتوبة بنظام 7-bit ASCII format عشان تكون مقروءة للبشر.",
      "en": "FTP commands and replies are sent across the control connection in 7-bit ASCII format."
    },
    "keywords": [
      "FTP Commands",
      "7-bit ASCII"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-146",
    "number": 243,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 84,
    "question": "Find the FTP reply whose message is WRONGLYl matched:",
    "options": [
      "331 – Username OK, password required",
      "425 – Can’t open data connection",
      "452 – Error writing file",
      "452 – Can’t open data connection"
    ],
    "correctAnswerIndex": 3,
    "answer": "452 – Can’t open data connection",
    "explanation": {
      "ar": "في أكواد الـ FTP: الكود 331 معناه `Username OK, password required`، والكود 425 معناه `Can't open data connection`، والكود 452 معناه `Error writing file`. إذن الاختيار الرابع (`452 – Can't open data connection`) هو الموصّل غلط.",
      "en": "In FTP status codes, 425 means 'Can't open data connection' and 452 means 'Error writing file'; therefore, '452 – Can't open data connection' is wrongly matched."
    },
    "keywords": [
      "FTP Status Codes",
      "331",
      "425",
      "452"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-147",
    "number": 244,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 84,
    "question": "Mode of data transfer in FTP, where all the framing/segmentation is left to TCP:",
    "options": [
      "Stream mode",
      "Block mode",
      "Compressed mode",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "Stream mode",
    "explanation": {
      "ar": "في الـ Stream mode (وهو الوضع الافتراضي في FTP)، البيانات بتتبعت كـ continuous stream of bytes للـ TCP بدون أي headers إضافية، وبيترك تقسيمها بالكامل لبروتوكول TCP.",
      "en": "In FTP Stream mode, data is passed as a continuous byte stream directly to TCP, leaving all segmentation and framing to TCP."
    },
    "keywords": [
      "FTP Stream Mode",
      "TCP"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-148",
    "number": 245,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 85,
    "question": "In FTP, the password is sent to the server using the ______ command.",
    "options": [
      "PASSWORD",
      "PASS",
      "PWD",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "PASS",
    "explanation": {
      "ar": "في بروتوكول الـ FTP، اسم المستخدم بيتبعت بأمر `USER`، والباسورد بيتبعت للسيرفر باستخدام الأمر المكون من 4 حروف `PASS`.",
      "en": "In FTP, the client sends the user's password to the server using the 'PASS' command."
    },
    "keywords": [
      "FTP PASS Command",
      "Authentication"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-149",
    "number": 246,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 85,
    "question": "The number of objects in a Web page which consists of 4 jpeg images and HTML text is _____",
    "options": [
      "4",
      "1",
      "5",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "5",
    "explanation": {
      "ar": "ملف الـ Base HTML نفسه بيتحسب كـ Object (ادي 1)، ومعاه 4 صور JPEG كل صورة بـ Object (ادي 4)، فيكون إجمالي عدد الـ Objects في الصفحة = 1 + 4 = 5 objects.",
      "en": "A web page consisting of a base HTML file plus 4 referenced JPEG images contains a total of 1 + 4 = 5 objects."
    },
    "keywords": [
      "Web Objects",
      "HTML Base File",
      "5 Objects"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-150",
    "number": 247,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 85,
    "question": "The default connection type used by HTTP (HTTP/1.1) is _____",
    "options": [
      "Persistent",
      "Non-persistent",
      "Either of the mentioned",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "Persistent",
    "explanation": {
      "ar": "الوضع الافتراضي (Default mode) لبروتوكول HTTP (بدءاً من HTTP/1.1) هو الـ Persistent connection.",
      "en": "The default connection mode in HTTP/1.1 is persistent connections."
    },
    "keywords": [
      "HTTP Default Connection",
      "Persistent"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-151",
    "number": 248,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 86,
    "question": "The time taken by a packet to travel from client to server and then back to the client is called _____",
    "options": [
      "STT",
      "RTT",
      "PTT",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "RTT",
    "explanation": {
      "ar": "الزمن اللي بتاخده packet صغيرة للذهاب من الـ client للـ server والعودة مرة تانية للـ client هو الـ RTT (Round-Trip Time).",
      "en": "Round-Trip Time (RTT) is the time it takes for a small packet to travel from client to server and then back to the client."
    },
    "keywords": [
      "RTT",
      "Round-Trip Time"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-152",
    "number": 249,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 86,
    "question": "The HTTP request message is sent in the _____ part of the three-way handshake.",
    "options": [
      "First",
      "Second",
      "Third",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "Third",
    "explanation": {
      "ar": "في الـ TCP 3-way handshake: (1) الـ Client بيبعت SYN، (2) السيرفر بيرد بـ SYN-ACK، (3) في الجزء الثالث (Third part) الـ Client بيبعت الـ ACK وممكن يحمّل معاه (piggyback) رسالة الـ HTTP request في نفس الـ segment.",
      "en": "The client sends the HTTP request message combined (piggybacked) with the third segment (ACK) of the TCP three-way handshake."
    },
    "keywords": [
      "Three-Way Handshake",
      "Third Part",
      "HTTP Request"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-153",
    "number": 250,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 87,
    "question": "In the process of fetching a web page from a server (non-persistent HTTP), the HTTP request/response takes ______ RTTs.",
    "options": [
      "2",
      "1",
      "4",
      "3"
    ],
    "correctAnswerIndex": 0,
    "answer": "2",
    "explanation": {
      "ar": "عملية جلب صفحة الويب من السيرفر بتستغرق 2 RTTs (واحد RTT لإنشاء اتصال الـ TCP، وواحد RTT لإرسال الـ HTTP request وعودة الـ response).",
      "en": "Fetching a web object over non-persistent HTTP requires 2 RTTs: one RTT to establish the TCP connection and one RTT to request and receive the HTTP object."
    },
    "keywords": [
      "HTTP Response Time",
      "2 RTTs"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-154",
    "number": 251,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 87,
    "question": "The first line of an HTTP request message is called the _____",
    "options": [
      "Request line",
      "Header line",
      "Status line",
      "Entity line"
    ],
    "correctAnswerIndex": 0,
    "answer": "Request line",
    "explanation": {
      "ar": "أول سطر في رسالة الـ HTTP request اسمه الـ Request line (واللي بعده اسمهم Header lines). أما أول سطر في رسالة الـ HTTP response فاسمه الـ Status line.",
      "en": "The first line of an HTTP request message is called the request line; the subsequent lines are called header lines."
    },
    "keywords": [
      "Request Line",
      "HTTP Request"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-155",
    "number": 252,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 87,
    "question": "The values GET, POST, HEAD, etc. are specified in the ______ of an HTTP message.",
    "options": [
      "Request line",
      "Header line",
      "Status line",
      "Entity body"
    ],
    "correctAnswerIndex": 0,
    "answer": "Request line",
    "explanation": {
      "ar": "الـ Request line في أول رسالة الـ HTTP request بيتكون من 3 حقول: الـ Method field (اللي بيتكتب فيه `GET`, `POST`, `HEAD`, `PUT`, `DELETE`)، والـ URL field، والـ HTTP version field.",
      "en": "HTTP methods such as GET, POST, and HEAD are specified in the method field of the HTTP Request line."
    },
    "keywords": [
      "GET POST HEAD",
      "Request Line",
      "HTTP Methods"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-156",
    "number": 253,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 88,
    "question": "The ______ method, when used in the method field, leaves the entity body empty.",
    "options": [
      "POST",
      "GET",
      "Both of the mentioned",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "GET",
    "explanation": {
      "ar": "لما المتصفح يبعت طلب بـ `GET` method، بيكون الـ Entity body بتاع الـ request فاضي (empty)، بينما مع `POST` الـ Entity body بيحتوي على البيانات اللي المستخدم دخلها في الـ Form.",
      "en": "When an HTTP request uses the GET method, the entity body of the request message is empty."
    },
    "keywords": [
      "HTTP GET",
      "Empty Entity Body"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-157",
    "number": 254,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 88,
    "question": "The HTTP response message leaves out the requested object when the ______ method is used.",
    "options": [
      "GET",
      "POST",
      "HEAD",
      "PUT"
    ],
    "correctAnswerIndex": 2,
    "answer": "HEAD",
    "explanation": {
      "ar": "لما السيرفر يستقبل طلب بـ `HEAD` method، بيرد برسالة HTTP response فيها كل الـ Headers بالظبط زي `GET`، لكن من غير ما يبعت الـ requested object نفسه في الـ body (بيُستخدم غالباً للـ debugging والاختبار).",
      "en": "When a server receives a HEAD request, it responds with an HTTP message containing the status line and headers but omits the requested object from the entity body."
    },
    "keywords": [
      "HTTP HEAD",
      "HTTP Response"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-158",
    "number": 255,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 88,
    "question": "Find the oddly (wrongly) matched HTTP status code:",
    "options": [
      "200 OK",
      "400 Bad Request",
      "301 Moved permanently",
      "304 Not Found"
    ],
    "correctAnswerIndex": 3,
    "answer": "304 Not Found",
    "explanation": {
      "ar": "الكود الغلط هو `304 Not Found`؛ لأن الكود 304 معناه الحقيقي `304 Not Modified` (في الـ Conditional GET)، بينما كود `Not Found` هو `404 Not Found`.",
      "en": "304 stands for 'Not Modified' (used in conditional GET caching), whereas 'Not Found' is status code 404."
    },
    "keywords": [
      "HTTP Status Codes",
      "304 Not Modified",
      "404 Not Found"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-159",
    "number": 256,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 89,
    "question": "Which of the following is NOT correct regarding a Web cache (proxy server)?",
    "options": [
      "Web cache doesn't have its own disk space",
      "Web cache can act both like server and client",
      "Web cache might reduce the response time",
      "Web cache contains copies of recently requested objects"
    ],
    "correctAnswerIndex": 0,
    "answer": "Web cache doesn't have its own disk space",
    "explanation": {
      "ar": "الجملة غير الصحيحة هي إن الـ Web cache معندوش مساحة تخزين (disk space) خاصة بيه! في الحقيقة الـ Web cache (Proxy server) لازم يكون عنده disk storage خاص بيه عشان يخزن عليه نسخ من الـ objects المطلوبة مؤخراً.",
      "en": "A Web cache (proxy server) DOES have its own disk storage to store copies of recently requested objects; therefore, the first statement is incorrect."
    },
    "keywords": [
      "Web Cache",
      "Proxy Server",
      "Disk Space"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-160",
    "number": 257,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 89,
    "question": "The conditional GET mechanism:",
    "options": [
      "Imposes conditions on the objects to be requested",
      "Limits the number of responses from a server",
      "Helps to keep a cache up to date",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "Helps to keep a cache up to date",
    "explanation": {
      "ar": "آلية الـ Conditional GET (باستخدام الهيدر `If-Modified-Since`) بتسمح للـ Web cache يتأكد إن النسخة المتخزنة عنده لسه محدثة (up to date) من غير ما يضطر السيرفر يبعت الملف تاني لو متغيرش (بيرد بـ `304 Not Modified`).",
      "en": "The conditional GET mechanism (using the 'If-Modified-Since' header) allows a web cache to verify that its cached objects are up to date without wasting bandwidth."
    },
    "keywords": [
      "Conditional GET",
      "Web Cache",
      "If-Modified-Since"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-161",
    "number": 258,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 90,
    "question": "Which of the following is present in BOTH an HTTP request line and a status line?",
    "options": [
      "HTTP version number",
      "URL",
      "Method",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "HTTP version number",
    "explanation": {
      "ar": "الـ Request line بيتكون من `(Method, URL, HTTP version)`، والـ Status line بيتكون من `(HTTP version, Status code, Status phrase)`؛ إذن المشترك في الاتنين هو الـ HTTP version number (زي `HTTP/1.1`).",
      "en": "Both the HTTP request line and the HTTP response status line include the HTTP version number (e.g., HTTP/1.1)."
    },
    "keywords": [
      "HTTP Version Number",
      "Request Line",
      "Status Line"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-162",
    "number": 259,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 90,
    "question": "Which of the following is NOT applicable for IP?",
    "options": [
      "Error reporting",
      "Handle addressing conventions",
      "Datagram format",
      "Packet handling conventions"
    ],
    "correctAnswerIndex": 0,
    "answer": "Error reporting",
    "explanation": {
      "ar": "بروتوكول الـ IP نفسه بيحدد الـ Addressing conventions والـ Datagram format والـ Packet handling، لكنه مش بيقوم بـ Error reporting بنفسه؛ اللي مسؤول عن الـ Error reporting في طبقة الشبكة هو بروتوكول الـ ICMP المرافق ليه.",
      "en": "Error reporting is handled by ICMP (Internet Control Message Protocol), not directly by IP itself."
    },
    "keywords": [
      "IP",
      "Error Reporting",
      "ICMP"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-163",
    "number": 260,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 90,
    "question": "Which of the following fields in the IPv4 datagram is NOT related to fragmentation?",
    "options": [
      "Flags",
      "Offset",
      "TOS",
      "Identifier"
    ],
    "correctAnswerIndex": 2,
    "answer": "TOS",
    "explanation": {
      "ar": "الحقول التلاتة المسؤولة عن الـ Fragmentation في الـ IPv4 header هي: الـ Identifier (16 bits)، والـ Flags (3 bits)، والـ Fragmentation Offset (13 bits). أما حقل الـ TOS (Type of Service) فخاص بتمييز أولوية وجودة الخدمة (QoS) ومش مرتبط بالـ Fragmentation.",
      "en": "Identifier, Flags, and Fragmentation Offset are the three IPv4 header fields used for packet fragmentation and reassembly; Type of Service (TOS) is used for traffic differentiation/QoS."
    },
    "keywords": [
      "IPv4 Fragmentation",
      "TOS",
      "Type of Service",
      "Flags",
      "Offset",
      "Identifier"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-164",
    "number": 261,
    "source": "question-bank",
    "type": "practical",
    "tier": 1,
    "topic": "network-ip",
    "page": 91,
    "question": "The TTL field has a value of 10. How many routers (max) can process this datagram?",
    "options": [
      "11",
      "5",
      "10",
      "1"
    ],
    "correctAnswerIndex": 2,
    "answer": "10",
    "explanation": {
      "ar": "بما إن كل Router بيستقبل الـ datagram بينقص قيمة الـ TTL بمقدار 1، ولما توصل لـ 0 بيتعملها discard، فلو الـ TTL = 10 يبقى أقصى عدد من الـ routers يقدر يعالج الـ datagram دي هو 10 routers.",
      "en": "Each router that processes the datagram decrements the TTL field by 1; when TTL reaches 0, the datagram is discarded. Thus, a TTL of 10 allows at most 10 routers to process the datagram."
    },
    "keywords": [
      "TTL",
      "10 Routers",
      "IPv4 Header"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-165",
    "number": 262,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 91,
    "question": "If the value in the IPv4 Protocol field is 17, the transport layer protocol used is ____.",
    "options": [
      "TCP",
      "UDP",
      "Either of the mentioned",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "UDP",
    "explanation": {
      "ar": "في حقل الـ Protocol في الـ IPv4 header: الرقم `17` معناه إن البروتوكول في طبقة الـ Transport هو `UDP` (بينما الرقم `6` معناه `TCP`، والرقم `1` معناه `ICMP`).",
      "en": "In the IPv4 header Protocol field, value 17 indicates UDP (User Datagram Protocol), while 6 indicates TCP and 1 indicates ICMP."
    },
    "keywords": [
      "Protocol Field 17",
      "UDP",
      "IPv4 Header"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-166",
    "number": 263,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "network-ip",
    "page": 92,
    "question": "The data field (payload) of an IP datagram can carry which of the following?",
    "options": [
      "TCP segment",
      "UDP segment",
      "ICMP messages",
      "All of the mentioned (Note: printed as 'None of the mentioned' in the sheet; all three can be carried, with ICMP messages or TCP/UDP segments being valid payloads)"
    ],
    "correctAnswerIndex": 2,
    "answer": "ICMP messages (as well as TCP and UDP segments — all three are carried inside the IP data field)",
    "explanation": {
      "ar": "حقل الـ Data في الـ IPv4 datagram بيشيل عادةً TCP segment أو UDP datagram، وكمان بيشيل رسائل الـ ICMP! في مصدر السؤال الأصلي (Sanfoundry) كانت الإجابة المختارة هي `ICMP messages` للتأكيد على إن رسائل الـ ICMP رغم إنها Layer 3 إلا إنها بتتغلف جوه الـ IP data field زيها زي TCP وUDP.",
      "en": "The data field of an IP datagram can carry transport-layer segments (TCP or UDP) as well as network-layer ICMP messages encapsulated directly inside IP."
    },
    "keywords": [
      "IP Data Field",
      "ICMP Messages",
      "TCP",
      "UDP"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-167",
    "number": 264,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 92,
    "question": "What should be the More Fragments (MF) flag value in the IPv4 header to indicate the last fragment?",
    "options": [
      "0",
      "1",
      "TTL value",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "0",
    "explanation": {
      "ar": "بت الـ More Fragments (MF flag) بيكون قيمته `1` في كل الأجزاء (fragments) طول ما لسه فيه أجزاء جاية بعدها، وبيكون قيمته `0` في الجزء الأخير (last fragment) عشان يعرف المستقبِل إن دي آخر قطعة من الـ datagram.",
      "en": "The More Fragments (MF) flag bit is set to 1 for all fragments except the last fragment, which has MF set to 0."
    },
    "keywords": [
      "Last Fragment",
      "Flag Value 0",
      "More Fragments",
      "IPv4"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-168",
    "number": 265,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 92,
    "question": "Which of these is NOT applicable to the IP protocol?",
    "options": [
      "is connectionless",
      "offer reliable service",
      "offer unreliable service",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 1,
    "answer": "offer reliable service",
    "explanation": {
      "ar": "بروتوكول الـ IP هو بروتوكول Connectionless وبيقدم خدمة Unreliable (Best-effort delivery)؛ يعني مش بيضمن وصول الـ packets ولا ترتيبها، وبالتالي جملة `offer reliable service` غير صحيحة بالنسبة للـ IP (الـ TCP هو اللي بيقدم reliable service).",
      "en": "IP is a connectionless, unreliable (best-effort) protocol; it does NOT offer reliable service."
    },
    "keywords": [
      "IP Protocol",
      "Unreliable",
      "Best-Effort",
      "Connectionless"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-169",
    "number": 266,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "network-ip",
    "page": 93,
    "question": "Fragmentation has the following demerits:",
    "options": [
      "complicates routers",
      "open to DOS attack",
      "overlapping of fragments",
      "All of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "All of the mentioned",
    "explanation": {
      "ar": "عيوب الـ Fragmentation في IPv4 تشمل: إنها بتعقد شغل الـ routers والـ hosts، وبتفتح ثغرات لهجمات الـ DoS (زي Teardrop / Ping of Death attacks)، ومشكلة تداخل الأجزاء (overlapping of fragments)، وعشان كده اتلغت الـ Fragmentation من على الراوترات في IPv6.",
      "en": "IPv4 fragmentation complicates router/host processing, creates vulnerabilities to DoS attacks, and risks overlapping fragments ('All of the mentioned')."
    },
    "keywords": [
      "Fragmentation Demerits",
      "DoS Attack",
      "IPv4"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-170",
    "number": 267,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 93,
    "question": "Which field helps to check rearrangement (reassembly order) of the fragments?",
    "options": [
      "offset",
      "flag",
      "TTL",
      "identifier"
    ],
    "correctAnswerIndex": 0,
    "answer": "offset",
    "explanation": {
      "ar": "حقل الـ Fragmentation Offset (13 bits) بيحدد مكان كل fragment بالظبط بالنسبة للـ datagram الأصلية (بوحدات من 8 bytes)، وهو اللي بيساعد المستقبِل في إعادة ترتيب وتجميع (rearrangement/reassembly) الـ fragments في مكانها الصح.",
      "en": "The Fragmentation Offset field specifies the relative position of a fragment in the original datagram, enabling proper rearrangement (reassembly) at the destination."
    },
    "keywords": [
      "Fragmentation Offset",
      "Reassembly",
      "IPv4 Header"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-171",
    "number": 268,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 93,
    "question": "The size of the IP address in IPv6 is:",
    "options": [
      "4bytes",
      "128bits",
      "8bytes",
      "100bits"
    ],
    "correctAnswerIndex": 1,
    "answer": "128bits",
    "explanation": {
      "ar": "حجم الـ IPv6 address هو 128 bits (أي 16 bytes) — والمذكرة نفسها كاتبة تحت السؤال: `Explanation: An IPv6 address is 128 bits long.`",
      "en": "An IPv6 address is 128 bits (16 bytes) long."
    },
    "keywords": [
      "IPv6 Address Size",
      "128 bits"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-172",
    "number": 269,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 94,
    "question": "The header length of an IPv6 datagram is _____.",
    "options": [
      "10bytes",
      "25bytes",
      "30bytes",
      "40bytes"
    ],
    "correctAnswerIndex": 3,
    "answer": "40bytes",
    "explanation": {
      "ar": "الـ Base Header بتاع الـ IPv6 datagram ليه طول ثابت (fixed header length) قدره 40 bytes، وده بيخلي معالجة الـ packets في الراوترات أسرع بكتير من الـ Variable-length header في IPv4.",
      "en": "An IPv6 datagram has a fixed base header length of 40 bytes, resulting in faster router processing."
    },
    "keywords": [
      "IPv6 Header Length",
      "40 bytes"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-173",
    "number": 270,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 94,
    "question": "In the IPv6 header, the traffic class field is similar to which field in the IPv4 header?",
    "options": [
      "Fragmentation field",
      "Fast-switching",
      "ToS field",
      "Option field"
    ],
    "correctAnswerIndex": 2,
    "answer": "ToS field",
    "explanation": {
      "ar": "حقل الـ Traffic Class (8 bits) في الـ IPv6 header بيؤدي نفس وظيفة حقل الـ ToS (Type of Service) في الـ IPv4 header، وهو تحديد أولوية ونوع خدمة الـ packets (QoS / DiffServ).",
      "en": "The 8-bit Traffic Class field in the IPv6 header is analogous to the Type of Service (ToS) field in the IPv4 header, enabling differentiated priority handling."
    },
    "keywords": [
      "Traffic Class",
      "ToS Field",
      "IPv6 vs IPv4"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-174",
    "number": 271,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 95,
    "question": "IPv6 does not use _________ type of address.",
    "options": [
      "Broadcast",
      "Multicast",
      "Anycast",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "Broadcast",
    "explanation": {
      "ar": "بروتوكول الـ IPv6 لغى الـ Broadcast تماماً واستبدله بالـ Multicast، فأنواع العناوين في IPv6 هي: Unicast، وMulticast، وAnycast فقط.",
      "en": "Broadcast addressing has been eliminated in IPv6 and replaced by multicast; IPv6 supports unicast, multicast, and anycast addresses."
    },
    "keywords": [
      "IPv6 Addressing",
      "No Broadcast",
      "Multicast",
      "Anycast"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-175",
    "number": 272,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 96,
    "question": "These are the features present in IPv4 but NOT in the IPv6 base header:",
    "options": [
      "Fragmentation (by intermediate routers / fields in base header)",
      "Header checksum",
      "Options (in fixed base header)",
      "All of the mentioned"
    ],
    "correctAnswerIndex": 3,
    "answer": "All of the mentioned",
    "explanation": {
      "ar": "عشان يخلوا الـ IPv6 header سريع وثابت الحجم (40 bytes)، شالوا منه حقول الـ Fragmentation، والـ Header checksum، والـ Options من الـ Base header، فالإجابة هي All of the mentioned.",
      "en": "In-network router fragmentation, the header checksum, and variable-length options in the main header are all present in IPv4 but removed from the IPv6 base header."
    },
    "keywords": [
      "IPv4 vs IPv6",
      "Fragmentation",
      "Header Checksum",
      "Options"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-176",
    "number": 273,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 96,
    "question": "The _____ field determines the lifetime of the IPv6 datagram.",
    "options": [
      "Hop limit",
      "TTL",
      "Next header",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 0,
    "answer": "Hop limit",
    "explanation": {
      "ar": "في الـ IPv6، الحقل اللي بيحدد عمر الـ datagram (اللي كان اسمه TTL في IPv4) بقى اسمه `Hop limit`؛ كل router بينقصه بـ 1 ولما يوصل لـ 0 بيتعمل discard للـ datagram.",
      "en": "In IPv6, the Hop Limit field (which replaced IPv4's TTL field) determines the lifetime of the datagram by decrementing by 1 at each router hop."
    },
    "keywords": [
      "Hop Limit",
      "IPv6 Header",
      "TTL"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-177",
    "number": 274,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 98,
    "question": "Dual-stack approach refers to:",
    "options": [
      "Implementing IPv4 with 2 stacks",
      "Implementing IPv6 with 2 stacks",
      "Node has both IPv4 and IPv6 support",
      "None of the mentioned"
    ],
    "correctAnswerIndex": 2,
    "answer": "Node has both IPv4 and IPv6 support",
    "explanation": {
      "ar": "نهج الـ Dual-stack للانتقال من IPv4 لـ IPv6 معناه إن الـ Node (سواء راوتر أو جهاز) بيدعم ويشغل كلاً من بروتوكول IPv4 وبروتوكول IPv6 في نفس الوقت.",
      "en": "In the dual-stack approach for IPv4-to-IPv6 transition, a node has complete support for both IPv4 and IPv6 protocol stacks."
    },
    "keywords": [
      "Dual-Stack",
      "IPv4 and IPv6",
      "Transition"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-178",
    "number": 275,
    "source": "question-bank",
    "type": "mcq",
    "tier": 1,
    "topic": "network-ip",
    "page": 99,
    "question": "Suppose two IPv6 nodes want to interoperate using IPv6 datagrams, but they are connected by intervening IPv4 routers. The best solution here is:",
    "options": [
      "use the dual-stack approach",
      "Tunneling",
      "No solution",
      "Replace the system"
    ],
    "correctAnswerIndex": 1,
    "answer": "Tunneling",
    "explanation": {
      "ar": "لما جهازين أو راوترين شغالين بـ IPv6 يعوزوا يكلموا بعض وفي النص بينهم راوترات قديمة شغالة بـ IPv4 بس، الحل الأمثل هو الـ Tunneling: بنحط الـ IPv6 datagram كلها جوه الـ Data field بتاع IPv4 datagram لحد ما تعدي منطقة الـ IPv4.",
      "en": "Tunneling solves this by encapsulating the entire IPv6 datagram inside the payload of an IPv4 datagram so it can traverse the intervening IPv4 routers."
    },
    "keywords": [
      "Tunneling",
      "IPv6 over IPv4",
      "Transition"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p3-179",
    "number": 276,
    "source": "question-bank",
    "type": "mcq",
    "tier": 2,
    "topic": "network-ip",
    "page": 99,
    "question": "Teredo is an automatic tunneling technique. In each client, the obfuscated IPv4 address is represented by bits:",
    "options": [
      "96 to 127",
      "0 to 63",
      "80 to 95",
      "64 to 79"
    ],
    "correctAnswerIndex": 0,
    "answer": "96 to 127",
    "explanation": {
      "ar": "في عنوان Teredo IPv6 (طوله 128 bits من bit 0 لـ bit 127): آخر 32 bits على اليمين (اللي هما من bit 96 لـ bit 127) بيمثلوا عنوان الـ Public IPv4 للـ client بعد عمل XOR ليه (obfuscated IPv4 address).",
      "en": "In a 128-bit Teredo IPv6 address, bits 96 to 127 (the final 32 bits) store the obfuscated client public IPv4 address."
    },
    "keywords": [
      "Teredo",
      "Bits 96 to 127",
      "IPv6 Tunneling"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  }
];

export const bankPart4Essays: Question[] = [
  {
    "id": "bank-p4-01",
    "number": 277,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "intro-models",
    "page": 100,
    "question": "What is defined by the logical topology?",
    "options": [
      "The path that data signals actually take through the network from one node to another (how nodes communicate across the medium)",
      "The physical location of desks and chairs in the room",
      "The brand of network cables used",
      "The voltage of the computer power supply"
    ],
    "correctAnswerIndex": 0,
    "answer": "Logical topology defines how data signals actually travel across the network medium from one node to another (i.e., the logical path of data flow and media access method, such as logical bus or logical ring), regardless of how the cables are physically laid out.",
    "explanation": {
      "ar": "الـ Logical topology بتحدد المسار الفعلي اللي بتمشي فيه إشارات البيانات (data flow) جوه الشبكة من جهاز للتاني وإزاي الأجهزة بتتخاطب مع الوسط، بغض النظر عن شكل الكابلات الفيزيائي على الأرض.",
      "en": "Logical topology defines the actual path that data signals take across the network from node to node."
    },
    "keywords": [
      "Logical Topology",
      "Data Flow Path"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-02",
    "number": 278,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "intro-models",
    "page": 101,
    "question": "What is the difference between logical topology and physical topology?",
    "options": [
      "Physical topology describes the actual geometric layout of cables and devices, whereas logical topology describes how data signals flow between nodes across the medium",
      "Physical topology is for wireless networks only, while logical topology is for fiber cables only",
      "Logical topology refers to the length of the cable in meters",
      "There is no difference between them"
    ],
    "correctAnswerIndex": 0,
    "answer": "Physical topology refers to the actual physical layout and geometric arrangement of cables, computers, and network devices (e.g., star, bus, ring). Logical topology refers to the logical path that data signals follow through the network from one device to another (for example, an Ethernet hub uses a physical star topology but operates as a logical bus).",
    "explanation": {
      "ar": "الـ Physical topology هي الشكل الهندسي لتوصيل الكابلات والأجهزة على أرض الواقع (زي Star أو Bus أو Ring)، أما الـ Logical topology فهي الطريقة اللي الداتا بتمشي وتنتقل بيها منطقياً جوه الكابلات دي (مثلاً شبكة Ethernet متوصلة بـ Hub هي Physical Star لكنها شغالة كـ Logical Bus لأن كل الإشارات بتتبعت لكل البورتات).",
      "en": "Physical topology is the physical layout of nodes and cables, whereas logical topology is the logical pathway data signals travel across those links."
    },
    "keywords": [
      "Logical vs Physical Topology",
      "Star",
      "Bus"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-03",
    "number": 279,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "intro-models",
    "page": 101,
    "question": "What are the advantages of a logical/physical star topology over a bus topology?",
    "options": [
      "Fault isolation (a single cable break only affects one node, not the entire network), easier troubleshooting, easy addition/removal of nodes, and higher performance with switches",
      "Uses less cable than a bus topology",
      "Does not require a central hub or switch",
      "If one PC is turned off, the whole star network crashes"
    ],
    "correctAnswerIndex": 0,
    "answer": "1) Fault tolerance and isolation: a cable break in a star only disconnects that single computer, whereas a break in a bus brings down the entire network. 2) Easy troubleshooting via central switch/hub LEDs. 3) Scalability: adding or removing nodes does not disrupt the network. 4) Better performance and dedicated bandwidth per port when using a switch.",
    "explanation": {
      "ar": "مميزات الـ Star topology عن الـ Bus topology: (1) عزل الأعطال (لو كابل واحد اتقطع، الجهاز بتاعه بس هو اللي بيفصل مش الشبكة كلها زي الـ Bus)، (2) سهولة اكتشاف وإصلاح الأعطال (Troubleshooting)، (3) سهولة إضافة أو إزالة أجهزة من غير ما نوقف الشبكة، (4) أداء أعلى ومنع التصادمات عند استخدام Switch.",
      "en": "Star topology provides single-link fault isolation, easier centralized troubleshooting, seamless addition/removal of nodes, and superior collision-free throughput when switched."
    },
    "keywords": [
      "Star vs Bus",
      "Fault Isolation",
      "Troubleshooting"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-04",
    "number": 280,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "physical-media",
    "page": 102,
    "question": "Why is termination important on a physical bus topology?",
    "options": [
      "To absorb electrical signals at both ends of the backbone cable and prevent signal reflection (bouncing), which would cause interference and corrupt data",
      "To amplify the signal so it travels faster than light",
      "To assign IP addresses to computers on the bus",
      "To convert analog signals into optical light pulses"
    ],
    "correctAnswerIndex": 0,
    "answer": "Terminators must be placed at both ends of a physical bus cable to absorb the electrical signal when it reaches the end of the wire. Without termination, the signal reflects (bounces) back down the cable, causing signal interference, collisions, and network failure.",
    "explanation": {
      "ar": "الـ Termination (وضع Terminator أو مُنهي طرفي بمقاومة مطابقة في أول وآخر كابل الـ Bus) ضروري جداً عشان يمتص الإشارة الكهربائية لما توصل لنهاية السلك ويمنع ارتدادها (Signal reflection / bouncing)؛ لأن الإشارة لو ارتدت في السلك هتتداخل مع الإشارات الجديدة وتوقع الشبكة.",
      "en": "Termination absorbs signals at the ends of a bus cable, preventing signal bounce (reflection) that would otherwise cause interference and halt network communications."
    },
    "keywords": [
      "Bus Termination",
      "Terminator",
      "Signal Reflection",
      "Signal Bounce"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-05",
    "number": 281,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "intro-models",
    "page": 102,
    "question": "How do hosts on a physical ring topology communicate?",
    "options": [
      "Data travels unidirectionally around the ring from node to node (each node acts as a repeater), controlled by token passing where only the host holding the token can transmit",
      "All hosts transmit simultaneously on a shared coaxial cable without rules",
      "Hosts send packets directly to a central satellite",
      "Data bounces back and forth between two terminators"
    ],
    "correctAnswerIndex": 0,
    "answer": "In a ring topology, each host is connected to its two immediate neighbors in a closed loop. Data signals travel in one direction (unidirectionally) from node to node, with each node regenerating and passing the signal along until it reaches the destination. Media access is typically controlled using a 'token' (Token Ring / FDDI): only the host possessing the token is allowed to transmit.",
    "explanation": {
      "ar": "في الـ Ring topology، الأجهزة متوصلة في حلقة مغلقة؛ البيانات بتمشي في اتجاه واحد من جهاز للتاني (وكل جهاز بيشتغل كـ repeater يقوي الإشارة ويمررها للي بعده) لحد ما توصل للـ destination، وبيتم تنظيم الإرسال غالباً بطريقة الـ Token Passing (الجهاز اللي معاه الـ Token بس هو اللي يبعت).",
      "en": "Hosts on a ring topology communicate by passing data frames sequentially from neighbor to neighbor in a unidirectional loop, typically governed by token passing."
    },
    "keywords": [
      "Ring Topology",
      "Token Passing",
      "Unidirectional"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-06",
    "number": 282,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 103,
    "question": "What is a characteristic of client/server networks?",
    "options": [
      "Centralized administration, security, and resource/data storage on dedicated always-on servers that service requests from client workstations",
      "Every computer acts equally as both client and server with no centralized administration",
      "Limited to a maximum of two computers",
      "Cannot scale beyond a single room"
    ],
    "correctAnswerIndex": 0,
    "answer": "Client/server networks feature dedicated server(s) that provide centralized resource sharing, centralized security/authentication, centralized data backup, and high scalability to serve multiple client machines.",
    "explanation": {
      "ar": "أهم خصائص شبكات الـ Client/Server: وجود سيرفر مركزي مخصص (Dedicated server) بيوفر إدارة مركزية، حماية وأمان وصلاحيات مركزية (Centralized security)، نسخ احتياطي مركزي للبيانات، وقابلية عالية للتوسع (Scalability).",
      "en": "Client/server networks are characterized by dedicated servers providing centralized security, administration, data storage, backups, and high scalability."
    },
    "keywords": [
      "Client/Server Characteristics",
      "Centralized Security",
      "Dedicated Server"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-07",
    "number": 283,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 103,
    "question": "What is a characteristic of the IEEE 802.3 100BaseX Fast Ethernet standard?",
    "options": [
      "It operates at 100 Mbps baseband transmission over twisted-pair (100Base-TX, Cat 5 or higher) or fiber-optic (100Base-FX) cables in a physical star topology using CSMA/CD",
      "It operates at 10 Kbps over thin coaxial cable",
      "It uses wireless infrared signals at 1 Mbps",
      "It requires a physical ring topology with token passing"
    ],
    "correctAnswerIndex": 0,
    "answer": "IEEE 802.3u (100BaseX Fast Ethernet) provides a 100 Mbps baseband transmission rate (10x faster than 10BaseT), uses a physical star topology with switches/hubs, preserves the standard Ethernet frame format and CSMA/CD MAC protocol, and runs over Category 5+ UTP (100Base-TX) or optical fiber (100Base-FX).",
    "explanation": {
      "ar": "معيار الـ 100BaseX (Fast Ethernet - IEEE 802.3u) بيتميز بسرعة نقل `100 Mbps` بنظام Baseband، وبيشتغل على Star topology باستخدام كابلات UTP Category 5 فما فوق (`100Base-TX`) أو كابلات Fiber (`100Base-FX`) مع الحفاظ على نفس شكل الـ Ethernet frame وبروتوكول CSMA/CD.",
      "en": "IEEE 802.3 100BaseX Fast Ethernet transmits baseband signals at 100 Mbps over Cat 5+ UTP (100Base-TX) or fiber (100Base-FX) in a star topology."
    },
    "keywords": [
      "100BaseX",
      "Fast Ethernet",
      "100 Mbps",
      "IEEE 802.3"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-08",
    "number": 284,
    "source": "question-bank",
    "type": "essay",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 103,
    "question": "What is a benefit of both NDIS and ODI?",
    "options": [
      "They provide a standardized driver interface between the NIC and upper-layer protocols, allowing multiple network protocol stacks to share a single NIC (and vice versa)",
      "They physically boost the voltage on coaxial cables",
      "They replace the need for an operating system",
      "They encrypt optical fiber signals"
    ],
    "correctAnswerIndex": 0,
    "answer": "NDIS (Network Driver Interface Specification, by Microsoft/3Com) and ODI (Open Data-Link Interface, by Novell/Apple) provide a standardized software interface between the Data Link layer (NIC driver) and upper-layer protocols, allowing multiple protocol stacks (e.g., TCP/IP, IPX/SPX) to bound to and share a single NIC, and hardware vendors to write one universal driver.",
    "explanation": {
      "ar": "فايدة الـ NDIS (Network Driver Interface Specification) والـ ODI (Open Data-Link Interface) إنهم بيوفروا واجهة قياسية بين تعريف كارت الشبكة (NIC driver) وبروتوكولات الطبقات العليا، وده بيسمح بتشغيل أكتر من بروتوكول (زي TCP/IP وIPX/SPX) على كارت شبكة واحد في نفس الوقت.",
      "en": "Both NDIS and ODI decouple NIC hardware drivers from upper-layer protocols, enabling multiple protocols to run over a single NIC and simplifying driver development."
    },
    "keywords": [
      "NDIS",
      "ODI",
      "NIC Driver Interface"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-09",
    "number": 285,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "intro-models",
    "page": 104,
    "question": "What packet switching connection allows bandwidth to be used on demand?",
    "options": [
      "Virtual Circuit (especially Switched Virtual Circuit - SVC / Frame Relay / ATM) and Datagram packet switching allocate link bandwidth dynamically on demand via statistical multiplexing",
      "Dedicated TDM Circuit Switching",
      "Leased T1 physical lines",
      "Analog AM radio broadcasting"
    ],
    "correctAnswerIndex": 0,
    "answer": "Packet-switched connections (such as Switched Virtual Circuits [SVCs], Frame Relay, ATM, and IP datagram networks) allocate bandwidth dynamically on demand (statistical multiplexing), consuming link capacity only when packets are actively being transmitted.",
    "explanation": {
      "ar": "في شبكات الـ Packet switching (وسواء كانت Datagram أو Switched Virtual Circuits - SVC زي Frame Relay وATM)، الـ Bandwidth بيتخصص عند الطلب (on demand) عن طريق الـ Statistical multiplexing، يعني الخط مش بيتحجز عالفاضي وقت السكون.",
      "en": "Packet-switched connections (including datagram networks and Switched Virtual Circuits in Frame Relay/ATM) allocate bandwidth dynamically on demand."
    },
    "keywords": [
      "Bandwidth on Demand",
      "Packet Switching",
      "SVC"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-10",
    "number": 286,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "intro-models",
    "page": 105,
    "question": "What are the three criteria necessary for an effective and efficient network?",
    "options": [
      "Performance, Reliability, and Security",
      "Color, Weight, and Size",
      "Cost, Brand, and Packaging",
      "Keyboard, Mouse, and Monitor"
    ],
    "correctAnswerIndex": 0,
    "answer": "The three most important criteria for an effective and efficient network (per Forouzan) are: 1) Performance (measured by transit time, response time, throughput, and delay), 2) Reliability (measured by frequency of failure, recovery time, and robustness), and 3) Security (protecting data from unauthorized access, damage, and breaches).",
    "explanation": {
      "ar": "المعايير التلاتة الأساسية لأي شبكة فعالة وكفؤة (حسب كتاب Forouzan) هي: (1) الـ Performance (الأداء: السرعة وقلة التأخير)، (2) الـ Reliability (الاعتمادية: قلة الأعطال وسرعة التعافي)، (3) الـ Security (الأمان: حماية البيانات من الاختراق والتلف).",
      "en": "The three essential criteria for an effective and efficient network are Performance, Reliability, and Security."
    },
    "keywords": [
      "Network Criteria",
      "Performance",
      "Reliability",
      "Security"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-11",
    "number": 287,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "intro-models",
    "page": 105,
    "question": "Group the OSI layers by function.",
    "options": [
      "1) Network Support Layers (Physical, Data Link, Network); 2) Transport Layer (links the two groups); 3) User Support Layers (Session, Presentation, Application)",
      "1) Hardware Layers (Application, Session); 2) Software Layers (Physical)",
      "All 7 layers belong to a single group",
      "Only Physical and Application layers exist"
    ],
    "correctAnswerIndex": 0,
    "answer": "The 7 OSI layers can be grouped into three functional subgroups: 1) Network Support Layers (Layers 1, 2, 3: Physical, Data Link, Network) which deal with physical aspects of moving data from one device to another; 2) User Support Layers (Layers 5, 6, 7: Session, Presentation, Application) which allow interoperability among unrelated software systems; and 3) The Transport Layer (Layer 4), which links the two subgroups and ensures end-to-end reliable process-to-process delivery.",
    "explanation": {
      "ar": "طبقات الـ OSI السبعة بتتقسم وظيفياً لـ 3 مجموعات: (1) الـ Network Support Layers (الطبقات 1 و2 و3: Physical, Data Link, Network) ومسؤولة عن نقل الداتا بين الأجهزة، (2) الـ User Support Layers (الطبقات 5 و6 و7: Session, Presentation, Application) ومسؤولة عن خدمة برامج المستخدم، (3) طبقة الـ Transport Layer (Layer 4) وهي حلقة الوصل اللي بتربط المجموعتين ببعض.",
      "en": "OSI layers are grouped into Network Support Layers (Physical, Data Link, Network), User Support Layers (Session, Presentation, Application), and the linking Transport Layer."
    },
    "keywords": [
      "OSI Layer Groups",
      "Network Support",
      "User Support",
      "Transport"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-12",
    "number": 288,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "intro-models",
    "page": 105,
    "question": "What are headers and trailers and how do they get added and removed?",
    "options": [
      "Control information added at the beginning (header) and end (trailer, at Layer 2) of data during Encapsulation as data moves down the sender's stack, and stripped off during Decapsulation as data moves up the receiver's stack",
      "Physical plastic caps placed on the ends of fiber cables",
      "Files deleted by the antivirus program",
      "Random noise added by wireless interference"
    ],
    "correctAnswerIndex": 0,
    "answer": "Headers (and trailers at the Data Link layer) are blocks of protocol control information (such as addresses, sequence numbers, and error-checking codes). As data moves down the protocol stack at the sender, each layer adds its own header (and Layer 2 adds a trailer like FCS) in a process called Encapsulation. At the receiving host, as data moves up the stack, each corresponding layer reads and removes its header/trailer in a process called Decapsulation.",
    "explanation": {
      "ar": "الـ Headers والـ Trailers هي بيانات تحكم (زي العناوين وأكواد كشف الأخطاء) بتتحط في أول وآخر الداتا. عند المرسل (Sender) والداتا نازلة من طبقة للتانية تحتها، كل طبقة بتضيف الـ Header بتاعها (وطبقة الـ Data Link بتضيف كمان Trailer في الآخر زي الـ FCS) في عملية اسمها Encapsulation. وعند المستقبِل (Receiver) والداتا طالعة لفوق، كل طبقة بتقرأ وتشيل الـ Header/Trailer الخاص بيها في عملية اسمها Decapsulation.",
      "en": "Headers and trailers are protocol control fields prepended and appended to payloads during encapsulation down the sender's stack and removed during decapsulation up the receiver's stack."
    },
    "keywords": [
      "Headers and Trailers",
      "Encapsulation",
      "Decapsulation"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-13",
    "number": 289,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "intro-models",
    "page": 106,
    "question": "What are the features/advantages provided by layering?",
    "options": [
      "Modularity, abstraction/decomposition of complex problems into smaller manageable parts, ease of maintenance/updating a layer independently, and multi-vendor interoperability",
      "Making the network impossible to update",
      "Forcing all layers to be written in assembly language",
      "Eliminating the need for IP addresses"
    ],
    "correctAnswerIndex": 0,
    "answer": "Layering provides: 1) Modularity and decomposition: breaking a complex networking system into smaller, manageable, well-defined layers; 2) Independence/Abstraction: changes in one layer's implementation do not affect other layers as long as the interface remains unchanged; 3) Interoperability and standardization across different hardware and software vendors; 4) Easier testing, debugging, and maintenance.",
    "explanation": {
      "ar": "مميزات تقسيم الشبكة لطبقات (Layering): (1) الـ Modularity وتقسيم النظام المعقد لأجزاء صغيرة يسهل فهمها وتصميمها، (2) الاستقلالية (تقدر تغير أو تحدث تكنولوجيا طبقة معينة من غير ما تأثر على باقي الطبقات طالما الـ Interface ثابت)، (3) سهولة الصيانة واكتشاف الأعطال، (4) التوافق القياسي (Interoperability) بين منتجات الشركات المختلفة.",
      "en": "Layering provides modularity, abstraction, independent layer evolution/maintenance, simplified troubleshooting, and multi-vendor interoperability."
    },
    "keywords": [
      "Layering Features",
      "Modularity",
      "Abstraction",
      "Interoperability"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-14",
    "number": 290,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "intro-models",
    "page": 106,
    "question": "Why are protocols needed?",
    "options": [
      "To establish common rules for message format (syntax), meaning (semantics), timing/synchronization, flow control, and error handling so diverse devices can communicate reliably",
      "To increase the weight of computer hardware",
      "To prevent computers from communicating with each other",
      "To replace electricity with sound waves"
    ],
    "correctAnswerIndex": 0,
    "answer": "Protocols are needed to define a common language and set of rules (syntax, semantics, timing, flow control, error control, and addressing) between communicating entities so devices from different manufacturers and operating systems can exchange data accurately and reliably.",
    "explanation": {
      "ar": "بنحتاج الـ Protocols لأن أي جهازين مختلفين في الهاردوير والسوفتوير مقدروش يفهموا بعض من غير قواعد مشتركة بتحدد شكل الرسالة (Syntax)، ومعناها (Semantics)، وتوقيت وترتيب الإرسال (Timing)، والتحكم في التدفق والأخطاء (Flow & Error Control).",
      "en": "Protocols are essential to standardize message syntax, semantics, timing, flow control, and error recovery so heterogeneous systems can communicate intelligibly."
    },
    "keywords": [
      "Why Protocols Needed",
      "Syntax",
      "Semantics",
      "Timing"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-15",
    "number": 291,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "intro-models",
    "page": 107,
    "question": "What are the two interfaces provided by protocols in a layered architecture?",
    "options": [
      "1) Service Interface (vertical interface between adjacent layers on the same machine) and 2) Peer-to-Peer Interface (horizontal logical interface between corresponding layers on different machines)",
      "1) Keyboard interface and 2) Monitor interface",
      "1) Power cable and 2) VGA cable",
      "1) RAM interface and 2) Hard disk interface"
    ],
    "correctAnswerIndex": 0,
    "answer": "Protocols in a layered architecture define two interfaces: 1) Service Interface: the vertical interface defining the operations and services that a lower layer offers to the layer directly above it on the same host. 2) Peer Interface (Peer-to-Peer Protocol Interface): the horizontal logical interface defining the form, meaning, and rules of messages exchanged between corresponding layers (peers) on different hosts.",
    "explanation": {
      "ar": "البروتوكولات في المعمارية الطبقية بتوفر نوعين من الـ Interfaces (حسب كتاب Peterson & Davie): (1) الـ Service Interface: وهي الواجهة الرأسية بين طبقة والطبقة اللي فوقيها/تحتيها في نفس الجهاز، (2) الـ Peer Interface: وهي الواجهة الأفقية المنطقية اللي بتحدد شكل وقواعد الرسائل المتبادلة بين نفس الطبقة في جهاز المرسل ونظيرتها (Peer) في جهاز المستقبِل.",
      "en": "A protocol defines a Service Interface (vertical communication with adjacent layers on the same host) and a Peer Interface (horizontal communication with the corresponding layer on a remote host)."
    },
    "keywords": [
      "Service Interface",
      "Peer Interface",
      "Protocol Interfaces"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-16",
    "number": 292,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "physical-media",
    "page": 107,
    "question": "Mention the different physical media?",
    "options": [
      "Guided (Wired) media: Twisted-Pair cable (UTP/STP), Coaxial cable, and Fiber-Optic cable; Unguided (Wireless) media: Radio waves, Microwaves, and Infrared",
      "Only HTTP and FTP",
      "Only Routers and Switches",
      "Only TCP and UDP"
    ],
    "correctAnswerIndex": 0,
    "answer": "Physical transmission media are divided into two categories: 1) Guided (Wired) Media: Twisted-Pair cable (UTP and STP), Coaxial cable (Thinnet/Thicknet), and Fiber-Optic cable. 2) Unguided (Wireless) Media: Radio waves (Wi-Fi, Bluetooth), Microwaves (terrestrial and satellite), and Infrared waves.",
    "explanation": {
      "ar": "الأوساط الفيزيائية لنقل البيانات (Physical media) بتنقسم لنوعين: (1) Guided (Wired) media وتشمل: كابلات الـ Twisted Pair (UTP & STP)، كابلات الـ Coaxial، وكابلات الـ Fiber-Optic. (2) Unguided (Wireless) media وتشمل: الـ Radio waves، والـ Microwaves، والـ Infrared.",
      "en": "Physical media consist of Guided media (Twisted-Pair UTP/STP, Coaxial cable, Optical Fiber) and Unguided wireless media (Radio waves, Microwaves, Infrared)."
    },
    "keywords": [
      "Physical Media",
      "Guided Media",
      "Unguided Media",
      "UTP",
      "Coaxial",
      "Fiber"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-17",
    "number": 293,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "physical-media",
    "page": 107,
    "question": "Explain the two types of duplex?",
    "options": [
      "Half-Duplex: both stations can transmit and receive, but only one at a time (e.g., walkie-talkie / hub); Full-Duplex: both stations can transmit and receive simultaneously (e.g., telephone call / switched Ethernet)",
      "Half-Duplex sends data in one direction only like a keyboard, while Full-Duplex never sends data",
      "Both Half-Duplex and Full-Duplex mean the exact same thing",
      "Duplex refers to the number of CPUs in a server"
    ],
    "correctAnswerIndex": 0,
    "answer": "1) Half-Duplex: Both stations can transmit and receive data, but NOT at the same time; when one device is sending, the other can only receive (like a walkie-talkie or legacy Ethernet hub). 2) Full-Duplex: Both stations can transmit and receive data simultaneously at the same time over separate channels or wire pairs (like a telephone conversation or modern switched Ethernet).",
    "explanation": {
      "ar": "نوعين الـ Duplex هما: (1) الـ Half-Duplex: الطرفين يقدروا يبعتوا ويستقبلوا بيانات لكن مش في نفس اللحظة (واحد يبعت والتاني يستنى لحد ما يخلص، زي جهاز الـ Walkie-Talkie أو الـ Hub). (2) الـ Full-Duplex: الطرفين يقدروا يبعتوا ويستقبلوا بيانات في نفس الوقت مع بعض (زي مكالمة التليفون أو الـ Switch الحديث).",
      "en": "In Half-Duplex, two nodes can both send and receive, but only one at a time; in Full-Duplex, both nodes can transmit and receive simultaneously."
    },
    "keywords": [
      "Half-Duplex",
      "Full-Duplex",
      "Transmission Modes"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-18",
    "number": 294,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 108,
    "question": "What are the responsibilities of the data link layer?",
    "options": [
      "Framing, Physical Addressing (MAC), Flow Control, Error Control (CRC/FCS), and Media Access Control (CSMA/CD, CSMA/CA)",
      "End-to-end routing across different WANs using IP addresses",
      "Rendering HTML and CSS in a web browser",
      "Converting digital bits into laser light pulses"
    ],
    "correctAnswerIndex": 0,
    "answer": "The specific responsibilities of the Data Link Layer (Layer 2) include: 1) Framing (dividing the stream of bits into manageable data units called frames), 2) Physical Addressing (adding sender and receiver MAC addresses), 3) Flow Control (preventing a fast sender from overwhelming a slow receiver), 4) Error Control (detecting damaged/lost frames via trailers like CRC/FCS), and 5) Access Control (determining which device has control over a shared link via MAC protocols).",
    "explanation": {
      "ar": "مسؤوليات طبقة الـ Data Link Layer الخمسة الأساسية (حسب Forouzan) هي: (1) الـ Framing (تغليف الباكيت في Frames)، (2) الـ Physical Addressing (إضافة الـ Source & Destination MAC addresses)، (3) الـ Flow Control، (4) الـ Error Control (اكتشاف الأخطاء بالـ CRC/FCS)، (5) الـ Media Access Control (تنظيم مين يبعت على الكابل المشترك).",
      "en": "The data link layer is responsible for framing, physical (MAC) addressing, flow control, error control, and media access control for node-to-node delivery."
    },
    "keywords": [
      "Data Link Layer Responsibilities",
      "Framing",
      "MAC Addressing",
      "Error Control",
      "Flow Control"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-19",
    "number": 295,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 108,
    "question": "What are the functions of MAC (Media Access Control sublayer)?",
    "options": [
      "Controlling access to the shared physical transmission medium (via CSMA/CD or CSMA/CA), physical MAC addressing (48-bit), frame delimiting/assembly, and FCS/CRC error detection",
      "Translating domain names into IPv6 addresses",
      "Encrypting user passwords in HTTP forms",
      "Calculating shortest path routing tables using OSPF"
    ],
    "correctAnswerIndex": 0,
    "answer": "The MAC (Media Access Control) sublayer (the lower sublayer of Layer 2) is responsible for: 1) Coordinating access to the shared physical medium to prevent/resolve collisions (e.g., CSMA/CD in Ethernet, CSMA/CA in Wi-Fi, or Token Passing), 2) Hardware MAC addressing (source and destination 48-bit MAC addresses), and 3) Frame assembly/delimiting and CRC error checking (FCS).",
    "explanation": {
      "ar": "وظائف طبقة الـ MAC الفرعية (Media Access Control): (1) تنظيم الوصول للوسط المشترك ومنع أو معالجة التصادمات (عن طريق CSMA/CD أو CSMA/CA)، (2) التعامل مع العناوين الفيزيائية (48-bit MAC addresses)، (3) تكوين وتحديد بداية ونهاية الـ Frame وفحص الأخطاء بالـ FCS/CRC.",
      "en": "The MAC sublayer manages shared-channel access (CSMA/CD, CSMA/CA), hardware MAC addressing, frame assembly/recognition, and FCS error detection."
    },
    "keywords": [
      "MAC Sublayer Functions",
      "Media Access Control",
      "CSMA/CD"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-20",
    "number": 296,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 109,
    "question": "What are the functions of an LLC (Logical Link Control sublayer)?",
    "options": [
      "Providing a uniform interface to the Network Layer, multiplexing multiple Layer 3 protocols over a single MAC link, and providing optional flow and error control (IEEE 802.2)",
      "Crimping RJ-45 connectors onto Cat 6 cables",
      "Generating radio waves in a Wi-Fi antenna",
      "Assigning public IP addresses to ISPs"
    ],
    "correctAnswerIndex": 0,
    "answer": "The LLC (Logical Link Control, IEEE 802.2) sublayer is the upper sublayer of the Data Link Layer. Its functions are: 1) Providing a uniform interface to the upper Network Layer while hiding differences among various underlying MAC technologies (Ethernet, Token Ring, WLAN), 2) Multiplexing/identifying upper-layer protocols (like IPv4, IPv6, IPX), and 3) Providing optional link-level flow control and ARQ error control.",
    "explanation": {
      "ar": "طبقة الـ LLC (Logical Link Control - IEEE 802.2) هي النص العلوي من الـ Data Link Layer، ووظيفتها: (1) تعمل كحلقة وصل موحدة مع الـ Network Layer فوقيها وتخفي اختلافات الهاردوير، (2) تحدد نوع بروتوكول الـ Network Layer اللي شايله الـ Frame (Multiplexing)، (3) توفر خدمات الـ Flow control والـ Error control عند الحاجة.",
      "en": "The LLC sublayer interfaces with the Network Layer, multiplexes upper-layer protocols over the MAC sublayer, and provides optional flow and error control."
    },
    "keywords": [
      "LLC Functions",
      "Logical Link Control",
      "IEEE 802.2"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-21",
    "number": 297,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 109,
    "question": "What is Ethernet?",
    "options": [
      "The most widely used Local Area Network (LAN) technology standardized as IEEE 802.3, operating at the Physical and Data Link layers using 48-bit MAC addresses and frames",
      "A wide-area satellite navigation system",
      "An application-layer protocol for sending email",
      "A type of web browser"
    ],
    "correctAnswerIndex": 0,
    "answer": "Ethernet (standardized as IEEE 802.3) is the dominant wired Local Area Network (LAN) technology operating at the Physical and Data Link layers. It transmits data in frames using 48-bit MAC addresses, historically used CSMA/CD for shared media access, and supports speeds from 10 Mbps up to 100+ Gbps over twisted-pair and fiber-optic cables.",
    "explanation": {
      "ar": "الـ Ethernet (المعيار القياسي IEEE 802.3) هي أشهر وأوسع تكنولوجيا مستخدمة في الشبكات المحلية السلكية (Wired LANs)، بتشتغل في طبقتي الـ Physical والـ Data Link، وبتبعت البيانات في شكل Frames باستخدام عناوين MAC طولها 48 bits وبروتوكول CSMA/CD.",
      "en": "Ethernet (IEEE 802.3) is the standard wired LAN technology operating at Layers 1 and 2, using 48-bit MAC addressing and frame-based transmission."
    },
    "keywords": [
      "Ethernet",
      "IEEE 802.3",
      "LAN"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-22",
    "number": 298,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 110,
    "question": "Define the term 'carrier sense' in CSMA/CD?",
    "options": [
      "'Listen before talking': a network node checks/listens to the shared transmission medium to see if a carrier signal is present before attempting to transmit a frame",
      "Sending a jam signal after a collision occurs",
      "Encrypting the wireless password",
      "Routing packets across the Internet backbone"
    ],
    "correctAnswerIndex": 0,
    "answer": "Carrier Sense ('listen before transmit') means that before a station sends a frame, its NIC listens to the shared communication medium to check whether another station is currently transmitting a signal (carrier). If the medium is busy, the station waits until it becomes idle.",
    "explanation": {
      "ar": "مصطلح Carrier Sense في CSMA/CD معناه ببساطة `اسمع قبل ما تتكلم` (Listen before talking): يعني كارت الشبكة بيتصنت على الكابل الأول قبل ما يبعت؛ لو لقى فيه إشارة (Carrier) ماشية في الكابل بيعرف إن الخط مشغول فيستنى لحد ما يفضى.",
      "en": "Carrier Sense means that a node listens to the shared transmission channel before transmitting to determine whether another node is currently sending a signal."
    },
    "keywords": [
      "Carrier Sense",
      "CSMA/CD",
      "Listen Before Talking"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-23",
    "number": 299,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "physical-media",
    "page": 110,
    "question": "Define Repeater?",
    "options": [
      "A Physical Layer (Layer 1) device that receives weakened/attenuated signals, regenerates and retimes them to their original strength, and retransmits them to extend the maximum cable distance of a LAN",
      "A Layer 3 device that routes packets using IP tables",
      "A firewall that blocks malicious websites",
      "An application server that stores emails"
    ],
    "correctAnswerIndex": 0,
    "answer": "A repeater is a Physical Layer (Layer 1) networking device that receives attenuated (weakened) signals from one cable segment, regenerates and cleans the bit pattern back to its original strength, and retransmits it onto another segment to extend the physical distance of a network.",
    "explanation": {
      "ar": "الـ Repeater (مُكرر الإشارة) هو جهاز بيشتغل في الـ Physical Layer (Layer 1)، وظيفته يستقبل الإشارة بعد ما تضعف في الكابل بسبب الـ Attenuation، ويعيد توليدها وتقويتها (Regenerate) لأصلها ويبعتها تاني عشان يزود المسافة اللي يقدر يغطيها كابل الشبكة.",
      "en": "A repeater is a Layer 1 device that regenerates and amplifies attenuated signals to extend the maximum physical transmission distance of a network."
    },
    "keywords": [
      "Repeater",
      "Physical Layer",
      "Signal Regeneration"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-24",
    "number": 300,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 110,
    "question": "Define collision detection?",
    "options": [
      "'Listen while talking': while transmitting, a node monitors the medium to detect voltage/signal spikes caused by two stations transmitting simultaneously; if detected, it aborts, sends a jam signal, and backs off",
      "Listening to the cable only before transmission starts",
      "Checking if an IP address is already used by DHCP",
      "Scanning a file for computer viruses"
    ],
    "correctAnswerIndex": 0,
    "answer": "Collision Detection ('listen while talking') is the mechanism in CSMA/CD where a transmitting station continuously monitors the medium while sending its frame. If it detects an abnormal voltage level/signal interference indicating that another station transmitted at the same time (a collision), it immediately aborts transmission, sends a 32/48-bit jam signal, and waits a random backoff period before retrying.",
    "explanation": {
      "ar": "الـ Collision Detection معناه `اسمع وإنت بتتكلم` (Listen while talking): يعني الجهاز وهو بيبعت الـ frame بيراقب الكابل في نفس اللحظة؛ لو لقى الفولت عالي أو الإشارة اتدمرت بسبب إن جهاز تاني بعت في نفس الوقت (تصادم Collision)، بيوقف الإرسال فوراً، يبعت Jam signal ينبه الكل، ويستنى وقت عشوائي (Random Backoff) قبل ما يحاول تاني.",
      "en": "Collision detection is the ability of a transmitting node to monitor the medium while sending, detect overlapping transmissions, abort, emit a jam signal, and invoke exponential backoff."
    },
    "keywords": [
      "Collision Detection",
      "CSMA/CD",
      "Jam Signal",
      "Listen While Talking"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-25",
    "number": 301,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 111,
    "question": "Why is Ethernet said to be a 1-persistent protocol?",
    "options": [
      "Because when a station has data to send and senses the channel is idle (or as soon as a busy channel becomes idle), it transmits immediately with probability p = 1",
      "Because it only allows 1 computer on the entire network",
      "Because it waits 1 hour before sending every packet",
      "Because it uses 1 volt of electricity"
    ],
    "correctAnswerIndex": 0,
    "answer": "Ethernet is called a 1-persistent CSMA protocol because a station with a frame to send continuously senses the channel and, as soon as it finds the channel idle, transmits its frame immediately with a probability of 1 (100% certainty).",
    "explanation": {
      "ar": "الـ Ethernet بيتوصف إنه `1-persistent CSMA protocol` لأن الجهاز لما يكون عنده Frame عايز يبعتها، بيفضل يراقب الكابل أول بأول، وأول ما يلاقي الكابل فاضي (idle) بيبعت فوراً باحتمالية `p = 1` (يعني بنسبة 100% من غير تأخير عشوائي قبل أول محاولة).",
      "en": "Ethernet is 1-persistent because a station continuously monitors a busy channel and transmits immediately with probability 1 as soon as the channel becomes idle."
    },
    "keywords": [
      "1-Persistent",
      "Ethernet",
      "CSMA"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-26",
    "number": 302,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 111,
    "question": "What is exponential back-off?",
    "options": [
      "An algorithm in CSMA/CD where, after n consecutive collisions on a frame, a node chooses a random wait slot count between 0 and (2^n - 1) before attempting retransmission",
      "Turning off the router when traffic is high",
      "Doubling the cable length every year",
      "Increasing the TCP port number after every packet"
    ],
    "correctAnswerIndex": 0,
    "answer": "Binary Exponential Back-off is the collision-resolution algorithm used in CSMA/CD. After the n-th collision (for n <= 10), the station waits a random number of time slots chosen uniformly from the range [0, 2^n - 1] (doubling the contention window after each collision, capped at 1023 slots, and aborting after 16 attempts) before trying to retransmit.",
    "explanation": {
      "ar": "الـ Binary Exponential Back-off هي الخوارزمية اللي بتحدد وقت الانتظار العشوائي بعد حدوث Collision في الـ Ethernet: بعد التصادم الأول (`n=1`) الجهاز بيختار عشوائياً ما بين `0` أو `1` slot time؛ لو حصل تصادم تاني (`n=2`) بيختار من `[0, 1, 2, 3]`؛ وبشكل عام بعد `n` تصادمات بيختار رقم عشوائي بين `0` و`2^n - 1` عشان يقلل جداً احتمال إن الجهازين يخبطوا في بعض تاني.",
      "en": "Exponential back-off is an algorithm where a colliding station waits a random number of slot times from [0, 2^n - 1] after n collisions, exponentially expanding the wait range to prevent repeated collisions."
    },
    "keywords": [
      "Exponential Back-off",
      "CSMA/CD",
      "Collision Resolution"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-27",
    "number": 303,
    "source": "question-bank",
    "type": "essay",
    "tier": 3,
    "topic": "datalink-ethernet",
    "page": 111,
    "question": "What are the two classes of traffic in FDDI?",
    "options": [
      "Synchronous traffic (for delay-sensitive real-time voice/video with guaranteed bandwidth) and Asynchronous traffic (for regular bursty data using remaining bandwidth)",
      "Encrypted traffic and Unencrypted traffic",
      "TCP traffic and HTTP traffic",
      "Copper traffic and Wireless traffic"
    ],
    "correctAnswerIndex": 0,
    "answer": "FDDI (Fiber Distributed Data Interface) defines two classes of traffic: 1) Synchronous traffic: allocated guaranteed bandwidth and bounded delay for real-time, delay-sensitive applications like voice and video; 2) Asynchronous traffic: uses the remaining unallocated bandwidth for ordinary, non-time-critical data transfers.",
    "explanation": {
      "ar": "في شبكات الألياف الضوئية FDDI (Fiber Distributed Data Interface)، الترافيك بيتقسم لفئتين: (1) Synchronous traffic: مخصص للتطبيقات الحساسة للوقت (زي الصوت والفيديو) وبياخد أولوية وضمان عدم تأخير، (2) Asynchronous traffic: مخصص لنقل البيانات العادية لما يكون فيه وقت متبقي في دورة الـ Token.",
      "en": "FDDI supports two classes of traffic: Synchronous traffic (guaranteed bandwidth for real-time voice/video) and Asynchronous traffic (dynamic bandwidth sharing for standard data)."
    },
    "keywords": [
      "FDDI",
      "Synchronous Traffic",
      "Asynchronous Traffic"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-28",
    "number": 304,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "security-vpn-wlan",
    "page": 112,
    "question": "What are the four prominent wireless technologies?",
    "options": [
      "1) Bluetooth (IEEE 802.15.1 PAN), 2) Wi-Fi / WLAN (IEEE 802.11), 3) WiMAX (IEEE 802.16 WMAN), and 4) Cellular / 3G / 4G LTE / Satellite WWAN",
      "1) Cat 3, 2) Cat 5, 3) Cat 5e, and 4) Cat 6",
      "1) Thinnet, 2) Thicknet, 3) Single-mode fiber, and 4) Multi-mode fiber",
      "1) Serial, 2) Parallel, 3) PS/2, and 4) VGA"
    ],
    "correctAnswerIndex": 0,
    "answer": "The four prominent wireless networking technologies (by coverage scale) are: 1) Bluetooth (IEEE 802.15.1 for Personal Area Networks - PAN), 2) Wi-Fi (IEEE 802.11 for Wireless Local Area Networks - WLAN), 3) WiMAX (IEEE 802.16 for Wireless Metropolitan Area Networks - WMAN), and 4) Cellular / Satellite (3G/4G/5G for Wireless Wide Area Networks - WWAN) — or in physical media classification: Radio frequency, Terrestrial Microwave, Satellite Microwave, and Infrared.",
    "explanation": {
      "ar": "الأربع تقنيات اللاسلكية الأبرز في الشبكات (حسب المدى والتطبيق): (1) الـ Bluetooth (للشبكات الشخصية PAN)، (2) الـ Wi-Fi / IEEE 802.11 (للشبكات المحلية WLAN)، (3) الـ WiMAX / IEEE 802.16 (لشبكات المدن WMAN)، (4) شبكات المحمول والأقمار الصناعية Cellular 3G/4G/Satellite (للشبكات الواسعة WWAN).",
      "en": "The four prominent wireless technologies are Bluetooth (802.15 PAN), Wi-Fi (802.11 WLAN), WiMAX (802.16 WMAN), and Cellular/Satellite (3G/4G WWAN)."
    },
    "keywords": [
      "Wireless Technologies",
      "Bluetooth",
      "Wi-Fi",
      "WiMAX",
      "Cellular"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-29",
    "number": 305,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 112,
    "question": "What is the use of a Switch?",
    "options": [
      "A Layer 2 device used to connect multiple nodes in a LAN; it learns MAC addresses and selectively forwards frames only to the intended destination port, eliminating collisions and providing dedicated full-duplex bandwidth",
      "A Layer 1 cable terminator that absorbs electrical reflections",
      "An application program used to write HTML code",
      "A device that converts digital bits into analog phone tones"
    ],
    "correctAnswerIndex": 0,
    "answer": "A network switch is a Data Link Layer (Layer 2) device used to interconnect devices in a Local Area Network (LAN). It inspects the destination MAC address of incoming frames, maintains a MAC address table, and forwards each frame only to the specific port connected to the destination host—giving each port its own collision domain and full bandwidth.",
    "explanation": {
      "ar": "الـ Switch هو جهاز في الـ Data Link Layer (Layer 2) بيُستخدم لربط الأجهزة داخل شبكة الـ LAN؛ وظيفته يتعلم الـ MAC addresses بتاعة الأجهزة المتوصلة بيه، ويوجه كل Frame للبورت المقصود بس (بدل ما يعمل Broadcast لكل البورتات زي الـ Hub)، وده بيمنع التصادمات وبيدي كل بورت سرعته الكاملة.",
      "en": "A switch connects LAN devices at Layer 2, learning MAC addresses to selectively forward frames to the target destination port and isolating collision domains."
    },
    "keywords": [
      "Switch",
      "Layer 2",
      "MAC Address Table",
      "Collision Domain"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-30",
    "number": 306,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 112,
    "question": "Explain Bridge?",
    "options": [
      "A Layer 2 device that connects two or more LAN segments, learns host MAC addresses on each port, and filters/forwards traffic between segments to divide a large collision domain into smaller ones",
      "A Layer 1 amplifier that boosts signal strength without reading MAC addresses",
      "A web server that hosts DNS records",
      "A physical wooden support for network cables"
    ],
    "correctAnswerIndex": 0,
    "answer": "A bridge is a Data Link Layer (Layer 2) device that connects two or more LAN segments into a single logical network. By learning which MAC addresses reside on each segment, a bridge filters local traffic (keeping it on its own segment) and only forwards frames destined for another segment, thereby breaking up collision domains and reducing congestion.",
    "explanation": {
      "ar": "الـ Bridge هو جهاز في الـ Data Link Layer (Layer 2) بيربط قطعتين أو أكتر من شبكات الـ LAN ببعض؛ بيقرأ الـ MAC addresses وبيفصل الـ Collision domains بحيث الترافيك الداخلي في نفس القطعة ميعبرش للقطعة التانية إلا لو كان رايح لجهاز هناك (والـ Switch هو عملياً Multi-port bridge سريع بالهاردوير).",
      "en": "A bridge is a Layer 2 device that interconnects LAN segments and filters/forwards frames based on MAC addresses to segment collision domains."
    },
    "keywords": [
      "Bridge",
      "Layer 2",
      "LAN Segments",
      "Collision Domain"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-31",
    "number": 307,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 113,
    "question": "What is broadcast?",
    "options": [
      "One-to-all communication where a single frame or packet sent by one host is delivered to all hosts on the network/subnet (e.g., MAC FF-FF-FF-FF-FF-FF or IP 255.255.255.255)",
      "One-to-one communication between two specific hosts",
      "One-to-many communication to a selected subset of hosts",
      "Turning off all routers in a network"
    ],
    "correctAnswerIndex": 0,
    "answer": "Broadcast is a one-to-all transmission method in which a single packet or frame sent from one source node is delivered to all other nodes on the local network or subnet simultaneously (using the broadcast MAC address FF:FF:FF:FF:FF:FF or broadcast IPv4 address).",
    "explanation": {
      "ar": "الـ Broadcast (البث الشامل - One-to-All) هو إرسال Frame أو Packet من جهاز واحد لكل الأجهزة الموجودة في الشبكة في نفس الوقت (باستخدام الـ Broadcast MAC `FF-FF-FF-FF-FF-FF` أو الـ Broadcast IP).",
      "en": "Broadcast is one-to-all delivery where a single transmitted frame or packet is received by every host on the network segment."
    },
    "keywords": [
      "Broadcast",
      "One-to-All",
      "FF:FF:FF:FF:FF:FF"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-32",
    "number": 308,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "datalink-ethernet",
    "page": 113,
    "question": "What is multicast?",
    "options": [
      "One-to-many (group) communication where a single packet or frame is delivered simultaneously to a specific group of interested/subscribed hosts (e.g., Class D IPv4 addresses)",
      "One-to-all communication to every host on the LAN",
      "One-to-one communication between a single client and server",
      "Sending multiple copies of the same cable in a box"
    ],
    "correctAnswerIndex": 0,
    "answer": "Multicast is a one-to-many (or one-to-group) communication method where a packet/frame sent from a source is delivered simultaneously only to a specific subset of hosts that have joined a multicast group (e.g., using Class D IPv4 addresses 224.0.0.0–239.255.255.255).",
    "explanation": {
      "ar": "الـ Multicast (البث الموجه لمجموعة - One-to-Many/Group) هو إرسال البيانات من مرسل واحد لمجموعة محددة فقط من الأجهزة المشتركة في المجموعة دي (مش لكل الأجهزة في الشبكة زي الـ Broadcast)، وبيستخدم عناوين Class D في IPv4.",
      "en": "Multicast is one-to-group communication where data is delivered simultaneously to a specific group of subscribed hosts."
    },
    "keywords": [
      "Multicast",
      "One-to-Many",
      "Class D"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-33",
    "number": 309,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "datalink-ethernet",
    "page": 113,
    "question": "How does a given bridge learn whether it should forward a multicast frame over a given port?",
    "options": [
      "Through group registration protocols (such as IGMP snooping or GARP/GMRP) where hosts notify the bridge/router when they join a multicast group on that port",
      "By inspecting the source MAC address of multicast frames sent by hosts",
      "By unplugging ports randomly",
      "A bridge can never forward multicast frames"
    ],
    "correctAnswerIndex": 0,
    "answer": "Because a multicast address is a group destination address and never appears as a source MAC address, a bridge cannot learn multicast group membership via normal backward source-MAC learning. Instead, hosts inform the bridge/local multicast router that they want to join a group (via IGMP snooping or IEEE 802.1p GARP/GMRP registration), allowing the bridge to record which ports have active group members.",
    "explanation": {
      "ar": "سؤال ذكي جداً من كتاب Peterson & Davie! الـ Bridge بيتعلم عناوين الـ Unicast العادية من خانة الـ Source MAC، لكن عنوان الـ Multicast عمره ما بيجي في خانة الـ Source MAC! فعشان الـ Bridge يعرف أي بورت فيه أجهزة مشتركة في الـ Multicast group، الأجهزة بتبعت رسائل تسجيل انضمام للمجموعة (عن طريق IGMP Snooping أو بروتوكول GARP/GMRP) فالـ Bridge يسجل البورت ده عنده.",
      "en": "Since multicast addresses never appear as source addresses, bridges learn multicast port membership via explicit host group-join signaling (such as IGMP snooping or GARP/GMRP)."
    },
    "keywords": [
      "Bridge Multicast Learning",
      "IGMP Snooping",
      "GARP/GMRP"
    ],
    "topicLabelEn": "Data Link Layer, Ethernet, MAC & Switching",
    "topicLabelAr": "طبقة ربط البيانات، الإيثرنت، عناوين MAC، والـ Switches",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-34",
    "number": 310,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "intro-models",
    "page": 113,
    "question": "Define packet switching?",
    "options": [
      "A networking method where messages are broken into smaller blocks called packets (containing headers and payloads) that are sent independently over shared links using store-and-forward switches",
      "Reserving a dedicated physical copper wire between two telephones for an entire call",
      "Manually swapping network cables on a switch panel",
      "Turning a network switch off and on"
    ],
    "correctAnswerIndex": 0,
    "answer": "Packet switching is a digital communication method in which long messages are divided into smaller chunks called packets. Each packet carries control/addressing information in its header and is transmitted across shared network links and store-and-forward switches, allocating link bandwidth dynamically on demand.",
    "explanation": {
      "ar": "الـ Packet switching هو أسلوب نقل البيانات في الشبكات عن طريق تقسيم الرسائل الكبيرة لقطع أصغر اسمها Packets، كل packet عليها العنوان وبتتنقل عبر الروابط المشتركة والـ switches بمبدأ الـ Store-and-forward وباستخدام الموارد عند الطلب (on demand).",
      "en": "Packet switching divides messages into discrete packets that share network links dynamically on demand via store-and-forward switches."
    },
    "keywords": [
      "Packet Switching",
      "Store and Forward",
      "Packets"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-35",
    "number": 311,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "network-ip",
    "page": 114,
    "question": "What is a virtual circuit?",
    "options": [
      "A connection-oriented packet-switched logical path established between source and destination prior to data transfer, identified by a Virtual Circuit Identifier (VCI) so all packets follow the same route in order",
      "A physical copper wire soldered between two PCs",
      "A connectionless network where every packet takes a random path",
      "A battery-powered power supply circuit"
    ],
    "correctAnswerIndex": 0,
    "answer": "A Virtual Circuit (VC) is a connection-oriented logical path set up across a packet-switched network between a source and destination before data packets are sent. All packets belonging to that session carry a short Virtual Circuit Identifier (VCI) and follow the exact same pre-established route in sequence.",
    "explanation": {
      "ar": "الـ Virtual Circuit (الدائرة الافتراضية) هي مسار منطقي (connection-oriented) بيتحدد ويتحجز في جداول الـ switches بين المرسل والمستقبل قبل بدء إرسال الـ packets في شبكة Packet-switched (زي ATM وFrame Relay)، بحيث كل الـ packets تاخد رقم تعريفي قصير (VCI) وتمشي في نفس المسار بالترتيب.",
      "en": "A virtual circuit is a pre-established logical connection across a packet-switched network along which all packets of a flow travel in order using a short VC identifier."
    },
    "keywords": [
      "Virtual Circuit",
      "VCI",
      "Connection-Oriented"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-36",
    "number": 312,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "network-ip",
    "page": 114,
    "question": "What are datagrams?",
    "options": [
      "Self-contained, independent packets in a connectionless packet-switched network that carry full source and destination addresses and may follow different routes and arrive out of order",
      "Fixed physical circuits reserved in a telephone exchange",
      "Fiber optic connectors",
      "Encrypted wireless passwords"
    ],
    "correctAnswerIndex": 0,
    "answer": "Datagrams are self-contained, independent packets transmitted in a connectionless network (such as IP). Each datagram carries the full destination address in its header and is routed independently of previous or subsequent datagrams, meaning datagrams from the same message may take different paths and arrive out of order.",
    "explanation": {
      "ar": "الـ Datagrams هي حزم بيانات مستقلة بذاتها في شبكات الـ Connectionless (زي الـ IP والـ UDP)؛ مفيش مسار محجوز قبل الإرسال، وكل datagram بتشيل عنوان الـ Destination الكامل وبتتوجه بشكل مستقل، فممكن تاخد مسارات مختلفة وتوصل بترتيب مختلف.",
      "en": "Datagrams are independent, self-contained packets in a connectionless network that carry full destination addresses and are routed independently."
    },
    "keywords": [
      "Datagrams",
      "Connectionless",
      "IP"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-37",
    "number": 313,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "network-ip",
    "page": 114,
    "question": "What is meant by Switched Virtual Circuit (SVC)?",
    "options": [
      "A temporary virtual circuit dynamically established on demand via signaling when data needs to be sent and torn down when the session ends",
      "A permanent virtual circuit manually configured by the ISP that never closes",
      "A physical mechanical toggle switch on a router",
      "A wireless broadcast channel"
    ],
    "correctAnswerIndex": 0,
    "answer": "A Switched Virtual Circuit (SVC) is a temporary virtual circuit that is dynamically created on demand via signaling only when two hosts need to communicate, and is automatically terminated (torn down) as soon as the data transfer session is complete.",
    "explanation": {
      "ar": "الـ Switched Virtual Circuit (SVC) هي دائرة افتراضية مؤقتة بتتفتح ديناميكياً عند الطلب (on demand) لما جهازين يعوزوا يبعتوا داتا لبعض، وبتتقفل تلقائياً أول ما جلسة نقل البيانات تخلص.",
      "en": "A Switched Virtual Circuit (SVC) is a temporary virtual circuit established dynamically on demand for the duration of a single communication session and torn down afterward."
    },
    "keywords": [
      "SVC",
      "Switched Virtual Circuit",
      "On Demand"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-38",
    "number": 314,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "network-ip",
    "page": 115,
    "question": "What is meant by a Permanent Virtual Circuit (PVC)?",
    "options": [
      "A virtual circuit pre-configured and permanently maintained by the network administrator between two endpoints so hosts can send data anytime without call-setup signaling",
      "A virtual circuit that disconnects every 5 seconds",
      "A connectionless UDP broadcast",
      "A temporary dial-up phone call"
    ],
    "correctAnswerIndex": 0,
    "answer": "A Permanent Virtual Circuit (PVC) is a dedicated logical virtual circuit that is statically pre-configured by the network administrator/carrier between two sites and remains continuously established, allowing immediate data transfer without per-session call setup or teardown.",
    "explanation": {
      "ar": "الـ Permanent Virtual Circuit (PVC) هي دائرة افتراضية دائمة بيبرمجها مدير الشبكة أو شركة الاتصالات بشكل ثابت ومستمر بين نقطتين (زي فرعين لشركة)، فالأجهزة تقدر تبعت داتا في أي وقت فوراً من غير ما تحتاج تعمل Call setup.",
      "en": "A Permanent Virtual Circuit (PVC) is a statically configured, always-on virtual circuit permanently maintained between two endpoints without requiring call setup."
    },
    "keywords": [
      "PVC",
      "Permanent Virtual Circuit"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-39",
    "number": 315,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "intro-models",
    "page": 115,
    "question": "What are the properties of star topology?",
    "options": [
      "Every node has a dedicated point-to-point link to a central hub/switch; failure of one link affects only that node; easy to install, scale, and troubleshoot; failure of the central hub/switch brings down the whole network",
      "All nodes share a single coaxial backbone cable with two terminators",
      "Every node is directly connected to every other node requiring N(N-1)/2 cables",
      "Data travels in a closed circle using a token"
    ],
    "correctAnswerIndex": 0,
    "answer": "Properties of Star Topology: 1) Each device connects via a dedicated point-to-point cable to a central device (hub or switch). 2) Nodes do not connect directly to each other; all traffic passes through the central controller. 3) High fault isolation: if one cable fails, only that node is affected. 4) Easy to add/remove nodes and troubleshoot. 5) Single point of failure: if the central hub/switch fails, the entire network goes down.",
    "explanation": {
      "ar": "خصائص الـ Star Topology: (1) كل جهاز بيتوصل بكابل مخصص (Point-to-point) بجهاز مركزي في النص (Hub أو Switch)، (2) لو كابل اتقطع، الجهاز بتاعه بس هو اللي بيفصل وباقي الشبكة شغالة عادي، (3) سهلة جداً في التركيب والتوسع واكتشاف الأعطال، (4) نقطة الضعف الوحيدة هي إن لو الـ Central Hub/Switch نفسه عطل، الشبكة كلها بتقف.",
      "en": "Star topology connects every host via a dedicated point-to-point link to a central hub/switch, offering easy expansion and single-cable fault isolation, with the central switch acting as a single point of failure."
    },
    "keywords": [
      "Star Topology Properties",
      "Central Switch",
      "Point-to-Point"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-40",
    "number": 316,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "network-ip",
    "page": 115,
    "question": "What is the Maximum Transmission Unit (MTU)?",
    "options": [
      "The largest size of a network-layer packet (payload in bytes) that a given data link layer protocol frame can carry without fragmentation (e.g., 1500 bytes for standard Ethernet)",
      "The maximum number of users in a building",
      "The total length of an optical fiber cable in kilometers",
      "The clock speed of a router CPU in GHz"
    ],
    "correctAnswerIndex": 0,
    "answer": "The Maximum Transmission Unit (MTU) is the maximum size (in bytes) of the data payload (IP datagram) that can be encapsulated and transmitted within a single Data Link Layer frame over a given physical medium without requiring fragmentation (for standard Ethernet, the MTU is 1500 bytes).",
    "explanation": {
      "ar": "الـ MTU (Maximum Transmission Unit) هو أقصى حجم بالـ bytes للـ IP packet (الـ Payload) اللي يقدر يشيلها الـ Frame الواحد في طبقة الـ Data Link من غير ما نضطر نعملها تقطيع (Fragmentation)؛ وفي الـ Ethernet القياسي الـ MTU بيساوي `1500 bytes`.",
      "en": "The Maximum Transmission Unit (MTU) is the largest payload size in bytes that a data link frame can carry in a single transmission (1500 bytes for standard Ethernet)."
    },
    "keywords": [
      "MTU",
      "Maximum Transmission Unit",
      "1500 bytes",
      "Fragmentation"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-41",
    "number": 317,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "network-ip",
    "page": 116,
    "question": "Define Routing?",
    "options": [
      "The network-layer process of selecting and determining the optimal end-to-end path across interconnected networks for packets to travel from source to destination",
      "Converting digital bits into analog sound waves",
      "Checking the spelling of an email message",
      "Crimping connectors onto twisted-pair cables"
    ],
    "correctAnswerIndex": 0,
    "answer": "Routing is the Network Layer (Layer 3) process of selecting the best end-to-end paths in a network along which to send data packets from a source host to a destination host across one or more interconnected networks using routing algorithms and routing tables.",
    "explanation": {
      "ar": "الـ Routing (التوجيه) هو عملية اختيار وتحديد أفضل مسار (optimal path) في طبقة الـ Network Layer عشان تمشي فيه الـ packets من الـ Source للـ Destination عبر الشبكات المختلفة باستخدام خوارزميات وجداول التوجيه (Routing tables).",
      "en": "Routing is the Layer 3 network-wide process of determining the optimal end-to-end path that packets take from source to destination across interconnected routers."
    },
    "keywords": [
      "Routing",
      "Network Layer",
      "Optimal Path"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-42",
    "number": 318,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "network-ip",
    "page": 116,
    "question": "Define ICMP?",
    "options": [
      "Internet Control Message Protocol — a network-layer companion protocol to IP used by hosts and routers to send error notifications (e.g., destination unreachable, TTL exceeded) and diagnostic queries (e.g., ping echo request/reply)",
      "An application protocol used to transfer large video files",
      "A physical layer cable standard",
      "A wireless encryption algorithm"
    ],
    "correctAnswerIndex": 0,
    "answer": "ICMP (Internet Control Message Protocol) is a Network Layer protocol in the TCP/IP suite used by routers and hosts to report packet processing errors (such as Destination Unreachable or Time Exceeded) and perform network diagnostics (such as Echo Request and Echo Reply used by 'ping' and 'traceroute').",
    "explanation": {
      "ar": "الـ ICMP (Internet Control Message Protocol) هو بروتوكول مساعد لبروتوكول الـ IP في طبقة الـ Network، بيستخدمه الـ routers والـ hosts لإرسال رسائل الإبلاغ عن الأخطاء (زي Destination Unreachable أو Time Exceeded) واستعلامات الفحص والتشخيص (زي أوامر `ping` و`traceroute`).",
      "en": "ICMP (Internet Control Message Protocol) is a network-layer protocol used by hosts and routers to report error conditions and exchange diagnostic query messages."
    },
    "keywords": [
      "ICMP",
      "Internet Control Message Protocol",
      "Ping",
      "Error Reporting"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-43",
    "number": 319,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "network-ip",
    "page": 116,
    "question": "Write the keys for understanding Link State Routing?",
    "options": [
      "1) Discover neighbors and learn their network addresses, 2) Measure the cost/delay to each neighbor, 3) Construct a Link State Packet (LSP), 4) Flood the LSP to all other routers, 5) Compute the shortest path to every router using Dijkstra's algorithm",
      "1) Send full routing tables only to direct neighbors using Bellman-Ford",
      "1) Broadcast frames using CSMA/CD",
      "1) Use DNS to resolve domain names"
    ],
    "correctAnswerIndex": 0,
    "answer": "The five key steps of Link State Routing (e.g., OSPF) are: 1) Discover its neighbors and learn their network addresses, 2) Set/measure the distance or cost metric to each of its neighbors, 3) Construct a Link State Packet (LSP) containing all it has just learned, 4) Send (flood) this packet to and receive packets from all other routers so every router has the complete network topology, and 5) Compute the shortest path to every other router using Dijkstra's shortest-path algorithm.",
    "explanation": {
      "ar": "الخمس خطوات الأساسية لفهم الـ Link State Routing (حسب كتاب Tanenbaum & Forouzan) هي: (1) كل راوتر يتعرف على جيرانه المباشرين، (2) يقيس تكلفة الوصلة (Link cost) لكل جار، (3) يجمع المعلومات دي في Link State Packet (LSP)، (4) يوزع (Flooding) الـ LSP دي لكل الراوترات في الشبكة عشان كل راوتر يبقى معاه خريطة الشبكة كاملة، (5) يشغل خوارزمية Dijkstra لحساب أقصر مسار لكل الشبكات.",
      "en": "Link State Routing operates in five steps: discover neighbors, measure link costs to neighbors, build a Link State Packet (LSP), flood the LSP to all routers, and run Dijkstra's algorithm to compute shortest paths."
    },
    "keywords": [
      "Link State Routing",
      "LSP",
      "Dijkstra",
      "OSPF"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-44",
    "number": 320,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "network-ip",
    "page": 117,
    "question": "How is the packet/link cost referred to in distance vector and link state routing?",
    "options": [
      "In Distance Vector routing (e.g., RIP), cost is typically referred to as 'hop count' (distance to destination); in Link State routing (e.g., OSPF), cost is a configurable link 'metric' typically inversely proportional to link bandwidth, delay, or congestion",
      "Both use the physical weight of the router in kilograms",
      "Cost is the price of the laptop in dollars",
      "Neither algorithm uses cost"
    ],
    "correctAnswerIndex": 0,
    "answer": "In Distance Vector routing (such as RIP), cost is typically referred to as 'distance' or 'hop count' (number of routers traversed to reach the destination). In Link State routing (such as OSPF), cost is referred to as the 'link state metric' (or link cost), which is typically calculated based on link bandwidth, delay, reliability, or administrative weight.",
    "explanation": {
      "ar": "في الـ Distance Vector routing (زي بروتوكول RIP) التكلفة بتُعرف بالمسافة أو عدد القفزات (Hop count)، بينما في الـ Link State routing (زي بروتوكول OSPF) التكلفة بتُعرف بـ Link Cost / Metric وبتتحسب بناءً على سرعة الخط (Bandwidth) أو التأخير (Delay).",
      "en": "Distance Vector routing typically refers to cost as hop count (distance), whereas Link State routing refers to cost as a link metric based on bandwidth, delay, or administrative policy."
    },
    "keywords": [
      "Packet Cost",
      "Hop Count",
      "Link Metric",
      "Distance Vector vs Link State"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-45",
    "number": 321,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "network-ip",
    "page": 117,
    "question": "Define Subnetting?",
    "options": [
      "The practice of dividing a single large IP network block into two or more smaller logical subnetworks (subnets) by borrowing bits from the host portion of the IP address to extend the network mask",
      "Combining two physical coaxial cables using a barrel connector",
      "Encrypting wireless passwords using WPA2",
      "Converting an IPv4 address into a MAC address"
    ],
    "correctAnswerIndex": 0,
    "answer": "Subnetting is the process of logically partitioning a single larger IP network into multiple smaller, manageable sub-networks (subnets) by borrowing high-order bits from the host ID portion of the IP address and adding them to the network/subnet prefix (using a subnet mask). It reduces broadcast traffic, improves security, and conserves IP address space.",
    "explanation": {
      "ar": "الـ Subnetting هو عملية تقسيم شبكة IP كبيرة لعدة شبكات فرعية أصغر (Subnets) عن طريق استلاف bits من جزء الـ Host ID وضمها لجزء الـ Network/Subnet ID باستخدام الـ Subnet Mask؛ وده بيقلل حجم الـ Broadcast domain، وبيحسن الأمان وكفاءة استغلال العناوين.",
      "en": "Subnetting logically divides a single IP network into multiple smaller subnetworks by borrowing bits from the host portion of the IP address."
    },
    "keywords": [
      "Subnetting",
      "Subnet Mask",
      "Host Bits"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-46",
    "number": 322,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 118,
    "question": "Explain the main idea of UDP?",
    "options": [
      "UDP provides a lightweight, connectionless, unreliable transport service with minimal overhead (8-byte header), adding only port-based process-to-process multiplexing/demultiplexing and an optional checksum on top of IP",
      "UDP establishes a 3-way handshake and guarantees in-order reliable delivery",
      "UDP is a physical cable specification for Gigabit Ethernet",
      "UDP is an email client application"
    ],
    "correctAnswerIndex": 0,
    "answer": "The main idea of UDP (User Datagram Protocol) is to provide a 'no-frills', bare-bones, connectionless, and unreliable transport protocol with minimal delay and overhead (only an 8-byte header). It adds only two services above IP: process-to-process multiplexing/demultiplexing via port numbers and basic error checking via a 16-bit checksum—making it ideal for real-time apps (DNS, VoIP, streaming, gaming).",
    "explanation": {
      "ar": "الفكرة الأساسية للـ UDP (User Datagram Protocol) هي توفير بروتوكول نقل خفيف وسريع جداً بأقل Overhead ممكن (الـ Header بتاعه 8 bytes بس) ومن غير تأخير الـ Handshaking؛ هو Connectionless وUnreliable، وبيضيف فوق الـ IP حاجتين بس: أرقام البورتات (Port numbers للتوصيل من Process لـ Process) والـ Checksum لاكتشاف الأخطاء.",
      "en": "UDP provides a minimal, connectionless, low-overhead transport service that adds only port multiplexing/demultiplexing and checksum error detection over IP."
    },
    "keywords": [
      "UDP Main Idea",
      "Connectionless",
      "8-byte Header",
      "Port Multiplexing"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-47",
    "number": 323,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "transport-tcp-udp",
    "page": 118,
    "question": "What are the different fields in the pseudo header (used in TCP/UDP checksum calculation)?",
    "options": [
      "Source IP address (32 bits), Destination IP address (32 bits), All-Zeros/Reserved byte (8 bits), Protocol number (8 bits), and TCP/UDP Length (16 bits)",
      "Source MAC address, Destination MAC address, and FCS",
      "HTTP Method, URL, and Version",
      "Username, Password, and Cookie"
    ],
    "correctAnswerIndex": 0,
    "answer": "The 12-byte IPv4 pseudo-header (temporarily prepended to a TCP or UDP segment solely to compute the transport checksum and verify the packet reached the right IP host) contains 5 fields: 1) Source IP address (32 bits), 2) Destination IP address (32 bits), 3) Reserved/Zeros field (8 bits of 0s), 4) Protocol field (8 bits: 6 for TCP, 17 for UDP), and 5) TCP/UDP Segment Length (16 bits).",
    "explanation": {
      "ar": "الـ Pseudo header هو هيدر وهمي مؤقت طوله 12 bytes بيتضاف لحساب الـ Checksum في الـ TCP والـ UDP عشان يتأكد إن الـ segment وصلت للـ IP الصح، وبيتكون من 5 حقول: (1) Source IP address (32 bits)، (2) Destination IP address (32 bits)، (3) Zeros/Reserved (8 bits)، (4) Protocol number (8 bits)، (5) TCP/UDP Length (16 bits).",
      "en": "The 12-byte transport pseudo-header consists of Source IP Address (32 bits), Destination IP Address (32 bits), Zero/Reserved (8 bits), Protocol ID (8 bits), and TCP/UDP Length (16 bits)."
    },
    "keywords": [
      "Pseudo Header",
      "Checksum",
      "TCP",
      "UDP"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-48",
    "number": 324,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 118,
    "question": "Define TCP.",
    "options": [
      "Transmission Control Protocol — a connection-oriented, reliable, full-duplex, byte-stream transport layer protocol that provides three-way handshake setup, acknowledgments, sequencing, flow control, and congestion control",
      "A connectionless best-effort network layer protocol",
      "A physical layer connector for coaxial cables",
      "A wireless authentication protocol"
    ],
    "correctAnswerIndex": 0,
    "answer": "TCP (Transmission Control Protocol) is a connection-oriented, reliable, byte-stream Transport Layer (Layer 4) protocol. It establishes connections via a 3-way handshake and guarantees in-order, error-free delivery of data using sequence numbers, acknowledgments (ACKs), retransmissions, sliding-window flow control, and congestion control.",
    "explanation": {
      "ar": "الـ TCP (Transmission Control Protocol) هو بروتوكول طبقة النقل (Layer 4) الأساسي للاتصالات الموثوقة؛ بيتميز بإنه Connection-oriented (بيفتح اتصال بـ 3-way handshake)، وReliable (بيضمن وصول كل بايت بالترتيب وبدون أخطاء عن طريق الـ Sequence numbers والـ ACKs وإعادة الإرسال)، وبيوفر Flow control وCongestion control.",
      "en": "TCP (Transmission Control Protocol) is a connection-oriented, reliable, byte-stream transport protocol providing flow control, congestion control, and sequenced delivery."
    },
    "keywords": [
      "TCP",
      "Transmission Control Protocol",
      "Reliable",
      "Connection-Oriented"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-49",
    "number": 325,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "transport-tcp-udp",
    "page": 118,
    "question": "What is meant by segment?",
    "options": [
      "The Protocol Data Unit (PDU) of the Transport Layer, consisting of a transport header (e.g., TCP header with port and sequence numbers) encapsulating a chunk of application layer message data",
      "A physical piece of optical fiber glass",
      "An application layer email message",
      "A single binary bit (0 or 1)"
    ],
    "correctAnswerIndex": 0,
    "answer": "A segment is the Protocol Data Unit (PDU) at the Transport Layer (specifically TCP). The transport layer breaks application messages into chunks and prepends a transport-layer header (containing source/destination ports, sequence numbers, and checksum) to form a segment.",
    "explanation": {
      "ar": "الـ Segment هي اسم وحدة البيانات (PDU) في طبقة الـ Transport Layer؛ بتتكون لما طبقة الـ Transport تقسم رسالة الأبلكيشن لأجزاء وتضيف لكل جزء الـ Transport Header (اللي فيه الـ Source/Destination Ports والـ Sequence Number).",
      "en": "A segment is the Transport Layer protocol data unit (PDU), formed by encapsulating a chunk of application data with a transport header."
    },
    "keywords": [
      "Segment",
      "Transport Layer PDU"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-50",
    "number": 326,
    "source": "question-bank",
    "type": "essay",
    "tier": 3,
    "topic": "transport-tcp-udp",
    "page": 119,
    "question": "What is meant by Concatenation (and Separation) in layering?",
    "options": [
      "Combining multiple smaller protocol data units (PDUs) from an upper layer into a single lower-layer PDU for efficient transmission in one frame/packet",
      "Cutting a physical coaxial cable into two pieces",
      "Deleting old emails from a POP3 server",
      "Turning off a network switch"
    ],
    "correctAnswerIndex": 0,
    "answer": "Concatenation (or blocking/piggybacking) is the process by which a protocol layer combines multiple smaller Protocol Data Units (PDUs) or control/data messages into a single larger unit to be transmitted together in one lower-layer packet or frame, reducing header overhead and improving network efficiency.",
    "explanation": {
      "ar": "الـ Concatenation في شبكات الكمبيوتر معناه تجميع وربط أكتر من وحدة بيانات صغيرة (Multiple PDUs) مع بعض في وحدة واحدة أكبر عشان يتبعتوا مع بعض في Packet أو Frame واحدة وتقليل الـ Overhead (وعكسها عند الاستقبال اسمه Separation).",
      "en": "Concatenation is the combining of multiple smaller protocol data units (PDUs) into a single larger transmission unit to reduce overhead."
    },
    "keywords": [
      "Concatenation",
      "PDU",
      "Efficiency"
    ],
    "topicLabelEn": "Transport Layer, TCP, UDP & Sockets",
    "topicLabelAr": "طبقة النقل، بروتوكولات TCP و UDP، والـ Sockets",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-51",
    "number": 327,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "network-ip",
    "page": 119,
    "question": "Define Gateway.",
    "options": [
      "A network node or device operating across multiple (up to all 7) OSI layers that connects two dissimilar networks using different protocols, architectures, or data formats and translates between them",
      "A simple Layer 1 cable repeater",
      "A passive terminator on a bus cable",
      "A local mouse pad"
    ],
    "correctAnswerIndex": 0,
    "answer": "A gateway is a network node or device (capable of operating up to the Application layer across all 7 OSI layers) that serves as an entrance/exit point to connect two networks that use different protocol suites, architectures, or data formats (e.g., translating between an IP network and a PSTN voice network or legacy SNA network, or acting as a default router exit point on a LAN).",
    "explanation": {
      "ar": "الـ Gateway (البوابة) هو جهاز أو نظام شبكي بيقدر يشتغل لحد الطبقات العليا (كل الـ 7 طبقات في الـ OSI)، ووظيفته الأساسية هي الربط والترجمة بين شبكتين مختلفتين تماماً في البروتوكولات أو المعمارية (أو نقطة الخروج الافتراضية Default Gateway من الـ LAN للشبكات الخارجية).",
      "en": "A gateway is an internetworking device operating across multiple OSI layers that connects and translates between two networks using different protocols or architectures."
    },
    "keywords": [
      "Gateway",
      "Protocol Translation",
      "Default Gateway"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-52",
    "number": 328,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 119,
    "question": "What is the function of SMTP?",
    "options": [
      "To reliably push/transfer outgoing electronic mail messages from a sender's mail client (user agent) to their mail server and between mail servers across the Internet over TCP port 25",
      "To display HTML web pages in a browser over port 80",
      "To dynamically assign IP addresses to hosts",
      "To resolve domain names into MAC addresses"
    ],
    "correctAnswerIndex": 0,
    "answer": "The function of SMTP (Simple Mail Transfer Protocol) is to reliably transfer (push) electronic mail messages from a sender's user agent to the sender's mail server, and from the sender's mail server to the recipient's mail server over TCP port 25.",
    "explanation": {
      "ar": "وظيفة بروتوكول الـ SMTP (Simple Mail Transfer Protocol) هي دفع وإرسال رسائل البريد الإلكتروني (Push protocol) من جهاز المرسل للـ Mail server بتاعه، ومن الـ Mail server بتاع المرسل للـ Mail server بتاع المستلم عبر TCP Port 25.",
      "en": "SMTP pushes outgoing email messages from the sender's client to the mail server and routes emails between mail servers over TCP port 25."
    },
    "keywords": [
      "SMTP Function",
      "Email Transfer",
      "Port 25"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-53",
    "number": 329,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 120,
    "question": "How does MIME enhance SMTP?",
    "options": [
      "MIME (Multipurpose Internet Mail Extensions) adds headers and encoding schemes (like Base64) to convert non-ASCII text, images, audio, video, and binary attachments into 7-bit ASCII so they can be sent over SMTP",
      "MIME replaces TCP with UDP for email",
      "MIME changes the SMTP port from 25 to 80",
      "MIME physically speeds up the optical fiber cable"
    ],
    "correctAnswerIndex": 0,
    "answer": "Because classic SMTP is restricted to 7-bit US-ASCII text, MIME (Multipurpose Internet Mail Extensions) enhances SMTP by adding supplementary headers (e.g., Content-Type, Content-Transfer-Encoding) and encoding binary data (images, audio, video, PDFs, non-English characters) into 7-bit ASCII (using Base64 or Quoted-Printable) at the sender and decoding it at the receiver.",
    "explanation": {
      "ar": "بروتوكول الـ SMTP الأصلي مبيعرفش يبعت غير حروف 7-bit ASCII الإنجليزية بس! فجاء معيار الـ MIME (Multipurpose Internet Mail Extensions) عشان يطور الـ SMTP ويسمح بإرسال اللغات غير الإنجليزية (زي العربي) والملفات المرفقة الثنائية (الصور، الصوت، الفيديو، الـ PDF) عن طريق تحويلها لـ 7-bit ASCII (بترميز زي Base64) وإضافة MIME headers توضح نوع المحتوى.",
      "en": "MIME extends 7-bit ASCII-only SMTP by encoding non-ASCII text and binary multimedia attachments (images, audio, video, documents) into 7-bit ASCII (e.g., via Base64) and defining Content-Type headers."
    },
    "keywords": [
      "MIME",
      "SMTP Enhancement",
      "Base64",
      "7-bit ASCII"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-54",
    "number": 330,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 120,
    "question": "Why is an application protocol such as POP (POP3) needed for electronic messaging?",
    "options": [
      "Because SMTP is a push protocol and a user's PC is not always online; POP3 (or IMAP) is a pull protocol needed so the user's mail client can retrieve stored messages from their always-on mail server when convenient",
      "Because POP3 is used to send emails between two ISP mail servers",
      "Because POP3 encrypts physical Ethernet cables",
      "Because SMTP cannot run over TCP"
    ],
    "correctAnswerIndex": 0,
    "answer": "SMTP is a 'push' protocol designed to push mail to an always-on mail server. Since a recipient's personal computer or phone is not always powered on and connected, emails are held in the user's mailbox on the mail server. A 'pull' mail access protocol like POP3 (Post Office Protocol v3) or IMAP is needed so the user's client can authenticate and pull (download) stored emails from the server whenever the user comes online.",
    "explanation": {
      "ar": "بروتوكول الـ SMTP هو Push protocol (بيدفع الرسالة للسيرفر)، ولأن جهاز الكمبيوتر أو الموبايل بتاع المستلم مش بيكون شغال ومتصل بالنت 24 ساعة كـ Mail server، فالرسائل بتتخزن في صندوق البريد على سيرفر الإيميل؛ وهنا بنحتاج Pull protocol زي الـ POP3 (أو IMAP) عشان المستلم يقدر يسحب ويحمّل رسائله من السيرفر وقت ما يفتح جهازه.",
      "en": "Since SMTP is a push protocol and end-user devices are not continuously online like mail servers, a pull protocol like POP3 is required for clients to retrieve stored messages from their mail server."
    },
    "keywords": [
      "POP3",
      "Pull Protocol",
      "SMTP Push",
      "Email Retrieval"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-55",
    "number": 331,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 120,
    "question": "Give the format of the HTTP request message?",
    "options": [
      "1) Request Line (Method SP URL SP HTTP-Version CRLF), 2) Header Lines (Header-Name: Value CRLF), 3) Blank Line (CRLF), and 4) Optional Entity Body",
      "1) Status Line, 2) MAC Address, 3) CRC Trailer",
      "1) Source IP, 2) Destination IP, 3) TTL",
      "1) Preamble, 2) SFD, 3) Payload"
    ],
    "correctAnswerIndex": 0,
    "answer": "An HTTP request message consists of four parts in ASCII text: 1) Request Line: [Method] [URL] [HTTP Version] CRLF (e.g., 'GET /index.html HTTP/1.1'), 2) Header Lines: zero or more 'Header-Field-Name: Value' lines (e.g., Host, User-Agent, Accept) each ending with CRLF, 3) A Blank Line (CRLF alone) indicating the end of headers, and 4) Entity Body (optional payload, empty in GET, populated in POST/PUT).",
    "explanation": {
      "ar": "صيغة رسالة الـ HTTP Request بتتكون من 4 أجزاء بالترتيب: (1) الـ Request Line وفيه 3 خانات: `Method + URL + HTTP Version` ونهاية السطر `CRLF`، (2) الـ Header Lines (زي `Host:`, `User-Agent:`, `Connection:`)، (3) سطر فاضي (Blank line `CRLF`) يفصل الهيدر عن البودي، (4) الـ Entity Body (اختياري؛ بيكون فاضي في `GET` ومليان بالداتا في `POST`/`PUT`).",
      "en": "An HTTP request message comprises: (1) a Request Line (Method, URL, Version), (2) Header Lines, (3) a Blank Line (CRLF), and (4) an optional Entity Body."
    },
    "keywords": [
      "HTTP Request Format",
      "Request Line",
      "Header Lines",
      "Entity Body"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-56",
    "number": 332,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 121,
    "question": "What is the purpose of a Domain Name System (DNS)?",
    "options": [
      "To translate human-readable hostnames/domain names (like www.example.com) into numerical IP addresses (like 93.184.216.34), as well as providing host aliasing, mail server aliasing, and load distribution",
      "To encrypt wireless network frames",
      "To physically connect twisted-pair cables to a switch",
      "To assign MAC addresses to network cards at the factory"
    ],
    "correctAnswerIndex": 0,
    "answer": "The primary purpose of the Domain Name System (DNS) is to translate human-friendly domain names/hostnames (e.g., www.google.com) into numeric IP addresses (e.g., 142.250.190.46) required by network routers. DNS also provides host aliasing (CNAME), mail server aliasing (MX), and load distribution among replicated servers.",
    "explanation": {
      "ar": "الغرض الأساسي من نظام الـ DNS (Domain Name System) هو ترجمة أسماء النطاقات السهلة للبشر (زي `www.google.com`) إلى عناوين الـ IP الرقمية اللي بتفهمها الراوترات والكمبيوترات، بالإضافة لتوفير خدمات إضافية زي الـ Host aliasing والـ Mail server aliasing وتوزيع الأحمال (Load distribution).",
      "en": "DNS translates human-readable domain names into numerical IP addresses and supports host/mail aliasing and server load distribution."
    },
    "keywords": [
      "DNS Purpose",
      "Domain Name System",
      "Name to IP Translation"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-57",
    "number": 333,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 121,
    "question": "Discuss the three main divisions of the domain name space.",
    "options": [
      "1) Generic Domains (gTLDs like .com, .edu, .org, .gov), 2) Country Domains (ccTLDs using two-character ISO country codes like .eg, .uk, .us), and 3) Inverse Domain (in-addr.arpa for reverse IP-to-name lookup)",
      "1) LAN, 2) MAN, and 3) WAN",
      "1) Class A, 2) Class B, and 3) Class C",
      "1) Physical, 2) Data Link, and 3) Network"
    ],
    "correctAnswerIndex": 0,
    "answer": "In the hierarchical DNS domain name space (per Forouzan), the space is divided into three main sections: 1) Generic Domains: define registered hosts according to their generic organizational behavior (e.g., .com, .edu, .org, .gov, .mil, .net); 2) Country Domains: use two-character ISO country abbreviations (e.g., .eg for Egypt, .us, .uk, .fr); and 3) Inverse Domain (in-addr.arpa): used for reverse DNS lookup to map a known IP address back to its domain name.",
    "explanation": {
      "ar": "الأقسام التلاتة الرئيسية للـ Domain Name Space في الـ DNS (حسب كتاب Forouzan) هي: (1) الـ Generic Domains: نطاقات عامة حسب طبيعة المؤسسة (زي `.com`, `.edu`, `.org`, `.gov`, `.net`)، (2) الـ Country Domains: نطاقات الدول المكونة من حرفين (زي `.eg` لمصر، `.uk`، `.us`)، (3) الـ Inverse Domain (`in-addr.arpa`): وبيُستخدم للبحث العكسي (Reverse DNS) لتحويل الـ IP address إلى اسم النطاق.",
      "en": "The DNS domain name space is divided into three sections: Generic domains (.com, .edu, .org), Country domains (.eg, .uk, .us), and the Inverse domain (in-addr.arpa for IP-to-hostname mapping)."
    },
    "keywords": [
      "Domain Name Space Divisions",
      "Generic Domains",
      "Country Domains",
      "Inverse Domain"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-58",
    "number": 334,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 122,
    "question": "Discuss the TCP connections needed in FTP.",
    "options": [
      "FTP uses two parallel TCP connections: 1) A persistent Control Connection on port 21 (for commands, authentication, and replies) and 2) A non-persistent Data Connection on port 20 (opened and closed for each file or directory listing transferred)",
      "FTP uses only a single UDP connection on port 80",
      "FTP uses 10 TCP connections per byte",
      "FTP does not use TCP at all"
    ],
    "correctAnswerIndex": 0,
    "answer": "FTP requires two separate, parallel TCP connections (making it an out-of-band protocol): 1) Control Connection (Port 21): remains open (persistent) throughout the entire user session to exchange user identification, passwords, commands (e.g., USER, PASS, RETR, STOR), and server status replies in 7-bit ASCII. 2) Data Connection (Port 20): opened on demand (non-persistent) whenever a file or directory listing is transferred and closed immediately after that transfer finishes.",
    "explanation": {
      "ar": "بروتوكول الـ FTP بيحتاج اتصالين TCP متوازيين (2 parallel TCP connections): (1) الـ Control Connection (على Port 21): وده بيفضل مفتوح طول الجلسة (Persistent) لإرسال الأوامر والردود والباسورد (Out-of-band control)، (2) الـ Data Connection (على Port 20): وده بيتفتح عند نقل كل ملف ويتقفل أول ما نقل الملف يخلص (Non-persistent).",
      "en": "FTP uses two TCP connections: a persistent Control Connection on port 21 for commands/replies, and a non-persistent Data Connection on port 20 for transferring each file."
    },
    "keywords": [
      "FTP TCP Connections",
      "Control Connection Port 21",
      "Data Connection Port 20"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-59",
    "number": 335,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 122,
    "question": "Discuss the basic model of FTP.",
    "options": [
      "The client has three components (User Interface, Client Control Process, Client Data Transfer Process) and the server has two components (Server Control Process and Server Data Transfer Process) communicating over control and data connections",
      "A single peer-to-peer process with no control channel",
      "A browser rendering HTML directly from a DNS server",
      "A router forwarding ICMP echo requests"
    ],
    "correctAnswerIndex": 0,
    "answer": "In the basic FTP model (per Forouzan), the client has three components: the User Interface, the Client Control Process, and the Client Data Transfer Process. The server has two components: the Server Control Process and the Server Data Transfer Process. The control connection links the two control processes (on port 21), while the data connection links the two data transfer processes (on port 20).",
    "explanation": {
      "ar": "النموذج الأساسي للـ FTP (حسب كتاب Forouzan) بيتكون من: عند الـ Client فيه 3 مكونات: (User Interface + Client Control Process + Client Data Transfer Process)، وعند الـ Server فيه مكونين: (Server Control Process + Server Data Transfer Process). الـ Control connection بيربط عمليتي التحكم ببعض، والـ Data connection بيربط عمليتي نقل البيانات ببعض.",
      "en": "The basic FTP model comprises three client components (User Interface, Control Process, Data Transfer Process) and two server components (Control Process, Data Transfer Process) linked via separate control and data connections."
    },
    "keywords": [
      "FTP Basic Model",
      "Control Process",
      "Data Transfer Process"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-60",
    "number": 336,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 122,
    "question": "Name four factors (pillars) needed for a secure network?",
    "options": [
      "1) Confidentiality (Privacy), 2) Integrity (Data hasn't been altered), 3) Authentication (Verifying sender/receiver identity), and 4) Non-repudiation / Availability",
      "1) Speed, 2) Color, 3) Weight, and 4) Price",
      "1) HTML, 2) CSS, 3) JavaScript, and 4) SQL",
      "1) Hub, 2) Repeater, 3) Terminator, and 4) Coax"
    ],
    "correctAnswerIndex": 0,
    "answer": "The four fundamental factors/services required for a secure network are: 1) Confidentiality (Privacy: ensuring only authorized parties can read the message via encryption), 2) Message Integrity (ensuring the message arrives unaltered without tampering), 3) Endpoint Authentication (verifying the true identity of the sender and receiver), and 4) Non-repudiation (ensuring the sender cannot deny having sent the message) / Operational Availability.",
    "explanation": {
      "ar": "الأربع ركائز الأساسية لأمان الشبكات (Network Security) هي: (1) الـ Confidentiality / Privacy (السرية بالتشفير عشان محدش غريب يقرأ الرسالة)، (2) الـ Integrity (سلامة البيانات وعدم التلاعب بيها في السكة)، (3) الـ Authentication (التحقق من هوية المرسل والمستقبل)، (4) الـ Non-repudiation (عدم الإنكار) والـ Availability (توافر الخدمة).",
      "en": "The four core pillars of network security are Confidentiality (Privacy), Integrity, Authentication, and Non-repudiation (along with Availability)."
    },
    "keywords": [
      "Network Security Factors",
      "Confidentiality",
      "Integrity",
      "Authentication",
      "Non-repudiation"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-61",
    "number": 337,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 122,
    "question": "How is a secret key different from a public key?",
    "options": [
      "Symmetric (secret-key) cryptography uses a single shared private key for both encryption and decryption, whereas Asymmetric (public-key) cryptography uses a mathematically related pair of keys: a public key shared with everyone and a private key kept secret by the owner",
      "A secret key is published on websites, while a public key is hidden",
      "Both use the exact same key and algorithm",
      "A public key is a physical metal key for the server room door"
    ],
    "correctAnswerIndex": 0,
    "answer": "In Secret-Key (Symmetric) cryptography (e.g., AES, DES), the same single secret key is shared between sender and receiver and used for both encryption and decryption. In Public-Key (Asymmetric) cryptography (e.g., RSA), each user has a pair of keys: a Public Key (known to everyone, used to encrypt messages to the owner or verify signatures) and a Private Key (kept strictly secret by the owner, used to decrypt messages or create digital signatures).",
    "explanation": {
      "ar": "الفرق بين الـ Secret key والـ Public key: في التشفير المتماثل (Symmetric / Secret-key encryption) بنستخدم مفتاح سري واحد مشترك (Secret key) للتشفير وفك التشفير معاً. أما في التشفير غير المتماثل (Asymmetric / Public-key encryption زي RSA) بيكون فيه مفتاحين مرتبطين رياضياً: Public key معلن للناس كلها للتشفير، وPrivate key سري خاص بصاحبه بس لفك التشفير.",
      "en": "A secret key is a single shared key used for both encryption and decryption in symmetric cryptography, whereas public-key (asymmetric) cryptography uses a public key shared openly and a private key kept secret."
    },
    "keywords": [
      "Secret Key vs Public Key",
      "Symmetric",
      "Asymmetric",
      "RSA"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-62",
    "number": 338,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 123,
    "question": "What is a digital signature?",
    "options": [
      "A cryptographic technique (created by encrypting a message's hash digest with the sender's private key) that provides authentication, message integrity, and non-repudiation",
      "A scanned image of a handwritten signature attached as a JPEG",
      "Typing your name at the bottom of a plain text email",
      "The MAC address of a network card"
    ],
    "correctAnswerIndex": 0,
    "answer": "A digital signature is a cryptographic mechanism equivalent to a verifiable physical signature. The sender computes a cryptographic hash (message digest) of the message and encrypts (signs) it using the sender's own Private Key. Anyone can verify the signature using the sender's Public Key, guaranteeing sender Authentication, Message Integrity, and Non-repudiation.",
    "explanation": {
      "ar": "الـ Digital signature (التوقيع الرقمي) هو تقنية تشفير بيقوم فيها المرسل بحساب Hash (بصمة) للرسالة ويشفرها باستخدام الـ Private Key بتاعه هو؛ ولما توصل للمستلم يفكها بالـ Public Key بتاع المرسل، وده بيضمن 3 حاجات: التأكد من هوية المرسل (Authentication)، عدم تعديل الرسالة (Integrity)، وعدم قدرة المرسل على إنكار إرسالها (Non-repudiation).",
      "en": "A digital signature is created by signing a message's hash with the sender's private key and verified with the sender's public key, ensuring authentication, integrity, and non-repudiation."
    },
    "keywords": [
      "Digital Signature",
      "Private Key",
      "Authentication",
      "Integrity",
      "Non-repudiation"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-63",
    "number": 339,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 123,
    "question": "What are the request messages (PDUs) that support SNMP and explain them?",
    "options": [
      "GetRequest (read a MIB variable), GetNextRequest (read the next sequential MIB variable in a table), GetBulkRequest (read large blocks of data), SetRequest (modify/set a value on an agent), InformRequest (manager-to-manager notification), plus Response and Trap",
      "GET, POST, PUT, and DELETE",
      "SYN, SYN-ACK, FIN, and RST",
      "Discover, Offer, Request, and ACK"
    ],
    "correctAnswerIndex": 0,
    "answer": "SNMP (Simple Network Management Protocol) uses the following main request messages from the Manager to the Agent: 1) GetRequest: retrieves the value of one or more specific MIB variables from an agent; 2) GetNextRequest: retrieves the value of the next lexicographical MIB variable (used to walk tables); 3) GetBulkRequest (SNMPv2/v3): efficiently retrieves large blocks of table data; 4) SetRequest: changes/configures the value of a variable on an agent; 5) InformRequest: manager-to-manager acknowledged alert (along with Agent-to-Manager 'Response' and asynchronous 'SNMPv2-Trap').",
    "explanation": {
      "ar": "رسائل الطلبات (Request PDUs) الأساسية في بروتوكول إدارة الشبكات SNMP من الـ Manager للـ Agent هي: (1) `GetRequest`: لقراءة قيمة متغير معين من الـ Agent، (2) `GetNextRequest`: لقراءة المتغير التالي في جدول (Table traversal)، (3) `GetBulkRequest`: لجلب كمية بيانات كبيرة من الجداول دفعة واحدة، (4) `SetRequest`: لتعديل أو ضبط قيمة إعداد معين جوه الـ Agent، (5) `InformRequest`: لإرسال إشعار من Manager لـ Manager تاني (بالإضافة لرسائل الرد `Response` والتحذير التلقائي `Trap`).",
      "en": "SNMP request messages include GetRequest (fetch variable), GetNextRequest (fetch next variable in table), GetBulkRequest (fetch large table blocks), SetRequest (modify agent variable), and InformRequest (alongside Response and Trap)."
    },
    "keywords": [
      "SNMP Request Messages",
      "GetRequest",
      "GetNextRequest",
      "GetBulkRequest",
      "SetRequest"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-64",
    "number": 340,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 124,
    "question": "Give the format of the HTTP response message.",
    "options": [
      "1) Status Line (HTTP-Version SP Status-Code SP Reason-Phrase CRLF), 2) Header Lines (e.g., Date, Server, Content-Type, Content-Length CRLF), 3) Blank Line (CRLF), and 4) Entity Body (containing the requested object)",
      "1) Request Line, 2) URL, 3) Cookie",
      "1) Source Port, 2) Destination Port, 3) Checksum",
      "1) Destination MAC, 2) Source MAC, 3) FCS"
    ],
    "correctAnswerIndex": 0,
    "answer": "An HTTP response message consists of four sections: 1) Status Line: [HTTP Version] [Status Code] [Status Phrase] CRLF (e.g., 'HTTP/1.1 200 OK'), 2) Header Lines: 'Header-Name: Value' lines (such as Date, Server, Last-Modified, Content-Length, Content-Type) each ending in CRLF, 3) A Blank Line (CRLF) separating headers from the body, and 4) Entity Body: the payload containing the requested HTML file, image, or data.",
    "explanation": {
      "ar": "صيغة رسالة الـ HTTP Response بتتكون من 4 أجزاء: (1) أول سطر اسمه الـ Status Line وفيه: `HTTP Version + Status Code + Status Phrase` (زي `HTTP/1.1 200 OK`)، (2) الـ Header Lines (زي `Date:`, `Server:`, `Content-Type:`, `Content-Length:`)، (3) سطر فاضي (`CRLF`)، (4) الـ Entity Body اللي بيحتوي على الملف أو الصفحة المطلوبة نفسها.",
      "en": "An HTTP response message consists of: (1) a Status Line (Version, Status Code, Phrase), (2) Header Lines, (3) a Blank Line (CRLF), and (4) the Entity Body containing the requested object."
    },
    "keywords": [
      "HTTP Response Format",
      "Status Line",
      "Header Lines",
      "Entity Body"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-65",
    "number": 341,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "network-ip",
    "page": 124,
    "question": "Which one of the seven OSI layers is specifically related to routing and what is its purpose?",
    "options": [
      "The Network Layer (Layer 3); its purpose is logical addressing (IP) and routing/forwarding packets from the source host to the destination host across multiple interconnected networks",
      "The Physical Layer (Layer 1); its purpose is transmitting raw bits over copper wires",
      "The Presentation Layer (Layer 6); its purpose is compressing JPEG images",
      "The Session Layer (Layer 5); its purpose is managing dialog tokens"
    ],
    "correctAnswerIndex": 0,
    "answer": "The Network Layer (Layer 3) is specifically responsible for routing. Its purpose is to provide logical addressing (IP addresses) and determine the optimal end-to-end path to route and forward packets from the source host to the destination host across multiple interconnected networks (internetworking).",
    "explanation": {
      "ar": "الطبقة المسؤولة خصيصاً عن الـ Routing من بين طبقات الـ OSI السبعة هي طبقة الـ Network Layer (Layer 3)؛ والغرض منها هو توفير العناوين المنطقية (Logical IP addressing) وتحديد أفضل مسار لتوجيه ونقل الـ Packets من جهاز المرسل لجهاز المستقبل عبر الشبكات المختلفة.",
      "en": "The Network Layer (Layer 3) handles routing; its purpose is logical addressing and path determination to deliver packets end-to-end across interconnected networks."
    },
    "keywords": [
      "OSI Layer 3",
      "Network Layer",
      "Routing Purpose"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-66",
    "number": 342,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "network-ip",
    "page": 124,
    "question": "What are the main disadvantages of dynamic routing?",
    "options": [
      "It consumes extra link bandwidth (for periodic/triggered routing updates), uses more router CPU and RAM resources, is more complex to configure/troubleshoot, and can be less secure than static routing if updates are not authenticated",
      "It requires manual reconfiguration every time a single link fails",
      "It cannot adapt to topology changes",
      "It only works on networks with two computers"
    ],
    "correctAnswerIndex": 0,
    "answer": "The main disadvantages of dynamic routing compared to static routing are: 1) Bandwidth overhead: routers continuously exchange routing update packets, consuming link bandwidth; 2) Hardware overhead: running routing algorithms (e.g., Dijkstra/SPF or Bellman-Ford) requires more router CPU processing power and RAM; 3) Security risks: routing updates can be spoofed or intercepted unless authenticated; 4) Higher complexity and transient routing loops during convergence.",
    "explanation": {
      "ar": "أهم عيوب الـ Dynamic routing مقارنة بالـ Static routing: (1) بيستهلك جزء من الـ Bandwidth بتاع الشبكة بسبب رسائل التحديث المستمرة بين الراوترات، (2) بيستهلك موارد أكبر من الـ CPU والـ RAM بتاعة الراوتر في حساب الجداول، (3) أقل أماناً لو مفيش تشفير/توثيق لرسائل التوجيه، (4) أعقد في الإعداد وممكن تحصل مشاكل مؤقتة وقت الـ Convergence (زي الـ Routing loops).",
      "en": "Dynamic routing disadvantages include higher router CPU/memory consumption, link bandwidth overhead from routing updates, potential security vulnerabilities, and convergence complexity."
    },
    "keywords": [
      "Dynamic Routing Disadvantages",
      "Bandwidth Overhead",
      "CPU Memory"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-67",
    "number": 343,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "network-ip",
    "page": 125,
    "question": "How does a routing table operate?",
    "options": [
      "When a packet arrives, the router inspects its destination IP address, searches the routing table for the longest matching network prefix, and forwards the packet out the specified outgoing interface to the next-hop router (or default gateway if no specific match exists)",
      "It converts electrical voltages into optical pulses",
      "It stores the HTML source code of all websites on the Internet",
      "It assigns MAC addresses to newly manufactured network cards"
    ],
    "correctAnswerIndex": 0,
    "answer": "A routing table stores rows containing Destination Network Prefix, Subnet Mask, Next-Hop IP Address, Outgoing Interface, and Metric/Cost. When a packet arrives at a router, the router extracts the packet's destination IP address, performs a Longest Prefix Match lookup against the entries in its routing table, and forwards the packet out the matching interface to the corresponding next-hop router (or to the Default Route 0.0.0.0/0 if no specific route matches).",
    "explanation": {
      "ar": "جدول التوجيه (Routing Table) بيحتوي على عناوين الشبكات، الـ Subnet Mask، عنوان الـ Next-hop router، والـ Outgoing interface، والتكلفة (Metric). لما توصل Packet للراوتر، بيقرأ الـ Destination IP بتاعها، ويدور في الـ Routing table على أطول تطابق (Longest Prefix Match)، ويبعت الـ Packet من البورت المحدد للـ Next-hop router (أو للـ Default Route لو ملقاش شبكة مطابقة).",
      "en": "A router inspects an incoming packet's destination IP address, matches it against destination network prefixes in its routing table (using longest prefix match), and forwards the packet out the corresponding interface to the next-hop router."
    },
    "keywords": [
      "Routing Table Operation",
      "Longest Prefix Match",
      "Next Hop"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-68",
    "number": 344,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "network-ip",
    "page": 125,
    "question": "Where would you implement a high-end router and why?",
    "options": [
      "In the Internet core (ISP backbone), large enterprise cores, or data center edges, because they must process millions of packets per second at multi-gigabit/terabit line rates, maintain massive BGP routing tables, and provide high redundancy/availability",
      "Inside a home kitchen to connect a single smart toaster",
      "Between a mouse and a keyboard",
      "At the end of a thinnet coaxial cable as a terminator"
    ],
    "correctAnswerIndex": 0,
    "answer": "High-end routers are implemented in ISP backbone cores (Tier-1/Tier-2 IXPs), large enterprise WAN aggregation cores, and cloud data centers. They are needed there because those locations handle massive traffic volumes (millions of packets per second at 10G/100G/400G speeds), require full Internet BGP routing tables (hundreds of thousands of routes), hardware-accelerated ASICs, QoS, and 99.999% fault-tolerant hardware redundancy.",
    "explanation": {
      "ar": "بنستخدم الـ High-end routers في قلب شبكة الإنترنت (Internet Core / ISP Backbones) ومراكز البيانات الضخمة والشركات الكبرى (Enterprise Cores)؛ لأن الأماكن دي بتحتاج معالجة ملايين الـ Packets في الثانية بسرعات عالية جداً، والاحتفاظ بجداول توجيه ضخمة (زي BGP)، وتوافرية عالية بدون أي توقف.",
      "en": "High-end routers are deployed in ISP backbones, data centers, and large enterprise cores to handle massive packet-forwarding rates, huge BGP routing tables, and high-availability requirements."
    },
    "keywords": [
      "High-End Router",
      "ISP Backbone",
      "Network Core"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-69",
    "number": 345,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "network-ip",
    "page": 125,
    "question": "What is the difference between centralized and decentralized routing?",
    "options": [
      "In Centralized (Global) routing, a central controller or global view of the entire network topology computes paths (e.g., SDN / Link-State global view), whereas in Decentralized (Distributed) routing, each router computes paths iteratively using only local information exchanged with immediate neighbors (e.g., Distance Vector)",
      "Centralized routing uses wireless cables while decentralized routing uses fiber",
      "Decentralized routing requires a single mainframe to compute all paths",
      "There is no difference between them"
    ],
    "correctAnswerIndex": 0,
    "answer": "In Centralized (Global) routing, a single central controller (as in SDN) or an algorithm with complete global knowledge of all nodes and link costs computes the least-cost paths. In Decentralized (Distributed) routing (such as Distance Vector routing), no single node possesses complete topology info; instead, each router computes routes locally and iteratively by exchanging routing information only with its directly connected neighbors.",
    "explanation": {
      "ar": "الفرق بين الـ Centralized والـ Decentralized routing: في الـ Centralized routing بيكون فيه جهة مركزية واحدة (أو معرفة كاملة بكل الـ Topology) بتحسب المسارات لكل الشبكة. أما في الـ Decentralized routing (زي الـ Distance Vector) مفيش جهاز واحد عارف شكل الشبكة كلها، بل كل راوتر بيحسب المسارات بشكل مستقل وتدريجي عن طريق تبادل المعلومات مع جيرانه المباشرين بس.",
      "en": "Centralized routing computes paths using complete global topology knowledge at a central controller, whereas decentralized routing computes paths iteratively across individual routers sharing local info with neighbors."
    },
    "keywords": [
      "Centralized vs Decentralized Routing",
      "Global vs Distributed"
    ],
    "topicLabelEn": "Network Layer, IPv4/IPv6, Routing, NAT & DHCP",
    "topicLabelAr": "طبقة الشبكة، بروتوكول IPv4/IPv6، التوجيه، NAT و DHCP",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-70",
    "number": 346,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 126,
    "question": "What are the abbreviations for the 3 most common VPN protocols?",
    "options": [
      "PPTP (Point-to-Point Tunneling Protocol), L2TP (Layer 2 Tunneling Protocol), and IPsec (Internet Protocol Security)",
      "HTTP, FTP, and SMTP",
      "ARP, RARP, and ICMP",
      "UTP, STP, and Coax"
    ],
    "correctAnswerIndex": 0,
    "answer": "The three most common traditional VPN protocol abbreviations are: 1) PPTP (Point-to-Point Tunneling Protocol), 2) L2TP (Layer 2 Tunneling Protocol), and 3) IPsec (Internet Protocol Security) — along with SSL/TLS (OpenVPN) in modern deployments.",
    "explanation": {
      "ar": "أشهر 3 اختصارات لبروتوكولات الـ VPN القياسية في المنهج هما: (1) `PPTP` (Point-to-Point Tunneling Protocol)، و(2) `L2TP` (Layer 2 Tunneling Protocol)، و(3) `IPsec` (Internet Protocol Security).",
      "en": "The three most common traditional VPN protocol abbreviations are PPTP, L2TP, and IPsec."
    },
    "keywords": [
      "VPN Protocols",
      "PPTP",
      "L2TP",
      "IPsec"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-71",
    "number": 347,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 126,
    "question": "What does PPTP stand for?",
    "options": [
      "Point-to-Point Tunneling Protocol",
      "Packet-to-Packet Transfer Process",
      "Public-to-Private Transmission Protocol",
      "Parallel Port Termination Protocol"
    ],
    "correctAnswerIndex": 0,
    "answer": "Point-to-Point Tunneling Protocol",
    "explanation": {
      "ar": "اختصار PPTP هو Point-to-Point Tunneling Protocol، وهو بروتوكول لعمل شبكات الـ VPN.",
      "en": "PPTP stands for Point-to-Point Tunneling Protocol."
    },
    "keywords": [
      "PPTP",
      "Point-to-Point Tunneling Protocol",
      "VPN"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-72",
    "number": 348,
    "source": "question-bank",
    "type": "essay",
    "tier": 2,
    "topic": "security-vpn-wlan",
    "page": 126,
    "question": "What is the main benefit of VPNs compared to dedicated networks utilizing Frame Relay or leased lines?",
    "options": [
      "Significant cost savings (lower cost) and flexibility/scalability by using the existing public Internet infrastructure instead of expensive dedicated leased lines or Frame Relay circuits",
      "VPNs do not require an Internet connection at all",
      "VPNs are physically immune to ISP outages",
      "VPNs do not use encryption"
    ],
    "correctAnswerIndex": 0,
    "answer": "The main benefit of a VPN over dedicated WANs (such as leased lines or Frame Relay) is dramatic cost reduction (along with high scalability and global reach for remote users), because VPNs securely use the shared, low-cost public Internet infrastructure instead of leasing expensive dedicated physical circuits.",
    "explanation": {
      "ar": "أهم ميزة للـ VPN مقارنة بالشبكات المخصصة الغالية (زي الـ Dedicated Leased Lines أو الـ Frame Relay) هي التوفير الكبير جداً في التكلفة (Cost savings) والمرونة العالية، لأن الـ VPN بيستغل بنية الإنترنت العام الرخيصة والموجودة في كل مكان بدلاً من مد أو تأجير خطوط دولية خاصة.",
      "en": "The primary benefit of VPNs over dedicated Frame Relay or leased-line WANs is substantial cost savings and flexibility by leveraging the public Internet."
    },
    "keywords": [
      "VPN Benefits",
      "Cost Savings",
      "Frame Relay"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-73",
    "number": 349,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "security-vpn-wlan",
    "page": 127,
    "question": "In VPNs, the term 'tunneling' refers to...",
    "options": [
      "Encapsulating an entire private network packet (and encrypting it) inside the payload of an outer public IP packet so it can travel securely across a public network like the Internet",
      "Digging an underground trench to bury coaxial cables",
      "Deleting the IP header before sending a frame",
      "Increasing the Wi-Fi antenna gain"
    ],
    "correctAnswerIndex": 0,
    "answer": "In VPNs, 'tunneling' refers to the process of encapsulating (wrapping) an entire private packet—often encrypted—inside the data payload of another outer IP packet so that the private data can be transmitted securely across a public network (the Internet) as if through a private point-to-point tunnel.",
    "explanation": {
      "ar": "مصطلح الـ Tunneling في الـ VPN معناه تغليف (Encapsulating) وتشفير الـ Packet الخاصة بالشبكة الداخلية بالكامل ووضعها جوه الـ Payload بتاع Packet خارجية عامة، عشان تعبر شبكة الإنترنت العام بأمان كأنها ماشية في نفق خاص معزول.",
      "en": "In VPNs, tunneling is the encapsulation (and encryption) of a private network packet inside an outer public IP packet for secure transport across a public network."
    },
    "keywords": [
      "VPN Tunneling",
      "Encapsulation",
      "Security"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p4-74",
    "number": 350,
    "source": "question-bank",
    "type": "essay",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 127,
    "question": "What is the function of a server in a server-based network?",
    "options": [
      "To provide shared network resources, services (file, print, web, email, database), centralized security/authentication, and centralized data management/backup to client computers",
      "To act only as a passive cable connector",
      "To request files without ever sharing any resources",
      "To absorb reflected signals on a bus cable"
    ],
    "correctAnswerIndex": 0,
    "answer": "In a server-based (client/server) network, the function of a server is to centrally manage and provide shared resources and services (such as file storage, printing, email, web hosting, and databases), enforce centralized user authentication and security policies, and perform centralized data backups for client workstations.",
    "explanation": {
      "ar": "وظيفة الـ Server في الشبكات القائمة على الخادم (Server-based network) هي تقديم ومشاركة الموارد والخدمات (ملفات، طباعة، قواعد بيانات، إيميل، ويب) لأجهزة الـ Clients، بالإضافة لتوفير الحماية المركزية (Centralized security & authentication) والنسخ الاحتياطي المركزي للبيانات.",
      "en": "A server centrally provides shared resources/services, enforces security and access control, and manages data storage and backups for network clients."
    },
    "keywords": [
      "Server Function",
      "Server-Based Network",
      "Shared Resources"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  }
];

export const bankPart5FillBlanks: Question[] = [
  {
    "id": "bank-p5-01",
    "number": 351,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "intro-models",
    "page": 127,
    "question": "A primary reason for implementing a network is to _______ resources.",
    "options": [
      "share",
      "destroy",
      "hide",
      "disconnect"
    ],
    "correctAnswerIndex": 0,
    "answer": "share",
    "explanation": {
      "ar": "السبب الأساسي لإنشاء أي شبكة كمبيوتر هو مشاركة الموارد (`share` resources) زي الملفات والطابعات والإنترنت.",
      "en": "A primary reason for implementing a network is to share resources."
    },
    "keywords": [
      "Share Resources",
      "Network Purpose"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-02",
    "number": 352,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 127,
    "question": "In a peer-to-peer network, each computer can act as a _________ and a ________.",
    "options": [
      "client, server",
      "router, hub",
      "modem, printer",
      "terminator, cable"
    ],
    "correctAnswerIndex": 0,
    "answer": "client and a server",
    "explanation": {
      "ar": "في شبكة الند للند (Peer-to-peer network)، كل جهاز يقدر يشتغل كـ `client` وكـ `server` في نفس الوقت.",
      "en": "In a peer-to-peer network, each computer can act as both a client and a server."
    },
    "keywords": [
      "Peer-to-Peer",
      "Client and Server"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-03",
    "number": 353,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 2,
    "topic": "security-vpn-wlan",
    "page": 128,
    "question": "A peer-to-peer network is adequate if _______________ is not an issue.",
    "options": [
      "security (or centralized security / large network size)",
      "electricity",
      "having a monitor",
      "keyboard layout"
    ],
    "correctAnswerIndex": 0,
    "answer": "security",
    "explanation": {
      "ar": "شبكة الـ Peer-to-peer بتكون كافية ومناسبة للشبكات الصغيرة لو الـ `security` (الأمان المركزي) مش مشكلة حرجة.",
      "en": "A peer-to-peer network is adequate if centralized security is not an issue."
    },
    "keywords": [
      "Peer-to-Peer",
      "Security"
    ],
    "topicLabelEn": "Wireless Networks (Wi-Fi), Network Security, Firewalls & VPN",
    "topicLabelAr": "الشبكات اللاسلكية Wi-Fi، أمن الشبكات، الجدران النارية والـ VPN",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-04",
    "number": 354,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "intro-models",
    "page": 128,
    "question": "Network professionals use the term __________ to refer to the network's physical layout.",
    "options": [
      "topology",
      "protocol",
      "bandwidth",
      "modulation"
    ],
    "correctAnswerIndex": 0,
    "answer": "topology",
    "explanation": {
      "ar": "متخصصو الشبكات بيستخدموا مصطلح `topology` للإشارة للتخطيط أو الشكل الفيزيائي للشبكة.",
      "en": "Network professionals use the term topology to refer to the network's physical layout."
    },
    "keywords": [
      "Topology",
      "Physical Layout"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-05",
    "number": 355,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "intro-models",
    "page": 128,
    "question": "The four basic topologies are the _______, ________, _______, and ________ topologies.",
    "options": [
      "bus, star, ring, and mesh",
      "TCP, UDP, IP, and HTTP",
      "LAN, MAN, WAN, and PAN",
      "UTP, STP, Coax, and Fiber"
    ],
    "correctAnswerIndex": 0,
    "answer": "bus, star, ring, and mesh",
    "explanation": {
      "ar": "الأربع أشكال الأساسية للـ Topologies هي: `bus`, `star`, `ring`, و `mesh`.",
      "en": "The four basic network topologies are bus, star, ring, and mesh."
    },
    "keywords": [
      "Four Basic Topologies",
      "Bus",
      "Star",
      "Ring",
      "Mesh"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-06",
    "number": 356,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "physical-media",
    "page": 128,
    "question": "To stop the signals from bouncing on a bus cable, a ___________ must be connected to each end of the cable.",
    "options": [
      "terminator",
      "repeater",
      "router",
      "modem"
    ],
    "correctAnswerIndex": 0,
    "answer": "terminator",
    "explanation": {
      "ar": "لمنع الإشارات من الارتداد (bouncing) في كابل الـ Bus، لازم نركب `terminator` في كل طرف من طرفي الكابل.",
      "en": "To stop signals from bouncing on a bus topology, a terminator must be connected to each end of the cable."
    },
    "keywords": [
      "Terminator",
      "Signal Bounce",
      "Bus Topology"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-07",
    "number": 357,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "intro-models",
    "page": 129,
    "question": "In a ________ topology all segments are connected to a centralized component called a ___________.",
    "options": [
      "star, hub (or switch)",
      "bus, terminator",
      "ring, token",
      "mesh, modem"
    ],
    "correctAnswerIndex": 0,
    "answer": "star / hub (or switch)",
    "explanation": {
      "ar": "في الـ `star` topology كل الكابلات بتتوصل بمكون مركزي في النص اسمه `hub` (أو `switch`).",
      "en": "In a star topology, all cable segments are connected to a centralized component called a hub (or switch)."
    },
    "keywords": [
      "Star Topology",
      "Hub",
      "Switch"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-08",
    "number": 358,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "intro-models",
    "page": 129,
    "question": "In a _________ topology, a break anywhere in the backbone cable will cause the entire network to go down.",
    "options": [
      "bus (or single ring)",
      "star",
      "full mesh",
      "wireless"
    ],
    "correctAnswerIndex": 0,
    "answer": "bus",
    "explanation": {
      "ar": "في الـ `bus` topology، أي قطع في الكابل الرئيسي في أي مكان بيؤدي لسقوط وتوقف الشبكة بالكامل.",
      "en": "In a bus topology, a break anywhere in the main cable causes the entire network to go down."
    },
    "keywords": [
      "Bus Topology",
      "Cable Break"
    ],
    "topicLabelEn": "Network Fundamentals, Topologies & Layered Models",
    "topicLabelAr": "أساسيات الشبكات، الـ Topologies، ونماذج OSI & TCP/IP",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-09",
    "number": 359,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 2,
    "topic": "physical-media",
    "page": 129,
    "question": "Coaxial cable consists of a core made of solid or stranded ___________________.",
    "options": [
      "copper wire (conductor)",
      "glass fiber",
      "plastic rubber",
      "aluminum foil"
    ],
    "correctAnswerIndex": 0,
    "answer": "copper wire",
    "explanation": {
      "ar": "الكابل المحوري (Coaxial cable) بيتكون في قلبه الداخلي من سلك نحاسي مصمت أو مجدول (`copper wire`).",
      "en": "Coaxial cable consists of an inner core made of solid or stranded copper wire."
    },
    "keywords": [
      "Coaxial Cable",
      "Copper Wire"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-10",
    "number": 360,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "physical-media",
    "page": 129,
    "question": "Thinnet cable (10Base2) can carry a signal for a distance of about 185 meters (607 feet) before the signal starts to suffer from ___________________.",
    "options": [
      "attenuation",
      "encryption",
      "routing",
      "fragmentation"
    ],
    "correctAnswerIndex": 0,
    "answer": "attenuation",
    "explanation": {
      "ar": "كابل الـ Thinnet يقدر ينقل الإشارة لمسافة 185 متر قبل ما تبدأ الإشارة تضعف وتفقد قوتها، والظاهرة دي اسمها `attenuation` (اضمحلال أو ضعف الإشارة).",
      "en": "Thinnet coaxial cable can carry a signal for about 185 meters before the signal degrades due to attenuation."
    },
    "keywords": [
      "Thinnet",
      "185 meters",
      "Attenuation"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-11",
    "number": 361,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "physical-media",
    "page": 130,
    "question": "The most popular type of twisted-pair cable is ________ (10BaseT).",
    "options": [
      "UTP (Unshielded Twisted Pair)",
      "STP (Shielded Twisted Pair)",
      "Coaxial",
      "Single-mode Fiber"
    ],
    "correctAnswerIndex": 0,
    "answer": "UTP (Unshielded Twisted Pair)",
    "explanation": {
      "ar": "أشهر وأوسع نوع انتشاراً من كابلات الـ Twisted-pair هو الـ `UTP` (Unshielded Twisted Pair).",
      "en": "The most popular type of twisted-pair cabling is UTP (Unshielded Twisted Pair)."
    },
    "keywords": [
      "UTP",
      "10BaseT",
      "Twisted Pair"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-12",
    "number": 362,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "physical-media",
    "page": 130,
    "question": "UTP cable for data transmissions up to 10 Mbps is category _____.",
    "options": [
      "3 (Cat 3)",
      "1 (Cat 1)",
      "5 (Cat 5)",
      "6 (Cat 6)"
    ],
    "correctAnswerIndex": 0,
    "answer": "3 (Category 3)",
    "explanation": {
      "ar": "كابل الـ UTP اللي كان مخصص لنقل البيانات لسرعة لحد `10 Mbps` (في شبكات 10BaseT القديمة) هو `Category 3`.",
      "en": "UTP cable rated for data transmissions up to 10 Mbps is Category 3 (Cat 3)."
    },
    "keywords": [
      "Category 3",
      "10 Mbps",
      "UTP"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-13",
    "number": 363,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "physical-media",
    "page": 130,
    "question": "UTP cable for data transmissions up to 100 Mbps is category _____.",
    "options": [
      "5 (Cat 5)",
      "2 (Cat 2)",
      "3 (Cat 3)",
      "1 (Cat 1)"
    ],
    "correctAnswerIndex": 0,
    "answer": "5 (Category 5)",
    "explanation": {
      "ar": "كابل الـ UTP المخصص لنقل البيانات لسرعات تصل إلى `100 Mbps` (Fast Ethernet 100Base-TX) هو `Category 5`.",
      "en": "UTP cable rated for data transmissions up to 100 Mbps is Category 5 (Cat 5)."
    },
    "keywords": [
      "Category 5",
      "100 Mbps",
      "UTP"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-14",
    "number": 364,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "physical-media",
    "page": 130,
    "question": "Twisted-pair cabling uses __________ connectors to connect to a computer.",
    "options": [
      "RJ-45",
      "BNC",
      "ST/SC",
      "DB-9"
    ],
    "correctAnswerIndex": 0,
    "answer": "RJ-45",
    "explanation": {
      "ar": "كابلات الـ Twisted-pair في الشبكات بتستخدم كونكتور `RJ-45` (الشبيه بكونكتور التليفون ولكن أعرض) للتوصيل بكارت الشبكة في الكمبيوتر.",
      "en": "Twisted-pair network cabling uses RJ-45 modular connectors to connect to a computer's NIC."
    },
    "keywords": [
      "RJ-45",
      "Twisted Pair Connector"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-15",
    "number": 365,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "physical-media",
    "page": 130,
    "question": "Optical fibers carry data signals in the form of ___________________.",
    "options": [
      "light pulses (modulated light waves)",
      "electrical voltage spikes",
      "sound waves",
      "magnetic fields"
    ],
    "correctAnswerIndex": 0,
    "answer": "light pulses (pulses of light)",
    "explanation": {
      "ar": "الألياف الضوئية (Optical fibers) بتنقل إشارات البيانات في صورة نبضات ضوئية (`light pulses` / `modulated light`).",
      "en": "Optical fibers carry digital data signals in the form of modulated light pulses."
    },
    "keywords": [
      "Optical Fiber",
      "Light Pulses"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-16",
    "number": 366,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "physical-media",
    "page": 130,
    "question": "The RJ-45 connection houses ____ cable connections (pins), whereas the RJ-11 houses only ____.",
    "options": [
      "8, 4 (or 6)",
      "4, 8",
      "2, 10",
      "16, 2"
    ],
    "correctAnswerIndex": 0,
    "answer": "8 / 4 (or 6)",
    "explanation": {
      "ar": "كونكتور الشبكة `RJ-45` بيحتوي على `8` أطراف توصيل (8 wires/pins)، بينما كونكتور التليفون `RJ-11` بيحتوي على `4` أطراف فقط (أو 6 مواضع في بعض الأنواع).",
      "en": "An RJ-45 connector houses 8 wire connections, whereas an RJ-11 telephone connector houses 4 (or up to 6)."
    },
    "keywords": [
      "RJ-45 vs RJ-11",
      "8 pins",
      "4 pins"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-17",
    "number": 367,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "physical-media",
    "page": 131,
    "question": "Fiber-optic cable cannot be _____________________, and the data cannot be stolen.",
    "options": [
      "tapped (easily tapped/intercepted)",
      "bent",
      "connected to a switch",
      "used for the Internet"
    ],
    "correctAnswerIndex": 0,
    "answer": "tapped",
    "explanation": {
      "ar": "من أهم مميزات الأمان في كابل الألياف الضوئية (Fiber-optic cable) إنه مبيسربش إشارات كهرومغناطيسية بره السلك، وبالتالي لا يمكن التنصت عليه (`tapped`) وسرقة البيانات منه بسهولة زي الكابلات النحاسية.",
      "en": "Fiber-optic cable cannot be easily tapped, making it highly secure against data eavesdropping."
    },
    "keywords": [
      "Fiber Optic Security",
      "Cannot be Tapped"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-18",
    "number": 368,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "physical-media",
    "page": 131,
    "question": "Fiber-optic cable transmissions are not subject to electrical ___________________.",
    "options": [
      "interference (EMI / RFI)",
      "speed",
      "protocols",
      "routing"
    ],
    "correctAnswerIndex": 0,
    "answer": "interference",
    "explanation": {
      "ar": "بما إن كابلات الـ Fiber-optic بتنقل ضوء مش كهرباء، فهي لا تتأثر نهائياً بالتداخل أو الشوشرة الكهربائية والمغناطيسية (`electrical interference` / EMI).",
      "en": "Fiber-optic transmissions use light rather than electricity and are therefore immune to electrical/electromagnetic interference (EMI)."
    },
    "keywords": [
      "Fiber Optic",
      "Electrical Interference",
      "EMI"
    ],
    "topicLabelEn": "Physical Layer, Transmission Media & Access Networks",
    "topicLabelAr": "الطبقة الفيزيائية، الكابلات، المودم، وشبكات الوصول (DSL/Fiber)",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-19",
    "number": 369,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 2,
    "topic": "application-web-mail",
    "page": 131,
    "question": "The two major components of a network operating system (NOS) are _________ and _______________.",
    "options": [
      "client software (redirector) and server software",
      "keyboard and mouse",
      "monitor and printer",
      "coaxial cable and terminator"
    ],
    "correctAnswerIndex": 0,
    "answer": "client software and server software",
    "explanation": {
      "ar": "المكونين الرئيسيين لنظام تشغيل الشبكة (Network Operating System - NOS) هما: برمجيات العميل (`client software`) اللي بتشتغل على أجهزة المستخدمين، وبرمجيات الخادم (`server software`) اللي بتشتغل على السيرفر.",
      "en": "The two major components of a Network Operating System (NOS) are client software and server software."
    },
    "keywords": [
      "Network Operating System",
      "Client Software",
      "Server Software"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  },
  {
    "id": "bank-p5-20",
    "number": 370,
    "source": "question-bank",
    "type": "fill-in-blank",
    "tier": 1,
    "topic": "application-web-mail",
    "page": 131,
    "question": "In a networking environment, a ________________ provides resources to other computers.",
    "options": [
      "server",
      "client",
      "terminator",
      "repeater"
    ],
    "correctAnswerIndex": 0,
    "answer": "server",
    "explanation": {
      "ar": "في بيئة الشبكات، الـ `server` هو الجهاز اللي بيوفر ويقدم الموارد والخدمات (provides resources) لباقي الأجهزة (clients).",
      "en": "In a networking environment, a server provides shared resources and services to clients."
    },
    "keywords": [
      "Server",
      "Provides Resources"
    ],
    "topicLabelEn": "Application Layer: HTTP, FTP, Email (SMTP/POP/IMAP), DNS & SNMP",
    "topicLabelAr": "طبقة التطبيقات: الويب HTTP، نقل الملفات FTP، البريد، والـ DNS",
    "isDuplicate": false
  }
];

export const questionBankMcqs: Question[] = [
  ...bankPart1Mcqs,
  ...bankPart3Mcqs,
];

export const questionBankAll: Question[] = [
  ...bankPart1Mcqs,
  ...bankPart2ShortAnswers,
  ...bankPart3Mcqs,
  ...bankPart4Essays,
  ...bankPart5FillBlanks,
];

export const allQuestions: Question[] = [
  ...midterm2025Questions,
  ...midterm2026Questions,
  ...ch1Questions,
  ...ch2Questions,
  ...ch5Questions,
  ...questionBankAll,
];

export const uniqueQuestions: Question[] = allQuestions.filter(
  (q) => !q.isDuplicate
);

export default allQuestions;