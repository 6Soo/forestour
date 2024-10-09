// Kakao SDK 초기화
Kakao.init('31e02724964f1e5ef1596178626dd717'); // 카카오 개발자 센터에서 발급받은 JavaScript 키 입력

// 좌석 클릭 시 이름 입력
document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', function() {
        const name = prompt('이름을 입력하세요:', seat.textContent);
        if (name !== null) {// 좌석 클릭 시 이름 입력
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

        // C, D 열 추가
        const newRightRow = document.createElement('div');
        newRightRow.classList.add('row');
        for (let j = 2; j < 4; j++) { // C, D 좌석
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
            newRightRow.appendChild(seat);
        }
        rightSeats.appendChild(newRightRow);
    }
});

// 좌석 삭제 기능
document.getElementById('remove-rows').addEventListener('click', function() {
    const leftSeats = document.querySelector('.bus-seats.left');
    const rightSeats = document.querySelector('.bus-seats.right');

    // 마지막 열 삭제
    if (leftSeats.lastElementChild && rightSeats.lastElementChild) {
        leftSeats.removeChild(leftSeats.lastElementChild);
        rightSeats.removeChild(rightSeats.lastElementChild);
    }
});

// 운전석과 출입문 그룹 위치 변경 기능
document.getElementById('swap-groups').addEventListener('click', function() {
    const driverGroup = document.getElementById('driver-group');
    const doorGroup = document.getElementById('door-group');

    // 두 그룹의 위치를 바꾸기
    if (driverGroup && doorGroup) {
        const parent = driverGroup.parentNode;
        parent.insertBefore(doorGroup, driverGroup); // 출입문 그룹을 운전석 그룹 앞에 위치시킴
    }
});

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

        // C, D 열 추가
        const newRightRow = document.createElement('div');
        newRightRow.classList.add('row');
        for (let j = 2; j < 4; j++) { // C, D 좌석
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
            newRightRow.appendChild(seat);
        }
        rightSeats.appendChild(newRightRow);
    }
});

// 좌석 삭제 기능
document.getElementById('remove-rows').addEventListener('click', function() {
    const leftSeats = document.querySelector('.bus-seats.left');
    const rightSeats = document.querySelector('.bus-seats.right');

    // 마지막 열 삭제
    if (leftSeats.lastElementChild && rightSeats.lastElementChild) {
        leftSeats.removeChild(leftSeats.lastElementChild);
        rightSeats.removeChild(rightSeats.lastElementChild);
    }
});

// 화면 캡처 및 카카오톡 공유 기능
document.getElementById('kakao-share-btn').addEventListener('click', function() {
    html2canvas(document.body).then(canvas => {
        const imageData = canvas.toDataURL('image/png');

        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '버스 좌석표',
                description: '버스 좌석표를 공유합니다.',
                imageUrl: imageData, // 캡처된 이미지
                link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href,
                },
            },
        });
    });
});
