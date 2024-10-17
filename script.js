// 좌석 이름 변경 기능
function attachSeatClickEvent(seat) {
    seat.addEventListener('click', function () {
        const newName = prompt('좌석 이름을 입력하세요:', seat.textContent);
        if (newName !== null) {
            seat.textContent = newName;
        }
    });
}

// 모든 기존 좌석에 클릭 이벤트 붙이기
document.querySelectorAll('.seat').forEach(seat => {
    attachSeatClickEvent(seat);
});

// 좌석 번호 추가를 위한 카운터
let seatCounter = 3; // 시작 좌석 번호

document.getElementById('add-rows').addEventListener('click', function () {
    const rowCount = parseInt(document.getElementById('row-input').value);
    const leftColumn = document.querySelector('.left-column');
    const rightColumn = document.querySelector('.right-column');

    for (let i = 0; i < rowCount; i++) {
        // 왼쪽 열에 새로운 좌석 추가
        const newRowLeft = document.createElement('div');
        newRowLeft.classList.add('row');
        const newSeatLeft = document.createElement('button');
        newSeatLeft.classList.add('seat');
        newSeatLeft.textContent = `${seatCounter}A`; // 좌석 번호 할당
        newRowLeft.appendChild(newSeatLeft);
        leftColumn.appendChild(newRowLeft);

        // 오른쪽 열에 새로운 좌석 추가
        const newRowRight = document.createElement('div');
        newRowRight.classList.add('row');
        const newSeatRight1 = document.createElement('button');
        newSeatRight1.classList.add('seat');
        newSeatRight1.textContent = `${seatCounter}B`; // 좌석 번호 할당
        const newSeatRight2 = document.createElement('button');
        newSeatRight2.classList.add('seat');
        newSeatRight2.textContent = `${seatCounter}C`; // 좌석 번호 할당
        newRowRight.appendChild(newSeatRight1);
        newRowRight.appendChild(newSeatRight2);
        rightColumn.appendChild(newRowRight);

        // 새로운 좌석에도 클릭 이벤트 추가
        attachSeatClickEvent(newSeatLeft);
        attachSeatClickEvent(newSeatRight1);
        attachSeatClickEvent(newSeatRight2);

        seatCounter++; // 다음 좌석 번호로 증가
    }
});

// 좌석 삭제 버튼 클릭 이벤트
document.getElementById('remove-rows').addEventListener('click', function () {
    const leftColumn = document.querySelector('.left-column');
    const rightColumn = document.querySelector('.right-column');

    // 좌석 삭제 기능 구현
    if (leftColumn.lastElementChild) {
        leftColumn.removeChild(leftColumn.lastElementChild);
    }
    if (rightColumn.lastElementChild) {
        rightColumn.removeChild(rightColumn.lastElementChild);
    }
});
