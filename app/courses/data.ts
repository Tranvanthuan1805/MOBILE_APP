export interface Course {
  slug: string
  title: string
  tagline: string
  icon: string
  level: string
  levelTag: string
  cat: string
  lessons: number
  hours: number
  price: number
  oldPrice: number
  rating: number
  students: number
  badge?: string
  colors: [string, string]
  desc: string
  longDesc: string
  outcomes: string[]
  requirements: string[]
  curriculum: { title: string; lessons: { name: string; duration: string }[] }[]
}

export const COURSES: Course[] = [
  {
    slug: 'tao-tro-choi-html-voi-ai',
    title: 'Tạo trò chơi HTML với AI',
    tagline: 'Làm game thú vị, không cần kinh nghiệm lập trình!',
    icon: '🎮',
    level: 'Cơ bản',
    levelTag: 'tag-beginner',
    cat: 'Game Dev',
    lessons: 8,
    hours: 12,
    price: 299000,
    oldPrice: 599000,
    rating: 4.9,
    students: 320,
    colors: ['#22c55e', '#16a34a'],
    desc: 'Học cách sử dụng AI để tạo ra các trò chơi HTML thú vị từ đầu không cần kinh nghiệm.',
    longDesc: 'Bạn có bao giờ muốn tạo một trò chơi riêng nhưng không biết bắt đầu từ đâu? Khoá học này sẽ hướng dẫn bạn từng bước tạo ra các trò chơi HTML hoàn chỉnh bằng cách kết hợp với sức mạnh của AI. Từ game đơn giản như Snake, Flappy Bird đến các game phức tạp hơn — tất cả đều được AI hỗ trợ tạo ra nhanh chóng. Không cần biết lập trình trước, chỉ cần có ý tưởng và muốn học!',
    outcomes: [
      'Tạo được ít nhất 3 trò chơi HTML hoàn chỉnh',
      'Hiểu cơ bản về HTML, CSS và JavaScript',
      'Biết cách sử dụng AI (Claude, ChatGPT) để tạo game',
      'Deploy trò chơi lên internet để chia sẻ với bạn bè',
      'Biết cách tùy chỉnh và thêm tính năng cho game',
      'Tự tin tạo ra các dự án sáng tạo bằng AI',
    ],
    requirements: [
      'Có máy tính kết nối internet',
      'Không cần kinh nghiệm lập trình trước',
      'Có tài khoản AI miễn phí (hướng dẫn trong khóa)',
      'Tinh thần ham học hỏi và sáng tạo',
    ],
    curriculum: [
      {
        title: 'Module 1: Chuẩn bị & Công cụ AI',
        lessons: [
          { name: 'Giới thiệu khóa học và lộ trình học', duration: '15 phút' },
          { name: 'Cài đặt VS Code và các extension cần thiết', duration: '20 phút' },
          { name: 'Làm quen với Claude AI — Trợ thủ tạo game', duration: '25 phút' },
          { name: 'Prompt engineering cho game dev', duration: '30 phút' },
        ],
      },
      {
        title: 'Module 2: Game đầu tiên — Snake Game',
        lessons: [
          { name: 'Thiết kế ý tưởng và cấu trúc game', duration: '20 phút' },
          { name: 'Tạo Snake Game bằng AI từ A-Z', duration: '45 phút' },
          { name: 'Thêm hiệu ứng âm thanh và hình ảnh', duration: '30 phút' },
          { name: 'Deploy lên GitHub Pages', duration: '20 phút' },
        ],
      },
      {
        title: 'Module 3: Nâng cấp — Flappy Bird',
        lessons: [
          { name: 'Tạo Flappy Bird với AI', duration: '60 phút' },
          { name: 'Thêm bảng xếp hạng điểm số', duration: '30 phút' },
          { name: 'Responsive cho mobile', duration: '25 phút' },
        ],
      },
      {
        title: 'Module 4: Dự án cuối khóa',
        lessons: [
          { name: 'Tự tạo game theo ý tưởng cá nhân', duration: '90 phút' },
          { name: 'Code review và tối ưu với AI', duration: '30 phút' },
          { name: 'Chia sẻ và nhận feedback', duration: '20 phút' },
        ],
      },
    ],
  },
  {
    slug: 'lap-trinh-plugin-wordpress-voi-ai',
    title: 'Lập trình Plugin WordPress với AI',
    tagline: 'Tạo plugin WordPress chuyên nghiệp, bán kiếm tiền ngay!',
    icon: '🔌',
    level: 'Nâng cao',
    levelTag: 'tag-advanced',
    cat: 'WordPress',
    lessons: 10,
    hours: 18,
    price: 999000,
    oldPrice: 1999000,
    rating: 4.8,
    students: 185,
    badge: 'BESTSELLER',
    colors: ['#ef4444', '#f97316'],
    desc: 'Phát triển plugin WordPress chuyên nghiệp, tích hợp AI để tự động hóa các tác vụ.',
    longDesc: 'WordPress đang chạy hơn 40% website toàn cầu và nhu cầu plugin chất lượng luôn cao. Khoá học này dạy bạn cách phát triển plugin WordPress từ cơ bản đến nâng cao bằng cách tận dụng sức mạnh AI. Bạn sẽ học cách tạo plugin có tích hợp AI chatbot, form builder, SEO tool và nhiều loại plugin thương mại khác. Sau khoá học, bạn hoàn toàn có thể bán plugin trên CodeCanyon hoặc cung cấp dịch vụ phát triển plugin cho khách hàng.',
    outcomes: [
      'Tạo plugin WordPress hoàn chỉnh từ đầu đến cuối',
      'Tích hợp AI API (OpenAI, Claude) vào plugin',
      'Xây dựng admin panel đẹp và chuyên nghiệp',
      'Quản lý database với WordPress $wpdb',
      'Publish plugin lên WordPress.org hoặc bán trên CodeCanyon',
      'Debug và tối ưu hiệu suất plugin',
    ],
    requirements: [
      'Biết cơ bản về PHP (có thể học song song)',
      'Đã dùng WordPress qua',
      'Có hosting hoặc local server (XAMPP)',
      'Máy tính kết nối internet',
    ],
    curriculum: [
      {
        title: 'Module 1: Nền tảng Plugin WordPress',
        lessons: [
          { name: 'Kiến trúc WordPress và Hook System', duration: '30 phút' },
          { name: 'Tạo plugin skeleton với AI', duration: '25 phút' },
          { name: 'Actions, Filters và Custom Post Types', duration: '40 phút' },
          { name: 'Shortcode và Widget development', duration: '35 phút' },
        ],
      },
      {
        title: 'Module 2: Plugin AI Chatbot',
        lessons: [
          { name: 'Tích hợp OpenAI API vào WordPress', duration: '45 phút' },
          { name: 'Xây dựng giao diện chat với AI', duration: '50 phút' },
          { name: 'Lưu lịch sử chat vào database', duration: '30 phút' },
          { name: 'Tùy chỉnh theo ngữ cảnh website', duration: '25 phút' },
        ],
      },
      {
        title: 'Module 3: Plugin Form Builder',
        lessons: [
          { name: 'Drag & drop form builder cơ bản', duration: '60 phút' },
          { name: 'Validation và gửi email tự động', duration: '35 phút' },
          { name: 'Dashboard báo cáo form submission', duration: '30 phút' },
        ],
      },
      {
        title: 'Module 4: Thương mại hóa plugin',
        lessons: [
          { name: 'Licensing và Freemium model', duration: '25 phút' },
          { name: 'Submit lên WordPress.org', duration: '20 phút' },
          { name: 'Marketing và bán plugin', duration: '30 phút' },
        ],
      },
    ],
  },
  {
    slug: 'lap-trinh-web-chuyen-sau-voi-ai',
    title: 'Lập trình Web chuyên sâu với AI',
    tagline: 'Full-stack web developer trong 3 tháng bằng AI!',
    icon: '🌐',
    level: 'Nâng cao',
    levelTag: 'tag-advanced',
    cat: 'Full-stack',
    lessons: 36,
    hours: 60,
    price: 3990000,
    oldPrice: 7990000,
    rating: 5.0,
    students: 92,
    badge: 'HOT',
    colors: ['#8b5cf6', '#3b82f6'],
    desc: 'Toàn diện từ HTML/CSS đến React, NodeJS. Xây dựng ứng dụng thực tế với AI cực kỳ mạnh mẽ.',
    longDesc: 'Đây là khóa học full-stack toàn diện nhất, được thiết kế để đưa bạn từ người mới hoàn toàn đến một lập trình viên web chuyên nghiệp trong vòng 3 tháng. Với sự hỗ trợ của AI, tốc độ học của bạn sẽ được tăng tốc gấp 3-5 lần. Bạn sẽ xây dựng 5+ dự án thực tế bao gồm: e-commerce, social app, SaaS dashboard, REST API và deploy lên production. Khóa học bao gồm mentoring 1-1 và hỗ trợ trong group Zalo suốt thời gian học.',
    outcomes: [
      'Master HTML, CSS, JavaScript từ cơ bản đến nâng cao',
      'Xây dựng UI với React và Next.js 14',
      'Phát triển backend với Node.js và Express',
      'Thiết kế database với PostgreSQL và MongoDB',
      'Tích hợp AI API vào ứng dụng thực tế',
      'Deploy ứng dụng lên Vercel, Railway, VPS',
      'Xây dựng 5+ dự án thực tế trong portfolio',
      'Kỹ năng freelance và làm việc với khách hàng',
    ],
    requirements: [
      'Có máy tính (không cần cấu hình cao)',
      'Không cần kinh nghiệm lập trình trước',
      'Cam kết học 2-3 giờ/ngày',
      'Tinh thần kiên trì và ham học hỏi',
    ],
    curriculum: [
      {
        title: 'Giai đoạn 1: Frontend cơ bản (Tuần 1-2)',
        lessons: [
          { name: 'HTML5 & Semantic Markup với AI', duration: '3 giờ' },
          { name: 'CSS3 & Responsive Design', duration: '4 giờ' },
          { name: 'Flexbox & Grid Layout', duration: '3 giờ' },
          { name: 'Tailwind CSS — Style nhanh như chớp', duration: '4 giờ' },
        ],
      },
      {
        title: 'Giai đoạn 2: JavaScript & React (Tuần 3-4)',
        lessons: [
          { name: 'JavaScript ES6+ từ cơ bản đến nâng cao', duration: '6 giờ' },
          { name: 'React 18 — Component, Hooks, State', duration: '8 giờ' },
          { name: 'Next.js 14 — App Router, SSR, SSG', duration: '6 giờ' },
          { name: 'Dự án 1: Portfolio website', duration: '5 giờ' },
        ],
      },
      {
        title: 'Giai đoạn 3: Backend & Database (Tuần 5-8)',
        lessons: [
          { name: 'Node.js & Express REST API', duration: '8 giờ' },
          { name: 'PostgreSQL & Prisma ORM', duration: '6 giờ' },
          { name: 'Authentication & JWT', duration: '4 giờ' },
          { name: 'Dự án 2: E-commerce app', duration: '10 giờ' },
        ],
      },
      {
        title: 'Giai đoạn 4: AI Integration & Deploy (Tuần 9-12)',
        lessons: [
          { name: 'Tích hợp AI API (Claude, GPT, Gemini)', duration: '6 giờ' },
          { name: 'Deploy lên Vercel & Railway', duration: '3 giờ' },
          { name: 'Dự án 3: SaaS AI App', duration: '12 giờ' },
          { name: 'Portfolio & Job hunting', duration: '3 giờ' },
        ],
      },
    ],
  },
  {
    slug: 'tao-website-wordpress-voi-ai-tu-a-z',
    title: 'Tạo Website WordPress với AI từ A-Z',
    tagline: 'Website chuyên nghiệp trong 1 ngày, không cần code!',
    icon: '💻',
    level: 'Cơ bản',
    levelTag: 'tag-beginner',
    cat: 'WordPress',
    lessons: 12,
    hours: 15,
    price: 999000,
    oldPrice: 1499000,
    rating: 4.7,
    students: 410,
    colors: ['#3b82f6', '#06b6d4'],
    desc: 'Học xây dựng website hoàn chỉnh bằng AI, từ thiết kế đến deploy. Dành cho người mới.',
    longDesc: 'WordPress là nền tảng website phổ biến nhất thế giới và với sự hỗ trợ của AI, bạn có thể tạo ra website chuyên nghiệp chỉ trong 1 ngày mà không cần biết lập trình. Khoá học hướng dẫn đầy đủ từ mua hosting, cài WordPress, chọn theme, cài plugin, thiết kế giao diện với AI, viết nội dung bằng AI, đến tối ưu SEO và bảo mật. Phù hợp với doanh nghiệp nhỏ, freelancer và người muốn có website cá nhân chuyên nghiệp.',
    outcomes: [
      'Tự tạo website WordPress chuyên nghiệp từ đầu',
      'Thiết kế giao diện đẹp bằng Elementor + AI',
      'Viết nội dung website bằng AI nhanh gấp 10 lần',
      'Cài đặt plugin SEO và tối ưu Google ranking',
      'Bảo mật và backup website đúng cách',
      'Kết nối tên miền và hosting',
      'Tạo shop bán hàng online với WooCommerce',
    ],
    requirements: [
      'Không cần kinh nghiệm lập trình hay thiết kế',
      'Có thể cần chi phí hosting (~100-200k/tháng)',
      'Máy tính kết nối internet',
      'Tinh thần muốn tự làm website',
    ],
    curriculum: [
      {
        title: 'Module 1: Nền tảng WordPress',
        lessons: [
          { name: 'Domain, Hosting và cài WordPress', duration: '30 phút' },
          { name: 'Dashboard WordPress — Làm quen hệ thống', duration: '25 phút' },
          { name: 'Theme và Plugin — Chọn đúng cho dự án', duration: '30 phút' },
          { name: 'Bảo mật cơ bản ngay từ đầu', duration: '20 phút' },
        ],
      },
      {
        title: 'Module 2: Thiết kế với Elementor + AI',
        lessons: [
          { name: 'Elementor Page Builder từ A-Z', duration: '60 phút' },
          { name: 'Tạo giao diện Homepage với AI', duration: '45 phút' },
          { name: 'Trang About, Contact, Blog', duration: '40 phút' },
          { name: 'Responsive cho mobile & tablet', duration: '25 phút' },
        ],
      },
      {
        title: 'Module 3: Nội dung & SEO bằng AI',
        lessons: [
          { name: 'Viết bài blog chuẩn SEO với AI', duration: '35 phút' },
          { name: 'Tạo hình ảnh bằng AI cho website', duration: '30 phút' },
          { name: 'Cài Yoast SEO và tối ưu on-page', duration: '30 phút' },
          { name: 'Google Analytics và Search Console', duration: '25 phút' },
        ],
      },
      {
        title: 'Module 4: WooCommerce Shop Online',
        lessons: [
          { name: 'Cài đặt và cấu hình WooCommerce', duration: '40 phút' },
          { name: 'Thêm sản phẩm và quản lý đơn hàng', duration: '30 phút' },
          { name: 'Thanh toán MoMo, VNPay, COD', duration: '25 phút' },
        ],
      },
    ],
  },
  {
    slug: 'tao-extensions-chrome-voi-ai',
    title: 'Tạo Extensions Chrome với AI',
    tagline: 'Xây dựng tiện ích Chrome và kiếm tiền từ nó!',
    icon: '🧩',
    level: 'Trung cấp',
    levelTag: 'tag-intermediate',
    cat: 'Extension',
    lessons: 8,
    hours: 14,
    price: 799000,
    oldPrice: 1199000,
    rating: 4.8,
    students: 230,
    colors: ['#f59e0b', '#f97316'],
    desc: 'Xây dựng tiện ích mở rộng Chrome thực tế, tích hợp AI để nâng cao trải nghiệm người dùng.',
    longDesc: 'Chrome Extension là một trong những cách nhanh nhất để tạo ra sản phẩm phần mềm có thể bán ngay. Có hàng triệu người dùng Chrome đang tìm kiếm các tiện ích hữu ích mỗi ngày. Khoá học này hướng dẫn bạn từ cách tạo extension cơ bản đến publish lên Chrome Web Store, tích hợp AI để tạo ra các tính năng thông minh như tóm tắt trang, dịch ngôn ngữ, chatbot sidebar và nhiều hơn nữa.',
    outcomes: [
      'Hiểu kiến trúc Chrome Extension (Manifest V3)',
      'Tạo popup, background service worker, content script',
      'Tích hợp AI API để thêm tính năng thông minh',
      'Publish extension lên Chrome Web Store',
      'Monetize extension bằng subscription hoặc freemium',
      'Debug và tối ưu hiệu suất extension',
    ],
    requirements: [
      'Biết cơ bản HTML, CSS, JavaScript',
      'Máy tính kết nối internet có Chrome',
      'Tài khoản Google (để publish)',
      'Phí publish Chrome Web Store: 5 USD (một lần)',
    ],
    curriculum: [
      {
        title: 'Module 1: Extension Fundamentals',
        lessons: [
          { name: 'Chrome Extension Architecture & Manifest V3', duration: '30 phút' },
          { name: 'Popup, Background & Content Scripts', duration: '40 phút' },
          { name: 'Chrome APIs: Storage, Tabs, Messaging', duration: '35 phút' },
          { name: 'Debug extension trong Chrome DevTools', duration: '20 phút' },
        ],
      },
      {
        title: 'Module 2: Extension AI Summarizer',
        lessons: [
          { name: 'Đọc nội dung trang web với Content Script', duration: '35 phút' },
          { name: 'Gửi đến Claude API và nhận tóm tắt', duration: '40 phút' },
          { name: 'Hiển thị popup đẹp với kết quả AI', duration: '30 phút' },
          { name: 'Lưu lịch sử tóm tắt với Chrome Storage', duration: '20 phút' },
        ],
      },
      {
        title: 'Module 3: Publish & Monetize',
        lessons: [
          { name: 'Chuẩn bị store listing và screenshots', duration: '25 phút' },
          { name: 'Submit và review process', duration: '20 phút' },
          { name: 'Tích hợp Stripe cho subscription', duration: '35 phút' },
          { name: 'Marketing extension để có users', duration: '25 phút' },
        ],
      },
    ],
  },
  {
    slug: 'chatbot-ai-voi-python-gpt',
    title: 'Chatbot AI với Python & GPT',
    tagline: 'Build chatbot thông minh, deploy production ngay!',
    icon: '🤖',
    level: 'Trung cấp',
    levelTag: 'tag-intermediate',
    cat: 'AI/ML',
    lessons: 15,
    hours: 20,
    price: 1499000,
    oldPrice: 2499000,
    rating: 4.9,
    students: 167,
    badge: 'MỚI',
    colors: ['#06b6d4', '#8b5cf6'],
    desc: 'Xây dựng chatbot thông minh từ đầu bằng Python kết hợp API OpenAI. Deploy lên production.',
    longDesc: 'Chatbot AI đang được ứng dụng rộng rãi trong doanh nghiệp để tự động hóa chăm sóc khách hàng, tư vấn sản phẩm và nhiều tác vụ khác. Khoá học này dạy bạn xây dựng chatbot hoàn chỉnh với Python — từ chatbot đơn giản đến hệ thống RAG (Retrieval Augmented Generation) cho phép chatbot trả lời dựa trên tài liệu riêng của doanh nghiệp. Bạn sẽ deploy chatbot lên production và có thể bán dịch vụ ngay sau khóa học.',
    outcomes: [
      'Master Python cho AI development',
      'Tích hợp OpenAI, Claude API vào ứng dụng',
      'Xây dựng hệ thống RAG với Vector Database',
      'Tạo giao diện chat web với FastAPI + React',
      'Deploy chatbot lên VPS, Railway hoặc AWS',
      'Tối ưu chi phí API và caching thông minh',
      'Bán chatbot service cho doanh nghiệp',
    ],
    requirements: [
      'Biết cơ bản Python (list, dict, function)',
      'Máy tính kết nối internet',
      'Tài khoản OpenAI (có free tier)',
      'Tinh thần muốn xây dựng sản phẩm AI thực tế',
    ],
    curriculum: [
      {
        title: 'Module 1: Python & AI APIs',
        lessons: [
          { name: 'Python nhanh cho AI — Syntax cần biết', duration: '45 phút' },
          { name: 'OpenAI API — Chat, Functions, Streaming', duration: '50 phút' },
          { name: 'Claude API — So sánh và khi nào dùng', duration: '35 phút' },
          { name: 'Prompt Engineering chuyên sâu', duration: '40 phút' },
        ],
      },
      {
        title: 'Module 2: Chatbot cơ bản',
        lessons: [
          { name: 'Chatbot terminal đầu tiên', duration: '30 phút' },
          { name: 'Quản lý conversation history', duration: '35 phút' },
          { name: 'System prompt và persona design', duration: '30 phút' },
          { name: 'FastAPI — Tạo chatbot API backend', duration: '50 phút' },
        ],
      },
      {
        title: 'Module 3: RAG System',
        lessons: [
          { name: 'Vector Database với ChromaDB', duration: '45 phút' },
          { name: 'Document processing và embedding', duration: '40 phút' },
          { name: 'RAG pipeline hoàn chỉnh', duration: '60 phút' },
          { name: 'Chatbot "biết" về tài liệu doanh nghiệp', duration: '50 phút' },
        ],
      },
      {
        title: 'Module 4: Deploy & Kinh doanh',
        lessons: [
          { name: 'Docker và deploy lên Railway', duration: '40 phút' },
          { name: 'Monitoring và error tracking', duration: '25 phút' },
          { name: 'Tối ưu chi phí API', duration: '20 phút' },
          { name: 'Pitch và bán chatbot cho doanh nghiệp', duration: '35 phút' },
        ],
      },
    ],
  },
]

export function getCourseBySlug(slug: string) {
  return COURSES.find((c) => c.slug === slug) ?? null
}
