document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-value');
            ratingInput.value = rating;
            updateStars(rating);
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            }
        });
    }

    document.getElementById('reviewForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Here you would typically send the form data to your server
        alert('Review submitted!'); // Replace with actual form submission logic
    });
});
