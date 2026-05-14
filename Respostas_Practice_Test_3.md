# Respostas - Satender Kumar Practice Test 3 - CompTIA Security+ (SY0-701)

Abaixo estão as respostas para as questões do Teste 3:

**1. B**
- **Motivo (Certa):** O ataque descrito é um phishing direcionado (*Spear Phishing*) que entrega um ransomware. Como o ataque explora a confiança do utilizador num fornecedor conhecido, a defesa mais eficaz é o **Treino de Sensibilização (User Training)**. Educar os funcionários para desconfiarem de faturas inesperadas e verificarem remetentes é a melhor forma de impedir que o anexo seja aberto.
- **Por que as outras estão erradas:**
  - **A (Vulnerability scanning):** Deteta falhas de software, mas não impede um utilizador de abrir um ficheiro malicioso que ele próprio autorizou.
  - **C (IPS):** Pode detetar a comunicação do ransomware com o servidor do atacante, mas geralmente não impede o utilizador de abrir um anexo de e-mail legítimo aos olhos do sistema.
  - **D (Blocking all attachments):** Seria eficaz, mas é impraticável para o funcionamento normal de uma empresa moderna.

**2. C**
- **Motivo (Certa):** Um *Next-Generation Firewall (NGFW)* diferencia-se das tradicionais por possuir **Deep Packet Inspection (DPI)**. Isto permite-lhe subir até à camada de Aplicação (Layer 7) para inspecionar o conteúdo real do tráfego (ex: identificar que um tráfego na porta 80 não é web, mas sim um ataque) e bloquear ameaças complexas.
- **Por que as outras estão erradas:**
  - **A (Stateful firewall):** Monitoriza o estado das ligações (handshake), mas não inspeciona o conteúdo da camada de aplicação.
  - **B (Packet-filtering):** Apenas olha para cabeçalhos (IP/Porta), sendo a forma mais básica de firewall.
  - **D (Circuit-level gateway):** Trabalha na camada de sessão para validar handshakes TCP, sem inspecionar dados.

**3. B**
- **Motivo (Certa):** O objetivo central de um **SIEM** é a agregação de logs de múltiplas fontes para realizar a **Correlação de Eventos**. Ele analisa estes dados em tempo real para detetar padrões que, isoladamente, pareceriam normais, mas que juntos indicam um incidente de segurança.
- **Por que as outras estão erradas:**
  - **A (Encrypt data):** SIEM monitoriza e reporta; a encriptação é feita por ferramentas de cifra.
  - **C (Prevent malware on endpoints):** Esta é a função do Antivírus ou EDR.
  - **D (Automate vulnerability management):** Focado em scanners de vulnerabilidades; o SIEM foca em eventos ativos.

**4. B**
- **Motivo (Certa):** Se o atacante conseguiu entrar apenas adivinhando a senha, a defesa mais forte é o **Multi-factor Authentication (MFA)**. Mesmo que a senha seja fraca e descoberta, o atacante será bloqueado por não possuir o segundo fator (ex: código no telemóvel ou biometria).
- **Por que as outras estão erradas:**
  - **A (Password complexity):** Ajuda a tornar a senha difícil de adivinhar, mas não impede o login se o atacante conseguir a senha de outra forma (ex: phishing).
  - **C (WAF):** Protege contra ataques ao código do site (SQLi, XSS), não contra o uso de credenciais válidas.
  - **D (Password changes every 30 days):** Prática obsoleta que muitas vezes leva os utilizadores a escolher senhas ainda mais simples e previsíveis.

**5. B**
- **Motivo (Certa):** Ao identificar um dispositivo desconhecido (*Rogue Device*), a prioridade é a contenção. **Isolar o dispositivo através de segmentação de rede** (colocá-lo numa VLAN isolada) permite que o dispositivo continue ligado para investigação forense, mas impede que ele comunique com o resto da rede corporativa ou exfiltre dados.
- **Por que as outras estão erradas:**
  - **A (Block MAC address):** Útil, mas fácil de contornar (MAC Spoofing).
  - **C (Deploy EDR):** EDR instala-se em dispositivos conhecidos; não se pode instalar software num dispositivo desconhecido do atacante.
  - **D (Shutdown switch):** Medida extrema que causaria interrupção de serviço a utilizadores legítimos ligados ao mesmo switch.

**6. B**
- **Motivo (Certa):** As **Assinaturas Digitais** garantem a autenticidade e a integridade. Quando um fabricante assina um software, o utilizador pode verificar que o ficheiro veio realmente daquele fabricante e que não foi alterado por terceiros (ex: malware inserido no instalador).
- **Por que as outras estão erradas:**
  - **A (Symmetric encryption):** Garante a confidencialidade (segredo), mas não prova a origem do software a terceiros de forma eficiente.
  - **C (Hashing with MD5):** MD5 é considerado inseguro e vulnerável a colisões. Além disso, o hash sozinho não prova a autoria sem uma assinatura associada.
  - **D (ECC):** É um método de criptografia, mas a "assinatura digital" é o nome do processo/conceito que garante a autenticidade pedida.

**7. C**
- **Motivo (Certa):** Ataques DDoS de grande escala saturam a largura de banda local. A melhor resposta imediata é redirecionar o tráfego para um **Serviço de Mitigação DDoS na Cloud** (como Cloudflare ou Akamai). Estes serviços têm capacidade massiva para "limpar" o tráfego malicioso e deixar passar apenas os utilizadores reais.
- **Por que as outras estão erradas:**
  - **A (Load balancer):** Ajuda a distribuir carga normal, mas um ataque DDoS massivo derrubaria o próprio balanceador ou o link de internet da empresa.
  - **B (Block all traffic):** Resolveria o ataque, mas também impediria os clientes legítimos de aceder, completando o objetivo do atacante (Negação de Serviço).
  - **D (Notify customers):** É um passo de comunicação, mas não resolve o problema técnico do ataque.

**8. A**
- **Motivo (Certa):** Um **Honeypot** é um sistema "isco" desenhado para parecer atraente para atacantes. O seu objetivo é atrair o intruso para longe de sistemas reais e permitir à equipa de segurança **observar e recolher inteligência** sobre as ferramentas e métodos que o atacante está a usar.
- **Por que as outras estão erradas:**
  - **B (Encrypt data):** Honeypots não realizam funções de cifra de base de dados.
  - **C (Prevent brute-force):** Não impede o ataque, apenas oferece um alvo falso para ele ocorrer.
  - **D (Analyze legitimate behavior):** Pelo contrário, qualquer atividade num honeypot é, por definição, suspeita ou ilegítima.

**9. A**
- **Motivo (Certa):** O **S/MIME** é o padrão para segurança de e-mail que utiliza criptografia de chave pública para permitir que os utilizadores assinem digitalmente (Integridade/Autenticidade) e encriptem (Confidencialidade) as suas mensagens.
- **Por que as outras estão erradas:**
  - **B (SMTP):** Protocolo para envio de e-mails, mas não possui segurança nativa de conteúdo.
  - **C (IMAP) / D (POP3):** Protocolos para receção/acesso a e-mails no servidor; não garantem a segurança do conteúdo da mensagem em si.

**10. A**
- **Motivo (Certa):** Um **Ataque de Força Bruta** (ou de dicionário, dependendo da abrangência) neste cenário tenta descobrir as senhas padrão dos dispositivos IoT. O objetivo é testar repetidamente combinações comuns até ganhar acesso ao hardware vulnerável.
- **Por que as outras estão erradas:**
  - **B (Credential stuffing):** Usa senhas roubadas de *outros* sites; aqui o foco são senhas padrão de fábrica (default).
  - **C (Password spraying):** Tenta uma senha comum contra muitos utilizadores diferentes para evitar bloqueios.
  - **D (Dictionary attack):** Embora use um dicionário, o termo genérico no exame para tentativas repetidas de adivinhação é frequentemente associado ao Brute Force se não houver distinção clara de lista. *Nota: Em Security+, Brute Force é a tentativa exaustiva de todas as combinações, mas muitas vezes é usado como termo guarda-chuva.*

**11. B**
- **Motivo (Certa):** Um cadeado físico é um **Controlo Preventivo**, pois o seu objetivo é impedir fisicamente que uma ação não autorizada ocorra (neste caso, a abertura do rack do servidor ou o acesso físico ao hardware).
- **Por que as outras estão erradas:**
  - **A (Detective):** Detetaria o acesso após ele ocorrer (ex: um sensor de porta aberta).
  - **C (Corrective):** Entraria em ação para reparar o dano após um incidente.
  - **D (Compensating):** Seria um controlo alternativo usado quando o principal não é possível.

**12. C**
- **Motivo (Certa):** O **ARP Spoofing** (ou poisoning) ocorre quando um atacante envia mensagens ARP falsas para a rede local para associar o seu próprio endereço MAC ao endereço IP de uma máquina legítima. Isto permite-lhe intercetar, ler ou alterar o tráfego destinado a essa máquina.
- **Por que as outras estão erradas:**
  - **A (DNS poisoning):** Foca-se em nomes de domínio (Layer 7); o ARP foca-se em endereços físicos na rede local (Layer 2).
  - **B (Man-in-the-middle):** É o objetivo final do ataque, mas o nome da *técnica específica* descrita é ARP Spoofing.
  - **D (Packet injection):** Termo genérico para inserir pacotes na rede.

**13. B**
- **Motivo (Certa):** O **Business Continuity Plan (BCP)** foca-se no "quadro geral" da sobrevivência da organização. O seu objetivo é garantir que as funções críticas do negócio continuem a operar durante e após uma interrupção (incêndio, ataque, desastre natural).
- **Por que as outras estão erradas:**
  - **A (Detect malware):** Esta é a função de ferramentas técnicas de segurança.
  - **C (Identify gaps):** Esta é a função de auditorias ou análises de risco (Risk Assessment).
  - **D (Provide training):** Embora o BCP exija treino, o seu *objetivo primário* é a disponibilidade das operações.

**14. A**
- **Motivo (Certa):** Um servidor proxy que bloqueia o acesso a sites maliciosos é um **Controlo Preventivo**, pois atua antes do dano ocorrer, impedindo que o utilizador consiga chegar ao site perigoso e descarregar malware ou entregar credenciais.
- **Por que as outras estão erradas:**
  - **B (Corrective):** Atuaria para limpar o malware após a infeção.
  - **C (Detective):** Apenas registaria nos logs que o utilizador visitou um site perigoso, sem o impedir.
  - **D (Compensating):** Seria usado se um filtro de conteúdo principal falhasse.

**15. A**
- **Motivo (Certa):** A melhor defesa contra SQL Injection combina **Input Validation** (garantir que o que foi digitado é o esperado) com **Parameterized Queries** (tratar o input estritamente como dados e nunca como comandos). Isto impede que o código malicioso seja interpretado pela base de dados.
- **Por que as outras estão erradas:**
  - **B (Encrypt records):** Protege os dados se forem roubados, mas não impede que um comando SQL injetado apague ou altere a base de dados.
  - **C (MFA):** Protege o login, mas o SQLi ocorre através da lógica da aplicação web, muitas vezes em áreas já autenticadas ou públicas.
  - **D (NIDS):** Pode detetar a tentativa, mas não resolve a falha de segurança no código da aplicação.

**16. A**
- **Motivo (Certa):** **Security Awareness Training** (Treino de Sensibilização) é a medida mais eficaz contra ameaças internas, pois ajuda os funcionários a reconhecer comportamentos suspeitos em colegas e educa-os sobre as consequências legais e éticas de ações maliciosas.
- **Por que as outras estão erradas:**
  - **B (Host-based firewall):** Protege contra ataques de rede externos, mas não contra um utilizador legítimo sentado em frente à máquina.
  - **C (WAF):** Protege aplicações web contra atacantes externos.
  - **D (Encrypt data at rest):** Se o insider tiver permissão de acesso legítima, ele conseguirá ler os dados cifrados normalmente.

**17. A**
- **Motivo (Certa):** O **Perfect Forward Secrecy (PFS)** garante que o compromisso de uma chave privada de longo prazo no futuro não comprometa a segurança de sessões passadas. Isto é feito através da geração de chaves de sessão efémeras e únicas para cada ligação.
- **Por que as outras estão erradas:**
  - **B (Faster encryption):** PFS adiciona processamento extra, o que pode tornar a ligação ligeiramente mais lenta.
  - **C (Encrypt with symmetric keys):** PFS é um mecanismo de troca de chaves, não define o tipo de algoritmo de cifra final.
  - **D (Prevent brute-force):** Foca-se na proteção do passado contra compromissos futuros da chave mestra.

**18. A**
- **Motivo (Certa):** Um **Buffer Overflow** ocorre quando uma aplicação escreve mais dados num buffer de memória do que a capacidade alocada. Isto permite ao atacante transbordar para áreas de memória adjacentes e sobresscrever o endereço de retorno, conseguindo executar o seu próprio código malicioso.
- **Por que as outras estão erradas:**
  - **B (XSS):** Injeção de scripts web no browser.
  - **C (SQL injection):** Injeção de comandos de base de dados.
  - **D (Privilege escalation):** É muitas vezes a *consequência* de um buffer overflow.

**19. C**
- **Motivo (Certa):** O **Shadow IT** ocorre muitas vezes porque os funcionários precisam de ferramentas que a empresa não fornece. A melhor forma de mitigar isto é através da **Educação**, explicando os riscos de segurança e fornecendo alternativas aprovadas que satisfaçam as necessidades dos utilizadores.
- **Por que as outras estão erradas:**
  - **A (Endpoint protection):** Ajuda a proteger o dispositivo, mas não resolve o problema de dados corporativos em serviços cloud não autorizados.
  - **B (Access control policies):** Os utilizadores encontrarão sempre novas formas/apps se não perceberem o risco.
  - **D (Encrypt data):** É uma boa prática geral, mas não impede o uso de ferramentas inadequadas.

**20. B**
- **Motivo (Certa):** Um **Rootkit** é desenhado especificamente para se esconder profundamente no sistema operativo (muitas vezes ao nível do kernel). O seu objetivo principal é manter o acesso persistente do atacante e esconder a sua presença de ferramentas de diagnóstico e antivírus.
- **Por que as outras estão erradas:**
  - **A (Trojan):** Malware que se faz passar por algo legítimo para entrar, mas não tem necessariamente o foco de se esconder no kernel.
  - **C (Spyware):** Focado na recolha de dados silenciosa.
  - **D (Logic bomb):** Focado em ser disparado por uma condição específica.
**21. A**
- **Motivo (Certa):** O *TLS (Transport Layer Security)* é o protocolo sucessor do SSL. A sua função primária é estabelecer um canal seguro entre duas máquinas, garantindo a **Confidencialidade** (através da encriptação) e a **Integridade** dos dados transmitidos na web (HTTPS).
- **Por que as outras estão erradas:**
  - **B (Autenticar utilizadores):** O TLS autentica o servidor; a autenticação do utilizador é feita na aplicação (login/senha).
  - **C (Detetar modificações de ficheiros):** Esta é a função de ferramentas de monitorização de integridade (FIM).
  - **D (Bloquear conexões):** Esta é a função de uma firewall ou ACL.

**22. A**
- **Motivo (Certa):** Ataques de força bruta tentam adivinhar a senha por tentativa e erro. A **Account Lockout Policy** (Política de Bloqueio de Conta) é a defesa mais eficaz, pois bloqueia a conta após um número de tentativas falhadas, parando o atacante.
- **Por que as outras estão erradas:**
  - **B (Rotação de senhas):** Mudar a senha mensalmente não impede um ataque que está a ocorrer hoje.
  - **C (Firewall):** Atacantes podem usar múltiplos IPs, tornando o bloqueio de conexões ineficaz contra ataques distribuídos.
  - **D (SIEM):** Ajuda a detetar, mas o bloqueio de conta é que impede ativamente a continuação das tentativas.

**23. A**
- **Motivo (Certa):** Para proteger grandes volumes de dados (Data at Rest), a **Encriptação Simétrica** (como AES) é a escolha correta, pois é extremamente rápida e segura, garantindo que apenas quem possui a chave consiga ler os dados.
- **Por que as outras estão erradas:**
  - **B (Assimétrica):** Muito mais lenta; usada para troca de chaves e assinaturas, não para cifrar bases de dados inteiras.
  - **C (Hashing):** É unidirecional; serve para verificar integridade, não para esconder e recuperar dados.
  - **D (Tokenização):** Substitui dados por símbolos, mas não é um método de encriptação de ficheiros.

**24. A**
- **Motivo (Certa):** O ataque onde um utilizador ganha permissões de nível superior (ex: de utilizador normal para administrador) explorando uma falha chama-se **Privilege Escalation** (Escalação de Privilégios).
- **Por que as outras estão erradas:**
  - **B (Credential stuffing):** Uso de senhas roubadas noutros sites para tentar entrar neste.
  - **C (Engenharia social):** Manipulação psicológica para obter informações.
  - **D (Negação de serviço):** Ataque para derrubar o sistema, não para ganhar acesso.

**25. A**
- **Motivo (Certa):** No caso de uma infeção por ransomware, a primeira medida de contenção é **Isolar o sistema da rede**. Isto impede que o malware se espalhe para outros computadores e servidores de ficheiros da organização.
- **Por que as outras estão erradas:**
  - **B (Desencriptar ficheiros):** Só é possível se houver backups ou chaves; o isolamento é a prioridade zero de emergência.
  - **C (Analisar com SIEM):** A análise é importante, mas parar a propagação é urgente.
  - **D (Notificar autoridades):** Passo legal que ocorre após a contenção técnica do incidente.

**26. A**
- **Motivo (Certa):** O **Whaling** é um ataque de phishing direcionado a executivos de alto nível (CEO, CFO) ou que usa a identidade destes para enganar outros. No cenário, o atacante faz-se passar por um executivo sénior para pedir uma transferência.
- **Por que as outras estão erradas:**
  - **B (Vishing):** Phishing feito por telefone (voz).
  - **C (Credential stuffing):** Teste massivo de senhas roubadas.
  - **D (Pretexting):** Técnica de criar uma história, mas o nome do ataque direcionado via e-mail é Whaling.

**27. B**
- **Motivo (Certa):** A **Autenticação Biométrica** (impressão digital, íris) é o controlo físico mais forte para centros de dados, pois baseia-se em características biológicas únicas do indivíduo que não podem ser partilhadas ou roubadas como um cartão.
- **Por que as outras estão erradas:**
  - **A (RBAC):** Controlo lógico de permissões dentro do software.
  - **C (Treino de sensibilização):** Controlo administrativo que ajuda mas não impede fisicamente um intruso.
  - **D (Autenticação de dois fatores):** É um conceito; a biometria é o método físico mais eficaz mencionado.

**28. B**
- **Motivo (Certa):** O propósito de um **Vulnerability Scanner** é identificar falhas conhecidas (como software desatualizado ou configurações inseguras) em sistemas e aplicações, permitindo que a empresa as corrija antes de serem exploradas.
- **Por que as outras estão erradas:**
  - **A (Detetar malware):** Função de Antivírus ou EDR.
  - **C (Bloquear tráfego):** Função de Firewalls ou IPS.
  - **D (Encriptar dados):** Função de ferramentas de criptografia.

**29. B**
- **Motivo (Certa):** Um **Rootkit** é um malware que consegue privilégios de nível de sistema (root/admin) e esconde a sua presença e as suas atividades do sistema operativo e de ferramentas de segurança, garantindo acesso persistente ao atacante.
- **Por que as outras estão erradas:**
  - **A (Ransomware):** Foca na extorsão via cifragem de dados.
  - **C (Worm):** Foca em espalhar-se sozinho pela rede.
  - **D (Keylogger):** Foca em capturar o que é digitado no teclado.

**30. B**
- **Motivo (Certa):** Para backups guardados fora da empresa (Offsite), o maior risco é o roubo físico. **Encriptar os backups** com algoritmos fortes garante que os dados permaneçam confidenciais mesmo que os discos ou fitas sejam roubados.
- **Por que as outras estão erradas:**
  - **A (Hashing):** Garante que o ficheiro não foi alterado (integridade), mas não o protege contra leitura.
  - **C (Limitar acesso físico):** É importante, mas a encriptação é a proteção técnica final para o dado.
  - **D (Replicar backups):** Garante disponibilidade, mas não protege a confidencialidade.

**31. A**
- **Motivo (Certa):** Implementar uma **CDN com mitigação DDoS** é a solução mais robusta. Como a CDN tem servidores espalhados pelo mundo, ela consegue absorver e filtrar ataques massivos antes que eles cheguem e derrubem o servidor principal da empresa.
- **Por que as outras estão erradas:**
  - **B (EDR):** Protege computadores individuais, não a rede contra inundação de tráfego.
  - **C (ACLs):** Listas de acesso básicas não conseguem filtrar o volume de um ataque DDoS moderno.
  - **D (VPN):** Encripta tráfego, mas não impede ataques de negação de serviço por volume.

**32. A**
- **Motivo (Certa):** O **Wireshark** é um analisador de protocolos (Packet Sniffer) que permite capturar e analisar o tráfego de rede ao nível do pacote, sendo essencial para investigar anomalias de rede e ataques.
- **Por que as outras estão erradas:**
  - **B (Nessus):** Scanner de vulnerabilidades.
  - **C (Splunk):** Ferramenta de gestão de logs (SIEM).
  - **D (Metasploit):** Ferramenta para testes de intrusão e exploração.

**33. A**
- **Motivo (Certa):** Uma plataforma **SOAR (Security Orchestration, Automation, and Response)** serve para criar **workflows automáticos** entre diferentes ferramentas de segurança, permitindo responder a incidentes de forma muito mais rápida e sem intervenção humana constante.
- **Por que as outras estão erradas:**
  - **B (Prevenir phishing):** Função de filtros de e-mail especializados.
  - **C (Proteção de endpoint):** Função de Antivírus/EDR.
  - **D (Políticas zero-trust):** É um conceito de design de rede, não a função primária do SOAR.

**34. B**
- **Motivo (Certa):** O **Cross-Site Scripting (XSS)** envolve a injeção de scripts maliciosos em sites legítimos. Quando um utilizador visita esse site, o script corre no seu browser, permitindo ao atacante roubar sessões ou dados.
- **Por que as outras estão erradas:**
  - **A (SQL injection):** Ataque contra a base de dados no servidor.
  - **C (Watering hole):** Estratégia de infetar sites que as vítimas frequentam (pode usar XSS como técnica).
  - **D (Command injection):** Execução de comandos no sistema operativo do servidor.

**35. A**
- **Motivo (Certa):** Para proteger APIs, o uso de **Input Validation** (validar o que entra) e **Access Control** (garantir que apenas quem deve pode aceder) são as medidas fundamentais para evitar explorações de vulnerabilidades no código da API.
- **Por que as outras estão erradas:**
  - **B (Encriptar comunicações):** Protege a viagem do dado (HTTPS), mas não impede o ataque lógico contra a API.
  - **C (WAF):** Ajuda na deteção, mas a solução definitiva deve estar na programação da API.
  - **D (MFA):** Autentica o utilizador, mas não impede um utilizador "legítimo" de enviar comandos maliciosos.

**36. B**
- **Motivo (Certa):** A criptografia assimétrica permite a **troca segura de chaves** através de um canal não seguro (Internet). É o que permite, por exemplo, que estabeleças uma ligação HTTPS segura com um site que nunca visitaste antes.
- **Por que as outras estão erradas:**
  - **A (Mesma chave):** Esta é a definição de criptografia simétrica.
  - **C (Mais rápida):** Errado; a criptografia simétrica é muito mais rápida.
  - **D (Integridade):** Isto é feito por hashing; a assimétrica foca na autenticação e troca de chaves.

**37. B**
- **Motivo (Certa):** O **RBAC (Role-Based Access Control)** limita as permissões dos utilizadores ao estritamente necessário para a sua função. Se um atacante comprometer uma conta, terá menos direitos disponíveis, dificultando a escalação de privilégios.
- **Por que as outras estão erradas:**
  - **A (Atualizar patches):** Fecha as falhas técnicas, mas o RBAC é o controlo de acesso direto.
  - **C (Penetration testing):** Identifica a falha, mas não a impede operacionalmente.
  - **D (SIEM):** Monitoriza a tentativa, mas o RBAC é que a bloqueia.

**38. B**
- **Motivo (Certa):** O **Bluesnarfing** é o roubo de informações (como contactos ou mensagens) de um dispositivo via Bluetooth sem o consentimento do utilizador.
- **Por que as outras estão erradas:**
  - **A (Bluejacking):** Apenas envia mensagens não solicitadas (spam); não rouba dados.
  - **C (Evil twin):** Ataque de Wi-Fi falso.
  - **D (Rogue AP):** Ponto de acesso Wi-Fi não autorizado.

**39. A**
- **Motivo (Certa):** **Time-based access control** (Controlo de acesso baseado no tempo) permite restringir o acesso a sistemas apenas durante determinados horários (ex: horas de expediente), reduzindo a janela de oportunidade para ataques fora de horas.
- **Por que as outras estão erradas:**
  - **B (IPS):** Deteta ataques, mas não gere horários de trabalho.
  - **C (MFA):** Garante a identidade, mas não limita o tempo.
  - **D (Encriptação de endpoint):** Protege os dados se o computador for roubado.

**40. A**
- **Motivo (Certa):** Uma solução de **DLP (Data Loss Prevention)** serve para detetar e **bloquear a exfiltração** (fuga) de dados sensíveis da organização para fora do ambiente controlado.
- **Por que as outras estão erradas:**
  - **B (Encriptar dados):** Função de ferramentas de cifra.
  - **C (Prevenir malware):** Função de Antivírus/EDR.
  - **D (Monitorar comportamento):** Função de ferramentas UEBA.
**41. A**
- **Motivo (Certa):** O *DNS Cache Poisoning* (ou envenenamento de cache) ocorre quando um atacante consegue introduzir entradas DNS falsas no servidor. Como resultado, os utilizadores que tentam aceder a sites legítimos são **redirecionados para sites maliciosos** controlados pelo atacante sem o seu conhecimento.
- **Por que as outras estão erradas:**
  - **B (Encriptar tráfego):** DNS poisoning foca no redirecionamento, não na cifra de dados.
  - **C (Acesso a sistemas internos):** Pode ser um objetivo secundário, mas o efeito direto descrito é o redirecionamento de domínios.
  - **D (Exfiltrar dados):** É um ataque de manipulação de tráfego, não de roubo silencioso de ficheiros.

**42. C**
- **Motivo (Certa):** Configurações erradas na cloud (como buckets abertos ao público) são riscos críticos. Usar **ferramentas automatizadas para detetar misconfigurations** (CSPM) é a melhor forma de garantir que as políticas de segurança estão a ser cumpridas continuamente em todo o ambiente cloud.
- **Por que as outras estão erradas:**
  - **A (Ativar encriptação):** Protege o dado, mas não impede o acesso indevido se a permissão de leitura estiver errada.
  - **B (Permissões de leitura pública):** Isto criaria uma falha grave de segurança.
  - **D (Restringir a utilizadores autenticados):** É necessário, mas o scan automático (C) é o que garante que esta regra não foi esquecida ou alterada por erro humano.

**43. B**
- **Motivo (Certa):** O propósito de uma **DMZ (Demilitarized Zone)** é criar uma camada de isolamento. Ela aloja serviços públicos (Web, DNS) para que fiquem **separados da rede interna**, garantindo que, se o serviço público for invadido, o atacante não tenha caminho livre para os servidores internos da empresa.
- **Por que as outras estão erradas:**
  - **A (Encriptar tráfego):** DMZ é uma divisão de rede, não um mecanismo de criptografia.
  - **C (Monitorar atividade interna):** Isto é feito por sistemas de logs e monitorização dentro da rede privada.
  - **D (Impedir malware):** Ajuda a conter o ataque, mas o malware pode entrar via e-mail independentemente da DMZ.

**44. C**
- **Motivo (Certa):** No **Session Hijacking** (Sequestro de Sessão), o atacante rouba um token de sessão válido para assumir a identidade de um utilizador já autenticado, conseguindo aceder à conta sem precisar de saber as credenciais originais.
- **Por que as outras estão erradas:**
  - **A (Ataque de replay):** Reenvia pacotes capturados, mas não foca especificamente no roubo e uso de um token de sessão ativo.
  - **B (CSRF):** Engana o utilizador para realizar ações, mas o atacante não "rouba" a identidade da sessão para si.
  - **D (Credential stuffing):** Uso de listas de senhas roubadas.

**45. A**
- **Motivo (Certa):** Para mitigar campanhas massivas de phishing, a primeira linha de defesa técnica é o **Email Filtering com deteção de spam**. Estas ferramentas bloqueiam e-mails maliciosos antes de chegarem à caixa de entrada do utilizador, reduzindo drasticamente o risco.
- **Por que as outras estão erradas:**
  - **B (Senhas semanais):** Inútil contra phishing e causa frustração nos utilizadores.
  - **C (Soluções EDR):** Detetam o ransomware se o utilizador clicar, mas o filtro de e-mail evita que o risco chegue sequer ao utilizador.
  - **D (Bloquear todos os e-mails):** Inviável para qualquer organização moderna.

**46. B**
- **Motivo (Certa):** Soluções de **Endpoint DLP** (Data Loss Prevention) permitem controlar a escrita de dados sensíveis em dispositivos USB, impedindo que ficheiros confidenciais saiam da empresa através de meios físicos não autorizados.
- **Por que as outras estão erradas:**
  - **A (Desativar portas USB):** Muito drástico; impede o uso de outros periféricos legítimos.
  - **C (Encriptar drives removíveis):** Protege o dado se a pen for perdida, mas não impede a saída do dado em si se o funcionário tiver a chave.
  - **D (Scans de vulnerabilidades):** Não têm relação com o controlo físico de saída de dados.

**47. B**
- **Motivo (Certa):** O **Cross-Site Scripting (XSS)** ocorre quando um atacante injeta código malicioso num site que é depois executado no browser de outros utilizadores, permitindo roubar dados ou sessões.
- **Por que as outras estão erradas:**
  - **A (SQL injection):** Ataca a base de dados no servidor.
  - **C (Buffer overflow):** Explora falhas de memória na aplicação.
  - **D (Watering hole):** Estratégia de escolha de alvo; XSS é a técnica técnica descrita.

**48. C**
- **Motivo (Certa):** Uma **CRL (Certificate Revocation List)** é uma lista mantida pela CA que contém os certificados que foram invalidados antes da data de expiração oficial (ex: por compromisso da chave).
- **Por que as outras estão erradas:**
  - **A (Guardar chaves):** Feito em cofres digitais ou HSMs.
  - **B (Verificar autenticidade):** Feito através da cadeia de confiança do certificado.
  - **D (Encriptar dados):** CRL é apenas uma lista de consulta de estado.

**49. A**
- **Motivo (Certa):** O **File Integrity Monitoring (FIM)** serve para detetar alterações não autorizadas em ficheiros críticos do sistema, garantindo que qualquer modificação maliciosa seja reportada imediatamente.
- **Por que as outras estão erradas:**
  - **B (IPS):** Foca em ataques de rede.
  - **C (Host-based firewall):** Foca em controlar tráfego de entrada/saída.
  - **D (SAST):** Teste de segurança feito durante o desenvolvimento do código.

**50. A**
- **Motivo (Certa):** A **Annualized Loss Expectancy (ALE)** é o cálculo financeiro que ajuda as organizações a priorizar riscos, estimando quanto dinheiro se espera perder anualmente com um determinado evento.
- **Por que as outras estão erradas:**
  - **B (RTO):** Tempo necessário para recuperar um serviço.
  - **C (MTBF):** Tempo médio entre falhas de componentes.
  - **D (MTD):** Tempo máximo tolerável de paragem.

**51. A**
- **Motivo (Certa):** Num ataque de **Man-in-the-middle**, o atacante interceta e altera secretamente a comunicação entre duas partes que acreditam estar a falar diretamente uma com a outra.
- **Por que as outras estão erradas:**
  - **B (DNS poisoning):** Redirecionamento via DNS, não necessariamente interceção de uma sessão ativa.
  - **C (Replay attack):** Reenvio de dados capturados, sem os modificar em tempo real.
  - **D (Packet sniffing):** Apenas captura dados (passivo), não os altera.

**52. A**
- **Motivo (Certa):** Para dados na cloud, a melhor proteção é a **Encriptação tanto em repouso como em trânsito**. Isto garante que os dados estejam protegidos quer estejam guardados no disco, quer estejam a viajar pela rede.
- **Por que as outras estão erradas:**
  - **B (WAF):** Protege apenas o acesso à aplicação web.
  - **C (IDS):** Deteta intrusões, mas não protege o dado se ele for acedido indevidamente.
  - **D (MFA):** Protege o login, mas não a integridade técnica do armazenamento.

**53. A**
- **Motivo (Certa):** Quando os utilizadores são redirecionados apesar de digitarem o URL correto, a causa provável é **DNS Spoofing**, onde o atacante manipulou as respostas do servidor de nomes para apontar para um site falso.
- **Por que as outras estão erradas:**
  - **B (SQL injection):** Ataque contra a lógica da base de dados.
  - **C (Ataque evil twin):** Wi-Fi falso; pode causar o mesmo sintoma, mas o DNS Spoofing é a técnica clássica de redirecionamento de domínios.
  - **D (ARP poisoning):** Redireciona tráfego na rede local, não nomes de domínio globais.

**54. A**
- **Motivo (Certa):** O objetivo de uma **Sandbox** é fornecer um ambiente isolado onde se pode executar malware de forma segura para **observar o seu comportamento** sem colocar em risco a rede de produção.
- **Por que as outras estão erradas:**
  - **B (Encriptar ficheiros):** Função de criptografia.
  - **C (Impedir propagação):** Função de segmentação de rede.
  - **D (Corrigir vulnerabilidades):** Função de patching.

**55. A**
- **Motivo (Certa):** O **Salting** adiciona um valor aleatório ao hash da senha, tornando as **Rainbow Tables** inúteis e dificultando drasticamente ataques de força bruta offline.
- **Por que as outras estão erradas:**
  - **B (Encriptar com AES):** Encriptação é reversível; para senhas, o ideal é hashing unidirecional.
  - **C (Texto limpo):** Prática extremamente insegura.
  - **D (Tokenização):** Usada para dados de pagamento, não para senhas.

**56. B**
- **Motivo (Certa):** O **Split Tunneling** em VPNs permite encaminhar apenas o tráfego corporativo pelo túnel seguro, enviando o tráfego de internet comum pela ligação direta do utilizador, o que poupa largura de banda.
- **Por que as outras estão erradas:**
  - **A (Encriptar todo o tráfego):** Isto é o Full Tunneling.
  - **C (Velocidades mais rápidas):** É uma consequência da otimização, mas o propósito é a gestão inteligente de rotas.
  - **D (Impedir acesso não autorizado):** Split tunneling pode até ser menos seguro que o Full Tunneling.

**57. A**
- **Motivo (Certa):** O **TLS (Transport Layer Security)** é o protocolo que garante a segurança das comunicações em redes não fidedignas, fornecendo encriptação e autenticidade para serviços como web e e-mail.
- **Por que as outras estão erradas:**
  - **B (SNMP):** Usado para gestão de rede.
  - **C (DHCP):** Usado para atribuir endereços IP.
  - **D (DNSSEC):** Garante a integridade das respostas DNS, mas não encripta o tráfego da aplicação.

**58. A**
- **Motivo (Certa):** O **Spear Phishing** é um ataque direcionado a um grupo ou pessoa específica dentro da empresa, utilizando informações personalizadas para aumentar as hipóteses de sucesso.
- **Por que as outras estão erradas:**
  - **B (Whaling):** Focado em executivos de topo.
  - **C (Vishing):** Phishing por voz.
  - **D (Smishing):** Phishing por SMS.

**59. B**
- **Motivo (Certa):** Um programa de **Vulnerability Management** serve para identificar, priorizar e **corrigir as falhas de segurança** nos sistemas de forma contínua e proativa.
- **Por que as outras estão erradas:**
  - **A (Impedir malware):** Consequência positiva, mas o foco é na falha técnica.
  - **C (Bloquear acesso não autorizado):** Função de controlos de acesso.
  - **D (Monitorização contínua):** Função de sistemas de monitorização de eventos.

**60. D**
- **Motivo (Certa):** A grande vantagem da biometria é a sua **elevada precisão** na verificação da identidade, uma vez que se baseia em características físicas únicas que não podem ser esquecidas ou facilmente roubadas.
- **Por que as outras estão erradas:**
  - **A (Resistência a phishing):** Ajuda, mas outros fatores físicos também o fazem.
  - **B (Escalabilidade):** A biometria é muitas vezes difícil de escalar devido a custos de hardware.
  - **C (Processos mais rápidos):** Muitas vezes é mais lenta do que digitar um código.
**61. C**
- **Motivo (Certa):** O **KRACK (Key Reinstallation Attack)** é uma vulnerabilidade grave no protocolo WPA2 que permite a atacantes intercetar e manipular tráfego Wi-Fi encriptado ao forçar a reutilização de chaves de cifra durante o processo de ligação (handshake).
- **Por que as outras estão erradas:**
  - **A (Evil twin):** Baseia-se em criar um ponto de acesso falso com o mesmo nome para enganar os utilizadores.
  - **B (Bluejacking):** É um ataque de Bluetooth para envio de spam/mensagens não solicitadas.
  - **D (Rogue AP):** É um ponto de acesso físico não autorizado instalado maliciosamente na rede.

**62. B**
- **Motivo (Certa):** Um **Risk Register** é um documento central na gestão de segurança que serve para listar, documentar e **priorizar os riscos identificados**, permitindo à organização gerir como irá responder a cada um deles.
- **Por que as outras estão erradas:**
  - **A (Rastrear vulnerabilidades):** Isto é feito em relatórios técnicos de vulnerabilidades ou ferramentas de gestão de patches.
  - **C (Checklist para auditorias):** Auditorias utilizam listas de controlo baseadas em normas (como o NIST ou ISO).
  - **D (Métricas de resposta):** Métricas como o tempo de resposta são seguidas em relatórios de performance do SOC.

**63. B**
- **Motivo (Certa):** O **DMARC**, juntamente com SPF e DKIM, ajuda a prevenir o phishing ao autenticar a origem do e-mail. Permite que as empresas protejam o seu domínio contra falsificações (*spoofing*), impedindo que e-mails falsos cheguem aos utilizadores.
- **Por que as outras estão erradas:**
  - **A (Soluções EDR):** Detetam atividades no computador, mas o DMARC atua na camada de transporte de e-mail.
  - **C (Senhas complexas):** Não impedem o phishing, uma vez que o utilizador entrega a senha ao atacante por engano.
  - **D (RBAC):** Controla permissões dentro da rede interna, não ataques externos via e-mail.

**64. B**
- **Motivo (Certa):** A forma mais eficaz de prevenir SQL Injection é o uso de **Parameterized Statements (ou Prepared Queries)** e a validação rigorosa de input. Isto garante que o sistema trate os dados do utilizador apenas como informação e nunca como parte do comando SQL executável.
- **Por que as outras estão erradas:**
  - **A (Encriptar queries):** Protege contra escuta na rede, mas não impede a execução de um comando malicioso no servidor.
  - **C (Firewall entre app e DB):** Pode limitar o tráfego, mas raramente consegue detetar a injeção lógica dentro de tráfego SQL aparentemente normal.
  - **D (Ativar logging):** Ajuda a investigar o ataque depois de este ocorrer, mas não o impede.

**65. A**
- **Motivo (Certa):** As **Assinaturas Digitais** utilizam criptografia assimétrica e hashing para garantir a integridade (o ficheiro não mudou) e a autenticidade (quem enviou o ficheiro é quem diz ser) durante uma transferência.
- **Por que as outras estão erradas:**
  - **B (Criptografia assimétrica):** Fornece a base para a assinatura, mas o termo correto para garantir integridade e autenticidade juntas é "assinatura digital".
  - **C (Criptografia simétrica):** Focada na confidencialidade (segredo), não na prova de autoria a terceiros.
  - **D (Hashing):** Garante a integridade, mas não a autenticidade (quem quer que altere o ficheiro pode gerar um novo hash).

**66. B**
- **Motivo (Certa):** O **Ransomware** é um tipo de malware que cifra os ficheiros da vítima e exige o pagamento de um resgate para fornecer a chave que os torna novamente acessíveis.
- **Por que as outras estão erradas:**
  - **A (Rootkit):** Foca em esconder o atacante no sistema operativo.
  - **C (Adware):** Exibe publicidade indesejada.
  - **D (Worm):** Malware que se autorreplica pela rede sem intervenção humana.

**67. A**
- **Motivo (Certa):** Soluções de **Endpoint DLP** monitorizam a atividade no computador do utilizador e podem impedir fisicamente que dados sensíveis sejam copiados para pens USB não autorizadas, prevenindo a exfiltração de dados.
- **Por que as outras estão erradas:**
  - **B (NAC):** Controla o acesso de dispositivos à rede.
  - **C (IPS):** Deteta ataques de rede maliciosos.
  - **D (FIM):** Deteta alterações em ficheiros no disco, mas não controla a sua cópia para o exterior.

**68. A**
- **Motivo (Certa):** Um **Replay Attack** ocorre quando um atacante captura uma comunicação válida e a reenvia mais tarde para enganar o sistema e ganhar acesso não autorizado, repetindo a autenticação original.
- **Por que as outras estão erradas:**
  - **B (Sequestro de sessão):** Roubo de um token de sessão ativo para usar a sessão atual.
  - **C (XSS):** Injeção de scripts maliciosos em páginas web.
  - **D (ARP spoofing):** Ataque para redirecionar tráfego na rede local.

**69. A**
- **Motivo (Certa):** O **TLS (Transport Layer Security)** cifra os dados enviados entre duas máquinas na rede para garantir a **Confidencialidade** (que ninguém leia o conteúdo) e a **Integridade** (que o conteúdo não seja alterado).
- **Por que as outras estão erradas:**
  - **B (Autenticar utilizadores):** O TLS autentica o servidor; a autenticação do utilizador é feita pela aplicação (login).
  - **C (Detetar modificações na web):** TLS protege o transporte, mas não o conteúdo estático no servidor.
  - **D (Bloquear tráfego):** Função de uma firewall.

**70. A**
- **Motivo (Certa):** Utilizar uma **Management VLAN** (VLAN de gestão) dedicada isola o tráfego de administração dos dispositivos de rede do tráfego comum dos utilizadores, aumentando drasticamente a segurança contra ataques internos e sniffing.
- **Por que as outras estão erradas:**
  - **B (Nomes de utilizador padrão):** Erro crítico de segurança que facilita a invasão.
  - **C (Permitir acesso remoto de qualquer IP):** Prática perigosa que expõe a gestão do sistema a qualquer atacante na internet.
  - **D (Firewalls de host):** Protegem computadores, não a infraestrutura de rede centralizada.

**71. A**
- **Motivo (Certa):** O propósito do **RBAC** é facilitar a gestão de permissões ao atribuí-las com base em funções (Roles). Isto ajuda a garantir o **Mínimo Privilégio**, onde cada utilizador tem apenas os direitos necessários para as suas tarefas.
- **Por que as outras estão erradas:**
  - **B (Encriptar ficheiros):** RBAC gere acessos lógicos, não cifragem de dados.
  - **C (Monitorar atividades):** Função de ferramentas de logging e auditoria.
  - **D (Autenticação mais rápida):** RBAC foca na autorização, não na velocidade da autenticação inicial.

**72. C**
- **Motivo (Certa):** A **Disponibilidade** (Availability) é o princípio da tríade CIA que garante que os dados e sistemas estejam acessíveis aos utilizadores autorizados sempre que necessário.
- **Por que as outras estão erradas:**
  - **A (Integridade):** Garante que os dados são precisos e não alterados.
  - **B (Confidencialidade):** Garante que os dados são secretos e protegidos.
  - **D (Não-repúdio):** Impede que alguém negue ter realizado uma ação.

**73. B**
- **Motivo (Certa):** Um **Trojan** (Cavalo de Troia) é um malware que se faz passar por um programa legítimo (como uma atualização de software fidedigna) para enganar o utilizador e conseguir ser instalado no sistema.
- **Por que as outras estão erradas:**
  - **A (Drive-by download):** Instalação automática e silenciosa ao visitar um site infetado.
  - **C (Phishing):** É o método de entrega da mensagem, mas o malware que se disfarça é o Trojan.
  - **D (Rogue software):** Nome genérico para software malicioso; Trojan é o nome específico para o disfarce.

**74. A**
- **Motivo (Certa):** A **Segmentação de Rede** isola partes da rede entre si. O seu principal benefício é **limitar a propagação de malware**, impedindo que uma infeção num computador chegue rapidamente a toda a organização.
- **Por que as outras estão erradas:**
  - **B (Encriptar tráfego):** Feito por protocolos como o IPsec ou TLS.
  - **C (Monitorar tráfego):** Segmentação ajuda a organizar, mas não é a ferramenta de monitorização por si só.
  - **D (Detetar tentativas de acesso):** Função de um sistema de deteção de intrusão (IDS).

**75. A**
- **Motivo (Certa):** Para sistemas legados que já não podem ser atualizados, a melhor medida é a **Segmentação de Rede**. Colocar o sistema vulnerável numa rede isolada protege o resto da empresa se esse sistema for atacado.
- **Por que as outras estão erradas:**
  - **B (IPS):** Ajuda a detetar, mas não elimina a vulnerabilidade crítica do sistema legado.
  - **C (MFA):** Protege o acesso de utilizadores, mas o sistema pode continuar vulnerável a ataques remotos via rede.
  - **D (Soluções UEBA):** Focam no comportamento do utilizador, não na segurança intrínseca do software antigo.

**76. B**
- **Motivo (Certa):** O **Account Lockout** (Bloqueio de Conta) interrompe ataques de força bruta online ao bloquear o acesso após várias tentativas falhadas, impedindo que o atacante continue a testar senhas.
- **Por que as outras estão erradas:**
  - **A (CAPTCHA):** Dificulta automatismos, mas o bloqueio de conta é a defesa mais robusta mencionada para ataques repetidos.
  - **C (Encriptar com AES):** Protege as senhas guardadas no servidor, mas não impede as tentativas de login na página.
  - **D (Mudar senhas mensalmente):** Não impede o ataque que está a ocorrer neste preciso momento.

**77. C**
- **Motivo (Certa):** O **Command Injection** ocorre quando um atacante consegue inserir comandos do sistema operativo em campos de entrada de uma aplicação web, que são depois executados pelo servidor.
- **Por que as outras estão erradas:**
  - **A (SQL injection):** Injeta comandos específicos de base de dados.
  - **B (XSS):** Injeta scripts para serem executados no browser do utilizador.
  - **D (Directory traversal):** Foca-se em aceder a pastas e ficheiros proibidos no servidor.

**78. B**
- **Motivo (Certa):** Uma **VPN (Virtual Private Network)** cria um túnel encriptado e seguro sobre a internet, permitindo que escritórios remotos comuniquem de forma confidencial e protegida.
- **Por que as outras estão erradas:**
  - **A (VLAN):** Segmenta redes locais dentro de um mesmo edifício ou infraestrutura.
  - **C (IDS):** Sistema que apenas deteta e alerta sobre intrusões.
  - **D (SIEM):** Sistema de gestão centralizada de logs e segurança.

**79. B**
- **Motivo (Certa):** No processo de resposta a incidentes, a prioridade imediata após detetar uma invasão é a contenção. **Desativar a conta comprometida** impede que o atacante continue a agir enquanto a equipa investiga o incidente.
- **Por que as outras estão erradas:**
  - **A (Notificar utilizadores):** Feito em etapas posteriores de comunicação.
  - **C (Rever logs):** Parte da fase de análise e investigação que segue a contenção.
  - **D (Investigação forense):** Feito após a situação estar controlada e contida.

**80. B**
- **Motivo (Certa):** O protocolo **WPA3** utiliza o algoritmo **AES** para fornecer uma encriptação robusta e moderna, corrigindo muitas das falhas de segurança encontradas no WPA2.
- **Por que as outras estão erradas:**
  - **A (RSA):** Algoritmo assimétrico usado em certificados digitais.
  - **C (ECC):** Algoritmo usado frequentemente para troca de chaves em dispositivos móveis.
  - **D (SHA-256):** Algoritmo de hashing usado para integridade, não para cifra de rede.
**81. B**
- **Motivo (Certa):** O **File Integrity Monitoring (FIM)** monitoriza ficheiros críticos do sistema operativo e aplicações através de hashes. Se um atacante ou malware alterar um destes ficheiros, o hash mudará e o FIM enviará um alerta imediato.
- **Por que as outras estão erradas:**
  - **A (Prevenir acesso):** Função das permissões (ACLs) do sistema de ficheiros.
  - **C (Encriptar ficheiros):** Função de ferramentas de cifra como o BitLocker.
  - **D (Monitorar atividade):** Função de logs de auditoria ou ferramentas UEBA.

**82. B**
- **Motivo (Certa):** Ao implementar o **RBAC**, garante-se que os utilizadores tenham acesso apenas ao que é necessário para a sua função específica. Isto é a aplicação direta do princípio do **Mínimo Privilégio** (Least Privilege).
- **Por que as outras estão erradas:**
  - **A (Confidencialidade):** É um objetivo, mas o princípio de design aplicado é o Mínimo Privilégio.
  - **C (Disponibilidade):** RBAC não garante que o sistema esteja online.
  - **D (Não-repúdio):** Garantido por auditoria e assinaturas digitais.

**83. C**
- **Motivo (Certa):** O **Phishing** é um ataque que utiliza comunicações fraudulentas (geralmente e-mail) para enganar os utilizadores e levá-los a revelar dados sensíveis como senhas de login através de URLs falsos.
- **Por que as outras estão erradas:**
  - **A (Pharming):** Redireciona o tráfego para sites falsos manipulando o DNS.
  - **B (Whaling):** Phishing direcionado a executivos de alto nível.
  - **D (Vishing):** Phishing feito por telefone (voz).

**84. B**
- **Motivo (Certa):** Um **Buffer Overflow** ocorre quando uma aplicação escreve dados para além do limite da memória alocada, permitindo a um atacante sobrescrever partes do sistema e executar código malicioso.
- **Por que as outras estão erradas:**
  - **A (XSS):** Injeção de scripts no browser.
  - **C (SQL injection):** Injeção de comandos na base de dados.
  - **D (Escalação de privilégios):** É um possível resultado, mas a falha técnica é o buffer overflow.

**85. B**
- **Motivo (Certa):** A **Gestão de Identidade Federada** permite que os utilizadores utilizem as mesmas credenciais para aceder a aplicações em diferentes redes ou organizações (Single Sign-On entre entidades).
- **Por que as outras estão erradas:**
  - **A (MFA):** É um fator adicional de autenticação, não a base da federação.
  - **C (Encriptar dados):** Federação foca em identidade, não em cifra de transporte.
  - **D (Autenticar APIs):** Embora usem federação, o propósito principal é o SSO entre domínios diferentes.

**86. B**
- **Motivo (Certa):** O **Wireshark** é a ferramenta padrão para capturar e analisar o tráfego de rede em tempo real, permitindo ver pacotes individuais e identificar anomalias.
- **Por que as outras estão erradas:**
  - **A/D (Nessus/OpenVAS):** São scanners de vulnerabilidades (analisam o estado, não o tráfego ativo).
  - **C (Splunk):** Analisa logs gerados, não o tráfego de pacotes brutos em tempo real.

**87. A**
- **Motivo (Certa):** O **Endpoint DLP** monitoriza o que é copiado para unidades USB e pode bloquear a transferência se detetar dados sensíveis, sendo a melhor defesa contra a exfiltração física de dados.
- **Por que as outras estão erradas:**
  - **B (MFA):** Protege o acesso, mas não o uso indevido de dados após o login.
  - **C (Encriptar USB):** Protege se a pen for perdida, mas o dado já saiu da empresa.
  - **D (RBAC):** Controla quem abre o ficheiro, mas não quem o copia para uma pen.

**88. A**
- **Motivo (Certa):** Um **Drive-by Download** instala malware no computador do utilizador apenas por este visitar um site infetado que explora uma falha no browser, sem que seja necessário clicar em nada.
- **Por que as outras estão erradas:**
  - **B (Bomba lógica):** Código que aguarda um evento para se ativar.
  - **C (ARP spoofing):** Ataque de rede local.
  - **D (DNS poisoning):** Redirecionamento de tráfego web.

**89. A**
- **Motivo (Certa):** O **Salting** adiciona dados aleatórios antes do hashing da senha para garantir que senhas iguais resultem em hashes diferentes, o que aumenta drasticamente a complexidade para o atacante.
- **Por que as outras estão erradas:**
  - **B (Encriptar senhas):** Hashing não é encriptação (é unidirecional).
  - **C (Gerar chaves de sessão):** Salting foca no armazenamento seguro de senhas.
  - **D (SSO):** Não tem relação direta com Single Sign-On.

**90. A**
- **Motivo (Certa):** A remediação mais eficaz para APIs vulneráveis é a implementação de uma rigorosa **Validação de Input** em todos os seus endpoints para garantir que apenas dados legítimos sejam processados.
- **Por que as outras estão erradas:**
  - **B (Encriptar dados):** Protege o transporte, mas o ataque ocorre na lógica da aplicação.
  - **C (MFA):** Autentica o utilizador, mas não protege contra falhas no código da API.
  - **D (SIEM):** Ajuda a detetar, mas não corrige a vulnerabilidade.

**91. B**
- **Motivo (Certa):** O objetivo da **Segmentação de Rede** é isolar zonas para **limitar o impacto de uma invasão**, impedindo que um atacante se mova livremente por toda a rede da empresa.
- **Por que as outras estão erradas:**
  - **A (Desempenho):** É um benefício secundário de rede, não o foco principal de segurança.
  - **C (Encriptar tráfego):** Segmentação não cifra dados; isso é feito por encriptação.
  - **D (Simplificar gestão):** Geralmente torna a gestão de firewalls mais complexa.

**92. B**
- **Motivo (Certa):** O **Rootkit** opera no nível mais profundo do sistema operativo (Kernel) para se manter invisível enquanto garante controlo total e persistente ao atacante.
- **Por que as outras estão erradas:**
  - **A (Trojan):** Malware disfarçado que não precisa de operar no kernel.
  - **C (Spyware):** Focado na recolha silenciosa de informações.
  - **D (Worm):** Focado na propagação automática pela rede.

**93. C**
- **Motivo (Certa):** Para APIs na internet, **Enforcar o TLS** (HTTPS) é a medida básica para garantir que todos os dados trocados estejam protegidos contra interceção na rede.
- **Por que as outras estão erradas:**
  - **A (Rate limiting):** Previne ataques de negação de serviço ou força bruta, mas não protege o dado.
  - **B (RBAC):** Gere autorizações, mas os dados continuariam expostos se não houvesse TLS.
  - **D (Prepared statements):** Protege contra SQLi, mas não contra sniffing de rede.

**94. B**
- **Motivo (Certa):** O ataque que visa derrubar um serviço através de uma avalanche de pedidos chamas-se **Denial-of-Service (DoS)**.
- **Por que as outras estão erradas:**
  - **A (SQL injection):** Ataca a integridade/confidencialidade da base de dados.
  - **C (CSRF):** Força o utilizador a realizar ações indesejadas num site.
  - **D (ARP poisoning):** Redireciona tráfego na rede local.

**95. C**
- **Motivo (Certa):** A **CRL** serve para **identificar certificados revogados** que já não devem ser aceites pelos sistemas, mesmo que ainda não tenham expirado cronologicamente.
- **Por que as outras estão erradas:**
  - **A (Guardar chaves):** Feito em HSMs ou cofres digitais.
  - **B (Validar integridade):** Validada pela assinatura da CA.
  - **D (Encriptar comunicações):** CRL é apenas uma lista de consulta de estado.

**96. A**
- **Motivo (Certa):** O **NAC (Network Access Control)** é a melhor forma de garantir que apenas dispositivos autorizados e conformes com as políticas de segurança consigam aceder à rede Wi-Fi da empresa.
- **Por que as outras estão erradas:**
  - **B (WPA3):** Encripta os dados, mas não controla que hardware pode ligar-se se tiver a senha.
  - **C (Mudar senhas):** Não impede a ligação física de hardware não autorizado.
  - **D (EDR):** Monitoriza o interior do sistema operativo, não o acesso físico à rede.

**97. B**
- **Motivo (Certa):** O uso de **Algoritmos de Hashing** (como SHA-256) garante que o dado não foi alterado durante a transmissão, fornecendo a prova de integridade necessária.
- **Por que as outras estão erradas:**
  - **A (Encriptar com AES):** Garante o segredo (confidencialidade), mas não prova integridade (dados cifrados podem ser alterados).
  - **C (MFA):** Garante a identidade de quem acede.
  - **D (IDS):** Deteta ataques, mas não valida ficheiros individuais.

**98. C**
- **Motivo (Certa):** O **HIPAA** é a regulamentação dos EUA focada na proteção e privacidade das informações de saúde dos pacientes.
- **Por que as outras estão erradas:**
  - **A (GDPR):** Focada na proteção de dados gerais na Europa.
  - **B (PCI DSS):** Focada na segurança de dados de cartões de pagamento.
  - **D (SOX):** Focada na integridade financeira de empresas públicas.

**99. A**
- **Motivo (Certa):** Contra ameaças internas, o **Treino de Sensibilização** é a estratégia mais eficaz para educar os funcionários e criar uma cultura de vigilância e reporte de comportamentos suspeitos.
- **Por que as outras estão erradas:**
  - **B (Encriptação):** O insider muitas vezes tem acesso legítimo aos dados desencriptados.
  - **C (Soluções EDR):** Detetam o malware, mas não as ações legítimas de um funcionário mal-intencionado.
  - **D (Senhas fortes):** Não impedem as ações de quem já tem uma conta legítima.

**100. A**
- **Motivo (Certa):** Contra ataques **XSS**, a melhor mitigação é a **Validação e Sanitização de Input** no lado do servidor, garantindo que nenhum código malicioso seja processado ou refletido para outros utilizadores.
- **Por que as outras estão erradas:**
  - **B (Encriptar base de dados):** Não impede a execução de scripts no browser.
  - **C (Bloquear IPs):** Ineficaz contra ataques distribuídos ou via bots.
  - **D (Endpoint protection):** Pode ajudar a detetar o resultado, mas não corrige a vulnerabilidade na aplicação web.
