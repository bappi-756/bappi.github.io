// Add skeleton loader handling at the top of the file
document.addEventListener('DOMContentLoaded', () => {
    const skeletonLoader = document.querySelector('.skeleton-loader');
    const connectionMessage = document.querySelector('.connection-message');
    
    // Check if the page is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            skeletonLoader.classList.add('hidden');
        }, 500);
    });
    
    // Handle slow connection
    const connectionTimeout = setTimeout(() => {
        connectionMessage.classList.add('show');
    }, 3000); // Show slow connection message after 3 seconds
    
    window.addEventListener('load', () => {
        clearTimeout(connectionTimeout);
    });
    
    // Listen for online/offline events
    window.addEventListener('offline', () => {
        skeletonLoader.classList.remove('hidden');
        connectionMessage.textContent = 'Internet connection lost. Reconnecting...';
        connectionMessage.classList.add('show');
    });
    
    window.addEventListener('online', () => {
        // If coming back online, allow some time for resources to load
        connectionMessage.textContent = 'Internet connection restored. Loading...';
        setTimeout(() => {
            skeletonLoader.classList.add('hidden');
        }, 1500);
    });
});

var typed = new Typed(".typewriter-text",
    {
        strings: [" ",
            "Student",
            "Web Developer",
        ],
        typeSpeed: 100,
        backSpeed: 70,
        loop:true
        
    }
)

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


        // Website information object
        const websiteInfo = {
            name: "Bappi",
            fullName: "Bappi Bhadro",
            occupation: "Web app Developer & university student",
            location: "Dhaka, Dania 1236",
            email: "tunetor22@gmail.com",
            whatsapp: "+88 01540625776",
            mobilenumber: "+88 01540625776",
			
            education: {
                hsc: {
                    degree: "HSC",
                    institute: "Govt. Tolaram College",
                    passyear: "2024",
                    board: "Dhaka",
                    group: "Science"
                },
                ssc: {
                    degree: "SSC",
                    institute: "A K School And College",
                    passyear: "2022",
                    board: "Dhaka",
                    group: "Science"
                },
				And: {
                  Now: "currently a university student"
                }
            },
            skills: [
                "HTML5", "CSS3", "JavaScript", "PHP",
                "Responsive Design",
                "Mysql","Laravel","Sql",
                "Web app Development"
            ],
			Make: [
                "I am artificial intelligence assistant. trained by Xexis. My name is BIO assistant.",
            ],
relationshipStatus: [
    "I am currently single and unmarried, focusing on my career and personal growth."
],
height: [
    "I'm 5 feet 8 inches tall."
],
nationality: [
    "I'm Bangladeshi, and proud to be part of such a rich culture and heritage."
],
selfDescription: [
    "I'm a dedicated and driven individual, passionate about technology and design. My focus is on growing my company, Xexis, and developing creative projects that make a difference."
],
computerSkills: [
    "I am proficient in Microsoft Word and PowerPoint, with basic skills in Excel. Additionally, I am experienced with Canva, which I use for creating banner images and advertisements."
],
operatingSystems: [
    "I am familiar with Windows XP, 7, and 8, which allows me to adapt to various system environments easily."
],
languageProficiency: [
    "I am fluent in Bangla and have a good command of English, both spoken and written. This proficiency allows me to communicate effectively in diverse settings."
],
workEthic: [
    "I am hardworking, honest, and straightforward. I approach every project with dedication, ensuring that I meet or exceed expectations."
],
strengthsTeamMember: [
    "My strengths include adaptability, effective communication, and a collaborative spirit. I value teamwork and believe that shared efforts lead to greater success."
],
educationPreparation: [
    "My education in science has fostered a logical approach to problem-solving, which is essential in web development and design. It has equipped me with foundational knowledge that I build on with self-learning in HTML, CSS, and JavaScript."
],
motivation: [
    "I am driven by a desire to continuously learn and improve. Each challenge is an opportunity to grow, and I am dedicated to making the most of every experience."
],
careerObjectives: [
    "I aim to pursue a career that offers challenges and opportunities for professional growth. My focus is on a role that allows me to apply my skills creatively while contributing to long-term organizational success."
],
aboutyou: [
"I am artificial intelligence assistant. trained by Xexis. My name is BIO assistant.",
],
BIO: [
"BIO is the first artificial intelligence developed by Midnight Studio(Xexis Sub-company), designed to assist users with creativity, organization, and productivity. This innovative AI leverages advanced algorithms to provide personalized support, streamlining tasks and enhancing user experiences across various applications.",
],
CloryMDB: [
"CloryMDB(CMDB) is the Movie site developed by Midnight Studio(use BIO AI).",
],
midnightstudio: [
"Midnight Studio is a dedicated sub-studio of Xexis, focused on pioneering AI technologies and digital solutions. With a team of skilled professionals, Midnight Studio aims to push the boundaries of innovation, creating cutting-edge tools that empower users and elevate their creative processes.",
],
companyOwnership: [
    "Xexis and its sub-studio, Midnight Studio, are both owned by Bappi. I am passionate about combining design and technology to create innovative solutions that meet client needs."
],
inspirationForXexis: [
    "I founded Xexis to bring together my love for design and technology. My goal is to create impactful digital solutions that help businesses thrive in a competitive market while pushing the boundaries of what's possible in design and AI."
],
influenceOfDhaka: [
    "Being based in Dhaka, Dania allows me to tap into a vibrant creative community and a growing tech scene. This environment fosters collaboration and innovation, enabling me to stay connected with industry trends and client needs."
],
roleOfMidnightStudio: [
    "Midnight Studio serves as the innovative arm of Xexis, focusing specifically on the development of AI technologies like BIO. This allows us to explore new frontiers in digital solutions and enhance the services we offer to clients."
],
	Whychoosemeyou: [
    "Choose me for innovative, detail-oriented design solutions that blend aesthetics with functionality. My dedication to precision and creativity ensures every project is unique, effective, and tailored to your needs.",
    ],
		Whatdesignapproachunique: [
    "My design approach combines precision and innovation. I focus on understanding each client's unique vision and goals, creating designs that are both visually captivating and functional. This ensures that my work stands out while effectively serving the client's needs.",
    ],
approachResponsive: [
    "I prioritize responsive design in every project to ensure a seamless experience on all devices. By leveraging CSS frameworks and responsive layouts, I make sure that your website maintains its appeal and usability, whether it's viewed on a smartphone, tablet, or desktop.",
],
creativityBalanceClient: [
    "I listen closely to client goals and vision before beginning any project. My aim is to weave creativity with functionality to ensure the design reflects your brand and resonates with your target audience. Open communication helps me incorporate feedback while pushing for innovative solutions.",
],
enhanceUX: [
    "I apply UX design principles such as intuitive navigation, clear call-to-actions, and accessible layouts. Each design decision is guided by the user's perspective to create an enjoyable and engaging experience that keeps users coming back.",
],
handleChallenges: [
    "I approach technical challenges as opportunities to innovate. My strong foundation in HTML, CSS, JavaScript, and PHP helps me troubleshoot and develop effective solutions, no matter how complex the project requirements are.",
],
workWithBranding: [
    "I am flexible and can work with existing brand guidelines to ensure consistency, or I can create designs from scratch for a fresh look. My goal is to reflect your brand's identity while introducing elements that enhance its appeal.",
],
ensureClientSatisfaction: [
    "Client satisfaction is my top priority. I keep clients informed at every stage of the project and welcome feedback to ensure alignment with your vision. I also offer post-project support and revisions to address any last-minute changes or additions.",
],

recentProjects: [
    "BIO: An artificial intelligence assistant developed to enhance creativity and productivity for businesses.",
    "Clory MDB: A comprehensive movie database where users can find detailed information about any film, enhancing the user experience for film enthusiasts."
],
toolsUsed: [
    "I use a variety of tools, including Adobe Creative Suite (Canva), Figma, Visual Studio Code, and Sublime code for version control. These tools allow me to create, iterate, and maintain high-quality designs efficiently.",
],
experience: [
    "I've been honing my skills in design and development for several years, combining technical expertise with creativity to create unique, impactful digital solutions."
],
pastProjectsExamples: [
    "Certainly! My recent projects include BIO, an AI assistant for creative professionals, and Clory MDB, a movie database website with a sleek and accessible design. Each project showcases my commitment to both aesthetics and functionality."
],
designProcess: [
    "My process begins with understanding your goals and audience. I then move on to brainstorming and wireframing, followed by design and development. I share drafts and revisions for feedback to ensure the project aligns with your vision, finishing with quality assurance checks to make sure everything works smoothly."
],
revisionsFeedback: [
    "Revisions are part of the creative process, and I welcome feedback at each stage. This collaborative approach helps me capture your vision accurately, and I offer a set number of revisions to fine-tune the design to your satisfaction."
],
websiteSecurity: [
    "Website security is a priority in every project. I use best practices such as HTTPS protocols, secure PHP coding, and regular updates. I also recommend implementing additional security measures, like two-factor authentication and regular backups, for long-term protection."
],
optimizePerformance: [
    "I optimize code and assets, utilize caching, and implement lazy loading for images. I also test website performance across various platforms to ensure fast load times, which enhances user experience and SEO ranking."
],
mobileFriendlyDesigns: [
    "Yes, mobile responsiveness is a key part of my design approach. I make sure each website is optimized for mobile and tablet users, providing a seamless experience across all devices."
],
communicationFrequency: [
    "I provide regular updates on the project's progress, typically on a weekly basis or as needed. Open communication is important to me, so I'm always available to discuss ideas or address concerns along the way."
],
contactMethod: [
    "You can reach me via email at tunetor22@gmail.com, and I strive to respond within 24 hours. I'm also open to other communication platforms if preferred for more frequent check-ins."
],
expertiseInLanguages: [
    "I have a strong command of HTML, CSS, JavaScript, and PHP, with years of experience creating interactive, functional websites. My expertise allows me to integrate these languages effectively to deliver robust and visually appealing solutions."
],
keepUpWithTrends: [
    "I regularly take online courses, participate in design communities, and experiment with new tools. This helps me stay updated with the latest trends and techniques, ensuring that my designs are both modern and effective."
],
pricingStructure: [
    "My pricing is based on the scope of the project, the time required, and the complexity involved. I offer transparent quotes and work with clients to find a solution that meets their budget while maintaining quality."
],
projectTimeline: [
    "The timeline varies depending on the project's complexity and client feedback. Generally, smaller projects take a few weeks, while larger ones may take a few months. I work efficiently to ensure timely delivery without compromising quality."
],
hiddenCosts: [
    "No hidden costs! I provide a clear project proposal with detailed pricing, so you know exactly what to expect. Any additional costs will only arise if there are extra features or revisions requested beyond the original scope."
],
ongoingMaintenance: [
    "Yes, I offer maintenance and support services to ensure your website runs smoothly after launch. Whether it's updates, troubleshooting, or adding new features, I'm here to help keep your website in top condition."
],
additionalChanges: [
    "I'm available to assist with additional changes after project completion. We can discuss the scope and pricing of any future updates or features you'd like to add, ensuring your website stays current."
],
provideTraining: [
    "Yes, I can provide training sessions or documentation to help you manage and update your website. I ensure you feel confident in making minor changes without needing constant assistance."
],
alignWithBrand: [
    "I start by analyzing your brand's values, target audience, and overall identity. This allows me to create designs that are not only visually appealing but also aligned with your brand's message and values, making your website a true reflection of your brand."
],
            services: [
                "Web Design & Development",
                "Full Stack Development",
                "Responsive Design",
                "Website Maintenance & Support"
            ],

someProjects: {
 Oriax: "https://oria-mobile.netlify.app/",
 Clorybrowser: "https://clory-mobile.netlify.app/",
 Docket: "https://clory-docket.netlify.app/",
 Lingobase: "https://clory-lingo.netlify.app/",
 CloryMDB: "https://clory-mdb.netlify.app/",
},
Oriax: {
    Oriax: "https://oria-mobile.netlify.app/",
},
Clorybrowser: {
    Clorybrowser: "https://clory-mobile.netlify.app/",
},
Docket: {
    Docket: "https://clory-docket.netlify.app/",
},
Lingobase: {
    Lingobase: "https://clory-lingo.netlify.app/",
},
CloryMDB: {
    CloryMDB: "https://clory-mdb.netlify.app/",
},
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/bappi-bhadro-650263321/",
                github: "https://github.com/bappi-756",
                instagram: "https://www.instagram.com/bappibhodro/",
                youtube: "https://www.youtube.com/@mrart3",
                whatsapp: "https://wa.me/8801540625776",
                Twitter: "https://x.com/simple_xi6",
                Discordserver: "https://discord.gg/vChmZjncRG",
            },
            linkedin: {
                linkedin: "https://www.linkedin.com/in/bappi-bhadro-650263321/",
            },
            github: {
                github: "https://github.com/bappi-756",
            },
            instagram: {
                instagram: "https://www.instagram.com/bappibhodro/",
            },
            youtube: {
                youtube: "https://www.youtube.com/@mrart3",
            },
            whatsapp: {
                whatsapp: "https://wa.me/8801540625776"
            },
            Twitter: {
                Twitter: "https://x.com/simple_xi6",
            },
            Discordserver: {
                Discordserver: "https://discord.gg/vChmZjncRG",
            }
        };

        // Chat functionality
        document.addEventListener('DOMContentLoaded', () => {
            const chatButton = document.querySelector('.chat-button');
            const chatContainer = document.querySelector('.chat-container');
            const messagesContainer = document.querySelector('.chat-messages');
            const input = document.querySelector('.chat-input input');
            const sendButton = document.querySelector('.chat-input button');
            const typingIndicator = document.querySelector('.typing-indicator');

            // Check if there are already messages (for page refresh)
            if (messagesContainer.querySelector('.message')) {
                messagesContainer.classList.add('has-messages');
            }

            let isChatOpen = false;

            // Add privacy notice to chat
            const addPrivacyNotice = () => {
                if (!messagesContainer.querySelector('.privacy-notice')) {
                    const privacyNotice = document.createElement('div');
                    privacyNotice.className = 'privacy-notice';
                    privacyNotice.style.fontSize = '10px';
                    privacyNotice.style.padding = '8px';
                    privacyNotice.style.margin = '5px';
                    privacyNotice.style.background = '#f5f5f5';
                    privacyNotice.style.borderRadius = '8px';
                    privacyNotice.style.color = '#666';
                    privacyNotice.innerHTML = 'Privacy Notice: This chat is for immediate assistance only. No personal data is collected or stored from your conversation. Your privacy is important to us.';
                    messagesContainer.appendChild(privacyNotice);
                }
            };
            
            // Replace with your Gemini API key
            const GEMINI_API_KEY = 'AIzaSyDFdYDjLbyC73TdejXW6oUWQoAJUVvxPPE';
            const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

            chatButton.addEventListener('click', () => {
                isChatOpen = !isChatOpen;
                chatButton.classList.toggle('active');
                chatContainer.classList.toggle('active');
                chatButton.classList.remove('new'); // Remove notification dot when opened
                
                // Toggle between AI icon and close icon
                const chatIcon = chatButton.querySelector('.bx-chat');
                const closeIcon = chatButton.querySelector('.bx-x');
                
                if (isChatOpen) {
                    chatIcon.style.display = 'none';
                    closeIcon.style.display = 'block';
                    input.focus(); // Focus input when chat opens
                } else {
                    chatIcon.style.display = 'block';
                    closeIcon.style.display = 'none';
                }
            });

            const addMessage = (message, isUser = false) => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
                
                if (!isUser) {
                    // Add random emoji at the end of bot messages
                    const emojis = [
                        '😊', '👋', '🤔', '💡', '✨', '🚀', '👍', '🌟',
                        '💻', '⚡', '🔍', '📝', '📚', '🎯', '🧠',
                        '🖥️', '📱', '🌐', '🛠️', '🎨', '💬', '🔗',
                        '🧪', '🗂️', '🧬', '🎥',
                        '🕹️', '🏆', '🗺️',
                        '😔', '😢', '😭', '🥺', '😞', '😟', '😩', '😫',
                        '😿', '😥', '😓', '🫤', '🫥', '😶‍🌫️', '🙁',
                        '☹️', '😖', '😣', '😕', '🥀', '🫶', '🤍'
                      ];
                      
                    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                    
                    // Apply rich text formatting to bot messages
                    let formattedText = message
                      // Handle inline code
                      .replace(/`([^`]+)`/g, '<code>$1</code>')
                      // Handle bold text
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      // Handle italic text
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      // Handle bullet points with proper list structure (improved)
                      .replace(/(?:^|\n)[ ]*[-•*][ ]+(.+)/g, '<li>$1</li>')
                      // Handle numbered lists (improved)
                      .replace(/(?:^|\n)[ ]*(\d+)\.[ ]+(.+)/g, '<li value="$1">$2</li>')
                      // Convert bullet point list items to proper lists
                      .replace(/(?:<li>(?:(?!<\/li>).)*<\/li>)+/g, function(match) {
                        return '<ul>' + match + '</ul>';
                      })
                      // Convert numbered list items to proper ordered lists
                      .replace(/(?:<li value="\d+">(?:(?!<\/li>).)*<\/li>)+/g, function(match) {
                        return '<ol>' + match + '</ol>';
                      })
                      // Handle links
                      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(match, text, url) {
                        // Limit display URL length if needed
                        const displayUrl = url.length > 30 ? url.substring(0, 27) + '...' : url;
                        return `<a href="${url}" title="${url}" target="_blank">${text}</a>`;
                      })
                      // Handle paragraphs
                      .replace(/\n\n/g, '</p><p>')
                      // Handle single line breaks
                      .replace(/\n/g, '<br>')
                      // Wrap in paragraph if needed
                      .replace(/^(.+)$/, '<p>$1</p>')
                      // Clean up empty paragraphs
                      .replace(/<p>\s*<\/p>/g, '')
                      // Clean up potential issues with nested paragraphs
                      .replace(/<p>(\s*<(?:ul|ol)>.*?<\/(?:ul|ol)>\s*)<\/p>/g, '$1')
                      // Fix common emoji text patterns
                      .replace(/:smile:/gi, "😊")
                      .replace(/:thumbsup:/gi, "👍")
                      .replace(/:wave:/gi, "👋")
                      .replace(/:heart:/gi, "❤️")
                      .replace(/:check:/gi, "✅")
                      .replace(/:question:/gi, "❓")
                      .replace(/:[\w-]+:/g, function(match) {
                        // Generic emoji handler for any other emoji shortcodes
                        return match; // Default: return the original if no specific mapping
                      });
                    
                    // Add emoji at the end of the formatted text
                    // Check if the text ends with a paragraph tag
                    if (formattedText.endsWith('</p>')) {
                        formattedText = formattedText.replace(/<\/p>$/, ` ${randomEmoji}</p>`);
                    } 
                    // Check if the text ends with a list
                    else if (formattedText.endsWith('</ul>') || formattedText.endsWith('</ol>')) {
                        // Add emoji after the list in a new paragraph
                        formattedText = formattedText + `<p>${randomEmoji}</p>`;
                    }
                    // For any other case, just append the emoji
                    else {
                        formattedText = formattedText + ` ${randomEmoji}`;
                    }
                    
                    // Get current date and time
                    const now = new Date();
                    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                    const dateString = now.toLocaleDateString();
                    
                    // Add AI logo and timestamp
                    const aiLogo = '<img src="cb.png" alt="BIO" style="width: 20px; height: 20px; margin-right: 5px; vertical-align: middle;">';
                    const timestamp = `<div style="font-size: 10px; text-align: right; margin-top: 5px; opacity: 0.7;">${aiLogo} ${timeString} | ${dateString}</div>`;
                    
                    // Add disclaimer about AI making mistakes
                    const disclaimer = `<div style="font-size: 9px; font-style: italic; margin-top: 8px; text-align: center; border-top: 1px solid #eee; padding-top: 5px; color: #888;">Note: This AI system can make mistakes. Please verify information on your own.</div>`;
                    
                    // Use innerHTML to preserve HTML tags and add timestamp and disclaimer
                    messageDiv.innerHTML = formattedText + timestamp + disclaimer;
                } else {
                    // User messages remain as plain text
                    messageDiv.textContent = message;
                }
                
                messageDiv.style.opacity = '0';
                messageDiv.style.transform = 'translateY(10px)';
                messagesContainer.appendChild(messageDiv);
                
                // Trigger reflow for animation
                messageDiv.offsetHeight;
                messageDiv.style.opacity = '1';
                messageDiv.style.transform = 'translateY(0)';
                
                // Hide background when messages exist (for browsers that don't support :has)
                messagesContainer.classList.add('has-messages');
                
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            };

            const showTypingIndicator = () => {
                typingIndicator.style.display = 'block';
                typingIndicator.textContent = 'BIO is typing...';
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            };

            const hideTypingIndicator = () => {
                typingIndicator.style.display = 'none';
            };

            const generateResponse = async (userInput) => {
                showTypingIndicator();
                
                try {
                    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{
                                    text: `You are Bappi's AI assistant. Use this information about Bappi: ${JSON.stringify(websiteInfo)}. 
                                    Answer this question: ${userInput}`
                                }]
                            }]
                        })
                    });

                    const data = await response.json();
                    hideTypingIndicator();
                    
                    if (data.candidates && data.candidates[0].content.parts[0].text) {
                        return data.candidates[0].content.parts[0].text;
                    } else {
                        return "I apologize, but I'm having trouble generating a response. Please try asking your question in a different way.";
                    }
                } catch (error) {
                    hideTypingIndicator();
                    return "I apologize, but I'm having trouble connecting to my services. Please try again later. Check your internet connection.";
                }
            };

            const handleUserInput = async () => {
                const userMessage = input.value.trim();
                if (!userMessage) return;

                input.value = '';
                addMessage(userMessage, true);
                
                const response = await generateResponse(userMessage);
                addMessage(response);
            };

            sendButton.addEventListener('click', handleUserInput);
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleUserInput();
            });

            // Close chat if clicked outside
            document.addEventListener('click', (e) => {
                if (!chatContainer.contains(e.target) && !chatButton.contains(e.target) && isChatOpen) {
                    isChatOpen = false;
                    chatButton.classList.remove('active');
                    chatContainer.classList.remove('active');
                    
                    // Update the icons when closing by clicking outside
                    const chatIcon = chatButton.querySelector('.bx-chat');
                    const closeIcon = chatButton.querySelector('.bx-x');
                    chatIcon.style.display = 'block';
                    closeIcon.style.display = 'none';
                }
            });
        });