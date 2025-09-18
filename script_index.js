
        // Project data
        const projects = {
            ecommerce: {
                title: "E-Commerce Platform",
                description: "Une plateforme e-commerce moderne et complète développée avec les dernières technologies web. Cette solution offre une expérience utilisateur exceptionnelle avec un design responsive, un système de paiement sécurisé intégré avec Stripe, et une interface d'administration puissante pour la gestion des produits, commandes et clients. La plateforme inclut également des fonctionnalités avancées comme la gestion d'inventaire en temps réel, un système de recommandations personnalisées, et des analytics détaillées pour optimiser les ventes.",
                tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express.js"],
                images: [
                    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1460925895917-afdab827c788?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop"
                ],
                liveUrl: "https://demo-ecommerce.gbassi.com",
                features: [
                    "Système de paiement sécurisé",
                    "Gestion d'inventaire en temps réel",
                    "Interface d'administration",
                    "Recommandations personnalisées"
                ]
            },
            portfolio: {
                title: "Portfolio Créatif",
                description: "Un portfolio interactif et immersif créé pour un studio de design renommé. Ce projet met l'accent sur l'expérience utilisateur avec des animations 3D fluides, des transitions cinématographiques et une navigation intuitive. L'utilisation de Three.js permet d'intégrer des éléments 3D interactifs, tandis que GSAP assure des animations fluides et performantes. Le design minimaliste met en valeur les créations du studio tout en offrant une expérience mémorable aux visiteurs.",
                tech: ["Three.js", "GSAP", "CSS3", "JavaScript", "WebGL", "Blender"],
                images: [
                    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"
                ],
                liveUrl: "https://portfolio-creative.gbassi.com",
                features: [
                    "Animations 3D interactives",
                    "Transitions cinématographiques",
                    "Navigation immersive",
                    "Optimisation WebGL"
                ]
            },
            webapp: {
                title: "Application de Gestion",
                description: "Une solution SaaS complète pour la gestion de projets et la collaboration d'équipe. Cette application web moderne offre un tableau de bord analytique avancé avec des graphiques interactifs, un système de collaboration en temps réel avec chat intégré, et des outils de planification sophistiqués. L'architecture modulaire permet une scalabilité optimale, tandis que l'interface utilisateur intuitive facilite l'adoption par les équipes. Les notifications push et la synchronisation multi-plateforme assurent une productivité maximale.",
                tech: ["Vue.js", "Laravel", "MySQL", "Socket.io", "Chart.js", "Redis"],
                images: [
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1460925895917-afdab827c788?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1590650213165-d5ca2c5aed94?w=400&h=300&fit=crop"
                ],
                liveUrl: "https://webapp-gestion.gbassi.com",
                features: [
                    "Tableau de bord analytique",
                    "Collaboration temps réel",
                    "Planification avancée",
                    "Notifications push"
                ]
            },
            mobile: {
                title: "Application Mobile",
                description: "Une application mobile cross-platform révolutionnaire pour la livraison à domicile. Cette app combine géolocalisation en temps réel, système de paiement mobile sécurisé, et interface utilisateur intuitive pour offrir une expérience de livraison exceptionnelle. L'intégration avec Firebase assure une synchronisation parfaite des données, tandis que l'API Google Maps fournit une navigation précise. Le système de notifications push keep les utilisateurs informés en temps réel du statut de leurs commandes.",
                tech: ["React Native", "Firebase", "Google Maps API", "Stripe Mobile", "Redux", "Push Notifications"],
                images: [
                    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop"
                ],
                liveUrl: "https://app.store/mobile-delivery",
                features: [
                    "Géolocalisation temps réel",
                    "Paiement mobile sécurisé",
                    "Interface intuitive",
                    "Notifications push"
                ]
            }
        };

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Modal functionality
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        const closeModal = document.querySelector('.close');

        // Project card click handlers
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                const projectId = this.dataset.project;
                const project = projects[projectId];
                
                if (project) {
                    showProjectDetails(project);
                }
            });
        });

        function showProjectDetails(project) {
            const techTags = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
            const featuresList = project.features.map(feature => `<li>${feature}</li>`).join('');
            const galleryImages = project.images.map(img => `<img src="${img}" alt="${project.title}" loading="lazy">`).join('');

            modalBody.innerHTML = `
                <h2 class="modal-title">${project.title}</h2>
                <div class="modal-description">
                    <p>${project.description}</p>
                    
                    <h3 style="color: var(--highlight); margin: 2rem 0 1rem 0; font-size: 1.3rem;">Technologies Utilisées</h3>
                    <div class="project-tech" style="margin-bottom: 2rem;">
                        ${techTags}
                    </div>
                    
                    <h3 style="color: var(--highlight); margin: 2rem 0 1rem 0; font-size: 1.3rem;">Fonctionnalités Principales</h3>
                    <ul style="color: var(--text-light); margin-bottom: 2rem; padding-left: 1.5rem;">
                        ${featuresList}
                    </ul>
                    
                    <h3 style="color: var(--highlight); margin: 2rem 0 1rem 0; font-size: 1.3rem;">Galerie d'Images</h3>
                    <div class="gallery">
                        ${galleryImages}
                    </div>
                    
                    <div style="text-align: center; margin-top: 2rem;">
                        <a href="${project.liveUrl}" target="_blank" class="cta-button" style="margin-right: 1rem;">
                            Voir le Projet en Ligne
                        </a>
                        <a href="#contact" class="cta-button" style="background: var(--gradient-2);" onclick="closeProjectModal()">
                            Discuter du Projet
                        </a>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeProjectModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal events
        closeModal.addEventListener('click', closeProjectModal);
        
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProjectModal();
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeProjectModal();
            }
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation and success message
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            if (name && email && subject && message) {
                // Here you would typically send the data to your server
                alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
                this.reset();
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections for animations
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(26, 26, 46, 0.98)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                nav.style.background = 'rgba(26, 26, 46, 0.95)';
                nav.style.boxShadow = 'none';
            }
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            
            if (hero) {
                hero.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
            document.body.style.transform = 'translateY(0)';
        });

        // Initial page setup
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        document.body.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    