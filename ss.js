// File Drop-off JavaScript - Form handling and notification

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('file');
    const fileInfo = document.getElementById('fileInfo');
    const notification = document.getElementById('notification');

    // File input change handler - show file info
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const fileSize = (file.size / 1024).toFixed(2); // Convert to KB
            fileInfo.innerHTML = `
                <strong>Выбран файл:</strong> ${file.name}<br>
                <strong>Размер:</strong> ${fileSize} KB<br>
                <strong>Тип:</strong> ${file.type || 'Неизвестно'}
            `;
        } else {
            fileInfo.innerHTML = '';
        }
    });

    // Form submit handler
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            type: document.getElementById('type').value,
            message: document.getElementById('message').value,
            file: fileInput.files[0] ? fileInput.files[0].name : 'Нет файла'
        };

        // Log form data to console (demo purposes)
        console.log('=== Форма отправлена (демо режим) ===');
        console.log('Имя:', formData.name);
        console.log('Email:', formData.email);
        console.log('Тип обращения:', formData.type);
        console.log('Сообщение:', formData.message);
        console.log('Файл:', formData.file);
        console.log('====================================');

        // Simulate successful submission
        showNotification();
        
        // Reset form after submission
        setTimeout(() => {
            uploadForm.reset();
            fileInfo.innerHTML = '';
        }, 500);
    });

    // Show success notification
    function showNotification() {
        notification.classList.remove('hidden');
        
        // Auto-hide notification after 4 seconds
        setTimeout(() => {
            hideNotification();
        }, 4000);
    }

    // Hide notification
    function hideNotification() {
        notification.classList.add('hidden');
    }

    // Click notification to close it
    notification.addEventListener('click', hideNotification);

    // Add smooth animations to form inputs
    const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.01)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add hover effect to submit button
    const submitBtn = document.querySelector('.btn-submit');
    submitBtn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 8px 20px rgba(102, 192, 244, 0.5)';
    });
    
    submitBtn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    });

    // Console message
    console.log('%c File Drop-off System ', 'background: #1b2838; color: #66c0f4; font-size: 16px; padding: 10px; border-radius: 5px;');
    console.log('%c Режим демонстрации - данные не отправляются на сервер ', 'color: #8f98a0; font-size: 12px;');
});
