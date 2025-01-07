const donationData = [
    { id: 1, name: "John Doe", bloodType: "A", userType: "Donor" },
    { id: 2, name: "Jane Smith", bloodType: "B", userType: "Recipient" },
    { id: 3, name: "Alice Brown", bloodType: "O", userType: "Donor" },
    { id: 4, name: "Robert White", bloodType: "AB", userType: "Recipient" },
    { id: 5, name: "Emily Green", bloodType: "A", userType: "Donor" },
  ];

  // Elemen
  const viewDataBtn = document.getElementById("viewDataBtn");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  const closePopup = document.getElementById("closePopup");
  const dataTable = document.getElementById("dataTable");
  const searchBloodType = document.getElementById("searchBloodType");

  // Fungsi untuk menampilkan data dalam tabel
  function renderTable(data) {
    dataTable.innerHTML = "";
    data.forEach((item) => {
      const row = `
        <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.bloodType}</td>
          <td>${item.userType}</td>
        </tr>
      `;
      dataTable.innerHTML += row;
    });
  }

  // Tampilkan pop-up
  viewDataBtn.addEventListener("click", () => {
    renderTable(donationData);
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  // Tutup pop-up
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
  });

  // Filter data berdasarkan Blood Type
  searchBloodType.addEventListener("input", (e) => {
    const searchValue = e.target.value.toUpperCase(); // Konversi ke uppercase
    const filteredData = donationData.filter((item) =>
      item.bloodType.toUpperCase().includes(searchValue)
    );
    renderTable(filteredData);
  });