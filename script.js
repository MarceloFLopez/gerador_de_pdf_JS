function addFooter(doc, pageNumber) {
    // Adiciona uma linha horizontal
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const margin = 10;
    const lineY = pageHeight - 20; // Altura onde a linha será desenhada
    
    doc.setDrawColor(0, 0, 0); // Cor da linha (preto)
    doc.setLineWidth(0.5); // Largura da linha
    doc.line(margin, lineY, pageWidth - margin, lineY); // Linha horizontal
    
    // Adiciona o texto centralizado abaixo da linha
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal'); // Fonte do texto
    const footerText = 'Gerado por: Focus Desenvolvimento de Sistemas LTDA - Sistema Saúde Versão Atual: 2.1.7.40';
    const textWidth = doc.getTextWidth(footerText); // Largura do texto
    const textX = (pageWidth - textWidth) / 2; // Calcula a posição X para centralizar o texto
    
    doc.text(footerText, textX, lineY + 10); // Texto centralizado abaixo da linha
}


document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;

    // Dados das clínicas
    const clinics = [
{ name: "Clínica Vida e Saúde", address: "Rua Abraão Martini, 1985", phone: "(11) 99876-5432", cep: "13274-465", uf: "SP" },
{ name: "Centro de Saúde Total", address: "Avenida Paulista, 1300", phone: "(11) 99765-4321", cep: "01310-123", uf: "SP" },
{ name: "Clínica Bem-Estar", address: "Rua das Palmeiras, 55", phone: "(11) 99654-3210", cep: "06720-456", uf: "SP" },
{ name: "Saúde em Foco", address: "Rua do Comércio, 207", phone: "(11) 99543-2109", cep: "06730-789", uf: "SP" },
{ name: "Clínica Saúde Plena", address: "Avenida Rio Branco, 120", phone: "(11) 99432-1098", cep: "06740-321", uf: "SP" },
{ name: "Centro Clínico Esperança", address: "Rua das Flores, 88", phone: "(11) 99321-0987", cep: "06750-654", uf: "SP" },
{ name: "Clínica Vitalidade", address: "Rua dos Ipês, 500", phone: "(11) 99210-9876", cep: "06760-987", uf: "SP" },
{ name: "Saúde Total", address: "Avenida São João, 300", phone: "(11) 99109-8765", cep: "06770-543", uf: "SP" },
{ name: "Clínica Harmonia", address: "Rua das Orquídeas, 75", phone: "(11) 99098-7654", cep: "06780-210", uf: "SP" },
{ name: "Centro de Bem-Estar", address: "Rua dos Jacarandás, 140", phone: "(11) 98987-6543", cep: "06790-876", uf: "SP" },
{ name: "Clínica Nova Vida", address: "Avenida das Nações, 415", phone: "(11) 98876-5432", cep: "06800-432", uf: "SP" },
{ name: "Saúde Integrada", address: "Rua do Limoeiro, 230", phone: "(11) 98765-4321", cep: "06810-123", uf: "SP" },
{ name: "Clínica Vital", address: "Avenida Liberdade, 500", phone: "(11) 98654-3210", cep: "06820-654", uf: "SP" },
{ name: "Centro de Saúde e Vida", address: "Rua São Pedro, 777", phone: "(11) 98543-2109", cep: "06830-987", uf: "SP" },
{ name: "Clínica Equilíbrio", address: "Rua do Bosque, 600", phone: "(11) 98432-1098", cep: "06840-321", uf: "SP" },
{ name: "Saúde e Bem-Estar", address: "Avenida das Palmeiras, 89", phone: "(11) 98321-0987", cep: "06850-654", uf: "SP" }
    ];

    const patients = [
{ name: "Paulo Palhares", age: 8, address: "Avenida Hélio Pellegrino", number: 616 },
{ name: "Adriana Deniz Brito", age: 41, address: "Rua Oregon", number: 167 },
{ name: "Icaro Levi Bandeira do Nascimento", age: 2, address: "Rua Genebra", number: 149 },
{ name: "Conegundes Esteves Nascimento Neto", age: 24, address: "Rua Genebra", number: 149 },
{ name: "Alessandro Tavares", age: 8, address: "Viela das Pedras", number: 686 },
{ name: "Bento Barreira", age: 11, address: "Rua das Figueiras", number: 1015 },
{ name: "Miguel da Rocha", age: 10, address: "Viela dos Girassóis", number: 792 },
{ name: "Lucca Carneiro", age: 10, address: "Rua dos Três Irmãos", number: 192 },
{ name: "Arthur Henrique de Oliveira", age: 10, address: "Rua dos Pimentas", number: 560 },
{ name: "Sophia Paes", age: 11, address: "Alameda Santos", number: 287 },
{ name: "Nicolas Lagoa", age: 9, address: "Alameda das Palmeiras", number: 729 },
{ name: "Clarice Porteira", age: 33, address: "Rua dos Três Lagos", number: 984 },
{ name: "Clarice Freitas", age: 33, address: "Rua da Consolação", number: 712 },
{ name: "Ana Beatriz Teles", age: 29, address: "Rua Augusta", number: 886 },
{ name: "Sônia Tavares", age: 32, address: "Rua João Cachoeira", number: 954 },
{ name: "João Oliveira", age: 32, address: "Travessa do Arouche", number: 890 },
{ name: "Nathan Chaves da Silva", age: 31, address: "Alameda Jaú", number: 222 },
{ name: "Andréia Lima", age: 31, address: "Rua das Perdizes", number: 778 },
{ name: "Vinicius da Aldeia", age: 35, address: "Avenida Paulista", number: 353 },
{ name: "Eliane Souza", age: 35, address: "Rua dos Bandeirantes", number: 676 },
{ name: "Davi Miguel Banheira", age: 43, address: "Rua das Laranjeiras", number: 183 },
{ name: "Milena Santana", age: 43, address: "Alameda Lorena", number: 745 },
{ name: "Débora Barbosa", age: 43, address: "Rua da Paz", number: 434 },
{ name: "Pedro Cavalcanti", age: 41, address: "Alameda dos Anapurus", number: 492 },
{ name: "Leandro Lima", age: 44, address: "Rua dos Orfanatos", number: 178 },
{ name: "Davi Luca Jaques", age: 45, address: "Rua dos Caiapis", number: 712 },
{ name: "Emanuel Quarteira Neto", age: 42, address: "Avenida São João", number: 927 },
{ name: "Benjamin da Cunha Santos", age: 38, address: "Rua Ipiranga", number: 294 },
{ name: "Lucas Almeida", age: 37, address: "Rua da Mooca", number: 958 },
{ name: "Ana Vitória Lavra", age: 20, address: "Rua Vinte e Cinco de Março", number: 956 },
{ name: "Felipe Almada", age: 19, address: "Ponte das Bandeiras", number: 652 },
{ name: "Luan Tomás Alcântara", age: 19, address: "Ponte do Aricanduva", number: 295 },
{ name: "Tatiane Costa", age: 19, address: "Avenida 9 de Julho", number: 128 },
{ name: "Enzo Neto", age: 17, address: "Viela dos Corais", number: 353 },
{ name: "Henry Leiria Neto", age: 18, address: "Rua da Liberdade", number: 542 },
{ name: "Viviane Ramos", age: 78, address: "Rua dos Três Corações", number: 556 },
{ name: "Miriam Santos", age: 78, address: "Avenida Cruzeiro do Sul", number: 779 },
{ name: "Melissa Melo", age: 78, address: "Rua dos Girassóis", number: 935 },
{ name: "Samara Oliveira", age: 78, address: "Rua dos Lírios", number: 195 },
{ name: "Aline Soares", age: 75, address: "Viela dos Robles", number: 407 },
{ name: "Aurora Barreira", age: 73, address: "Rua da Esperança", number: 117 },
{ name: "Aurora da Paz", age: 72, address: "Alameda dos Anjos", number: 868 },
{ name: "Lara Novaes", age: 72, address: "Rua dos Veranicos", number: 407 },
{ name: "Enzo Lucena", age: 77, address: "Avenida Brigadeiro Faria Lima", number: 895 },
{ name: "Melissa Godins", age: 83, address: "Rua Doutor Arnaldo", number: 120 },
{ name: "Maria Clara Brum", age: 83, address: "Travessa Augusta", number: 266 },
{ name: "Francisco Ribeiro", age: 83, address: "Alameda dos Colibris", number: 682 },
{ name: "Vinícius da Madureira", age: 81, address: "Viela das Camélias", number: 640 },
{ name: "Noah Ramalho", age: 81, address: "Rua dos Anjos", number: 333 },
{ name: "Nathan Mafra", age: 82, address: "Viela das Orquídeas", number: 362 },
{ name: "Leandro Lins", age: 84, address: "Rua das Flores", number: 882 },
{ name: "Fernando Carvalho", age: 84, address: "Rua dos Jatobás", number: 920 },
{ name: "Murilo Lins", age: 85, address: "Avenida das Nações", number: 838 },
{ name: "Vicente Palhares", age: 86, address: "Travessa da Esperança", number: 544 },
{ name: "Elisa Henrique Simas", age: 86, address: "Rua dos Pinheiros", number: 605 },
{ name: "Sirineu Porto", age: 86, address: "Rua dos Bosques", number: 408 },
{ name: "Lorenzo Almeida", age: 88, address: "Rua das Palmeiras", number: 313 },
{ name: "Matheus Quarteira", age: 89, address: "Avenida São Luís", number: 209 },
{ name: "Luiza Tavares", age: 90, address: "Rua Vinte e Cinco de Março", number: 759 },
{ name: "João Pedro Garcez Neto", age: 68, address: "Ponte do Jaguaré", number: 128 },
{ name: "Isabella Henriques", age: 69, address: "Rua Helena", number: 948 },
{ name: "Fabrícia Pires", age: 64, address: "Ponte do Limão", number: 438 },
{ name: "Lívia Andrade", age: 63, address: "Rua dos Jardins", number: 220 },
{ name: "Luiz Gustavo Alves", age: 61, address: "Alameda dos Pássaros", number: 928 },
{ name: "Nataniel Bentes", age: 60, address: "Viela dos Cedros", number: 947 },
{ name: "Mariana Tavares", age: 60, address: "Rua dos Miosótis", number: 768 },
{ name: "Catarina Silva", age: 54, address: "Rua dos Jacarandás", number: 703 },
{ name: "Daniela Alves", age: 51, address: "Rua das Azaleias", number: 818 },
{ name: "Isis Brum Jr.", age: 51, address: "Ponte dos Alpes", number: 746 },
{ name: "Fernando Guedes", age: 52, address: "Travessa dos Coqueiros", number: 408 },
{ name: "Thais Martins", age: 52, address: "Rua dos Pinhais", number: 467 },
{ name: "Rebeca Garcia", age: 50, address: "Rua dos Imbés", number: 746 },
{ name: "Breno Limeira", age: 49, address: "Rua dos Moinhos", number: 665 },
{ name: "Isabel Ribeiro", age: 49, address: "Travessa dos Sabiás", number: 468 },
{ name: "João Guilherme Marques", age: 30, address: "Alameda dos Jasmins", number: 763 },
{ name: "Ana Luísa da Silva", age: 21, address: "Rua das Rosas", number: 951 },
{ name: "Vicente Mafra", age: 21, address: "Rua dos Girassóis", number: 769 },
{ name: "Giovana Rodrigues", age: 23, address: "Rua das Violetas", number: 978 },
{ name: "Clarice Machado", age: 25, address: "Rua dos Lírios", number: 505 },
{ name: "Henrique Grotas", age: 25, address: "Rua dos Girassóis", number: 691 },
{ name: "Bárbara Soeira", age: 56, address: "Travessa dos Ficus", number: 275 },
{ name: "Alice Almeida", age: 56, address: "Rua das Magnólias", number: 930 },
{ name: "André Porto", age: 59, address: "Viela dos Girassóis", number: 868 },
{ name: "Milena Leal", age: 59, address: "Rua das Begônias", number: 373 },
{ name: "Nicolas Godoy", age: 39, address: "Alameda das Hortênsias", number: 528 },
{ name: "Eduarda Cruz", age: 29, address: "Travessa dos Coqueiros", number: 872 },
{ name: "Kauê Lemos", age: 29, address: "Rua dos Magnólias", number: 886 },
{ name: "Malu Freitas", age: 4, address: "Avenida dos Imigrantes", number: 773 },
{ name: "Lívia Andrade", age: 63, address: "Rua dos Jardins", number: 220 },
{ name: "Matheus Quarteira", age: 89, address: "Avenida São Luís", number: 209 }

        // ... Adicione o restante dos pacientes aqui
    ];

    const medicaments = [
        { name: "Amoxicilina 250mg/5ml 150ml", posology: "Tomar 5ml a cada 8 horas durante 7 dias" },
        { name: "Amoxicilina 400mg/5ml 100ml", posology: "Tomar 5ml a cada 8 horas durante 7 dias" },
        { name: "Amoxicilina 2500mg/5ml + Clavulanato 75ml 70ml", posology: "Tomar 5ml a cada 8 horas durante 7 dias" },
        { name: "Amoxicilina 400mg/5ml + Clavulanato 70ml 70ml", posology: "Tomar 5ml a cada 8 horas durante 7 dias" },
        { name: "Amoxicilina 500mg 21cps ", posology: "Tomar 1cp a cada 8 horas durante 7 dias" },
        { name: "Amoxicilina 875mg 14cps ", posology: "Tomar 1cp a cada 12 horas durante 7 dias" },
        { name: "Amoxicilina 500mg + Clavulanato 30cps", posology: "Tomar 1cp a cada 8 horas durante 7 dias" },
        { name: "Amoxicilina 875mg + Clavulanato 20cps ", posology: "Tomar 1cp a cada 12 horas durante 7 dias" },        
        { name: "Axetilcefuroxina 250mg 21cps ", posology: "Tomar 1cp a cada 8 horas durante 7 dias" },
        { name: "Axetilcefuroxina 500mg 14cps ", posology: "Tomar 1cp a cada 12 horas durante 7 dias" },
        { name: "Azitromicina 500mg 5cps ", posology: "Tomar 1cp ao dia durante 5 dias" },
        { name: "Azitromicina 200mg/5ml 15ml", posology: "Tomar 3ml ao dia durante 7 dias" },
        { name: "Azitromicina 200mg/5ml 22,5ml", posology: "Tomar 5ml ao dia durante 7 dias" },
        { name: "Bactrin 20cps ", posology: "Tomar 2cp a cada 12 horas durante 7 dias" },
        { name: "Bactrin F 20cps ", posology: "Tomar 1cp a cada 12 horas durante 7 dias" },
        { name: "Bactrin suspens ", posology: "Tomar 5ml a cada 12 horas durante 7 dias" },
        { name: "Bactroban 20mg/g pom 10g", posology: "Passar no local 4 vezes por dia durante 7 dias" },
	            { name: "Benzetacil 4ml", posology: "Aplicar IM dose unica" },
        { name: "Bactrin F suspens ", posology: "Tomar 5ml a cada 12 horas durante 7 dias" },
        { name: "Cefalexina 500mg 28cps ", posology: "Tomar 1cp a cada 6 horas durante 7 dias" },
        { name: "Cefalexina 200mg/5ml 15ml", posology: "Tomar 5ml a cada 8 horas durante 7 dias" },	
	{ name: "Ciprofloxacino 500mg 14cp ", posology: "Tomar 1cp a cada 12 horas durante 7 dias" },
        { name: "Clavulim 400ml 70ml", posology: "Tomar 5ml a cada 12 horas durante 7 dias" },
        { name: "Clavulim BD 875mg 14cp ", posology: "Tomar 1 cp a cada 12 horas durante 7 dias" },
        { name: "Clavulim BD 875mg 20cp ", posology: "Tomar 1 cp a cada 12 horas durante 10 dias" },
	{ name: "Claritromicina 500mg 10cps ", posology: "Tomar 1cp a cada 12 horas durante 5 dias" },	
	{ name: "Clindamicina 300mg 16cp ", posology: "Tomar 1cp a cada 12 horas durante 7 dias" },
	{ name: "Kollagenase + Clorafenicol creme ", posology: "Passar no local 4 vezes ao dia durante 7 dias" },
	{ name: "Levofloxacino 500mg 7cp ", posology: "Tomar 1cp ao dia durante 7 dias" },
	{ name: "Levofloxacino 750mg 7cp ", posology: "Tomar 1cp ao dia durante 7 dias" },
	{ name: "Benzoilmetronidazol 40mg/ml 120ml ", posology: "Tomar 5ml a cada 12 horas durante 7 dias" },
	{ name: "Metronidazol 250mg 14cp ", posology: "Tomar 1cp a cada 12 horas durante 7 dias" },
	{ name: "Metronidazol 400mg 14cp ", posology: "Tomar 1cp a cada 12 horas durante 7 dias" },
	{ name: "Metronidazol Gel Vaginal ", posology: "Aplicar a noite durante 7 noites" },
	{ name: "Metronidazol + Nistatina Gel Vaginal", posology: "Aplicar a noite durante 7 noites" },
	{ name: "Mupirocina", posology: "Aplicar no local 3 vezes por dia durante 7 dias" },
	{ name: "Nitrofurntoina 100mg 28cps", posology: "Tomar 1 comprimido a cadao 8 horas durante 7 dias" },
	{ name: "Norfloxacino 500mg 14cp ", posology: "pingar 1 gota em cada olho a cada 6 horas durante 7 dias" },
	{ name: "Tobramicina 0,5mg/ml colirio ", posology: "pingar  gota a cada 6 horas durante 7 dias" },
	{ name: "Tobradex colirio ", posology: "pingar  gota a cada 6 horas durante 7 dias" },	
	{ name: "Vigadex colirio ", posology: "pingar  gota a cada 6 horas durante 7 dias" },
	{ name: "Vigamox colirio ", posology: "pingar 1 gota a cada 6 horas durante 7 dias" },	
        { name: "Dipirona gotas", posology: "Tomar 25 gotas a cada 6 horas se dor ou febre" }, // Medicamento estático 1
        { name: "Dexametasona Elixir", posology: "Tomar 5ml a cada 12 horas durante 4 dias" }, // Medicamento estático 2
 
    ];

    const clinicSelect = document.getElementById('clinic-select');
    const patientSelect = document.getElementById('patient-select');
    const medicamentSelect = document.getElementById('medicament-select');

    // Adiciona opções à lista suspensa de clínicas
    clinics.forEach((clinic, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = clinic.name;
        clinicSelect.appendChild(option);
    });

// Adiciona opções à lista suspensa de pacientes
patients.forEach((patient, index) => {
    const option = document.createElement('option');
    option.value = index;
    // Ajusta o texto para incluir o nome e a idade do paciente
    option.textContent = `${patient.name} (Idade: ${patient.age})`;
    patientSelect.appendChild(option);
});

    // Adiciona opções à lista suspensa de medicamentos
    medicaments.forEach((medicament, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = medicament.name;
        medicamentSelect.appendChild(option);
    });

    // Preenche os dados da clínica no formulário quando uma clínica é selecionada
    clinicSelect.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        const selectedClinic = clinics[selectedIndex];
        document.getElementById('clinic-name').value = selectedClinic.name;
        document.getElementById('clinic-address').value = selectedClinic.address;
        document.getElementById('clinic-phone').value = selectedClinic.phone;
        document.getElementById('clinic-cep').value = selectedClinic.cep;
        document.getElementById('clinic-uf').value = selectedClinic.uf;
    });

    // Preenche os dados do paciente no formulário quando um paciente é selecionado
    patientSelect.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        const selectedPatient = patients[selectedIndex];
        document.getElementById('patient-name').value = selectedPatient.name;
        document.getElementById('patient-age').value = selectedPatient.age;
        document.getElementById('patient-address').value = selectedPatient.address;
        document.getElementById('patient-number').value = selectedPatient.number;
    });

    // Preenche os dados do medicamento no formulário quando um medicamento é selecionado
    medicamentSelect.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        const selectedMedicament = medicaments[selectedIndex];
        document.getElementById('medicament-name').value = selectedMedicament.name;
        document.getElementById('medicament-posology').value = selectedMedicament.posology;
    });

    // Define a função no escopo global
    window.generatePDF = () => {
        const doc = new jsPDF();

        // Defina uma fonte padrão e tamanhos
        doc.setFont('Helvetica');

        // Margens e espaçamento
        const margin = 10;
        const lineHeight = 4; // Reduzido para menor espaçamento entre linhas
        const pageWidth = doc.internal.pageSize.width;

        // Adiciona um título centralizado
        doc.setFontSize(18);
        doc.text('Receituário', pageWidth / 2, margin, { align: 'center' });
        doc.setFontSize(8); // Define o tamanho da fonte para a div

        let y = margin + 15;

        // Dados da Clínica
        const clinicName = document.getElementById('clinic-name').value;
        const clinicAddress = document.getElementById('clinic-address').value;
        const clinicPhone = document.getElementById('clinic-phone').value;
        const clinicCep = document.getElementById('clinic-cep').value;
        const clinicUf = document.getElementById('clinic-uf').value;

        const boxMargin = 4; // Margem dentro da div
        const boxWidth = pageWidth - 2 * margin;
        const boxHeight = 18; // Altura ajustada para caber o conteúdo
        const boxX = margin;
        const boxY = y;

        // Desenha a borda ao redor dos dados da clínica
        doc.setDrawColor(0);
        doc.setLineWidth(0.3); // Largura da borda reduzida
        doc.rect(boxX, boxY, boxWidth, boxHeight);

        // Adiciona um fundo branco dentro da borda
        doc.setFillColor(255, 255, 255);
        doc.rect(boxX + 1, boxY + 1, boxWidth - 2, boxHeight - 2, 'F');

        // Adiciona o texto dentro da borda e organiza em duas linhas
        doc.setFontSize(8); // Ajusta a fonte para ser menor

        // Nome e Endereço na mesma linha (centralizado horizontalmente)
        const nameAndAddress = `Clínica: ${clinicName} - Endereço: ${clinicAddress} - CEP: ${clinicCep}`;
        const nameAddressWidth = doc.getTextWidth(nameAndAddress);
        const nameAddressX = boxX + (boxWidth - nameAddressWidth) / 2;
        doc.text(nameAndAddress, nameAddressX, boxY + boxHeight / 2 - lineHeight);

        // Telefone e UF na linha de baixo (centralizado horizontalmente)
        const contactInfo = `Telefone: ${clinicPhone} - UF: ${clinicUf}`;
        const contactInfoWidth = doc.getTextWidth(contactInfo);
        const contactInfoX = boxX + (boxWidth - contactInfoWidth) / 2;
        doc.text(contactInfo, contactInfoX, boxY + boxHeight / 2 + lineHeight);

        // Move a posição do cursor para baixo após o bloco da clínica
        y += boxHeight + 10; // Ajusta o espaçamento entre os blocos

        // Adiciona o título "Dados do Paciente" centralizado
        doc.setFontSize(16); // Ajusta o tamanho da fonte do título
        const title = 'Dados do Paciente';
        const titleWidth = doc.getTextWidth(title);
        const titleX = margin + (boxWidth - titleWidth) / 2;
        doc.text(title, titleX, y);

        // Move a posição do cursor para baixo após o título
        y += 10; // Espaçamento abaixo do título

        // Dados do Paciente
        const patientName = document.getElementById('patient-name').value;
        const patientAge = document.getElementById('patient-age').value;
        const patientAddress = document.getElementById('patient-address').value;
        const patientNumber = document.getElementById('patient-number').value;

        // Desenha a borda ao redor dos dados do paciente
        doc.setDrawColor(0);
        doc.setLineWidth(0.3); // Largura da borda reduzida
        doc.rect(boxX, y, boxWidth, boxHeight);

        // Adiciona um fundo branco dentro da borda
        doc.setFillColor(255, 255, 255);
        doc.rect(boxX + 1, y + 1, boxWidth - 2, boxHeight - 2, 'F');

        // Adiciona o texto dentro da borda e organiza em colunas
        doc.setFontSize(8); // Ajusta a fonte para ser menor
        doc.text(`Nome: ${patientName}`, boxX + boxMargin, y + boxMargin);
        doc.text(`Idade: ${patientAge}`, boxX + boxMargin, y + boxMargin + lineHeight);
        doc.text(`Endereço: ${patientAddress}`, boxX + boxMargin, y + boxMargin + 2 * lineHeight);
        doc.text(`Número: ${patientNumber}`, boxX + boxMargin, y + boxMargin + 3 * lineHeight);

        // Move a posição do cursor para baixo após o bloco do paciente
        y += boxHeight + 10;

        // Adiciona o título "Prescrição de Medicamentos" centralizado
        doc.setFontSize(16); // Ajusta o tamanho da fonte do título
        const medTitle = 'Medicamentos';
        const medTitleWidth = doc.getTextWidth(medTitle);
        const medTitleX = margin + (boxWidth - medTitleWidth) / 2;
        doc.text(medTitle, medTitleX, y);

        // Move a posição do cursor para baixo após o título
        y += 10; // Espaçamento abaixo do título

        // Dados dos Medicamentos
        doc.setFontSize(8); // Ajusta a fonte para ser menor

        // Medicamento Selecionado
        const medicamentName = document.getElementById('medicament-name').value;
        const medicamentPosology = document.getElementById('medicament-posology').value;

        // Define a altura da caixa para os medicamentos
        const medicamentBoxHeight = 18; // Altura da caixa para os medicamentos

        // Adiciona o texto do medicamento selecionado
        doc.text(`1 - ${medicamentName}`, boxX + boxMargin, y + boxMargin);
        doc.text(`Posologia: ${medicamentPosology}`, boxX + boxMargin, y + boxMargin + lineHeight);

        // Move a posição do cursor para baixo após o bloco do medicamento
        y += medicamentBoxHeight + 5;

        // Medicamento 2 (estático)
        const medicament2Name = "Dipirona gotas";
        const medicament2Posology = "25 gotas a cada 6 horas se dor ou febre";

        // Adiciona o texto do medicamento 2
        doc.text(`2 - ${medicament2Name}`, boxX + boxMargin, y + boxMargin);
        doc.text(`Posologia: ${medicament2Posology}`, boxX + boxMargin, y + boxMargin + lineHeight);

        // Move a posição do cursor para baixo após o bloco do medicamento 2
        y += medicamentBoxHeight + 5;

        // Medicamento 3 (estático)
        const medicament3Name = "Dexametasona Elixir";
        const medicament3Posology = "5ml a cada 12 horas durante 4 dias";

        // Adiciona o texto do medicamento 3
        doc.text(`3 - ${medicament3Name}`, boxX + boxMargin, y + boxMargin);
        doc.text(`Posologia: ${medicament3Posology}`, boxX + boxMargin, y + boxMargin + lineHeight);

        // Move a posição do cursor para baixo após o bloco do medicamento 3
        y += medicamentBoxHeight + 10;

        // Adiciona a linha de assinatura e carimbo no canto direito
        y += 10; // Move para baixo após o título
        const lineStartX = pageWidth - margin - 60; // Ajuste a posição da linha
        const lineEndX = pageWidth - margin;
        doc.setLineWidth(0.5);
        doc.line(lineStartX, y, lineEndX, y); // Linha para o carimbo

        // Adiciona a linha de assinatura e carimbo no canto direito
        doc.setFontSize(12); // Ajusta o tamanho da fonte para a assinatura
        const signatureTitle = 'Assinatura e Carimbo';
        const signatureTitleWidth = doc.getTextWidth(signatureTitle);
        const signatureTitleX = pageWidth - margin - signatureTitleWidth;
        doc.setFontSize(10); // Tamanho da fonte menor para o texto
        doc.text(signatureTitle, signatureTitleX, y + 5); // Ajusta a posição para baixo

// Adiciona o título


    // Adiciona o footer à primeira página
    addFooter(doc, 1);


    // Salva o PDF
    doc.save('Relatório.pdf');

    };
});
