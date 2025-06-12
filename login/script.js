document.getElementById("dataForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // 1. Daten für Download vorbereiten (wie bisher)
    const csvData = [
      ["Name", "E-Mail", "Landesvorwahl", "Telefonnummer", "Zeitstempel"],
      [
        e.target.name.value,
        e.target.email.value,
        e.target.countryCode.value,
        e.target.phone.value,
        new Date().toISOString()
      ]
    ];
    const csv = csvData.map(row => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    
    // 2. Download erzwingen
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "coaching_daten.csv";
    a.click();
  
    // 3. Daten TROTZDEM an PHP senden (via Fetch-API)
    fetch("save_to_csv.php", {
      method: "POST",
      body: new FormData(e.target)
    })
    .then(response => {
      if (response.ok) {
        alert("Daten wurden gespeichert UND heruntergeladen!");
      }
    });
  });