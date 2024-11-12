const ctxRanking = document.getElementById('rankingChart').getContext('2d');
new Chart(ctxRanking, {
    type: 'bar',
    data: {
        labels: ['Auto', 'Bike', 'Bus', 'Train', 'Ship'],
        datasets: [{
            label: 'Data Acceptance',
            data: [30444, 28644, 27444, 19322, 12222],
            backgroundColor: 'rgba(0, 255, 204, 0.5)',
        }, {
            label: 'Data Distribution',
            data: [32400, 29000, 27500, 20000, 13000],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: { position: 'top' },
        }
    }
});

const ctxTypeOfData = document.getElementById('typeOfDataChart').getContext('2d');
new Chart(ctxTypeOfData, {
    type: 'doughnut',
    data: {
        labels: ['Car', 'Face', 'Body'],
        datasets: [{
            data: [70, 30, 30],
            backgroundColor: ['#FF00FF', '#00FFCC', '#FFC107']
        }]
    },
    options: {
        responsive: true
    }
});

const ctxAnalysis = document.getElementById('analysisPieChart').getContext('2d');
new Chart(ctxAnalysis, {
    type: 'pie',
    data: {
        labels: ['Auto', 'Bike', 'Train', 'Ship'],
        datasets: [{
            data: [35, 20, 25, 20],
            backgroundColor: ['#00FFCC', '#007BFF', '#FF00FF', '#FFC107']
        }]
    },
    options: {
        responsive: true
    }
});

const ctxComparison = document.getElementById('comparisonChart').getContext('2d');
new Chart(ctxComparison, {
    type: 'line',
    data: {
        labels: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
        datasets: [{
            label: 'Comparison',
            data: [1500, 2000, 2500, 2200, 2700, 3000],
            borderColor: '#00FFCC',
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        }
    }
});

const ctxDistributionRadar = document.getElementById('distributionRadarChart').getContext('2d');
new Chart(ctxDistributionRadar, {
    type: 'radar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Data Distribution',
            data: [1200, 1500, 1000, 1300, 1700, 1600],
            backgroundColor: 'rgba(0, 255, 204, 0.2)',
            borderColor: '#00FFCC',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
