<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'

const route = useRoute()
const router = useRouter()
const isLoading = ref(false)

const { currentLocale, toggleLanguage } = useLanguage()

const caseStudiesData = {
  en: {
    orion: {
      id: 'orion',
      title: 'ORION',
      tagline: 'Optimized Retrieval & Intelligent Operational Network (Parallel RAG Microservices)',
      category: 'Distributed Systems & Retrieval-Augmented Generation (RAG)',
      status: 'PRODUCTION READY & EMPIRICALLY BENCHMARKED',
      timeline: '2026 • Undergraduate Capstone Thesis (ULBI)',
      client: 'Enterprise Knowledge Management & Standard Operating Procedures (SOP)',
      role: 'Lead AI & Distributed Systems Architect (Author)',
      overview: 'ORION (Optimized Retrieval & Intelligent Operational Network) is an enterprise knowledge retrieval platform designed to transform dense, passive corporate SOPs into interactive, real-time verified intelligence. Engineered around a distributed 3-tier microservices architecture (Vue 3, CodeIgniter 4 API Gateway, and FastAPI AI Engine), ORION implements an asynchronous Parallel Search method combining BM25 lexical sparse search with ChromaDB dense vector semantic search, fused dynamically using the Reciprocal Rank Fusion (RRF) algorithm and synthesized via Groq Llama 3.1.',
      problem: 'In enterprise environments, standard operating procedures (SOPs), technical manuals, and corporate instructions are typically stored as passive, fragmented PDF archives. Traditional keyword-matching search engines are rigid and incapable of understanding semantic context, while standard "Vanilla" Large Language Models frequently suffer from severe hallucinations—generating plausibly worded but factually inaccurate internal policies without grounding. This gap triggers high operational latency and heavy administrative burdens on human resources and operations teams due to repetitive, unrecorded question escalations. Furthermore, enterprise document retrieval requires strict multi-divisional privacy (zero data leakage) to prevent unauthorized access across departments (e.g. Finance vs Engineering).',
      solution: 'Engineered a robust, decoupled distributed architecture incorporating parallel multi-algorithm retrieval, strict security governance, and empirical telemetry benchmarking:\n\n1. Distributed 3-Tier Microservices Architecture: Decoupled the computational workload into three specialized layers:\n   - Frontend Presentation Layer (Vue 3 + Tailwind CSS): Clean Glassmorphism Focus Workspace featuring streaming responses, collapsible Smart Citation side-drawers, and a dedicated Telemetry Benchmark sandbox.\n   - API Gateway & Authentication Layer (CodeIgniter 4): Manages enterprise route orchestration, session handling, and injects verified departmental metadata tokens into downstream requests.\n   - Artificial Intelligence & Analytics Engine (FastAPI + Python 3.11): Asynchronous high-throughput engine managing text ingestion, vector embeddings, dual retrieval pipelines, and Groq inference.\n\n2. Asynchronous Parallel Search Engine (Dual Retrieval): Instead of relying on a single retrieval modality, ORION concurrently dispatches queries to two distinct search engines:\n   - Sparse Retrieval (BM25): Probabilistic frequency-based lexical matching ensuring exact matches for specialized acronyms, policy clause codes, and regulatory numbers.\n   - Dense Retrieval (ChromaDB Vector Store): Cosine similarity search over high-dimensional vector embeddings, capturing contextual semantics and conceptual intent.\n\n3. Reciprocal Rank Fusion (RRF) Hybrid Scoring: Results from both retrieval streams are synthesized through the Reciprocal Rank Fusion algorithm (RRF = Σ 1 / (k + r(d))). By assigning reciprocal score weights based on relative document ranks, RRF eliminates score scale discrepancies between cosine distances and BM25 probabilities, yielding candidate documents with maximum combined relevance.\n\n4. Anti-Hallucination Grounding & Smart Citation: Retrieved candidate chunks are assembled into structured context guardrails and passed to Llama 3.1 running on ultra-fast Groq LPU hardware. Answers are generated with verifiable "Smart Citations" referencing specific source filenames and exact page numbers, eliminating hallucination risks.\n\n5. Multi-Divisional RBAC & Human-in-the-Loop (HITL): Vector collections enforce metadata isolation matching user session claims, achieving absolute zero data leakage across departments. Queries falling outside document confidence boundaries trigger an automated fallback escalation queue with Reinforcement Learning from Human Feedback (RLHF thumbs-up/down) recording.',
      architectureSteps: [
        { step: '01', title: 'Smart Chunking & Vector Ingestion', desc: 'PDF documents are parsed, divided into semantic chunks, vectorized into dense embeddings, and indexed into ChromaDB with divisional RBAC metadata.' },
        { step: '02', title: 'Concurrent Parallel Search Dispatch', desc: 'User query is dispatched asynchronously across two parallel streams: BM25 for exact lexical matching and ChromaDB for dense semantic similarity.' },
        { step: '03', title: 'Reciprocal Rank Fusion (RRF) Re-ranking', desc: 'Top candidate chunks from both retrieval pipelines are merged and re-scored via RRF to eliminate score calibration discrepancies.' },
        { step: '04', title: 'Llama 3.1 Inference via Groq Engine', desc: 'Synthesized context guardrails are submitted to Llama 3.1, generating narrative answers bounded strictly by retrieved internal regulations.' },
        { step: '05', title: 'Smart Citation & Telemetry Evaluation', desc: 'Response is delivered with verifiable page-level citations, recording latency metrics (566ms retrieval + 829ms generation) and user feedback.' }
      ],
      techStack: ['Python 3.11', 'FastAPI (Async)', 'ChromaDB (Vector DB)', 'Groq API (Llama 3.1)', 'BM25 Algorithm', 'Reciprocal Rank Fusion (RRF)', 'CodeIgniter 4 (Gateway)', 'Vue 3 / Tailwind CSS'],
      metrics: [
        { label: 'Total Computing Latency', value: '1.39s (vs 1.99s Vanilla)' },
        { label: 'Retrieval Time', value: '566ms (Parallel Stream)' },
        { label: 'Generation Time', value: '829ms (Groq Llama 3.1)' },
        { label: 'Hallucination Mitigation', value: 'Zero (Smart Citations)' }
      ]
    },
    chitose: {
      id: 'chitose',
      title: 'PT Chitose Internasional Tbk',
      tagline: 'Multi-Tier Dual-Database Supplier Performance Evaluation (SPE) & Cross-System SSO',
      category: 'Enterprise ERP & Dual-Database Systems',
      status: 'DEPLOYED IN ENTERPRISE',
      timeline: '2026 • Internship Capstone Project',
      client: 'PT Chitose Internasional Tbk (Leading Furniture Manufacturer)',
      role: 'Full-Stack Systems Engineer (D3 Informatics Internship)',
      overview: 'Architected and deployed a mission-critical Supplier Performance Evaluation (SPE) web application for PT Chitose Internasional Tbk. The platform bridges live enterprise SAP ERP with local transactional data warehouses using an isolated Dual-Database connection model, coupled with centralized Single Sign-On (SSO) and granular Role-Based Access Control (RBAC) across 4 inter-departmental evaluation workflows.',
      problem: 'Prior to digitalization, supplier evaluations across hundreds of raw material and component vendors were conducted manually through disparate paper sheets and spreadsheets across 4 separate divisions (Quality Control, PPIC, Purchasing/PCH, and HSE/K3). This fragmented process caused severe administrative bottlenecks—Purchasing had to wait weeks for paper-based submissions, calculation errors were frequent due to manual weighting, and there was zero real-time KPI visibility for executive management. Furthermore, granting open write access to the core SAP ERP production database posed fatal risks of table locking and operational disruption.',
      solution: 'Engineered a multi-tier enterprise architecture powered by CodeIgniter 4 and PHP 8.4 that resolves both the organizational bottleneck and database safety risks:\n\n1. Dual-Database Connection Architecture: Configured decoupled database connections in the application layer. The system executes strictly Read-Only queries to the production SAP SQL Server database for live logistics receipts and vendor master directories, while all transactional scoring and local statuses are isolated in a dedicated MySQL database warehouse. This completely eliminates write-locks and preserves the transactional throughput of the core ERP.\n\n2. Hybrid User-Driven Vendor Synchronization: Built an on-demand vendor synchronization service. Purchasing staff query live ERP vendor records, verify attributes on-screen, and selectively synchronize verified partners into the local evaluation lifecycle with active status controls.\n\n3. Centralized Enterprise SSO & Dynamic DOM Encapsulation: Integrated with the company’s central HRIS authentication portal. The security gateway validates employee sessions and translates departmental role attributes into secure JWT claims across four cross-functional divisions (Quality Control, PPIC, Purchasing, and HSE). On the client side, non-relevant forms are dynamically purged from the DOM tree, presenting each department with a focused, distraction-free input interface.\n\n4. Modular Multi-Criteria Computational Engine: Formulated backend algorithms that normalize Daily QC defect rates (acceptance vs reject volume), logistical delivery timeliness, purchasing pricing compliance, and HSE criteria into standardized scores, automatically issuing grades (A, B, C, D) and compiling monthly, semester, and annual KPI recaps.',
      architectureSteps: [
        { step: '01', title: 'Centralized SSO & JWT Tokenization', desc: 'User authenticates via the company HRIS portal; the security gateway resolves verified employee roles and issues secure tokens to the evaluation system.' },
        { step: '02', title: 'Dual-Database Decoupled Engine', desc: 'The application backend manages simultaneous decoupled connections: Read-Only queries to core ERP SAP and dedicated Read/Write storage on the local data warehouse.' },
        { step: '03', title: 'Hybrid User-Driven Vendor Sync', desc: 'Purchasing staff trigger on-demand vendor synchronization from live ERP directories into the local database for evaluation scheduling.' },
        { step: '04', title: 'Dynamic DOM Encapsulation & Daily Logging', desc: 'Frontend strips irrelevant department forms from the DOM tree based on RBAC; QC operators record daily incoming inspection batches.' },
        { step: '05', title: 'Multi-Criteria Scoring & Master Recap', desc: 'Automated computational algorithms calculate Total Scores and grades, updating executive KPI dashboards and generating monthly/annual master recaps.' }
      ],
      techStack: ['PHP 8.4', 'CodeIgniter 4', 'SAP ERP (SQL Server)', 'MySQL 8.0', 'HRIS SSO (JWT)', 'JavaScript (DOM Encapsulation)', 'Bootstrap 5', 'DBeaver'],
      metrics: [
        { label: 'Audit Compliance', value: '100%' },
        { label: 'Core SAP Write-Lock', value: '0 (Decoupled)' },
        { label: 'Divisions Unified', value: '4 Departments' },
        { label: 'Recap Automation', value: 'Monthly/Annual' }
      ]
    },
    'mbg-iot': {
      id: 'mbg-iot',
      title: 'MBG Decision Support System',
      tagline: 'Intelligent Decision Support System using Weighted Moving Average & Generative AI for Food Waste Minimization',
      category: 'Decision Support System & Applied Machine Learning',
      status: 'PRODUCTION PROTOTYPE & FIELD VALIDATED',
      timeline: '2025/2026 Academic Year • Capstone Project',
      client: 'Free Nutritious Meal (MBG) Central Kitchen - ULBI',
      role: 'Lead System Architect & Developer (Lutfi Candaka Kusumah & Ilham Diaz Aulia)',
      overview: 'Engineered a web-based Decision Support System (DSS) for the national Free Nutritious Meal (Makan Bergizi Gratis / MBG) program at Universitas Logistik dan Bisnis Internasional. The platform digitalizes weekly balanced meal planning adhering to the national "Isi Piringku" 5-slot guideline, applies a Weighted Moving Average (WMA, n=3) time-series forecasting model to detect student waste trends, and integrates Google Gemini Generative AI through an isolated service class to synthesize budget-aligned, waste-resistant recipe cycles.',
      problem: 'The national Free Nutritious Meal (MBG) program faces immense operational challenges in sustaining strict daily nutritional balance while minimizing food waste across hundreds of portions. At the ULBI MBG kitchen, waste recording was historically conducted on physical paper and wall whiteboards, causing lost records, data lag, and lack of predictive foresight. Kitchen nutritionists suffered from menu planning fatigue and repetitive dishes, while meals that students consistently rejected continued to be prepared due to the absence of an empirical early-warning mechanism.',
      solution: 'Architected and implemented an integrated web platform using Laravel MVC, MySQL/MariaDB, and Google Gemini API that transforms kitchen operations from reactive guessing into data-driven precision:\n\n1. 5-Slot "Isi Piringku" Standardized Tray Planner: Digitalized weekly menu formulation mapped directly to Indonesian health standards across 5 slots: Carbohydrates, Animal Protein, Plant-Based Protein, Vegetables, and Fruits/Milk, preventing nutritional deficits or portion skewing.\n\n2. Weighted Moving Average (WMA, n=3) Forecasting Engine: Unlike Simple Moving Average (SMA) which flattens historical volatility, WMA (n=3) assigns weighted priority to the most recent consumption cycles (w3=3, w2=2, w1=1). This makes the system hypersensitive to shifting student palates and detects emerging plate waste spikes.\n\n3. Automated "Zona Merah" Early Warning: When historical waste for any dish breaches predefined safety thresholds, the system flags it as "Zona Merah" (Red Zone Alert), automatically placing its ingredients into an active blacklist to prevent the kitchen from re-cooking high-waste meals.\n\n4. Isolated Gemini Generative AI Service Class: Built a dedicated Laravel Service Class (GeminiMenuService) that dynamically compiles kitchen budget parameters, nutritional slot requirements, and current "Zona Merah" blacklists into structured AI prompts. The Google Gemini API synthesizes creative, nutritious replacement recipes with precise ingredient breakdowns, acting as an intelligent co-pilot for nutritionists.\n\n5. Digital Plate Waste Ledger & Hardware Roadmap: Implemented daily tracking of pre-meal cooked weight vs post-meal waste per menu category, generating real-time audit curves and formulating edge integration architectures for next-generation microcontroller Smart Weighing Stations.',
      architectureSteps: [
        { step: '01', title: 'Daily Waste Logging & Ledger Entry', desc: 'Kitchen staff log initial cooked weight and post-meal returned plate waste per nutritional category into the centralized web ledger.' },
        { step: '02', title: 'WMA (n=3) Time-Series Trend Computation', desc: 'The system applies Weighted Moving Average equations (weights 3:2:1) across the last 3 evaluation periods to calculate consumption trajectories.' },
        { step: '03', title: 'Automated "Zona Merah" Threshold Classification', desc: 'Dishes exceeding permissible food waste boundaries are tagged with high-priority warnings and registered into the active exclusion matrix.' },
        { step: '04', title: 'Gemini Generative AI Recipe Synthesis', desc: 'Laravel Service Class dispatches nutritional guardrails, budget limits, and blacklists to Google Gemini API to formulate novel balanced meals.' },
        { step: '05', title: '5-Slot Tray Planner Scheduling', desc: 'Nutritionists evaluate AI recommendations, fine-tune portion grammars, and commit the weekly balanced meal plan to the production schedule.' }
      ],
      techStack: ['PHP 8.2+', 'Laravel (MVC)', 'Google Gemini AI API', 'MySQL / MariaDB', 'Weighted Moving Average (WMA)', 'Tailwind CSS', 'JavaScript (ES6+)'],
      metrics: [
        { label: 'Nutrition Slots', value: '5-Slot "Isi Piringku"' },
        { label: 'WMA Algorithm', value: 'Period n=3 (3:2:1)' },
        { label: 'Waste Alert', value: '"Zona Merah" Early Warning' },
        { label: 'Recipe Generation', value: 'Google Gemini AI' }
      ]
    }
  },
  id: {
    orion: {
      id: 'orion',
      title: 'ORION',
      tagline: 'Optimized Retrieval & Intelligent Operational Network (Paralel RAG Microservices)',
      category: 'Distributed Systems & Retrieval-Augmented Generation (RAG)',
      status: 'PRODUCTION READY & EMPIRICALLY BENCHMARKED',
      timeline: '2026 • Laporan Tugas Akhir D3 TI (ULBI)',
      client: 'Sistem Manajemen Pengetahuan & Standard Operating Procedure (SOP) Perusahaan',
      role: 'Lead AI & Distributed Systems Architect (Penulis)',
      overview: 'ORION (Optimized Retrieval & Intelligent Operational Network) adalah platform sistem temu kembali informasi enterprise yang mentransformasi dokumen SOP pasif menjadi basis pengetahuan interaktif dan tervalidasi secara real-time. Dibangun di atas arsitektur terdistribusi 3-tier microservices (Vue 3, CodeIgniter 4 API Gateway, dan FastAPI AI Engine), ORION menerapkan metode Paralel Search yang mengeksekusi pencarian leksikal BM25 dan pencarian semantik vektor ChromaDB secara serentak, digabungkan algoritma pemeringkat ulang Reciprocal Rank Fusion (RRF), serta disintesis via Large Language Model Llama 3.1 pada infrastruktur Groq.',
      problem: 'Pada ekosistem korporat skala besar, volume dokumen Standar Operasional Prosedur (SOP) dan instruksi kerja tersimpan pasif dalam format PDF yang masif dan terfragmentasi. Mesin pencari konvensional berbasis kata kunci kaku tidak mampu memahami konteks semantik dari pertanyaan karyawan, sementara model AI generatif mentah (Vanilla LLM) rentan mengalami halusinasi informasi—memberikan jawaban tebakan normatif yang tidak berdasar pada regulasi internal perusahaan. Kesenjangan ini menimbulkan tingginya latensi operasional dan membebani divisi HR dengan pertanyaan administratif yang berulang. Selain itu, sistem pencarian enterprise menuntut isolasi data multi-divisi yang ketat (zero data leakage) agar dokumen rahasia antar-divisi (misal: Finance vs Engineering) tidak bocor.',
      solution: 'Merancang dan membangun arsitektur terdistribusi berbasis microservices yang mengintegrasikan pemrosesan paralel multi-algoritma, tata kelola keamanan ketat, dan benchmark telemetri empiris:\n\n1. Arsitektur 3-Tier Microservices Terdistribusi: Memisahkan beban kerja komputasi ke dalam tiga lapisan modular:\n   - Lapisan Antarmuka Pengguna (Vue 3 + Tailwind CSS): Clean Glassmorphism Focus Workspace yang mendukung streaming jawaban naratif, laci rujukan dokumen (Smart Citation), dan mode pengujian performa Telemetry Benchmark Mode.\n   - Gerbang API & Autentikasi (CodeIgniter 4): Bertindak sebagai pengatur rute, validasi sesi login karyawan, dan injeksi metadata Role-Based Access Control (RBAC) pada setiap permintaan.\n   - Mesin Kecerdasan Buatan & Analitik (FastAPI + Python 3.11): Backend asinkron berkecepatan tinggi yang menangani ingesti dokumen, embedding vektor, eksekusi paralel RAG, dan inferensi Groq.\n\n2. Mesin Pencarian Paralel Asinkron (BM25 + Cosine Similarity): Alih-alih mengandalkan satu metode pencarian tunggal, ORION mengeksekusi kueri secara bersamaan ke dua mesin pencari:\n   - Sparse Retrieval (Algoritma BM25): Pencocokan leksikal berbasis probabilitas frekuensi untuk istilah eksak, singkatan teknis, dan nomor pasal regulasi.\n   - Dense Retrieval (Basis Data Vektor ChromaDB): Pencarian kemiripan semantik (Cosine Similarity) berbasis embeddings multidimensi untuk menangkap makna konteks alami kueri.\n\n3. Algoritma Pemeringkat Ulang Reciprocal Rank Fusion (RRF): Menggabungkan hasil pencarian leksikal dan semantik menggunakan rumus RRF (RRF = Σ 1 / (k + r(d))). RRF menyelaraskan disparitas skala antara skor jarak kosinus dan probabilitas BM25, menghasilkan daftar kandidat dokumen terpadu dengan akurasi relevansi terbaik.\n\n4. Anti-Halusinasi & Smart Citation: Dokumen hasil RRF dirangkai menjadi konteks pembatas ke Large Language Model (Llama 3.1 via Groq API). Jawaban naratif yang dihasilkan selalu disertai sitasi cerdas (Smart Citation) yang mencantumkan nama file dokumen rujukan lengkap dengan nomor halamannya secara presisi.\n\n5. Isolasi Keamanan RBAC & Human-in-the-Loop (HITL): Koleksi vektor menyaring metadata divisi pengguna secara absolut, menjamin zero data leakage antar-departemen. Jika kueri berada di luar jangkauan dokumen, sistem memicu mekanisme fallback eskalasi tiket ke Administrator serta merekam penilaian pengguna (RLHF thumbs-up/down) untuk evaluasi telemetri berkelanjutan.',
      architectureSteps: [
        { step: '01', title: 'Ingesti Cerdas & Embedding Vektor', desc: 'Dokumen PDF dipecah menjadi chunk semantik, divektorkan, dan diindeks ke koleksi ChromaDB lengkap dengan metadata divisi (RBAC).' },
        { step: '02', title: 'Eksekusi Paralel Search Asinkron', desc: 'Pertanyaan pengguna diproses bersamaan secara paralel ke Sparse Index BM25 (pencocokan istilah eksak) dan Dense Vector ChromaDB (makna semantik).' },
        { step: '03', title: 'Penggabungan Peringkat via RRF', desc: 'Algoritma Reciprocal Rank Fusion menggabungkan dan menyelaraskan peringkat potongan dokumen dari kedua stream pencarian tanpa bias skor mentah.' },
        { step: '04', title: 'Inferensi Llama 3.1 via Engine Groq', desc: 'Konteks dokumen terpilih dikirim bersama prompt ke model Llama 3.1 pada infrastruktur Groq, menyusun jawaban naratif yang terikat dokumen internal.' },
        { step: '05', title: 'Smart Citation & Telemetri Real-Time', desc: 'Sistem menyajikan jawaban lengkap dengan rujukan dokumen dan nomor halaman, merekam latensi pemrosesan (566ms retrieval + 829ms generasi AI).' }
      ],
      techStack: ['Python 3.11', 'FastAPI (Asinkron)', 'ChromaDB (Vector DB)', 'Groq API (Llama 3.1)', 'Algoritma BM25', 'Reciprocal Rank Fusion (RRF)', 'CodeIgniter 4 (Gateway)', 'Vue 3 / Tailwind CSS'],
      metrics: [
        { label: 'Total Waktu Komputasi', value: '1.39s (vs 1.99s Vanilla)' },
        { label: 'Waktu Retrieval', value: '566ms (Paralel Search)' },
        { label: 'Waktu Generasi AI', value: '829ms (Groq Llama 3.1)' },
        { label: 'Mitigasi Halusinasi', value: 'Zero (Smart Citations)' }
      ]
    },
    chitose: {
      id: 'chitose',
      title: 'PT Chitose Internasional Tbk',
      tagline: 'Arsitektur Multi-Tier Dual-Database Supplier Performance Evaluation & SSO Lintas Sistem',
      category: 'Enterprise ERP & Dual-Database Systems',
      status: 'DEPLOYED IN ENTERPRISE',
      timeline: '2026 • Proyek Akhir Magang (PKL)',
      client: 'PT Chitose Internasional Tbk (Industri Manufaktur Furniture Terkemuka, Cimahi / Bandung)',
      role: 'Full-Stack Systems Engineer (D3 Teknik Informatika ULBI)',
      overview: 'Merancang dan mengimplementasikan Sistem Informasi Supplier Performance Evaluation (SPE) berbasis web untuk PT Chitose Internasional Tbk. Sistem ini menjembatani core ERP SAP perusahaan dengan pangkalan data transaksi evaluasi lokal menggunakan arsitektur Dual-Database terisolasi, terintegrasi Single Sign-On (SSO) HRIS legacy, serta kontrol akses berbasis peran (RBAC) dinamis untuk menyatukan 4 divisi penilai.',
      problem: 'Sebelum implementasi sistem, proses evaluasi performa ratusan vendor material dan komponen berjalan manual menggunakan lembar kertas dan spreadsheet terpisah pada 4 departemen (Quality Control, PPIC, Purchasing/PCH, dan K3/HSE). Pola konvensional ini memicu bottleneck parah di divisi Purchasing yang harus menunggu rekapitulasi fisik berminggu-minggu, rawan kesalahan perhitungan formula bobot (human error), ketiadaan audit trail, dan manajemen tidak memiliki visibilitas KPI secara real-time. Di sisi lain, pemberian hak akses tulis langsung ke database produksi SAP dilarang keras karena risiko database lock-up dan potensi kerusakan integritas data transaksi operasional.',
      solution: 'Mengembangkan arsitektur multi-tier berbasis CodeIgniter 4 dan runtime PHP 8.4 yang mengurai bottleneck proses bisnis sekaligus menjamin keamanan database:\n\n1. Arsitektur Dual-Database Connection: Dikonfigurasi secara modular pada lapisan aplikasi. Sistem melakukan kueri baca-saja (read-only) ke database produksi SAP SQL Server untuk ekstraksi master vendor dan logistik penerimaan barang, sementara seluruh operasional baca-tulis penilaian diarahkan ke database MySQL lokal terisolasi. Pola ini mengeliminasi risiko write-lock dan menjaga stabilitas performa sistem ERP utama.\n\n2. Mekanisme Sinkronisasi Vendor Hibrida (User-Driven): Menyediakan layanan sinkronisasi vendor berbasis permintaan. Staf Purchasing dapat mencari data vendor live dari sistem ERP, memverifikasi atribut di layar, dan menyalin data ke database evaluasi lokal dengan parameter status aktif untuk siklus penilaian.\n\n3. Integrasi SSO HRIS & Enkapsulasi DOM Dinamis: Terhubung dengan portal autentikasi HRIS terpusat perusahaan. Gateway memvalidasi sesi aktif karyawan dan menerjemahkan wewenang divisi menjadi token peran aman untuk empat divisi penilai (Quality Control, PPIC, Purchasing, dan K3/HSE). Pada sisi antarmuka, elemen form divisi lain secara dinamis disingkirkan dari pohon DOM HTML untuk meminimalkan beban kognitif dan mencegah salah input.\n\n4. Mesin Kalkulasi Multi-Kriteria Modular: Menerjemahkan parameter matematis harian QC (persentase cacat/reject terhadap kuantitas terima), ketepatan pengiriman PPIC, kepatuhan harga PCH, dan standar K3 HSE menjadi skor terstandarisasi, menerbitkan grade vendor otomatis (A/B/C/D), serta menyusun Master Rekap bulanan, semesteran, hingga tahunan.',
      architectureSteps: [
        { step: '01', title: 'Autentikasi Terpusat SSO & Token Peran', desc: 'Pengguna login melalui portal HRIS terpusat; gateway membaca sesi aktif dan menerbitkan token otorisasi peran ke aplikasi evaluasi.' },
        { step: '02', title: 'Engine Kueri Dual-Database Terisolasi', desc: 'Backend mengelola koneksi ganda simultan: Read-Only ke SAP SQL Server untuk master logistik dan Read/Write ke MySQL lokal tanpa risiko write-lock.' },
        { step: '03', title: 'Sinkronisasi Vendor Hibrida (User-Driven)', desc: 'Staf Purchasing memicu sinkronisasi data vendor live dari ERP ke database lokal untuk siklus penilaian berkala.' },
        { step: '04', title: 'Enkapsulasi DOM & Input Harian Divisi', desc: 'Frontend menyingkirkan elemen form divisi lain dari pohon DOM; staf QC menginput data inspeksi mutu harian secara fokus.' },
        { step: '05', title: 'Kalkulasi Multi-Kriteria & Master Rekap', desc: 'Sistem mengalkulasi skor total dan grade vendor secara otomatis, memvisualisasikan dasbor KPI interaktif serta rekapitulasi berkala.' }
      ],
      techStack: ['PHP 8.4', 'CodeIgniter 4', 'SAP ERP (SQL Server)', 'MySQL 8.0', 'Gateway SSO HRIS (JWT)', 'JavaScript (Enkapsulasi DOM)', 'Bootstrap 5', 'DBeaver'],
      metrics: [
        { label: 'Integritas Audit', value: '100% Terpusat' },
        { label: 'Write-Lock SAP ERP', value: '0 (Terisolasi)' },
        { label: 'Integrasi Antar-Divisi', value: '4 Departemen' },
        { label: 'Kalkulasi Rekap', value: 'Otomatis' }
      ]
    },
    'mbg-iot': {
      id: 'mbg-iot',
      title: 'Sistem Rekomendasi Menu MBG (Makan Bergizi Gratis)',
      tagline: 'Sistem Pendukung Keputusan Perencanaan Menu Berbasis WMA & Generative AI untuk Minimalisasi Food Waste',
      category: 'Decision Support System & Applied Machine Learning',
      status: 'PRODUCTION PROTOTYPE & FIELD VALIDATED',
      timeline: 'Tahun Akademik 2025/2026 • Proyek Akhir TI II',
      client: 'Dapur Sentral Program MBG - Universitas Logistik dan Bisnis Internasional (ULBI)',
      role: 'Lead System Architect & Developer (Lutfi Candaka Kusumah & Ilham Diaz Aulia)',
      overview: 'Merancang dan membangun Sistem Pendukung Keputusan (DSS) berbasis web untuk program nasional Makan Bergizi Gratis (MBG) di Dapur Sentral ULBI. Sistem ini mendigitalkan perencanaan menu mingguan berbasis pedoman gizi nasional "Isi Piringku" (5 slot), menerapkan algoritma Weighted Moving Average (WMA, n=3) untuk mendeteksi tren sisa makanan, serta mengintegrasikan Google Gemini Generative AI melalui Service Class terisolasi untuk meracik variasi menu adaptif yang bergizi dan ramah anggaran.',
      problem: 'Implementasi program nasional Makan Bergizi Gratis (MBG) menghadapi kendala operasional dalam memastikan keseimbangan gizi harian siswa sekaligus mengendalikan sisa makanan (food waste) dari ratusan porsi baki. Di Dapur MBG ULBI, pencatatan limbah sebelumnya dilakukan manual menggunakan kertas dan mading dapur, memicu risiko data hilang, keterlambatan evaluasi (lagging), dan ketiadaan proyeksi prediktif. Ahli gizi dan pengelola dapur mengalami kelelahan perencanaan (menu fatigue) sehingga menu cenderung monoton, sementara hidangan yang tidak disukai siswa berulang kali dimasak kembali karena belum tersedianya indikator peringatan dini berbasis data empiris.',
      solution: 'Mengembangkan platform web terintegrasi berbasis Laravel MVC, MySQL/MariaDB, dan Google Gemini API yang mentransformasi manajemen dapur dari pola reaktif menjadi pengambilan keputusan presisi berbasis data:\n\n1. Tray Menu Planner 5-Slot Standar "Isi Piringku": Mengimplementasikan antarmuka perencanaan menu mingguan yang memetakan gizi seimbang secara ketat ke dalam 5 slot: Karbohidrat, Protein Hewani, Protein Nabati, Sayur, dan Buah/Susu guna mencegah ketimpangan gizi mikro maupun makro.\n\n2. Algoritma Weighted Moving Average (WMA, n=3): Berbeda dengan Simple Moving Average (SMA) yang meratakan semua data masa lalu, WMA (n=3) memberikan pembobotan prioritas lebih tinggi pada siklus konsumsi terbaru (w3=3, w2=2, w1=1). Pendekatan ini membuat sistem sangat responsif terhadap perubahan selera siswa dan fluktuasi daya terima makanan.\n\n3. Deteksi Peringatan Dini "Zona Merah": Ketika kalkulasi WMA sisa makanan suatu menu menyentuh atau melampaui ambang batas keamanan (safety threshold), sistem mengklasifikasikannya ke dalam panel "Zona Merah" (Perlu Perhatian) dan mendaftarkan bahan tersebut ke daftar hitam (blacklist) sementara agar tidak dimasak kembali.\n\n4. Service Class Google Gemini Generative AI Terisolasi: Membangun kelas layanan khusus (GeminiMenuService) pada backend Laravel yang mengompilasi parameter pagu anggaran dapur, kebutuhan gizi 5 slot, dan daftar bahan "Zona Merah" menjadi prompt rekayasa terstruktur. AI menghasilkan rekomendasi menu baru yang kreatif, variatif, dan tetap mematuhi pagu biaya operasional.\n\n5. Buku Besar Telemetri Limbah Digital & Roadmap Hardware: Mencatat perbandingan massa makanan awal sebelum didistribusikan terhadap sisa baki pengembalian, menghasilkan kurva tren real-time, serta merumuskan arsitektur integrasi stasiun penimbangan pintar (Smart Weighing Station) berbasis IoT untuk pengembangan masa depan.',
      architectureSteps: [
        { step: '01', title: 'Pencatatan Limbah Harian & Telemetri', desc: 'Petugas dapur menimbang dan mencatat berat sisa makanan pasca-konsumsi per kategori menu ke dalam buku besar digital terpusat.' },
        { step: '02', title: 'Komputasi Tren Deret Waktu WMA (n=3)', desc: 'Algoritma WMA memproses data historis 3 periode terakhir dengan bobot progresif (3:2:1) untuk memetakan kurva selera makan siswa.' },
        { step: '03', title: 'Klasifikasi Otomatis "Zona Merah"', desc: 'Menu yang melampaui ambang batas sisa makanan otomatis ditandai status peringatan dini dan dimasukkan ke daftar bahan yang harus dihindari.' },
        { step: '04', title: 'Sintesis Menu Cerdas via Gemini Gen-AI', desc: 'Service Class mengirimkan batasan pagu anggaran, standar 5 slot, dan blacklist bahan ke Google Gemini API untuk meracik variasi menu baru.' },
        { step: '05', title: 'Penguncian Jadwal 5-Slot Tray Planner', desc: 'Ahli gizi mengevaluasi proposal menu AI, menyelaraskan gramasi porsi, dan mengunci jadwal siklus menu mingguan ke jadwal operasional dapur.' }
      ],
      techStack: ['PHP 8.2+', 'Laravel (MVC)', 'Google Gemini AI API', 'MySQL / MariaDB', 'Weighted Moving Average (WMA)', 'Tailwind CSS', 'JavaScript (ES6+)'],
      metrics: [
        { label: 'Standar Gizi', value: '5-Slot "Isi Piringku"' },
        { label: 'Algoritma WMA', value: 'Periode n=3 (3:2:1)' },
        { label: 'Peringatan Dini', value: 'Deteksi "Zona Merah"' },
        { label: 'Peracik Menu AI', value: 'Google Gemini API' }
      ]
    }
  }
}

const currentProject = computed(() => {
  const id = route.params.id
  const dataset = caseStudiesData[currentLocale.value] || caseStudiesData.en
  return dataset[id] || {
    id: 'unknown',
    title: `Project: ${id}`,
    tagline: 'Enterprise System Case Study',
    category: 'Systems Architecture',
    status: 'ARCHIVE',
    timeline: 'Recent',
    overview: `Detailed technical architecture documentation for project ${id}.`,
    problem: 'Specifications are being indexed.',
    solution: 'Implemented using modular and resilient modern engineering practices.',
    architectureSteps: [],
    techStack: ['Linux', 'Docker', 'FastAPI'],
    metrics: [{ label: 'Status', value: 'Active' }]
  }
})

// Loading feedback simulation when changing case studies
watch(
  () => route.params.id,
  () => {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
    }, 280)
  }
)

const navigateToProject = (id) => {
  isLoading.value = true
  router.push(`/project/${id}`)
}
</script>

<template>
  <div class="pt-28 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
    
    <!-- Top Nav Back and Minimalist Language Switch -->
    <div class="mb-10 flex items-center justify-between">
      <router-link
        to="/"
        class="inline-flex items-center space-x-2 font-mono text-xs text-accent hover:text-accent-hover font-bold uppercase tracking-wider group"
      >
        <span class="transform group-hover:-translate-x-1 transition-transform">&larr;</span>
        <span>{{ currentLocale === 'id' ? 'Kembali ke Beranda' : 'Back to Base Station' }}</span>
      </router-link>

      <div class="flex items-center space-x-3">
        <!-- Minimalist In-Section Documentation Translate Switch -->
        <button
          @click="toggleLanguage"
          class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-accent/15 border border-white/10 hover:border-accent text-gray-300 hover:text-white font-mono text-[11px] tracking-wider transition-all duration-200 cursor-pointer group"
          :title="currentLocale === 'en' ? 'Ganti dokumentasi ke Bahasa Indonesia' : 'Switch documentation to English'"
        >
          <span class="text-accent text-[11px] group-hover:rotate-12 transition-transform">🌐</span>
          <span class="text-muted text-[10px]">DOCS:</span>
          <span :class="currentLocale === 'id' ? 'text-accent font-bold' : 'text-gray-400'">ID</span>
          <span class="text-white/20">/</span>
          <span :class="currentLocale === 'en' ? 'text-accent font-bold' : 'text-gray-400'">EN</span>
        </button>

        <span class="font-mono text-xs text-gray-500">
          SYS.ID // {{ currentProject.id }}
        </span>
      </div>
    </div>

    <!-- Loading State Indicator -->
    <div v-if="isLoading" class="glass-panel p-16 rounded-lg text-center space-y-4 my-12 animate-pulse">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p class="font-mono text-xs text-accent uppercase tracking-widest">
        // {{ currentLocale === 'id' ? 'MEMUAT TELEMETRI ARSITEKTUR...' : 'LOADING ARCHITECTURE TELEMETRY...' }}
      </p>
    </div>

    <!-- Main Content (when not loading) -->
    <div v-else class="space-y-12">
      
      <!-- Hero Header of Case Study -->
      <div class="glass-panel p-8 md:p-12 rounded-lg border border-white/15 relative tech-bracket">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span class="px-3 py-1 bg-accent/20 border border-accent text-accent font-mono text-xs uppercase font-bold rounded">
            {{ currentProject.category }}
          </span>
          <span class="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 font-mono text-xs uppercase rounded">
            {{ currentProject.status }}
          </span>
          <span class="text-xs font-mono text-gray-500">
            {{ currentProject.timeline }}
          </span>
        </div>

        <h1 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-white mb-4">
          {{ currentProject.title }}
        </h1>

        <p class="text-lg md:text-xl font-body text-gray-300 max-w-3xl leading-relaxed">
          {{ currentProject.tagline }}
        </p>

        <!-- Impact Metrics -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10 font-mono">
          <div
            v-for="metric in currentProject.metrics"
            :key="metric.label"
            class="p-4 bg-black/50 border border-white/5 rounded"
          >
            <div class="text-2xl md:text-3xl font-heading font-bold text-accent">{{ metric.value }}</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">{{ metric.label }}</div>
          </div>
        </div>
      </div>

      <!-- Executive Overview -->
      <section class="glass-panel p-8 rounded-lg border border-white/10 space-y-4">
        <h2 class="text-2xl font-heading font-bold uppercase text-white tracking-wider flex items-center space-x-2">
          <span class="text-accent font-mono text-base">//</span>
          <span>{{ currentLocale === 'id' ? 'Ringkasan Eksekutif' : 'Executive Overview' }}</span>
        </h2>
        <p class="text-gray-300 font-body leading-relaxed">
          {{ currentProject.overview }}
        </p>
      </section>

      <!-- Problem & Solution Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div class="glass-panel p-8 rounded-lg border border-white/10 space-y-4">
          <div class="flex items-center space-x-2 text-red-400 font-mono text-xs font-bold uppercase">
            <span>● {{ currentLocale === 'id' ? 'TANTANGAN & MASALAH' : 'THE CHALLENGE (MASALAH)' }}</span>
          </div>
          <h3 class="text-xl font-heading font-bold uppercase text-white">
            {{ currentLocale === 'id' ? 'Inti Masalah' : 'The Core Problem' }}
          </h3>
          <p class="text-gray-300 text-sm font-body leading-relaxed whitespace-pre-line">
            {{ currentProject.problem }}
          </p>
        </div>

        <div class="glass-panel p-8 rounded-lg border border-white/10 space-y-4">
          <div class="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-bold uppercase">
            <span>● {{ currentLocale === 'id' ? 'ARSITEKTUR & SOLUSI' : 'THE ARCHITECTURE (SOLUSI)' }}</span>
          </div>
          <h3 class="text-xl font-heading font-bold uppercase text-white">
            {{ currentLocale === 'id' ? 'Solusi Rekayasa Sistem' : 'The Engineered Solution' }}
          </h3>
          <p class="text-gray-300 text-sm font-body leading-relaxed whitespace-pre-line">
            {{ currentProject.solution }}
          </p>
        </div>

      </div>

      <!-- Architecture Pipeline Steps -->
      <section v-if="currentProject.architectureSteps.length > 0" class="glass-panel p-8 rounded-lg border border-white/10 space-y-6">
        <h2 class="text-2xl font-heading font-bold uppercase text-white tracking-wider flex items-center space-x-2">
          <span class="text-accent font-mono text-base">//</span>
          <span>{{ currentLocale === 'id' ? 'Alur Eksekusi Sistem' : 'System Execution Pipeline' }}</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          <div
            v-for="step in currentProject.architectureSteps"
            :key="step.step"
            class="p-5 bg-black/60 border border-white/10 rounded space-y-2 relative tech-bracket"
          >
            <div class="text-accent text-xs font-bold">{{ step.step }}. PIPELINE PHASE</div>
            <h4 class="text-base font-bold text-white uppercase">{{ step.title }}</h4>
            <p class="text-xs text-gray-400 font-sans leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Tech Stack Badges -->
      <section class="glass-panel p-8 rounded-lg border border-white/10 space-y-4">
        <h2 class="text-2xl font-heading font-bold uppercase text-white tracking-wider flex items-center space-x-2">
          <span class="text-accent font-mono text-base">//</span>
          <span>{{ currentLocale === 'id' ? 'Tech Stack Terapan' : 'Applied Tech Stack' }}</span>
        </h2>
        <div class="flex flex-wrap gap-2.5 pt-2">
          <span
            v-for="tech in currentProject.techStack"
            :key="tech"
            class="px-3.5 py-1.5 bg-white/[0.04] border border-white/15 rounded text-xs font-mono text-light"
          >
            {{ tech }}
          </span>
        </div>
      </section>

      <!-- Cross Project Switcher -->
      <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <span class="text-gray-400">
          {{ currentLocale === 'id' ? 'JELAJAHI SISTEM ARSENAL LAIN:' : 'EXPLORE OTHER ARSENAL SYSTEMS:' }}
        </span>
        <div class="flex space-x-3">
          <button
            v-if="currentProject.id !== 'orion'"
            @click="navigateToProject('orion')"
            class="px-3 py-1.5 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-300 hover:text-accent rounded transition-colors"
          >
            ORION (RAG) &rarr;
          </button>
          <button
            v-if="currentProject.id !== 'chitose'"
            @click="navigateToProject('chitose')"
            class="px-3 py-1.5 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-300 hover:text-accent rounded transition-colors"
          >
            PT Chitose Tbk &rarr;
          </button>
          <button
            v-if="currentProject.id !== 'mbg-iot'"
            @click="navigateToProject('mbg-iot')"
            class="px-3 py-1.5 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-300 hover:text-accent rounded transition-colors"
          >
            MBG Tracker &rarr;
          </button>
        </div>
      </div>

    </div>

  </div>
</template>
