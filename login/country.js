const countries = [
    { "name": "Afghanistan", "code": "+93", "flag": "https://flagcdn.com/w40/af.png" },
    { "name": "Albanien", "code": "+355", "flag": "https://flagcdn.com/w40/al.png" },
    { "name": "Algerien", "code": "+213", "flag": "https://flagcdn.com/w40/dz.png" },
    { "name": "Andorra", "code": "+376", "flag": "https://flagcdn.com/w40/ad.png" },
    { "name": "Angola", "code": "+244", "flag": "https://flagcdn.com/w40/ao.png" },
    { "name": "Antigua und Barbuda", "code": "+1-268", "flag": "https://flagcdn.com/w40/ag.png" },
    { "name": "Argentinien", "code": "+54", "flag": "https://flagcdn.com/w40/ar.png" },
    { "name": "Armenien", "code": "+374", "flag": "https://flagcdn.com/w40/am.png" },
    { "name": "Aruba", "code": "+297", "flag": "https://flagcdn.com/w40/aw.png" },
    { "name": "Australien", "code": "+61", "flag": "https://flagcdn.com/w40/au.png" },
    { "name": "Österreich", "code": "+43", "flag": "https://flagcdn.com/w40/at.png" },
    { "name": "Aserbaidschan", "code": "+994", "flag": "https://flagcdn.com/w40/az.png" },
    { "name": "Bahamas", "code": "+1-242", "flag": "https://flagcdn.com/w40/bs.png" },
    { "name": "Bahrain", "code": "+973", "flag": "https://flagcdn.com/w40/bh.png" },
    { "name": "Bangladesch", "code": "+880", "flag": "https://flagcdn.com/w40/bd.png" },
    { "name": "Barbados", "code": "+1-246", "flag": "https://flagcdn.com/w40/bb.png" },
    { "name": "Belarus", "code": "+375", "flag": "https://flagcdn.com/w40/by.png" },
    { "name": "Belgien", "code": "+32", "flag": "https://flagcdn.com/w40/be.png" },
    { "name": "Belize", "code": "+501", "flag": "https://flagcdn.com/w40/bz.png" },
    { "name": "Benin", "code": "+229", "flag": "https://flagcdn.com/w40/bj.png" },
    { "name": "Bhutan", "code": "+975", "flag": "https://flagcdn.com/w40/bt.png" },
    { "name": "Bolivien", "code": "+591", "flag": "https://flagcdn.com/w40/bo.png" },
    { "name": "Bosnien und Herzegowina", "code": "+387", "flag": "https://flagcdn.com/w40/ba.png" },
    { "name": "Botswana", "code": "+267", "flag": "https://flagcdn.com/w40/bw.png" },
    { "name": "Brasilien", "code": "+55", "flag": "https://flagcdn.com/w40/br.png" },
    { "name": "Brunei", "code": "+673", "flag": "https://flagcdn.com/w40/bn.png" },
    { "name": "Bulgarien", "code": "+359", "flag": "https://flagcdn.com/w40/bg.png" },
    { "name": "Burkina Faso", "code": "+226", "flag": "https://flagcdn.com/w40/bf.png" },
    { "name": "Burundi", "code": "+257", "flag": "https://flagcdn.com/w40/bi.png" },
    { "name": "Chile", "code": "+56", "flag": "https://flagcdn.com/w40/cl.png" },
    { "name": "China", "code": "+86", "flag": "https://flagcdn.com/w40/cn.png" },
    { "name": "Costa Rica", "code": "+506", "flag": "https://flagcdn.com/w40/cr.png" },
    { "name": "Dänemark", "code": "+45", "flag": "https://flagcdn.com/w40/dk.png" },
    { "name": "Deutschland", "code": "+49", "flag": "https://flagcdn.com/w40/de.png" },
    { "name": "Dominica", "code": "+1-767", "flag": "https://flagcdn.com/w40/dm.png" },
    { "name": "Dominikanische Republik", "code": "+1-809", "flag": "https://flagcdn.com/w40/do.png" },
    { "name": "Ecuador", "code": "+593", "flag": "https://flagcdn.com/w40/ec.png" },
    { "name": "El Salvador", "code": "+503", "flag": "https://flagcdn.com/w40/sv.png" },
    { "name": "Elfenbeinküste", "code": "+225", "flag": "https://flagcdn.com/w40/ci.png" },
    { "name": "Eritrea", "code": "+291", "flag": "https://flagcdn.com/w40/er.png" },
    { "name": "Estland", "code": "+372", "flag": "https://flagcdn.com/w40/ee.png" },
    { "name": "Fidschi", "code": "+679", "flag": "https://flagcdn.com/w40/fj.png" },
    { "name": "Finnland", "code": "+358", "flag": "https://flagcdn.com/w40/fi.png" },
    { "name": "Frankreich", "code": "+33", "flag": "https://flagcdn.com/w40/fr.png" },
    { "name": "Gabun", "code": "+241", "flag": "https://flagcdn.com/w40/ga.png" },
    { "name": "Gambia", "code": "+220", "flag": "https://flagcdn.com/w40/gm.png" },
    { "name": "Georgien", "code": "+995", "flag": "https://flagcdn.com/w40/ge.png" },
    { "name": "Ghana", "code": "+233", "flag": "https://flagcdn.com/w40/gh.png" },
    { "name": "Grenada", "code": "+1-473", "flag": "https://flagcdn.com/w40/gd.png" },
    { "name": "Griechenland", "code": "+30", "flag": "https://flagcdn.com/w40/gr.png" },
    { "name": "Großbritannien", "code": "+44", "flag": "https://flagcdn.com/w40/gb.png" },
    { "name": "Guatemala", "code": "+502", "flag": "https://flagcdn.com/w40/gt.png" },
    { "name": "Guinea", "code": "+224", "flag": "https://flagcdn.com/w40/gn.png" },
    { "name": "Guinea-Bissau", "code": "+245", "flag": "https://flagcdn.com/w40/gw.png" },
    { "name": "Guyana", "code": "+592", "flag": "https://flagcdn.com/w40/gy.png" },
    { "name": "Haiti", "code": "+509", "flag": "https://flagcdn.com/w40/ht.png" },
    { "name": "Honduras", "code": "+504", "flag": "https://flagcdn.com/w40/hn.png" },
    { "name": "Indien", "code": "+91", "flag": "https://flagcdn.com/w40/in.png" },
    { "name": "Indonesien", "code": "+62", "flag": "https://flagcdn.com/w40/id.png" },
    { "name": "Irak", "code": "+964", "flag": "https://flagcdn.com/w40/iq.png" },
    { "name": "Iran", "code": "+98", "flag": "https://flagcdn.com/w40/ir.png" },
    { "name": "Irland", "code": "+353", "flag": "https://flagcdn.com/w40/ie.png" },
    { "name": "Island", "code": "+354", "flag": "https://flagcdn.com/w40/is.png" },
    { "name": "Israel", "code": "+972", "flag": "https://flagcdn.com/w40/il.png" },
    { "name": "Italien", "code": "+39", "flag": "https://flagcdn.com/w40/it.png" },
    { "name": "Jamaika", "code": "+1-876", "flag": "https://flagcdn.com/w40/jm.png" },
    { "name": "Japan", "code": "+81", "flag": "https://flagcdn.com/w40/jp.png" },
    { "name": "Jemen", "code": "+967", "flag": "https://flagcdn.com/w40/ye.png" },
    { "name": "Jordanien", "code": "+962", "flag": "https://flagcdn.com/w40/jo.png" },
    { "name": "Kambodscha", "code": "+855", "flag": "https://flagcdn.com/w40/kh.png" },
    { "name": "Kamerun", "code": "+237", "flag": "https://flagcdn.com/w40/cm.png" },
    { "name": "Kanada", "code": "+1", "flag": "https://flagcdn.com/w40/ca.png" },
    { "name": "Kap Verde", "code": "+238", "flag": "https://flagcdn.com/w40/cv.png" },
    { "name": "Kasachstan", "code": "+7", "flag": "https://flagcdn.com/w40/kz.png" },
    { "name": "Katar", "code": "+974", "flag": "https://flagcdn.com/w40/qa.png" },
    { "name": "Kenia", "code": "+254", "flag": "https://flagcdn.com/w40/ke.png" },
    { "name": "Kirgisistan", "code": "+996", "flag": "https://flagcdn.com/w40/kg.png" },
    { "name": "Kiribati", "code": "+686", "flag": "https://flagcdn.com/w40/ki.png" },
    { "name": "Kolumbien", "code": "+57", "flag": "https://flagcdn.com/w40/co.png" },
    { "name": "Komoren", "code": "+269", "flag": "https://flagcdn.com/w40/km.png" },
    { "name": "Kongo-Brazzaville", "code": "+242", "flag": "https://flagcdn.com/w40/cg.png" },
    { "name": "Kongo-Kinshasa", "code": "+243", "flag": "https://flagcdn.com/w40/cd.png" },
    { "name": "Kroatien", "code": "+385", "flag": "https://flagcdn.com/w40/hr.png" },
    { "name": "Kuba", "code": "+53", "flag": "https://flagcdn.com/w40/cu.png" },
    { "name": "Kuwait", "code": "+965", "flag": "https://flagcdn.com/w40/kw.png" },
    { "name": "Laos", "code": "+856", "flag": "https://flagcdn.com/w40/la.png" },
    { "name": "Lesotho", "code": "+266", "flag": "https://flagcdn.com/w40/ls.png" },
    { "name": "Lettland", "code": "+371", "flag": "https://flagcdn.com/w40/lv.png" },
    { "name": "Libanon", "code": "+961", "flag": "https://flagcdn.com/w40/lb.png" },
  { "name": "Liberia", "code": "+231", "flag": "https://flagcdn.com/w40/lr.png" },
  { "name": "Libyen", "code": "+218", "flag": "https://flagcdn.com/w40/ly.png" },
  { "name": "Liechtenstein", "code": "+423", "flag": "https://flagcdn.com/w40/li.png" },
  { "name": "Litauen", "code": "+370", "flag": "https://flagcdn.com/w40/lt.png" },
  { "name": "Luxemburg", "code": "+352", "flag": "https://flagcdn.com/w40/lu.png" },
  { "name": "Madagaskar", "code": "+261", "flag": "https://flagcdn.com/w40/mg.png" },
  { "name": "Malawi", "code": "+265", "flag": "https://flagcdn.com/w40/mw.png" },
  { "name": "Malaysia", "code": "+60", "flag": "https://flagcdn.com/w40/my.png" },
  { "name": "Malediven", "code": "+960", "flag": "https://flagcdn.com/w40/mv.png" },
  { "name": "Mali", "code": "+223", "flag": "https://flagcdn.com/w40/ml.png" },
  { "name": "Malta", "code": "+356", "flag": "https://flagcdn.com/w40/mt.png" },
  { "name": "Marokko", "code": "+212", "flag": "https://flagcdn.com/w40/ma.png" },
  { "name": "Marshallinseln", "code": "+692", "flag": "https://flagcdn.com/w40/mh.png" },
  { "name": "Mauretanien", "code": "+222", "flag": "https://flagcdn.com/w40/mr.png" },
  { "name": "Mauritius", "code": "+230", "flag": "https://flagcdn.com/w40/mu.png" },
  { "name": "Mexiko", "code": "+52", "flag": "https://flagcdn.com/w40/mx.png" },
  { "name": "Mikronesien", "code": "+691", "flag": "https://flagcdn.com/w40/fm.png" },
  { "name": "Moldawien", "code": "+373", "flag": "https://flagcdn.com/w40/md.png" },
  { "name": "Monaco", "code": "+377", "flag": "https://flagcdn.com/w40/mc.png" },
  { "name": "Mongolei", "code": "+976", "flag": "https://flagcdn.com/w40/mn.png" },
  { "name": "Montenegro", "code": "+382", "flag": "https://flagcdn.com/w40/me.png" },
  { "name": "Mosambik", "code": "+258", "flag": "https://flagcdn.com/w40/mz.png" },
  { "name": "Myanmar", "code": "+95", "flag": "https://flagcdn.com/w40/mm.png" },
  { "name": "Namibia", "code": "+264", "flag": "https://flagcdn.com/w40/na.png" },
  { "name": "Nauru", "code": "+674", "flag": "https://flagcdn.com/w40/nr.png" },
  { "name": "Nepal", "code": "+977", "flag": "https://flagcdn.com/w40/np.png" },
  { "name": "Neuseeland", "code": "+64", "flag": "https://flagcdn.com/w40/nz.png" },
  { "name": "Nicaragua", "code": "+505", "flag": "https://flagcdn.com/w40/ni.png" },
  { "name": "Niger", "code": "+227", "flag": "https://flagcdn.com/w40/ne.png" },
  { "name": "Nigeria", "code": "+234", "flag": "https://flagcdn.com/w40/ng.png" },
  { "name": "Nordkorea", "code": "+850", "flag": "https://flagcdn.com/w40/kp.png" },
  { "name": "Norwegen", "code": "+47", "flag": "https://flagcdn.com/w40/no.png" },
  { "name": "Oman", "code": "+968", "flag": "https://flagcdn.com/w40/om.png" },
  { "name": "Pakistan", "code": "+92", "flag": "https://flagcdn.com/w40/pk.png" },
  { "name": "Palau", "code": "+680", "flag": "https://flagcdn.com/w40/pw.png" },
  { "name": "Palästina", "code": "+970", "flag": "https://flagcdn.com/w40/ps.png" },
  { "name": "Panama", "code": "+507", "flag": "https://flagcdn.com/w40/pa.png" },
  { "name": "Papua-Neuguinea", "code": "+675", "flag": "https://flagcdn.com/w40/pg.png" },
  { "name": "Paraguay", "code": "+595", "flag": "https://flagcdn.com/w40/py.png" },
  { "name": "Peru", "code": "+51", "flag": "https://flagcdn.com/w40/pe.png" },
  { "name": "Philippinen", "code": "+63", "flag": "https://flagcdn.com/w40/ph.png" },
  { "name": "Polen", "code": "+48", "flag": "https://flagcdn.com/w40/pl.png" },
  { "name": "Portugal", "code": "+351", "flag": "https://flagcdn.com/w40/pt.png" },
  { "name": "Ruanda", "code": "+250", "flag": "https://flagcdn.com/w40/rw.png" },
  { "name": "Rumänien", "code": "+40", "flag": "https://flagcdn.com/w40/ro.png" },
  { "name": "Russland", "code": "+7", "flag": "https://flagcdn.com/w40/ru.png" },
  { "name": "Salomonen", "code": "+677", "flag": "https://flagcdn.com/w40/sb.png" },
  { "name": "Sambia", "code": "+260", "flag": "https://flagcdn.com/w40/zm.png" },
  { "name": "Samoa", "code": "+685", "flag": "https://flagcdn.com/w40/ws.png" },
  { "name": "San Marino", "code": "+378", "flag": "https://flagcdn.com/w40/sm.png" },
  { "name": "Sao Tome und Principe", "code": "+239", "flag": "https://flagcdn.com/w40/st.png" },
  { "name": "Saudi-Arabien", "code": "+966", "flag": "https://flagcdn.com/w40/sa.png" },
  { "name": "Schweden", "code": "+46", "flag": "https://flagcdn.com/w40/se.png" },
  { "name": "Schweiz", "code": "+41", "flag": "https://flagcdn.com/w40/ch.png" },
  { "name": "Senegal", "code": "+221", "flag": "https://flagcdn.com/w40/sn.png" },
  { "name": "Serbien", "code": "+381", "flag": "https://flagcdn.com/w40/rs.png" },
  { "name": "Seychellen", "code": "+248", "flag": "https://flagcdn.com/w40/sc.png" },
  { "name": "Sierra Leone", "code": "+232", "flag": "https://flagcdn.com/w40/sl.png" },
  { "name": "Singapur", "code": "+65", "flag": "https://flagcdn.com/w40/sg.png" },
  { "name": "Slowakei", "code": "+421", "flag": "https://flagcdn.com/w40/sk.png" },
  { "name": "Slowenien", "code": "+386", "flag": "https://flagcdn.com/w40/si.png" },
  { "name": "Somalia", "code": "+252", "flag": "https://flagcdn.com/w40/so.png" },
  { "name": "Spanien", "code": "+34", "flag": "https://flagcdn.com/w40/es.png" },
  { "name": "Sri Lanka", "code": "+94", "flag": "https://flagcdn.com/w40/lk.png" },
  { "name": "St. Kitts und Nevis", "code": "+1-869", "flag": "https://flagcdn.com/w40/kn.png" },
  { "name": "St. Lucia", "code": "+1-758", "flag": "https://flagcdn.com/w40/lc.png" },
  { "name": "St. Vincent und die Grenadinen", "code": "+1-784", "flag": "https://flagcdn.com/w40/vc.png" },
  { "name": "Südafrika", "code": "+27", "flag": "https://flagcdn.com/w40/za.png" },
  { "name": "Südkorea", "code": "+82", "flag": "https://flagcdn.com/w40/kr.png" },
  { "name": "Südsudan", "code": "+211", "flag": "https://flagcdn.com/w40/ss.png" },
  { "name": "Suriname", "code": "+597", "flag": "https://flagcdn.com/w40/sr.png" },
  { "name": "Swasiland", "code": "+268", "flag": "https://flagcdn.com/w40/sz.png" },
  { "name": "Tadschikistan", "code": "+992", "flag": "https://flagcdn.com/w40/tj.png" },
  { "name": "Tansania", "code": "+255", "flag": "https://flagcdn.com/w40/tz.png" },
  { "name": "Thailand", "code": "+66", "flag": "https://flagcdn.com/w40/th.png" },
  { "name": "Togo", "code": "+228", "flag": "https://flagcdn.com/w40/tg.png" },
  { "name": "Tonga", "code": "+676", "flag": "https://flagcdn.com/w40/to.png" },
  { "name": "Trinidad und Tobago", "code": "+1-868", "flag": "https://flagcdn.com/w40/tt.png" },
  { "name": "Tunesien", "code": "+216", "flag": "https://flagcdn.com/w40/tn.png" },
  { "name": "Türkei", "code": "+90", "flag": "https://flagcdn.com/w40/tr.png" },
  { "name": "Turkmenistan", "code": "+993", "flag": "https://flagcdn.com/w40/tm.png" },
  { "name": "Tuvalu", "code": "+688", "flag": "https://flagcdn.com/w40/tv.png" },
  { "name": "Uganda", "code": "+256", "flag": "https://flagcdn.com/w40/ug.png" },
  { "name": "Ukraine", "code": "+380", "flag": "https://flagcdn.com/w40/ua.png" },
  { "name": "Ungarn", "code": "+36", "flag": "https://flagcdn.com/w40/hu.png" },
  { "name": "Uruguay", "code": "+598", "flag": "https://flagcdn.com/w40/uy.png" },
  { "name": "Usbekistan", "code": "+998", "flag": "https://flagcdn.com/w40/uz.png" },
  { "name": "Vanuatu", "code": "+678", "flag": "https://flagcdn.com/w40/vu.png" },
  { "name": "Vatikanstadt", "code": "+379", "flag": "https://flagcdn.com/w40/va.png" },
  { "name": "Venezuela", "code": "+58", "flag": "https://flagcdn.com/w40/ve.png" },
  { "name": "Vereinigte Staaten", "code": "+1", "flag": "https://flagcdn.com/w40/us.png" },
  { "name": "Vietnam", "code": "+84", "flag": "https://flagcdn.com/w40/vn.png" },
  { "name": "Zentralafrikanische Republik", "code": "+236", "flag": "https://flagcdn.com/w40/cf.png" },
  { "name": "Zypern", "code": "+357", "flag": "https://flagcdn.com/w40/cy.png" },
  { "name": "Österreich", "code": "+43", "flag": "https://flagcdn.com/w40/at.png" }
      ];
  
      const selected = document.getElementById("selectedOption");
      const optionsList = document.getElementById("optionsList");
      const countryOptions = document.getElementById("countryOptions");
      const inputHidden = document.getElementById("countryCodeInput");
      const searchInput = document.getElementById("countrySearch");
  
      function renderCountries(countriesToRender) {
        countryOptions.innerHTML = '';
  
        if (countriesToRender.length === 0) {
          countryOptions.innerHTML = '<div class="no-results">Keine Länder gefunden</div>';
          return;
        }
  
        countriesToRender.forEach(country => {
          const option = document.createElement('div');
          option.className = 'option';
          option.setAttribute('data-value', country.code);
          option.setAttribute('data-flag', country.flag);
          option.innerHTML = `<img src="${country.flag}" alt="${country.name}"> ${country.code} ${country.name}`;
          countryOptions.appendChild(option);
        });
  
        document.querySelectorAll(".option").forEach(option => {
          option.addEventListener("click", () => {
            const flag = option.getAttribute("data-flag");
            const value = option.getAttribute("data-value");
            const text = option.textContent;
  
            selected.innerHTML = `<img src="${flag}"> <span>${text.trim()}</span>`;
            inputHidden.value = value;
            optionsList.style.display = "none";
          });
        });
      }
  
      renderCountries(countries);
  
      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = countries.filter(country =>
          country.name.toLowerCase().includes(searchTerm) ||
          country.code.includes(searchTerm)
        );
        renderCountries(filtered);
      });
  
      selected.addEventListener("click", () => {
        optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
        if (optionsList.style.display === "block") {
          searchInput.focus();
        }
      });
  
      document.addEventListener("click", function(e) {
        if (!document.getElementById("countrySelect").contains(e.target)) {
          optionsList.style.display = "none";
        }
      });