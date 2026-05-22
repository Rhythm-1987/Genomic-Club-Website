/* ═══════════════════════════════════════════════════
   js/data.js  –  All site content / data arrays
   ═══════════════════════════════════════════════════ */

window.SITE_DATA = {

  activities: [
    {
      n: '01',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M12 2v20"/><path d="M4.93 4.93l14.14 14.14"/><path d="M19.07 4.93L4.93 19.07"/></svg>`,
      title: 'Genomics Foundations',
      desc: 'Learn the central dogma of molecular biology and how DNA code found in all living things impacts our world.',
    },
    {
      n: '02',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
      title: 'Applications of Genomics',
      desc: 'Explore diverse applications of genomics-based research and technologies across medical and agricultural fields.',
    },
    {
      n: '03',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>`,
      title: 'Cutting-Edge Techniques',
      desc: 'Discover the latest tools in genomics research — from CRISPR to next-generation sequencing platforms.',
    },
    {
      n: '04',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="4"/><path d="M2 12c0 4.418 4.477 8 10 8s10-3.582 10-8"/><path d="M2 12c0-4.418 4.477-8 10-8s10 3.582 10 8"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
      title: 'Human Genome Project',
      desc: "Understand this landmark project's impact on healthcare, evolution studies, and various scientific disciplines.",
    },
    {
      n: '05',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      title: 'Explore Your Favorite Species',
      desc: 'Research an animal or plant and create a presentation to share findings with the club community.',
    },
    {
      n: '06',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: 'DNA and Adaptations',
      desc: 'Discover how DNA sequences code for proteins, giving organisms unique adaptations for their survival.',
    },
    {
      n: '07',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      title: 'Disease Research Presentation',
      desc: 'Choose a disease to investigate and present your research findings through an engaging PowerPoint.',
    },
    {
      n: '08',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
      title: 'Microbes and Our World',
      desc: 'Explore the fascinating world of microorganisms and their profound impact on ecosystems and human life.',
    },
    {
      n: '09',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>`,
      title: 'Microbes and DNA',
      desc: 'Learn how DNA analysis provides clues to how microbes function and whether they are beneficial or harmful.',
    },
    {
      n: '10',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      title: 'Career Exploration',
      desc: 'Explore the diverse career pathways available in genomics technologies across industry and research sectors.',
    },
    {
      n: '11',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Ethical Debates',
      desc: 'Engage in group discussions and debates on current and potential ethical issues in genetics and genomics.',
    },
    {
      n: '12',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
      title: 'Industrial Visits',
      desc: 'Visit biotechnology and bioinformatics research centres for practical exposure and industry insights.',
    },
  ],

  benefits: [
    { n:'01', title:"Understand Genomics' Significance",  desc:'Grasp the significance and potential of genomics technologies and their diverse applications in modern science.' },
    { n:'02', title:'New Career Choices',                 desc:'Gain insight into the fast-evolving field of genomics and open up new career choices and prospects in biotech.' },
    { n:'03', title:'Professional Empowerment',           desc:'Feel empowered by gathering the information, knowledge, and skills required to achieve professional success.' },
    { n:'04', title:'Broaden Your Horizon',               desc:'Enrich your knowledge about new and improved genomics techniques through workshops, seminars, and activities.' },
    { n:'05', title:'Clinical Domain Knowledge',          desc:'Use genomic insights in the clinical domain to make informed choices about health issues affecting your family.' },
    { n:'06', title:'Practical Exposure & Networking',    desc:'Gain industry insights and networking opportunities, enhancing your career prospects in biotechnology.' },
  ],

  team: [
    { i:'YT', name:'Yug Trivedi',          g:'linear-gradient(135deg,#00e882,#006644)' },
    { i:'KK', name:'Khusi Kansara',         g:'linear-gradient(135deg,#00c47a,#004d30)' },
    { i:'BP', name:'Basanagowda Patil',     g:'linear-gradient(135deg,#009e62,#003d27)' },
    { i:'AZ', name:'Annie Jijo Zacharia',   g:'linear-gradient(135deg,#00e0a0,#005c3a)' },
    { i:'AM', name:'Aditi Mulchandani',     g:'linear-gradient(135deg,#00b870,#004428)' },
    { i:'SP', name:'Shivam Pandey',         g:'linear-gradient(135deg,#00d488,#004d30)' },
  ],
}
