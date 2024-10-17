// 좌석 클릭 시 이름 입력
document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', function() {
        const name = prompt('이름을 입력하세요:', seat.textContent);
        if (name !== null) {
            seat.textContent = name;
        }
    });
});

// 좌석 추가 기능
document.getElementById('add-rows').addEventListener('click', function() {
    const numberOfRows = document.getElementById('row-input').value;
    const leftSeats = document.querySelector('.bus-seats.left');
    const rightSeats = document.querySelector('.bus-seats.right');

    for (let i = 0; i < numberOfRows; i++) {
        const rowNumber = leftSeats.getElementsByClassName('row').length + 1;

        // A, B 열 추가
        const newLeftRow = document.createElement('div');
        newLeftRow.classList.add('row');
        newLeftRow.dataset.row = rowNumber;
        for (let j = 0; j < 2; j++) { // A, B 좌석
            const seat = document.createElement('button');
            seat.classList.add('seat');
            seat.textContent = `${rowNumber}${String.fromCharCode(65 + j)}`;
            seat.dataset.seat = `${rowNumber}${String.fromCharCode(65 + j)}`;
            seat.addEventListener('click', function() {
                const name = prompt('이름을 입력하세요:', seat.textContent);
                if (name !== null) {
                    seat.textContent = name;
                }
            });
            newLeftRow.appendChild(seat);
        }
        leftSeats.appendChild(newLeftRow);

        // C 열 추가 (D열 삭제됨)
        const newRightRow = document.createElement('div');
        newRightRow.classList.add('row');
        newRightRow.dataset.row = rowNumber;
        const seat = document.createElement('button');
        seat.classList.add('seat');
        seat.textContent = `${rowNumber}C`;
        seat.dataset.seat = `${rowNumber}C`;
        seat.addEventListener('click', function() {
            const name = prompt('이름을 입력하세요:', seat.textContent);
            if (name !== null) {
                seat.textContent = name;
            }
        });
        newRightRow.appendChild(seat);
        rightSeats.appendChild(newRightRow);
    }
});

document.getElementById('add-rows').addEventListener('click', function () {
    const rowCount = parseInt(document.getElementById('row-input').value);
    const leftColumn = document.querySelector('.left-column');
    const rightColumn = document.querySelector('.right-column');

    for (let i = 0; i < rowCount; i++) {
        const newRowLeft = document.createElement('div');
        newRowLeft.classList.add('row');
        newRowLeft.innerHTML = `<button class="seat" data-seat="new">새 좌석</button>`;
        leftColumn.appendChild(newRowLeft);

        const newRowRight = document.createElement('div');
        newRowRight.classList.add('row');
        newRowRight.innerHTML = `<button class="seat" data-seat="new">새 좌석</button><button class="seat" data-seat="new">새 좌석</button>`;
        rightColumn.appendChild(newRowRight);
    }
});

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

});
