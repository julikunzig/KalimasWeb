// ============================================
// KALIMAS GROUP — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initForm();
});

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
            toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
            document.body.classList.toggle('menu-open', open);

            if (open) {
                mobileMenu.removeAttribute('hidden');
            } else {
                // Keep hidden for a11y after transition
                window.setTimeout(() => {
                    if (!mobileMenu.classList.contains('active')) {
                        mobileMenu.setAttribute('hidden', '');
                    }
                }, 350);
            }
        };

        // Ensure closed state on load
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
            setFieldError('nombre', 'El nombre es obligatorio.');
            valid = false;
        }

        if (!correo) {
            setFieldError('correo', 'El correo es obligatorio.');
            valid = false;
        } else if (!emailPattern.test(correo)) {
            setFieldError('correo', 'Introduce un correo válido.');
            valid = false;
        }

        if (!interes) {
            setFieldError('interes', 'Selecciona una opción.');
            valid = false;
        }

        if (!mensaje) {
            setFieldError('mensaje', 'El mensaje es obligatorio.');
            valid = false;
        } else if (mensaje.length < 10) {
            setFieldError('mensaje', 'Escribe al menos 10 caracteres.');
            valid = false;
        }

        return valid;
    };

    const showStatus = (type, message) => {
        if (!statusEl) return;
        statusEl.textContent = message;
        statusEl.className = `form-status is-visible is-${type}`;
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

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validate()) {
            showStatus('error', 'Revisa los campos marcados.');
            return;
        }

        const endpoint = form.getAttribute('action') || '';
        const isPlaceholder = endpoint.includes('YOUR_FORM_ID');

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando…';
        }

        if (isPlaceholder) {
            // Local/dev fallback until Formspree ID is configured
            await new Promise((r) => setTimeout(r, 600));
            showStatus(
                'success',
                'Formulario validado. Configura tu Formspree ID en el atributo action del formulario para envíos reales.'
            );
            form.reset();
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar mensaje';
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
                showStatus('success', '¡Mensaje enviado! Te responderemos pronto.');
                form.reset();
            } else {
                const data = await response.json().catch(() => ({}));
                const msg =
                    (data.errors && data.errors.map((err) => err.message).join(' ')) ||
                    'No se pudo enviar. Inténtalo de nuevo o escribe a hola@kalimasgroup.net.';
                showStatus('error', msg);
            }
        } catch {
            showStatus(
                'error',
                'Error de conexión. Inténtalo de nuevo o escribe a hola@kalimasgroup.net.'
            );
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar mensaje';
            }
        }
    });
}
