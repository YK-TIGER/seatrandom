const students = [
    "김보희", "김윤아", "심정빈", "오율균", "이재인",
    "김소희", "김재서", "안윤서", "윤지선", "이지민",
    "김연서", "김혜송", "안준형", "이서연", "이지원",
    "김윤기", "서인규", "양지혜", "이승민", "주가연",
    "김윤성", "송채진", "오선유", "이승엽", "최서인",
    "홍지민"
];

const seatingChart = document.getElementById("seatingChart");
const shuffleBtn = document.getElementById("shuffleBtn");

function createSeats(order) {
    seatingChart.innerHTML = ""; // 기존 자리 초기화

    for (let i = 0; i < 25; i++) {
        let seat = document.createElement("div");
        seat.classList.add("seat");
        seat.textContent = order[i];
        seatingChart.appendChild(seat);
    }

    // (5,5) 오른쪽에 추가할 div 박스 (남은 한 명 표시)
    let extraBox = document.createElement("div");
    extraBox.classList.add("seat");
    extraBox.textContent = order[25]; // 남은 한 명의 이름 추가
    seatingChart.appendChild(extraBox);
}




shuffleBtn.addEventListener("click", function() {
    let shuffledStudents = [...students].sort(() => Math.random() - 0.5);
    createSeats(shuffledStudents);
});

// 처음에는 정렬된 상태로 표시
createSeats(students);

