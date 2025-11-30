// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    const headerTimeline = gsap.timeline();
    headerTimeline.from('nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Services section animations
    gsap.from('#Services .section-title', {
        scrollTrigger: {
            trigger: '#Services',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.5
    });

    // Services section animations
    gsap.from('#Services .section-subtitle', {
        scrollTrigger: {
            trigger: '#Services',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.5
    });

    // Services section animations
    gsap.from('#Services .section-desc', {
        scrollTrigger: {
            trigger: '#Services',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.5
    });

    // Project cards container
    const choosingSection = document.querySelector('.choosing-section');
    if (choosingSection) {
        // Set initial state
        gsap.set('.section-subtitle', {opacity: 0, y: 50});
        
        // Create timeline for project cards
        const projectsTl = gsap.timeline({
            scrollTrigger: {
                trigger: choosingSection,
                start: 'top 90%',
            }
        });

        // Add each card to the timeline
        document.querySelectorAll('.section-subtitle').forEach((card, index) => {
            projectsTl.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                clearProps: "all", // Clear properties after animation
                delay: index * 0.2
            }, index * 0.2); // Offset each animation
        });
    }

    // Project cards container
    const choosingsSection = document.querySelector('.choosing-section');
    if (choosingsSection) {
        // Set initial state
        gsap.set('.section-desc', {opacity: 0, y: 50});
        
        // Create timeline for project cards
        const projectsTl = gsap.timeline({
            scrollTrigger: {
                trigger: choosingsSection,
                start: 'top 90%',
            }
        });

        // Add each card to the timeline
        document.querySelectorAll('.section-desc').forEach((card, index) => {
            projectsTl.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                clearProps: "all", // Clear properties after animation
                delay: index * 0.2
            }, index * 0.2); // Offset each animation
        });
    }

    // Services section animations
    gsap.from('#Choosing .section-desc', {
        scrollTrigger: {
            trigger: '#Choosing',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.5
    });

    // Project cards container
    const projectsContainer = document.querySelector('.projects-container');
    if (projectsContainer) {
        // Set initial state
        gsap.set('.project-card', {opacity: 0, y: 50});
        
        // Create timeline for project cards
        const projectsTl = gsap.timeline({
            scrollTrigger: {
                trigger: projectsContainer,
                start: 'top 90%',
            }
        });
        
        // Add each card to the timeline
        document.querySelectorAll('.project-card').forEach((card, index) => {
            projectsTl.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                clearProps: "all", // Clear properties after animation
                delay: index * 0.2
            }, index * 0.2); // Offset each animation
        });
    }
});