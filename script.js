// Wait for DOM to be ready
$(document).ready(function () {
	let startTime = performance.now();
	let skeletonCreated = false;
	let contentReady = false;

	// Function to create skeleton overlay (only if needed)
	function createSkeleton() {
		if (skeletonCreated) return;
		skeletonCreated = true;
		const skeletonHTML = `
            <div id="dynamic-skeleton" style="position:fixed; top:0; left:0; width:100%; background:#f8fafc; z-index:10000; padding-top:2rem; min-height:100vh; overflow-y:auto;">
                <div class="container">
                    <div class="skeleton-navbar" style="height:70px; background:#e2e8f0; border-radius:12px; margin-bottom:2rem;"></div>
                    <div class="hero-grid">
                        <div class="hero-text">
                            <div style="height:42px; width:80%; background:#e2e8f0; border-radius:8px; margin-bottom:0.8rem;"></div>
                            <div style="height:32px; width:60%; background:#e2e8f0; border-radius:8px; margin-bottom:0.8rem;"></div>
                            <div style="height:28px; width:50%; background:#e2e8f0; border-radius:8px; margin-bottom:0.8rem;"></div>
                            <div style="height:24px; width:70%; background:#e2e8f0; border-radius:8px; margin-bottom:1rem;"></div>
                            <div style="display:flex; gap:1rem; margin-top:1rem;">
                                <div style="height:44px; width:140px; background:#e2e8f0; border-radius:40px;"></div>
                                <div style="height:44px; width:140px; background:#e2e8f0; border-radius:40px;"></div>
                            </div>
                        </div>
                        <div class="hero-image" style="text-align:center;">
                            <div style="width:240px; height:240px; background:#e2e8f0; border-radius:50%; margin:0 auto;"></div>
                        </div>
                    </div>
                    <div class="cards-grid" style="display:flex; flex-wrap:wrap; gap:1.5rem; justify-content:center; margin:2rem 0;">
                        ${Array(4).fill('<div style="flex:1 1 200px; height:160px; background:#e2e8f0; border-radius:20px;"></div>').join("")}
                    </div>
                    <div class="col-grid" style="display:flex; flex-wrap:wrap; gap:2rem; margin:3rem 0;">
                        ${Array(2).fill('<div style="flex:1 1 300px; background:#e2e8f0; border-radius:24px; padding:1.8rem; height:350px;"></div>').join("")}
                    </div>
                    <div style="margin:3rem 0;">
                        <div style="height:30px; width:90%; background:#e2e8f0; border-radius:8px; margin-bottom:1rem;"></div>
                        <div style="display:flex; gap:2rem;">
                            <div style="flex:1; height:150px; background:#e2e8f0; border-radius:16px;"></div>
                            <div style="flex:1; height:150px; background:#e2e8f0; border-radius:16px;"></div>
                        </div>
                        <div style="height:34px; width:60%; background:#e2e8f0; border-radius:40px; margin:1rem auto;"></div>
                    </div>
                    <div style="text-align:center; margin:3rem 0;">
                        <div style="height:30px; width:80%; background:#e2e8f0; border-radius:8px; margin:0 auto 1rem;"></div>
                        <div style="height:20px; width:100%; background:#e2e8f0; border-radius:8px; margin-bottom:1rem;"></div>
                        <div style="display:flex; gap:1rem; justify-content:center;">
                            <div style="height:44px; width:140px; background:#e2e8f0; border-radius:40px;"></div>
                            <div style="height:44px; width:140px; background:#e2e8f0; border-radius:40px;"></div>
                            <div style="height:44px; width:140px; background:#e2e8f0; border-radius:40px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
		$("body").prepend(skeletonHTML);
	}

	function removeSkeleton() {
		if ($("#dynamic-skeleton").length) {
			$("#dynamic-skeleton").fadeOut(300, function () {
				$(this).remove();
			});
		}
		contentReady = true;
	}

	// Load navbar and footer
	function loadNavbar() {
		const navbarHTML = `
            <header class="site-header">
                <div class="container header-flex">
                    <div class="logo">
                        <h1>CA Alkeshh Patel</h1>
                        <p>Chartered Accountant | Tax Advisor</p>
                    </div>
                    <nav class="nav-links">
                        <a href="index.html" id="nav-home">Home</a>
                        <a href="beyond.html" id="nav-beyond">Beyond ITR</a>
                    </nav>
                    <div class="nav-right">
                        <a href="index.html#contact" id="nav-consult" class="btn-outline-small">Consult Now</a>
                    </div>
                </div>
            </header>
        `;
		$("#navbar").html(navbarHTML);
		const currentPath =
			window.location.pathname.split("/").pop() || "index.html";
		if (currentPath === "index.html" || currentPath === "") {
			$("#nav-home").addClass("active");
		} else if (currentPath === "beyond.html") {
			$("#nav-beyond").addClass("active");
		}
	}

	function loadFooter() {
		const footerHTML = `
            <footer>
                <div class="container footer-flex">
                    <div class="footer-left">
                        <p class="footer-tagline">Get expert support - not just form submission.</p>
                        <p class="footer-sub">File your return once. Plan your finances for life.</p>
                    </div>
                    <div class="footer-center">
                        <div class="footer-contact">
                            <span><i class="fas fa-phone-alt"></i> +91 75069 29103</span>
                            <span><i class="fas fa-envelope"></i> alkeshpatel15@gmail.com</span>
                        </div>
                        <p class="security-note-footer"><i class="fas fa-lock"></i> Your data is 100% secure. We comply with all Income Tax Department guidelines.</p>
                    </div>
                    <div class="footer-right">
                        <div class="footer-buttons">
                            <a class="btn-primary call-trigger"><i class="fas fa-phone-alt"></i> Call Now</a>
                            <a href="https://wa.me/917506929103" target="_blank" class="btn-outline"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        </div>
                        <p class="footer-copyright">CA Alkeshh Patel | Your Trusted Chartered Accountant</p>
                        <p class="footer-copyright">© 2026 • 100% secure & IT Dept compliant</p>
                    </div>
                </div>
            </footer>
        `;
		$("#footer").html(footerHTML);
		$(".footer-buttons .call-trigger").on("click", handleCallClick);
	}

	function isMobileDevice() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent,
		);
	}

	function showCallModal() {
		const phoneNumber = "+91 75069 29103";
		const isMobile = isMobileDevice();
		const modal = $("<div>").css({
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(0,0,0,0.7)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: 10001,
		});
		const modalContent = $("<div>").css({
			backgroundColor: "#fff",
			borderRadius: "20px",
			padding: "2rem",
			maxWidth: "90%",
			width: "320px",
			textAlign: "center",
			fontFamily: "Inter, system-ui, sans-serif",
		}).html(`
            <h3 style="color: #0f7b3a; margin-bottom: 0.5rem;"><i class="fas fa-phone-alt"></i> Contact CA Alkeshh Patel</h3>
            <div style="font-size: 1.6rem; font-weight: bold; margin: 1rem 0;">${phoneNumber}</div>
            <p style="margin-bottom: 1.5rem;">${isMobile ? "You will be redirected to your phone app." : "Click below to copy number."}</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button id="callActionBtn" style="background: #0f7b3a; color: white; border: none; padding: 0.7rem 1.5rem; border-radius: 40px; font-weight: bold; cursor: pointer;">${isMobile ? '<i class="fas fa-phone"></i> Call Now' : '<i class="fas fa-copy"></i> Copy Number'}</button>
                <button id="closeModalBtn" style="background: #e2e8f0; border: none; padding: 0.7rem 1.5rem; border-radius: 40px; cursor: pointer;">Cancel</button>
            </div>
        `);
		modal.append(modalContent);
		$("body").append(modal);
		$("#callActionBtn").on("click", function () {
			if (isMobile) {
				window.location.href = "tel:+917506929103";
			} else {
				navigator.clipboard
					.writeText("+91 75069 29103")
					.then(() => {
						alert("Number copied: +91 75069 29103");
						modal.remove();
					})
					.catch(() =>
						alert("Could not copy. Number: +91 75069 29103"),
					);
			}
		});
		$("#closeModalBtn").on("click", () => modal.remove());
		modal.on("click", (e) => {
			if (e.target === modal[0]) modal.remove();
		});
	}

	function handleCallClick(e) {
		e.preventDefault();
		showCallModal();
	}

	function attachCallButtons() {
		$(".call-trigger").off("click").on("click", handleCallClick);
	}

	function initSmoothScroll() {
		$(document).on("click", 'a[href^="#"]', function (e) {
			const targetId = $(this).attr("href");
			if (targetId === "#") return;
			const targetElement = $(targetId);
			if (targetElement.length) {
				e.preventDefault();
				$("html, body").animate(
					{ scrollTop: targetElement.offset().top },
					500,
				);
			}
		});
	}

	function adjustBodyPadding() {
		const headerHeight = $(".site-header").outerHeight() || 0;
		$("body").css("paddingTop", headerHeight + 20);
		if (window.innerWidth >= 768) {
			const footerHeight = $("footer").outerHeight() || 0;
			$("body").css("paddingBottom", footerHeight + 20);
		} else {
			$("body").css("paddingBottom", 0);
		}
	}

	// Start measuring load time
	let loadStart = performance.now();

	// Once content is fully loaded (images, etc.), check elapsed time
	$(window).on("load", function () {
		const elapsed = performance.now() - loadStart;
		// If loading took more than 100ms, show skeleton (if not already created)
		if (elapsed > 100 && !skeletonCreated) {
			createSkeleton();
		}
		// Remove skeleton if it exists, after a tiny delay to allow painting
		if ($("#dynamic-skeleton").length) {
			setTimeout(removeSkeleton, 50);
		} else if (!skeletonCreated) {
			// No skeleton ever created, just mark content ready
			contentReady = true;
		}
		// Also ensure navbar/footer adjustments after load
		adjustBodyPadding();
	});

	// Fallback: if window.load is too slow, but DOM is ready, we might still want to show skeleton?
	// We'll also check after DOMContentLoaded if it's been > 100ms already
	$(document).ready(function () {
		loadNavbar();
		loadFooter();
		attachCallButtons();
		initSmoothScroll();
		adjustBodyPadding();

		const elapsed = performance.now() - loadStart;
		if (elapsed > 100 && !skeletonCreated && !contentReady) {
			createSkeleton();
		}
		// If window already loaded (cached case), handle it
		if (document.readyState === "complete") {
			$(window).trigger("load");
		}
	});

	// Resize handler
	$(window).on("resize", function () {
		setTimeout(adjustBodyPadding, 100);
	});
});
