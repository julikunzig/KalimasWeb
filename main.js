// ============================================
// KALIMAS GROUP — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    if (window.KalimasI18n) window.KalimasI18n.init();
    initNavigation();
    initScrollAnimations();
    initForm();
});

function tr(key) {
    return window.KalimasI18n ? window.KalimasI18n.t(key) : key;
}

function initNavigation() {
    const nav = document.getElementById('nav');
    const toggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!nav) return;

    const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (toggle && mobileMenu) {
        const setMenuOpen = (open) => {
            mobileMenu.classList.toggle('active', open);
            toggle.classList.toggle('active', open);
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', tr(open ? 'a11y.menuClose' : 'a11y.menuOpen'));
            document.body.classList.toggle('menu-open', open);

            if (open) {
                mobileMenu.removeAttribute('hidden');
            } else {
                window.setTimeout(() => {
                    if (!mobileMenu.classList.contains('active')) {
                        mobileMenu.setAttribute('hidden', '');
                    }
                }, 350);
            }
        };

        mobileMenu.setAttribute('hidden', '');
        setMenuOpen(false);

        toggle.addEventListener('click', () => {
            setMenuOpen(!mobileMenu.classList.contains('active'));
        });

        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setMenuOpen(false));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                setMenuOpen(false);
                toggle.focus();
            }
        });

        document.addEventListener('kalimas:langchange', () => {
            const open = mobileMenu.classList.contains('active');
            toggle.setAttribute('aria-label', tr(open ? 'a11y.menuClose' : 'a11y.menuOpen'));
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const hash = anchor.getAttribute('href');
            if (!hash || hash === '#') return;
            const target = document.querySelector(hash);
            if (!target) return;
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
            history.pushState(null, '', hash);
        });
    });
}

function initScrollAnimations() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal');

    if (!elements.length) return;

    if (reduceMotion) {
        elements.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
}

function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const submitBtn = document.getElementById('formSubmit');
    const statusEl = document.getElementById('formStatus');
    const fields = ['nombre', 'correo', 'interes', 'mensaje'];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const clearErrors = () => {
        fields.forEach((name) => {
            const input = form.elements[name];
            const error = form.querySelector(`[data-error-for="${name}"]`);
            if (input) input.classList.remove('is-invalid');
            if (error) error.textContent = '';
        });
        if (statusEl) {
            statusEl.textContent = '';
            statusEl.className = 'form-status';
        }
    };

    const setFieldError = (name, message) => {
        const input = form.elements[name];
        const error = form.querySelector(`[data-error-for="${name}"]`);
        if (input) input.classList.add('is-invalid');
        if (error) error.textContent = message;
    };

    const validate = () => {
        clearErrors();
        let valid = true;

        const nombre = form.nombre.value.trim();
        const correo = form.correo.value.trim();
        const interes = form.interes.value;
        const mensaje = form.mensaje.value.trim();

        if (!nombre) {
            setFieldError('nombre', tr('form.err.name'));
            valid = false;
        }

        if (!correo) {
            setFieldError('correo', tr('form.err.email'));
            valid = false;
        } else if (!emailPattern.test(correo)) {
            setFieldError('correo', tr('form.err.emailInvalid'));
            valid = false;
        }

        if (!interes) {
            setFieldError('interes', tr('form.err.interest'));
            valid = false;
        }

        if (!mensaje) {
            setFieldError('mensaje', tr('form.err.message'));
            valid = false;
        } else if (mensaje.length < 10) {
            setFieldError('mensaje', tr('form.err.messageShort'));
            valid = false;
        }

        return valid;
    };

    const showStatus = (type, message) => {
        if (!statusEl) return;
        statusEl.textContent = message;
        statusEl.className = `form-status is-visible is-${type}`;
    };

    const resetSubmitLabel = () => {
        if (submitBtn) submitBtn.textContent = tr('form.submit');
    };

    fields.forEach((name) => {
        const input = form.elements[name];
        if (!input) return;
        input.addEventListener('input', () => {
            input.classList.remove('is-invalid');
            const error = form.querySelector(`[data-error-for="${name}"]`);
            if (error) error.textContent = '';
        });
    });

    document.addEventListener('kalimas:langchange', () => {
        if (submitBtn && !submitBtn.disabled) resetSubmitLabel();
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validate()) {
            showStatus('error', tr('form.err.fields'));
            return;
        }

        const endpoint = form.getAttribute('action') || '';
        const isPlaceholder = endpoint.includes('YOUR_FORM_ID');

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = tr('form.sending');
        }

        if (isPlaceholder) {
            await new Promise((r) => setTimeout(r, 600));
            showStatus('success', tr('form.ok.dev'));
            form.reset();
            if (submitBtn) {
                submitBtn.disabled = false;
                resetSubmitLabel();
            }
            return;
        }

        try {
            const formData = new FormData(form);
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' }
            });

            if (response.ok) {
                showStatus('success', tr('form.ok.sent'));
                form.reset();
            } else {
                const data = await response.json().catch(() => ({}));
                const msg =
                    (data.errors && data.errors.map((err) => err.message).join(' ')) ||
                    tr('form.err.send');
                showStatus('error', msg);
            }
        } catch {
            showStatus('error', tr('form.err.network'));
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                resetSubmitLabel();
            }
        }
    });
}
