# Respostas - Satender Kumar Practice Test 2 - CompTIA Security+ (SY0-701)

Abaixo estão as respostas para as questões do Teste 2:

**1. B**
- **Motivo (Certa):** Quando um atacante utiliza credenciais legítimas roubadas (Username/Password), o sistema assume que é o funcionário real. A imposição de *Multi-factor Authentication (MFA)* impede o acesso, pois o atacante precisará de um segundo fator físico ou biométrico (token, telemóvel) que não possui, bloqueando a intrusão mesmo com a senha correta.
- **Por que as outras estão erradas:**
  - **A (EDR):** Útil para detetar comportamentos anómalos após o login, mas o MFA é o controlo preventivo primário para evitar que o login ocorra com credenciais roubadas.
  - **C (HIDS):** Deteta intrusões no host, mas se o login for feito com credenciais válidas, o HIDS poderá não ver a ação como uma intrusão imediata.
  - **D (Network segmentation):** Limita o movimento lateral após a invasão, mas não impede o acesso inicial à base de dados se as credenciais roubadas tiverem permissão direta.

**2. B**
- **Motivo (Certa):** *Secure coding practices* (Práticas de codificação segura) envolvem a aplicação de diretrizes de segurança durante todo o ciclo de desenvolvimento (SDLC), como validação de inputs e tratamento de erros, garantindo que o código nasce livre de vulnerabilidades comuns (como injeções).
- **Por que as outras estão erradas:**
  - **A (Continuous monitoring):** É um processo de deteção pós-implementação, não evita a introdução do erro durante a escrita do código.
  - **C (Input sanitization):** É uma técnica específica dentro do secure coding, mas o conceito geral de "práticas de codificação segura" abrange esta e muitas outras defesas.
  - **D (Patch management):** Foca em corrigir falhas em softwares de terceiros ou sistemas já instalados, não na criação de código novo seguro pelo desenvolvedor.

**3. B**
- **Motivo (Certa):** O *Full Packet Capture* (FPC) grava todos os bits e bytes que passam na rede. Numa investigação de *Data Breach* (violação de dados), o FPC permite reconstruir exatamente o que foi roubado, por onde saiu e quais ficheiros foram acedidos, oferecendo uma visibilidade forense total sobre a extensão do dano.
- **Por que as outras estão erradas:**
  - **A (Identifying malware signatures):** Um antivírus ou IDS/IPS é muito mais eficiente para isto do que analisar capturas massivas de pacotes manualmente.
  - **C (Blocking phishing):** O FPC é uma ferramenta de análise forense (passiva/post-mortem), não um mecanismo de bloqueio preventivo em tempo real.
  - **D (Monitoring compliance):** Embora possa ajudar, existem ferramentas de auditoria e DLP muito mais específicas para conformidade do que a captura bruta de rede.

**4. B**
- **Motivo (Certa):** De acordo com as diretrizes de ética (como as da CompTIA/EC-Council), assim que um Pen-tester descobre e explora uma vulnerabilidade crítica, o passo imediato deve ser **documentar e reportar** (especialmente se houver risco de paragem do sistema), garantindo que o cliente saiba do perigo antes de prosseguir com testes mais agressivos.
- **Por que as outras estão erradas:**
  - **A (Escalate privileges):** Embora faça parte de um Pen-test, a ética e a segurança do ambiente do cliente exigem que a documentação da falha crítica venha primeiro para evitar danos não planeados.
  - **C (Continue testing):** Ignorar uma falha crítica já explorada para procurar outras pode deixar o sistema vulnerável a atacantes reais durante o teste.
  - **D (Install monitoring software):** Isto assemelha-se a instalar uma backdoor, o que pode violar as regras de engajamento ético se não for estritamente solicitado.

**5. A**
- **Motivo (Certa):** Em ambientes Cloud, a responsabilidade pela segurança dos dados é do cliente. A **Encriptação** (em trânsito via TLS e em repouso via AES) garante que, mesmo que o provedor ou o armazenamento sejam comprometidos, os dados permaneçam ilegíveis e protegidos contra acessos não autorizados.
- **Por que as outras estão erradas:**
  - **B (Dedicated public IP):** Um IP dedicado não providencia segurança adicional aos dados em si, apenas uma morada fixa.
  - **C (VPN):** Protege o acesso, mas não garante a segurança dos dados se estes estiverem guardados sem cifra no servidor do provedor.
  - **D (Regular penetration tests):** É uma medida de avaliação, mas a encriptação é o controlo técnico direto de proteção da informação.

**6. A**
- **Motivo (Certa):** No *DNS Poisoning* (ou envenenamento de cache), o atacante insere entradas falsas no servidor DNS. Quando um utilizador tenta aceder a um site legítimo (ex: banco.com), o DNS fornece o IP do atacante, redirecionando o utilizador para um site malicioso de forma invisível.
- **Por que as outras estão erradas:**
  - **B (Increase in ARP traffic):** Isto indicaria um ataque de *ARP Spoofing/Poisoning* (Layer 2), não de DNS.
  - **C (Cannot resolve external domain names):** Isto indica uma falha de serviço (DoS) ou erro de configuração, não necessariamente um envenenamento (onde a resolução "parece" funcionar, mas dá o IP errado).
  - **D (Internal DNS queries logged):** É apenas uma atividade de monitorização, não um sinal de ataque bem-sucedido.

**7. A**
- **Motivo (Certa):** O ataque descrito é um XSS (Cross-Site Scripting). A melhor defesa é a **Input Validation** (Validação de Entradas) rigorosa, garantindo que o código JavaScript injetado seja filtrado ou neutralizado antes de ser processado ou exibido a outros utilizadores.
- **Por que as outras estão erradas:**
  - **B (Server-side encryption):** Protege dados guardados, mas não impede a execução de scripts maliciosos no browser do utilizador.
  - **C (Restrict API endpoints):** Pode ajudar na segurança geral, mas não resolve a vulnerabilidade de injeção num campo de entrada web.
  - **D (MFA):** Protege o login, mas não impede ataques que ocorrem após o utilizador já estar autenticado na aplicação.

**8. A**
- **Motivo (Certa):** O cenário descreve um ataque de *Ransomware*. A ação imediata deve ser o **Isolamento** do dispositivo da rede para impedir que o malware se espalhe para outros servidores ou pastas partilhadas na organização (Contenção).
- **Por que as outras estão erradas:**
  - **B (Power off):** Em alguns casos, desligar a máquina pode destruir provas voláteis na RAM ou corromper o disco, dificultando a recuperação ou análise forense. O isolamento de rede é mais seguro.
  - **C (Pay the ransom):** Nunca é recomendado, pois não há garantia de devolução dos dados e financia o crime.
  - **D (Restore from backup):** É o passo final da recuperação, mas primeiro deve-se conter e erradicar a ameaça para o backup não ser infetado novamente.

**9. B**
- **Motivo (Certa):** *User and Entity Behavior Analytics (UEBA)* utiliza Machine Learning para criar um perfil de comportamento "normal" dos funcionários. É extremamente eficaz contra **Insider Threats** (ameaças internas), pois deteta desvios súbitos (ex: um funcionário que acede a dados às 3h da manhã que nunca acedeu antes), mesmo que usem credenciais legítimas.
- **Por que as outras estão erradas:**
  - **A (EDR):** Foca em malwares e processos no computador, mas pode não identificar um funcionário legítimo a abusar dos seus privilégios de acesso a ficheiros.
  - **C (DLP):** Deteta a saída de dados, mas o UEBA deteta a intenção e o comportamento suspeito antes mesmo de o dado sair.
  - **D (IPS):** Foca em ataques de rede conhecidos (assinaturas), falhando em detetar comportamentos humanos anómalos.

**10. B**
- **Motivo (Certa):** Tráfego outbound (saída) para um IP malicioso conhecido é um sinal clássico de um sistema comprometido (Bot) a tentar comunicar com o seu servidor de **Command-and-Control (C2)** para receber ordens ou exfiltrar dados roubados.
- **Por que as outras estão erradas:**
  - **A (DoS attack):** Ataques DoS são geralmente tráfego de *entrada* (Inbound) massivo para derrubar o sistema, não tráfego de saída.
  - **C (Employee bypassing controls):** Menos provável se o IP for "conhecido como malicioso" pela inteligência de ameaças.
  - **D (Misconfigured firewall):** Uma regra mal configurada permite o tráfego, mas não explica por que razão o tráfego está a ser gerado em primeiro lugar (o compromisso é a causa raiz).

**11. A**
- **Motivo (Certa):** Para que a encriptação seja eficaz a longo prazo, as chaves de encriptação devem ser geridas com segurança. A **Key Rotation** (Rotação de Chaves) garante que, se uma chave for comprometida sem ninguém saber, o impacto seja limitado no tempo, uma vez que a chave será alterada regularmente por uma nova.
- **Por que as outras estão erradas:**
  - **B (Encrypt backups):** É uma boa prática, mas não torna a encriptação do servidor principal "mais eficaz", apenas protege outro local.
  - **C (RBAC):** É um controlo de acesso, não um controlo criptográfico.
  - **D (Symmetric keys):** A escolha do algoritmo (simétrico vs assimétrico) é uma decisão de design, mas a gestão (rotação) é o que garante a eficácia operacional da segurança.

**12. B**
- **Motivo (Certa):** O SQL Injection ocorre porque a aplicação não trata corretamente os dados inseridos pelo utilizador, permitindo que comandos SQL sejam injetados e executados na base de dados. A causa raiz é o **Input Handling inseguro** (falta de parametrização ou sanitização).
- **Por que as outras estão erradas:**
  - **A (Lack of WAF):** Um WAF pode bloquear o ataque, mas a falha (causa raiz) continua a existir no código da aplicação.
  - **C (Absence of database encryption):** A encriptação protege os dados contra leitura, mas não impede que um comando SQL injetado apague tabelas ou crie novos utilizadores.
  - **D (Weak passwords):** SQL Injection não depende de senhas; o atacante aproveita uma falha lógica no código para "saltar" a autenticação.

**13. B**
- **Motivo (Certa):** *Spear Phishing* é um ataque de phishing direcionado a uma pessoa ou grupo específico (neste caso, fingindo ser o suporte de TI da própria empresa). Ao contrário do phishing comum (em massa), este usa informações de contexto para parecer mais credível e enganar o alvo.
- **Por que as outras estão erradas:**
  - **A (Whaling):** É um spear phishing direcionado especificamente a altos executivos (CEOs, Diretores).
  - **C (Vishing):** É o phishing realizado através de chamadas de voz (Voice Phishing).
  - **D (Pretexting):** É a criação de uma história inventada (o pretexto) para obter dados, mas quando é feito via e-mail com o intuito de roubo de credenciais, o termo técnico da prova é Spear Phishing.

**14. B**
- **Motivo (Certa):** A *Containerization* (Contentorização) permite isolar a aplicação e as suas dependências do sistema operativo e de outras aplicações. Se um contentor for comprometido, o atacante fica restrito ao ambiente isolado do contentor, dificultando o acesso ao host principal ou a outros serviços.
- **Por que as outras estão erradas:**
  - **A (Encrypting data by default):** Contentores não encriptam dados por defeito; essa configuração deve ser feita manualmente.
  - **C (Real-time monitoring):** O isolamento é a característica de segurança primária; a monitorização é uma função externa de gestão.
  - **D (Preventing zero-day):** Contentores não impedem vulnerabilidades de dia zero no código da aplicação, apenas limitam o seu impacto através do isolamento.

**15. A**
- **Motivo (Certa):** O princípio do *Least Privilege* (Mínimo Privilégio) dita que os utilizadores devem ter apenas as permissões estritamente necessárias para realizar o seu trabalho. Se existem permissões excessivas, a correção imediata é revogá-las e aplicar este princípio para reduzir a superfície de ataque.
- **Por que as outras estão erradas:**
  - **B (Rotate passwords):** Mudar senhas não resolve o problema de o utilizador ter acesso a pastas que não devia ter (permissão errada).
  - **C (Network segmentation):** É uma medida de rede, mas o problema aqui é ao nível do controlo de acessos (IAM) às contas.
  - **D (Enable logging):** Deteta o abuso das permissões, mas não remove o risco da existência dessas permissões excessivas.

**16. C**
- **Motivo (Certa):** O *Context-aware access control* analisa o contexto da ligação. Se uma conta VPN é acedida em Londres e 5 minutos depois em Nova Iorque ("Impossibilidade Geográfica"), o sistema bloqueia o acesso por comportamento impossível ou suspeito, impedindo a partilha ou roubo de contas.
- **Por que as outras estão erradas:**
  - **A (Split tunneling):** É uma configuração técnica de como o tráfego VPN flui, não um controlo de segurança contra acessos simultâneos.
  - **B (MFA):** Ajuda a garantir que é o utilizador real, mas não impede, por si só, que duas pessoas com acesso ao mesmo fator (ex: SMS partilhado ou app clonada) se liguem de locais diferentes.
  - **D (SSO):** Facilita o login em múltiplas apps com uma só conta, mas não controla a localização geográfica dos acessos.

**17. B**
- **Motivo (Certa):** Um *Rootkit* é desenhado para se esconder nas camadas profundas do sistema operativo (kernel) e fornecer acesso privilegiado persistente (Backdoor). O seu principal objetivo é manter o controlo remoto do atacante sem ser detetado pelas ferramentas comuns do SO.
- **Por que as outras estão erradas:**
  - **A (Ransomware):** Foca em cifrar ficheiros para extorsão, sendo geralmente muito visível.
  - **C (Spyware):** Foca em recolher dados silenciosamente, mas não necessariamente em fornecer uma backdoor de controlo remoto total.
  - **D (Adware):** Foca em exibir publicidade indesejada.

**18. A**
- **Motivo (Certa):** Tráfego de um ativo crítico para uma porta não standard é um indicador forte de exfiltração de dados ou comando e controlo. A ação imediata correta num SOC é **Bloquear a porta** para interromper o possível dano e **investigar** a origem da anomalia.
- **Por que as outras estão erradas:**
  - **B (Full packet capture):** É útil para análise posterior, mas não interrompe o ataque que está a decorrer.
  - **C (Notify and take no action):** É perigoso, pois permite que o ataque continue.
  - **D (Restart system):** Pode fazer o atacante perder a ligação temporariamente, mas também apaga provas voláteis na memória RAM que explicariam como ele entrou.

**19. A**
- **Motivo (Certa):** A *Esteganografia* é a técnica de esconder mensagens ou código dentro de outro ficheiro (como uma imagem ou áudio). O ficheiro parece normal à vista desarmada, mas contém dados ocultos que podem ser extraídos ou executados por um malware.
- **Por que as outras estão erradas:**
  - **B (XSS):** Envolve injeção de scripts em páginas web, não código escondido dentro de binários de imagem.
  - **C (Logic bomb):** É um gatilho temporal ou de condição, não uma técnica de ocultação em ficheiros.
  - **D (Watering hole):** É um ataque que infeta sites frequentados por um grupo específico de utilizadores, não uma técnica de esconder código em imagens.

**20. B**
- **Motivo (Certa):** A *Tokenization* (Tokenização) substitui dados sensíveis (como números de cartão de crédito) por um valor aleatório sem significado chamado "token". Se a base de dados for roubada, o atacante apenas obtém os tokens, que são inúteis sem acesso ao sistema original que faz a correspondência com os dados reais.
- **Por que as outras estão erradas:**
  - **A (Encrypt data):** A encriptação usa algoritmos matemáticos reversíveis; a tokenização usa substituição por valores aleatórios.
  - **C (Multi-factor authentication):** Não tem relação com a proteção de dados em repouso (Storage).
  - **D (Hash):** Hashing é unidirecional e usado para integridade; a tokenização é usada para manter a utilidade do dado (ex: processar pagamentos) sem expor o valor real.
**21. A**
- **Motivo (Certa):** O *Static Application Security Testing (SAST)* analisa o código-fonte, binários ou bytes da aplicação sem a executar (White-box testing). É a melhor ferramenta para identificar falhas lógicas ou vulnerabilidades de segurança logo no início do desenvolvimento, **antes da implementação**.
- **Por que as outras estão erradas:**
  - **B (SIEM):** Agrega logs de sistemas em execução; não analisa o código-fonte de uma app em desenvolvimento.
  - **C (Network vulnerability scanner):** Varre a rede à procura de portas abertas ou serviços vulneráveis em servidores ativos, não o código interno de uma aplicação.
  - **D (Intrusion detection system):** Deteta ataques em tempo real num ambiente de produção, não falhas de código antes da app ser lançada.

**22. B**
- **Motivo (Certa):** O *DNS Spoofing* (ou Poisoning) consiste em alterar as entradas na cache de um servidor DNS. Ao fazer isto, o atacante consegue redirecionar o tráfego legítimo de um utilizador para um endereço IP controlado pelo atacante (site malicioso), de forma invisível para o utilizador.
- **Por que as outras estão erradas:**
  - **A (ARP poisoning):** Ocorre na rede local (Layer 2) e foca-se em associar o MAC address do atacante ao IP de outra máquina; não altera registos de nomes de domínio (DNS).
  - **C (IP spoofing):** Consiste em falsificar o endereço IP de origem de um pacote para esconder a identidade, mas não redireciona utilizadores via nomes de domínio.
  - **D (Smishing):** É um ataque de phishing realizado através de SMS.

**23. B**
- **Motivo (Certa):** Ataques de força bruta tentam milhares de combinações de senhas. A imposição de um *Account Lockout* (Bloqueio de Conta) após um número específico de tentativas falhadas trava o ataque, pois a conta fica inativa por um período, impedindo que o atacante continue a testar senhas.
- **Por que as outras estão erradas:**
  - **A (CAPTCHA):** Ajuda a impedir bots automatizados, mas o bloqueio de conta é a defesa técnica mais direta para impedir que o atacante (humano ou bot) continue a tentar.
  - **C (Firewall):** Filtra tráfego de rede, mas se o portal de login estiver aberto à internet, a firewall não distingue uma tentativa de login legítima de uma forçada por si só.
  - **D (Email-based 2FA):** Protege a conta após a senha ser descoberta, mas o termo "defender contra força bruta" foca-se em interromper o processo de adivinhação da senha.

**24. A**
- **Motivo (Certa):** Redes Wi-Fi públicas são inseguras e permitem a interceção de dados. A utilização obrigatória de uma **VPN** (Virtual Private Network) cria um túnel encriptado de ponta a ponta, garantindo que mesmo que o Wi-Fi seja intercetado, os dados corporativos permaneçam ilegíveis para o atacante.
- **Por que as outras estão erradas:**
  - **B (Block public Wi-Fi):** Seria eficaz, mas muitas vezes impraticável; a VPN é a solução técnica que permite o trabalho remoto seguro.
  - **C (MAC address filtering):** É facilmente contornado por atacantes (MAC Spoofing) e não encripta os dados.
  - **D (Disable file sharing):** Reduz um risco específico, mas não protege o tráfego de e-mail ou aplicações sensíveis.

**25. B**
- **Motivo (Certa):** *Endpoint device control policies* (Políticas de controlo de dispositivos) permitem aos administradores bloquear ou restringir o uso de portas USB. Isto impede fisicamente que dispositivos não autorizados sejam ligados, mitigando o risco de infeção por malware via hardware físico.
- **Por que as outras estão erradas:**
  - **A (Secure Boot):** Garante que o computador arranca com software de confiança, mas não impede o uso de pens USB maliciosas com o sistema já ligado.
  - **C (Anti-malware):** É uma camada importante, mas o controlo de dispositivos (B) é a medida específica para impedir a entrada do vetor físico.
  - **D (Email attachment filtering):** Protege contra malware via e-mail, não tem relação com dispositivos físicos USB.

**26. B**
- **Motivo (Certa):** Em ambientes Cloud, os *Security Groups* funcionam como firewalls virtuais ao nível da instância. Permitem definir regras granulares de tráfego de entrada e saída baseadas em IP, porta e protocolo, controlando exatamente quem pode aceder a cada recurso.
- **Por que as outras estão erradas:**
  - **A (Encrypt traffic):** Security groups controlam o acesso (quem entra/sai), não realizam a encriptação dos dados.
  - **C (Automate firewall rules):** Embora possam ser automatizados, o seu *benefício primário* é a aplicação do controlo de acesso granular na rede.
  - **D (Provide zero-trust access):** Podem fazer parte de uma estratégia Zero Trust, mas são apenas um componente de filtragem de rede.

**27. A**
- **Motivo (Certa):** Um *Buffer Overflow* ocorre quando um programa escreve mais dados num bloco de memória do que este suporta. O objetivo principal do atacante é corromper o ponteiro de execução para apontar para o seu próprio código malicioso, conseguindo a **Execução de Código Arbitrário**.
- **Por que as outras estão erradas:**
  - **B (MITM):** É um ataque de interceção de rede, não de corrupção de memória aplicacional.
  - **C (Steal sensitive data):** Pode ser uma consequência, mas a finalidade técnica imediata do exploit de buffer é o ganho de controlo (execução).
  - **D (Install ransomware):** É um tipo de malware; o buffer overflow é a "chave" usada para poder instalá-lo.

**28. B**
- **Motivo (Certa):** Um *Honeypot* é um sistema deliberadamente vulnerável exposto na rede para atrair atacantes. Serve para divertir o atacante de alvos reais e para **estudar o seu comportamento**, ferramentas e técnicas num ambiente controlado sem risco para a produção.
- **Por que as outras estão erradas:**
  - **A (Enhance user authentication):** Honeypots não têm relação com a autenticação de utilizadores legítimos.
  - **C (Encrypt data):** Honeypots não realizam funções criptográficas.
  - **D (Accelerate vulnerability scans):** Pelo contrário, podem atrasar scans ao dar-lhes alvos falsos para investigar.

**29. B**
- **Motivo (Certa):** Para garantir o cumprimento de retenção de longo prazo (7 anos) e evitar a manipulação de provas, deve-se utilizar armazenamento **WORM (Write-Once-Read-Many)**. Isto garante que, uma vez gravados, os logs não possam ser alterados ou apagados, mantendo a integridade para auditorias.
- **Por que as outras estão erradas:**
  - **A (Encrypt logs):** Protege a confidencialidade, mas não garante que os logs não sejam apagados antes dos 7 anos.
  - **C (Cloud storage):** É uma escolha de infraestrutura, mas a tecnologia WORM é o que garante a imutabilidade exigida pelo compliance.
  - **D (Log rotation every 30 days):** A rotação remove logs antigos; para reter 7 anos, o sistema deve arquivar e não descartar.

**30. B**
- **Motivo (Certa):** Em redes públicas (Internet), a criptografia de **Chave Assimétrica** (Pares Público-Privado) é ideal. Permite que qualquer pessoa use a chave pública para encriptar uma mensagem, mas apenas o destinatário com a chave privada correspondente consiga decifrá-la, resolvendo o problema da distribuição segura de chaves.
- **Por que as outras estão erradas:**
  - **A (Symmetric key):** Exige que ambas as partes já tenham a mesma chave secreta, o que é difícil de gerir de forma segura em redes públicas.
  - **C (Pre-shared key):** É um tipo de chave simétrica; sofre do mesmo problema de distribuição inicial.
  - **D (One-time pad):** É impraticável para comunicações de rede modernas devido ao tamanho exigido da chave.

**31. A**
- **Motivo (Certa):** Acesso a ficheiros sensíveis fora das horas normais por alguém que já tem credenciais legítimas é um indicador clássico de uma **Ameaça Interna (Insider Threat)**. Pode ser um funcionário a tentar roubar dados sem ser notado ou um ex-funcionário com conta ainda ativa.
- **Por que as outras estão erradas:**
  - **B (Credential stuffing):** Envolve testar milhares de senhas roubadas noutros sites para tentar entrar; aqui o acesso já foi feito por uma conta da empresa.
  - **C (Privilege escalation):** É o ato de tentar ganhar mais permissões (tornar-se admin); o foco aqui é o *momento* suspeito do acesso.
  - **D (Malware infection):** Malware geralmente opera de forma automatizada e não necessariamente apenas "fora de horas" como um humano mal-intencionado.

**32. C**
- **Motivo (Certa):** O *Role-Based Access Control (RBAC)* atribui permissões com base na função do utilizador. Ao implementar RBAC e o princípio do privilégio mínimo, limita-se o dano de um ataque, impedindo que uma conta comum tenha permissões para subir de nível ou aceder a funções de administrador.
- **Por que as outras estão erradas:**
  - **A (Secure coding):** Ajuda a evitar bugs de software, mas o RBAC é o controlo estrutural que define os limites de acesso às funções do sistema.
  - **B (MFA):** Protege a entrada inicial, mas não impede que um utilizador já logado tente explorar falhas internas.
  - **D (Firewalls):** Controlam o tráfego de rede, mas a escalação de privilégios ocorre dentro do sistema operativo do servidor.

**33. B**
- **Motivo (Certa):** Um *Bastion Host* é um servidor fortificado (Hardened) exposto à internet. Serve como o único ponto de entrada para aceder a uma rede privada, alojando serviços públicos ou servindo de "ponte" segura para administradores acederem a sistemas internos.
- **Por que as outras estão erradas:**
  - **A (Detect intrusions):** Esta é a função de um IDS/IPS.
  - **C (Provide backup):** Função de servidores de backup ou redundância.
  - **D (Encrypt sensitive communications):** Embora use encriptação (SSH), a sua função primária é ser um ponto de entrada fortificado na rede.

**34. B**
- **Motivo (Certa):** O *Ping of Death* é um ataque legado de DoS que envia pacotes ICMP maiores do que o limite de 65.535 bytes. Ao tentar remontar este pacote fragmentado ilegal, o sistema operativo da vítima sofre um crash por falta de memória ou erro de processamento.
- **Por que as outras estão erradas:**
  - **A (SYN flood):** Tenta esgotar as ligações TCP enviando múltiplos pedidos de conexão sem os completar.
  - **C (Teardrop attack):** Envia fragmentos com tamanhos sobrepostos para confundir o sistema na remontagem (semelhante ao B, mas o B foca no tamanho "Death" do pacote).
  - **D (Replay attack):** Consiste em capturar e reenviar um pacote legítimo para ganhar acesso.

**35. B**
- **Motivo (Certa):** A *Micro-segmentação* divide a rede em zonas granulares ao nível da aplicação ou VM. O objetivo é aplicar o modelo Zero Trust, garantindo que se um servidor for comprometido, o atacante fique isolado nesse segmento, impedindo o movimento lateral para outros sistemas sensíveis.
- **Por que as outras estão erradas:**
  - **A (Simplificar roteamento):** A segmentação torna o roteamento mais complexo devido às múltiplas regras.
  - **C (Melhorar eficiência de firewall):** Exige mais processamento para gerir as centenas de regras granulares.
  - **D (Melhorar encriptação):** A segmentação controla o tráfego, não a cifra dos dados.

**36. C**
- **Motivo (Certa):** O *Phishing* é um ataque genérico via e-mail onde o atacante se faz passar por uma entidade fidedigna (como um banco) para enganar qualquer utilizador e obter credenciais. Como o alvo não é especificado como um executivo ou grupo restrito, o termo correto é Phishing.
- **Por que as outras estão erradas:**
  - **A (Whaling):** Direcionado exclusivamente a altos executivos (CEOs).
  - **B (Spear phishing):** Direcionado a uma pessoa específica com informações personalizadas.
  - **D (Vishing):** Phishing realizado por chamada de voz.

**37. B**
- **Motivo (Certa):** Um *Penetration Test* antes do lançamento é a simulação mais realista de um ataque. Permite identificar como falhas podem ser exploradas na prática, garantindo que as vulnerabilidades críticas sejam corrigidas antes de a aplicação estar disponível para atacantes reais.
- **Por que as outras estão erradas:**
  - **A (Automated scanning):** Útil durante o desenvolvimento, mas não substitui a criatividade e a profundidade de um teste de invasão humano.
  - **C (Encrypt all data):** Protege a informação, mas não minimiza o risco de o sistema ser invadido por outras falhas.
  - **D (Real-time monitoring):** Ajuda a detetar problemas após o lançamento, mas não os resolve na fase de implementação.

**38. A**
- **Motivo (Certa):** *Defense-in-depth* (Defesa em Profundidade) utiliza múltiplas camadas de segurança independentes. Se um atacante passar pela firewall, ainda terá de enfrentar o IPS, o antivírus, a encriptação e os controlos de acesso, reduzindo drasticamente a probabilidade de sucesso.
- **Por que as outras estão erradas:**
  - **B (Encrypting data):** É apenas um tipo de controlo, não a estratégia completa de múltiplas camadas.
  - **C (Firewalls at every layer):** É uma boa prática, mas a defesa em profundidade abrange controlos físicos, técnicos e administrativos.
  - **D (Using IDS/IPS):** Ferramentas específicas de uma das camadas de defesa.

**39. B**
- **Motivo (Certa):** O papel de uma plataforma *SOAR (Security Orchestration, Automation, and Response)* é integrar ferramentas de segurança e **automatizar os fluxos de resposta**. Isto permite que incidentes comuns sejam resolvidos em segundos através de scripts (Playbooks) sem intervenção humana manual.
- **Por que as outras estão erradas:**
  - **A (Correlacionar eventos):** Função primária do SIEM. O SOAR age sobre os alertas que o SIEM gera.
  - **C (Prevenir ransomware):** SOAR ajuda na resposta rápida, mas a prevenção direta é feita por antivírus e EDR.
  - **D (Analisar vulnerabilidades):** Função de Scanners de Vulnerabilidade.

**40. C**
- **Motivo (Certa):** Aplicações modernas usam bibliotecas de terceiros que podem ter falhas. Utilizar ferramentas de *Dependency Scanning* permite identificar automaticamente quais bibliotecas têm vulnerabilidades conhecidas (CVEs), permitindo à equipa atualizar apenas os componentes em risco.
- **Por que as outras estão erradas:**
  - **A (WAF):** Pode bloquear a exploração, mas a vulnerabilidade continua a existir no código da biblioteca.
  - **B (Code reviews):** Revisões manuais raramente conseguem analisar milhares de linhas de código de bibliotecas externas de terceiros.
  - **D (Remover a biblioteca):** Pode ser impossível se a app depender da funcionalidade; a prática correta é atualizar para uma versão segura.

**41. B**
- **Motivo (Certa):** Um ataque de *Man-in-the-middle (MITM)* ocorre quando um atacante interceta e, possivelmente, altera a comunicação entre duas partes que acreditam estar a falar diretamente uma com a outra. O atacante pode ler mensagens privadas e até injetar novos dados na sessão sem o conhecimento das vítimas.
- **Por que as outras estão erradas:**
  - **A (DNS poisoning):** Redireciona o tráfego para um IP falso, mas não descreve a interceção e alteração ativa de uma conversa em curso.
  - **C (Phishing):** É um ataque de fraude via e-mail para obter dados, não uma interceção técnica de túneis de comunicação.
  - **D (Replay attack):** Consiste em capturar um pacote e reenviá-lo mais tarde, sem necessariamente estar "no meio" da conversa ativa ou alterar o conteúdo.

**42. A**
- **Motivo (Certa):** *Port Security* num switch permite limitar o acesso a portas físicas baseando-se no MAC address. Isto **bloqueia dispositivos não autorizados** (ex: um portátil de um estranho ligado a uma tomada de rede da empresa) ao desativar a porta se um endereço desconhecido for detetado.
- **Por que as outras estão erradas:**
  - **B (Monitorar tráfego):** Port security é um controlo preventivo de acesso, não uma ferramenta de monitorização de tráfego malicioso (como um IDS).
  - **C (Encriptar comunicações):** Switches operam na Layer 2; a encriptação de rede é feita por protocolos de camadas superiores como IPsec ou TLS.
  - **D (Segurança física):** Port security é um controlo lógico; a segurança física envolveria barreiras reais como trincos e câmaras.

**43. A**
- **Motivo (Certa):** Para impedir o acesso físico de pessoas não autorizadas a locais sensíveis como centros de dados, a **Autenticação Biométrica** (digital, retina, face) é o método mais eficaz, pois é inerente ao indivíduo e muito difícil de falsificar ou partilhar.
- **Por que as outras estão erradas:**
  - **B (RBAC):** É um controlo de acesso lógico para permissões em sistemas e ficheiros.
  - **C (NAC):** Network Access Control controla que dispositivos se ligam à rede, não quem entra fisicamente na sala.
  - **D (Strong passwords):** Protegem o acesso ao software de gestão, não impedem a entrada física de um intruso na sala dos servidores.

**44. B**
- **Motivo (Certa):** Um *Web Application Firewall (WAF)* analisa especificamente o tráfego HTTP/HTTPS. A sua função é **bloquear ataques aplicacionais** (como SQL Injection e XSS) que as firewalls de rede tradicionais não conseguem detetar por não inspecionarem o conteúdo da aplicação web.
- **Por que as outras estão erradas:**
  - **A (Prevenir DoS de rede):** Embora ajude em DoS aplicacional, as firewalls de rede ou serviços de mitigação dedicados são melhores para ataques de inundação de rede.
  - **C (Monitorar tráfego de saída):** Esta é a função de um Proxy de Saída (Egress filtering).
  - **D (Encriptar comunicações):** TLS/SSL faz a encriptação; o WAF foca na inspeção do tráfego para segurança.

**45. B**
- **Motivo (Certa):** *Geofencing* (restringir acesso por localização) é um exemplo de **Context-aware access control**. O sistema decide conceder acesso baseando-se no contexto do utilizador, como a sua localização geográfica, horário ou tipo de dispositivo.
- **Por que as outras estão erradas:**
  - **A (Role-based):** Baseia-se no cargo ou função da pessoa (ex: RH, TI), independentemente de onde ela se encontre.
  - **C (Mandatory):** Baseia-se em níveis de classificação definidos centralmente pelo sistema (ex: Militar).
  - **D (Discretionary):** O proprietário do dado decide quem tem acesso.

**46. C**
- **Motivo (Certa):** A defesa mais eficaz contra SQL Injection é o uso de **Prepared Statements (Consultas Parametrizadas)**. Isto obriga o sistema a tratar o input do utilizador apenas como dados, impedindo que qualquer código malicioso inserido no formulário seja executado como um comando pela base de dados.
- **Por que as outras estão erradas:**
  - **A (Strong passwords):** SQLi explora falhas no código da aplicação, não a força das senhas das contas.
  - **B (Encriptar registos):** Protege os dados contra leitura não autorizada, mas não impede que um SQLi apague ou modifique a base de dados.
  - **D (MFA):** Protege o login, mas o SQLi pode ser realizado em qualquer campo de entrada, mesmo por utilizadores já autenticados.

**47. A**
- **Motivo (Certa):** Para identificar ameaças avançadas que tentam passar despercebidas, um analista deve usar um **SIEM integrado com Threat Intelligence**. O SIEM correlaciona eventos de toda a empresa, e a inteligência de ameaças fornece dados atualizados sobre comportamentos e indicadores de grupos de atacantes reais.
- **Por que as outras estão erradas:**
  - **B (Monitorização de integridade):** Deteta se um ficheiro foi alterado, mas não identifica a origem ou natureza de um ataque complexo na rede.
  - **C (Logs de firewall):** Fornecem dados brutos de rede, mas sem a correlação do SIEM é difícil identificar ameaças persistentes avançadas.
  - **D (Scanners de vulnerabilidades):** Identificam falhas técnicas conhecidas, mas não detetam ataques ativos ou ameaças inteligentes.

**48. B**
- **Motivo (Certa):** Nas assinaturas digitais, o *Hashing* cria um resumo único do conteúdo. Se o documento for alterado, o hash será diferente. Ao comparar o hash recebido com o hash calculado, o destinatário pode **Verificar a Integridade** do conteúdo (confirmar que não houve alterações).
- **Por que as outras estão erradas:**
  - **A (Encriptar dados):** Hashing não é encriptação; ele cria um resumo, não protege o conteúdo contra leitura.
  - **C (Confidencialidade):** Assinaturas digitais garantem integridade e autenticidade; a confidencialidade (segredo) é feita pela encriptação de dados.
  - **D (Gerar pares de chaves):** As chaves são geradas por algoritmos assimétricos (como RSA), não por funções de hash.

**49. B**
- **Motivo (Certa):** Um ataque que inunda um alvo com pacotes ICMP Echo (Pings) para esgotar os seus recursos ou largura de banda é especificamente chamado de **Ping flood**.
- **Por que as outras estão erradas:**
  - **A (DDoS):** É um termo para ataques distribuídos de várias origens; o Ping flood descreve o *tipo* de tráfego usado.
  - **C (SYN flood):** Usa pacotes de ligação TCP (SYN), não ICMP.
  - **D (Man-in-the-middle):** É um ataque de interceção de dados, não de inundação para negação de serviço.

**50. B**
- **Motivo (Certa):** O *Ransomware* é o malware desenhado para cifrar os ficheiros da vítima, tornando-os inacessíveis, e exigir o pagamento de um resgate (ransom) em troca da chave para os recuperar.
- **Por que as outras estão erradas:**
  - **A (Worm):** Malware que se espalha sozinho pela rede, mas o seu objetivo pode não ser a extorsão via cifragem.
  - **C (Spyware):** Foca-se em espiar e roubar dados silenciosamente.
  - **D (Trojan):** Disfarça-se de programa útil para entrar no sistema.

**51. B**
- **Motivo (Certa):** Uma *Public Key Infrastructure (PKI)* fornece a base para a gestão de identidades digitais. O seu benefício organizacional é garantir a **Autenticação** (provar quem é quem) e a **Integridade** através do uso de certificados digitais e assinaturas.
- **Por que as outras estão erradas:**
  - **A (Gestão de senhas):** PKI lida com chaves e certificados, não com bases de dados de senhas.
  - **C (Encriptar todos os e-mails):** É uma aplicação possível, mas a PKI é uma infraestrutura muito mais ampla de confiança para toda a rede.
  - **D (Monitorar atividade):** PKI não realiza funções de vigilância ou logging de atividade.

**52. B**
- **Motivo (Certa):** A fase de *Eradication* (Erradicação) foca-se em limpar o ambiente. A prioridade é **Identificar e remover a causa raiz** (ex: apagar o malware, fechar a conta roubada) para garantir que a ameaça foi totalmente eliminada antes de restaurar os sistemas.
- **Por que as outras estão erradas:**
  - **A (Restaurar dados):** Isto pertence à fase seguinte de *Recovery* (Recuperação).
  - **C (Análise de causa raiz):** A análise profunda (lições aprendidas) é feita após o incidente estar fechado, na fase de Post-Incident Activity.
  - **D (Notificar stakeholders):** A comunicação é feita em várias fases, mas a erradicação é uma fase técnica de limpeza.

**53. B**
- **Motivo (Certa):** Uma conta a aceder a vários sistemas ao mesmo tempo de formas invulgares sugere que as credenciais foram roubadas e estão a ser usadas por atacantes. O **Credential Compromise** (Comprometimento de Credenciais) explica por que razão o login é "válido" mas a atividade é suspeita.
- **Por que as outras estão erradas:**
  - **A (Insider threat):** Embora possível, em termos de monitorização SOC, acessos simultâneos massivos indicam geralmente o uso de credenciais roubadas por bots/atacantes externos.
  - **C (Vulnerabilidade aplicacional):** Falhas de software causam erros lógicos ou crashs, não logins simultâneos em sistemas distintos.
  - **D (Escalação de privilégios):** Foca-se em obter mais poder dentro de um sistema, não em abrir múltiplas sessões em paralelo.

**54. A**
- **Motivo (Certa):** O *Role-Based Access Control (RBAC)* simplifica a vida dos administradores. Em vez de gerir permissões para cada pessoa, as permissões são dadas a cargos (Roles). Quando alguém muda de departamento, basta mudar a sua "Role", o que **reduz significativamente o esforço administrativo**.
- **Por que as outras estão erradas:**
  - **B (Encriptar ficheiros):** RBAC controla quem pode ler/escrever, mas não realiza a cifragem dos dados.
  - **C (Monitorar atividades):** Isto é função de sistemas de logging e auditoria.
  - **D (Mudanças dinâmicas):** Isto seria o ABAC (baseado em atributos), que é mais complexo e dinâmico que o RBAC.

**55. B**
- **Motivo (Certa):** O *Hashing* é uma função de sentido único. Mesmo que um atacante intercete o hash, ele não consegue revertê-lo matematicamente para descobrir o texto original. É a forma mais segura de armazenar senhas ou verificar a integridade.
- **Por que as outras estão erradas:**
  - **A (Encriptação):** É reversível (sentido duplo) se o atacante possuir a chave.
  - **C (Salting):** É um valor adicionado ao hash para o tornar mais forte, mas não é o método principal de proteção por si só.
  - **D (Tokenização):** Substitui o dado por um token, mas o sistema original consegue sempre recuperar o valor real (reversível).

**56. A**
- **Motivo (Certa):** Para vulnerabilidades conhecidas, a defesa primária é o **Patch Management** (Gestão de Patches). Realizar scans regulares permite descobrir onde o software está desatualizado e aplicar a correção do fabricante, eliminando a falha permanentemente.
- **Por que as outras estão erradas:**
  - **B (WAF):** Pode proteger websites, mas não resolve a falha no código do software da empresa.
  - **C (Strong passwords):** Inúteis contra explorações técnicas que aproveitam falhas no código e não nos logins.
  - **D (MFA):** Protege a conta, mas a vulnerabilidade pode permitir o acesso ao servidor sem precisar de um login de utilizador.

**57. A**
- **Motivo (Certa):** Um *Deterrent Control* (Controlo Dissuasor) serve para desencorajar um atacante. Um banner de aviso no login informa que a atividade está a ser gravada e que haverá consequências legais, na esperança de que o atacante decida não prosseguir.
- **Por que as outras estão erradas:**
  - **B (Detective):** Deteta o ataque (ex: logs, câmaras).
  - **C (Preventive):** Impede o ataque (ex: firewall, trincos).
  - **D (Compensating):** Um plano B quando o controlo principal falha.

**58. A**
- **Motivo (Certa):** Dispositivos IoT são frequentemente menos seguros. A **Micro-segmentação** coloca cada classe de dispositivo no seu próprio segmento isolado. Se o atacante entrar num dispositivo, ele não consegue "saltar" para o resto da rede da fábrica porque a segmentação corta o acesso lateral.
- **Por que as outras estão erradas:**
  - **B (RBAC):** IoTs raramente gerem permissões baseadas em funções de utilizador de forma eficaz.
  - **C (IDS):** Deteta a intrusão, mas não impede fisicamente que o atacante se mova pela rede.
  - **D (Encriptação simétrica):** Protege a conversa do dispositivo, mas não impede que o dispositivo infetado ataque outros computadores vizinhos.

**59. B**
- **Motivo (Certa):** A grande vantagem de um *SIEM na Cloud* é a **Scalability** (Escalabilidade). Pode processar volumes gigantescos de dados sem necessidade de hardware local caro, permitindo uma gestão centralizada de logs vindos de qualquer parte do mundo.
- **Por que as outras estão erradas:**
  - **A (Latência reduzida):** Pelo contrário, enviar logs para a cloud introduz geralmente mais latência que um servidor local.
  - **C (Integração simplificada):** A integração depende das APIs; ser na cloud pode até exigir configurações de rede mais complexas.
  - **D (Encriptação melhorada):** Ambos os tipos (local ou cloud) podem e devem usar encriptação forte; não é uma vantagem exclusiva da cloud.

**60. A**
- **Motivo (Certa):** Ataques de *Rainbow Table* usam tabelas pré-calculadas de hashes para descobrir senhas. O **Salting** adiciona um valor aleatório único a cada senha antes dela ser "hashada". Isto invalida as tabelas pré-calculadas, pois o atacante teria de calcular uma nova tabela para cada salt individual.
- **Por que as outras estão erradas:**
  - **B (Account lockout):** Protege contra tentativas de login em tempo real, mas as rainbow tables são usadas em ataques offline contra listas de hashes roubadas.
  - **C (Encriptar na transmissão):** Protege a senha enquanto viaja no cabo, mas não protege o hash se ele for roubado da base de dados.
  - **D (Hashing):** O hashing simples é vulnerável a rainbow tables; o salt é que providencia a proteção específica.

**61. B**
- **Motivo (Certa):** A *Esteganografia* é a técnica de esconder informação dentro de outros ficheiros ou media de forma a que a sua existência passe despercebida. Por exemplo, esconder um ficheiro de texto secreto dentro dos bits de uma imagem digital ou de um áudio.
- **Por que as outras estão erradas:**
  - **A (Encriptar dados):** Torna os dados ilegíveis, mas a sua presença é visível; a esteganografia foca em ocultar a existência do dado.
  - **C (Ofuscar código):** Torna o código difícil de compreender, mas não o esconde dentro de outros media.
  - **D (Hashing):** Serve para verificar se o dado foi alterado (integridade), não para o esconder.

**62. A**
- **Motivo (Certa):** Um *Certificate Signing Request (CSR)* é um ficheiro gerado pelo requerente que contém a sua chave pública e dados de identificação. Este pedido é enviado a uma **Certificate Authority (CA)** para que esta emita um certificado digital assinado.
- **Por que as outras estão erradas:**
  - **B (Autenticar utilizador):** O CSR é apenas o pedido do certificado; a autenticação ocorre depois de o certificado ser emitido e usado.
  - **C (Verificar integridade):** O CSR não realiza verificações de integridade de dados encriptados.
  - **D (Segurança de comunicações):** É um passo administrativo no processo PKI, não o mecanismo de segurança direto.

**63. B**
- **Motivo (Certa):** A arquitetura *Zero Trust* exige a **verificação contínua** de todos os utilizadores e dispositivos, independentemente da sua localização na rede. Elimina a confiança implícita que existia antigamente para quem estava ligado dentro do escritório.
- **Por que as outras estão erradas:**
  - **A (Confiança implícita):** É o modelo oposto ao Zero Trust.
  - **C (RBAC exclusivo):** Zero Trust usa RBAC, mas também analisa atributos contextuais e dinâmicos (ABAC).
  - **D (Encriptar tráfego cloud):** É uma boa prática de segurança, mas não resume o conceito de arquitetura Zero Trust.

**64. B**
- **Motivo (Certa):** O *Business Email Compromise (BEC)* ocorre quando um atacante ganha controlo de uma conta de e-mail corporativa legítima e a utiliza para enganar colegas ou parceiros, muitas vezes solicitando transferências financeiras ou dados confidenciais.
- **Por que as outras estão erradas:**
  - **A (Impersonation):** É um termo genérico para se passar por outra pessoa; o BEC foca no comprometimento da conta de e-mail real.
  - **C (Whaling):** É o phishing focado em grandes executivos; o BEC é o uso da conta após o compromisso.
  - **D (Pretexting):** É a técnica de inventar uma história falsa, mas o ataque descrito via conta comprometida é o BEC.

**65. B**
- **Motivo (Certa):** O propósito principal de um *Vulnerability Scan* é **identificar potenciais lacunas e falhas** de segurança (como software desatualizado ou configurações erradas) num sistema de forma automática e não intrusiva.
- **Por que as outras estão erradas:**
  - **A (Detetar e explorar):** Scanners detetam; a exploração é feita num Penetration Test.
  - **C (Testar plano de resposta):** Feito através de simulações e exercícios, não por ferramentas de scan técnico.
  - **D (Avaliar conformidade):** Scanners ajudam, mas a conformidade total exige auditorias de processos e políticas.

**66. B**
- **Motivo (Certa):** A **Integridade** refere-se à proteção da informação contra alterações não autorizadas. Se um atacante conseguiu alterar um ficheiro de configuração sem permissão, a integridade daquele dado e do sistema foi quebrada.
- **Por que as outras estão erradas:**
  - **A (Disponibilidade):** Refere-se ao acesso contínuo ao sistema pelos utilizadores autorizados.
  - **C (Confidencialidade):** Refere-se a manter os dados secretos e protegidos contra leitura.
  - **D (Não-repúdio):** Refere-se à garantia de que uma pessoa não pode negar ter realizado uma ação.

**67. B**
- **Motivo (Certa):** Uma **VPN (Virtual Private Network)** é o método mais robusto para transmitir dados confidenciais pela internet, pois cria um túnel cifrado de ponta a ponta, protegendo toda a comunicação contra interceção.
- **Por que as outras estão erradas:**
  - **A (SSL/TLS):** Protege sessões web individuais (HTTPS), mas a VPN protege a ligação de rede completa.
  - **C (FTP):** É um protocolo inseguro que envia dados em texto limpo.
  - **D (SMTP):** Protocolo de e-mail que, por padrão, não garante a encriptação em todos os pontos da entrega.

**68. B**
- **Motivo (Certa):** O objetivo de um *Intrusion Prevention System (IPS)* é detetar e **bloquear ameaças ativamente e em tempo real**. Ao contrário do IDS, o IPS tem a capacidade de parar o tráfego malicioso antes que ele atinja o alvo.
- **Por que as outras estão erradas:**
  - **A (Detetar e logar):** Função principal do IDS, que é passivo e não bloqueia tráfego automaticamente.
  - **C (Encriptar comunicações):** IPS inspeciona o tráfego, mas não o cifra.
  - **D (Monitorar largura de banda):** Função de ferramentas de gestão de performance de rede.

**69. A**
- **Motivo (Certa):** Perante tráfego de saída (exfiltração) suspeito num servidor crítico, a primeira medida de contenção é **Isolar o servidor da rede**. Isto impede que mais dados sejam roubados enquanto a equipa investiga a origem do problema.
- **Por que as outras estão erradas:**
  - **B (Notificar administrador):** Importante, mas secundário face à necessidade urgente de parar a fuga de dados.
  - **C (Realizar scan):** Ação de diagnóstico que deve ser feita após o isolamento e contenção da ameaça.
  - **D (Desativar contas):** Pode não ser eficaz se o ataque for a nível de sistema ou via processos automatizados.

**70. B**
- **Motivo (Certa):** A política de **Least Privilege** (Mínimo Privilégio) garante que as contas tenham apenas os direitos necessários. Isto mitiga a escalação de privilégios, pois mesmo que um atacante tome uma conta, ela terá poucos direitos para causar danos ou tornar-se admin.
- **Por que as outras estão erradas:**
  - **A (MFA):** Protege o login inicial, mas não os direitos da conta após o login ter sido efetuado.
  - **C (Penetration testing):** Ajuda a identificar a falha, mas a política de privilégios é o controlo que a mitiga no dia-a-dia.
  - **D (WAF):** Protege contra ataques web, mas não controla permissões dentro do sistema operativo.

**71. D**
- **Motivo (Certa):** Se o sistema foi comprometido por phishing e credenciais foram roubadas, a prioridade imediata é **Revogar as credenciais comprometidas** (mudar senhas, cancelar sessões ativas) para impedir que o atacante continue a usar o acesso.
- **Por que as outras estão erradas:**
  - **A (Notificar utilizadores):** Passo necessário mais tarde, mas não interrompe o acesso do atacante agora.
  - **B (Analisar headers):** É uma tarefa de análise forense, não de contenção imediata da invasão.
  - **C (Bloquear remetente):** Inútil se o atacante já obteve a senha e já está dentro do sistema.

**72. B**
- **Motivo (Certa):** No modelo *Mandatory Access Control (MAC)*, as etiquetas de segurança (labels) definem a sensibilidade dos dados. O acesso é permitido apenas quando o utilizador tem o nível de autorização correspondente à etiqueta do ficheiro.
- **Por que as outras estão erradas:**
  - **A (Identificar vulnerabilidades):** Etiquetas classificam dados, não falhas técnicas.
  - **C (Atribuir funções):** Isto é característico de modelos baseados em funções (RBAC).
  - **D (Monitorar em tempo real):** Função de sistemas de monitorização e auditoria (Logs).

**73. C**
- **Motivo (Certa):** O *Packet Sniffing* consiste em capturar e analisar os pacotes de dados que viajam por uma rede. Numa rede Wi-Fi pública não encriptada, qualquer pessoa pode "sniffar" o tráfego e ler dados de outros utilizadores.
- **Por que as outras estão erradas:**
  - **A (ARP poisoning):** Manipulação de endereços na rede local para redirecionar tráfego.
  - **B (Evil twin):** Criação de um ponto de acesso falso para enganar utilizadores.
  - **D (Man-in-the-middle):** É um termo amplo que engloba várias técnicas; o ato de apenas capturar pacotes no ar é o sniffing.

**74. B**
- **Motivo (Certa):** A comunicação com um servidor de **Command-and-Control (C2)** é o sinal clássico de uma **Infeção por Malware** (geralmente um Bot). O malware está a tentar receber instruções do seu criador ou enviar dados roubados.
- **Por que as outras estão erradas:**
  - **A (DDoS):** Pode ser o objetivo final, mas a comunicação C2 é a evidência da infeção prévia.
  - **C (Roubo de credenciais):** Pode ser o que o malware está a fazer, mas a comunicação técnica define o estado de compromisso por código malicioso.
  - **D (Insider threat):** Funcionários internos raramente comunicam via servidores C2 conhecidos; este é um comportamento técnico de malwares externos.

**75. A**
- **Motivo (Certa):** Para proteger endpoints de API contra uso indevido e exploração, é essencial **Exigir Autenticação** (como tokens OAuth ou chaves de API) em todas as chamadas, garantindo que apenas utilizadores autorizados acedam aos serviços.
- **Por que as outras estão erradas:**
  - **B (SAST):** Encontra erros no código, mas não impede acessos não autorizados à API em produção.
  - **C (MFA para desenvolvedores):** Protege o acesso ao código-fonte, mas não o endpoint da API usado pelos clientes.
  - **D (Bloquear IPs públicos):** Frequentemente impossível se a API for para uso público na internet (ex: sites, apps).

**76. A**
- **Motivo (Certa):** O **TLS (Transport Layer Security)** é o sucessor do SSL e é o protocolo usado para encriptar o tráfego web. Quando o HTTP corre sobre o TLS, temos o protocolo seguro **HTTPS**.
- **Por que as outras estão erradas:**
  - **B (RSA):** É um algoritmo de chave pública usado para troca de chaves, mas não é o protocolo completo.
  - **C (AES):** É o algoritmo usado para cifrar os dados, mas não é o protocolo de transporte web.
  - **D (SHA):** É um algoritmo de hash usado para garantir a integridade.

**77. C**
- **Motivo (Certa):** O *Vishing* (Voice Phishing) é o ataque de engenharia social realizado por telefone, onde o atacante tenta enganar a vítima verbalmente para obter informações sensíveis.
- **Por que as outras estão erradas:**
  - **A (Smishing):** Phishing via SMS.
  - **B (Pretexting):** Técnica de criar um pretexto, mas o ataque por voz tem o nome específico de Vishing.
  - **D (Impersonation):** Termo genérico para se passar por outra pessoa.

**78. B**
- **Motivo (Certa):** Vulnerabilidades *Zero-day* não têm correção no momento do ataque. Soluções de **EDR (Endpoint Detection and Response)** são as melhores porque não dependem de assinaturas de vírus; elas analisam comportamentos suspeitos e bloqueiam ações anómalas no sistema.
- **Por que as outras estão erradas:**
  - **A (Monitorização em tempo real):** Ajuda a ver o ataque, mas o EDR fornece as ferramentas de resposta e contenção necessárias.
  - **C (Análise estática):** Só encontra falhas lógicas simples no código, não deteta explorações de vulnerabilidades desconhecidas em tempo real.
  - **D (Gestão de patches):** Inútil para Zero-days, pois o patch ainda não foi criado pelo fabricante.

**79. B**
- **Motivo (Certa):** O **UEBA (User and Entity Behavior Analytics)** é a tecnologia que utiliza Machine Learning para criar perfis de comportamento normal e detetar anomalias que indiquem ameaças internas ou contas comprometidas.
- **Por que as outras estão erradas:**
  - **A (SIEM):** Foca na gestão de logs; o UEBA é a camada de inteligência comportamental (muitas vezes integrada no SIEM).
  - **C (IDS):** Foca em assinaturas de rede e ataques conhecidos, não no comportamento de longo prazo do utilizador.
  - **D (Vulnerability scanner):** Identifica falhas técnicas em sistemas, não comportamentos humanos.

**80. A**
- **Motivo (Certa):** O **Attribute-Based Access Control (ABAC)** permite criar regras baseadas em atributos complexos como localização do utilizador, tipo de dispositivo, hora do dia e sensibilidade do dado, sendo o modelo mais granular disponível.
- **Por que as outras estão erradas:**
  - **B (DAC):** Baseado na discrição do dono do ficheiro.
  - **C (RBAC):** Baseado apenas no cargo ou função (Role).
  - **D (MAC):** Baseado em níveis de classificação rígidos definidos centralmente.

**81. C**
- **Motivo (Certa):** O *Credential Stuffing* usa listas de senhas roubadas de outros sites. Usar **algoritmos de Hashing seguros** (como bcrypt) com salt garante que, mesmo que a base de dados seja roubada, as senhas reais não sejam facilmente descobertas para serem testadas noutros serviços.
- **Por que as outras estão erradas:**
  - **A (Complexidade de senhas):** Importante, mas inútil se a senha (mesmo complexa) for roubada de outro local.
  - **B (Rate limiting):** Protege contra ataques em tempo real, mas o hashing é a proteção fundamental do dado em repouso.
  - **D (Monitorar logs):** Deteta a atividade suspeita, mas não impede o uso inicial das credenciais roubadas.

**82. B**
- **Motivo (Certa):** Uma **DMZ (Demilitarized Zone)** isola os servidores que precisam de estar expostos à Internet (como servidores Web) da rede interna da empresa. Isto cria uma camada de segurança extra: se o servidor público for invadido, o atacante não tem acesso imediato aos computadores internos.
- **Por que as outras estão erradas:**
  - **A (Prevenir malware):** DMZ controla o tráfego, mas o malware pode entrar via e-mail ou downloads legítimos.
  - **C (Monitorar tráfego):** Função de IDSs/IPSs ou firewalls na borda da DMZ.
  - **D (Encriptar comunicações):** DMZ é um conceito de arquitetura de rede, não de criptografia de dados.

**83. C**
- **Motivo (Certa):** O **SQL Injection** ocorre quando um atacante insere código SQL malicioso em campos de entrada de uma aplicação web para manipular a base de dados e aceder a informações sem permissão.
- **Por que as outras estão erradas:**
  - **A (XSS):** Injeta scripts para correr no browser do utilizador, não na base de dados.
  - **B (Directory traversal):** Foca-se em aceder a ficheiros e pastas protegidas no servidor.
  - **D (Command injection):** Injeta comandos do sistema operativo, não necessariamente de base de dados.

**84. B**
- **Motivo (Certa):** O **NAC (Network Access Control)** tem como função principal garantir que apenas dispositivos autorizados e que cumpram as políticas de segurança (antivírus ligado, etc.) consigam ligar-se à rede da empresa.
- **Por que as outras estão erradas:**
  - **A (Bloquear phishing):** Função de filtros de e-mail (gateways de segurança).
  - **C (Encriptar comunicações):** NAC controla o acesso; a cifra é feita por protocolos como IPsec ou TLS.
  - **D (Monitorar atividades):** Função de sistemas de auditoria e SIEM.

**85. B**
- **Motivo (Certa):** O uso de armazenamento **WORM (Write-Once-Read-Many)** garante que os logs sejam à prova de manipulação. Uma vez escritos, os dados não podem ser alterados nem apagados, o que é fundamental para auditorias e investigações forenses.
- **Por que as outras estão erradas:**
  - **A (Encriptar logs):** Protege a leitura por estranhos, mas não impede que os logs sejam apagados.
  - **C (Cloud storage):** É um local de armazenamento, mas a imutabilidade depende da política WORM aplicada.
  - **D (Rotação de logs):** Serve para poupar espaço, mas na verdade remove logs antigos.

**86. B**
- **Motivo (Certa):** Uma **Logic Bomb** é um código malicioso que permanece inativo até que uma condição específica (como uma data ou a execução de um comando) seja atingida para disparar o seu ataque.
- **Por que as outras estão erradas:**
  - **A (Trojan):** Malware disfarçado de programa legítimo.
  - **C (Worm):** Foca-se em espalhar-se sozinho pela rede.
  - **D (Keylogger):** Foca-se em capturar o que o utilizador escreve no teclado.

**87. B**
- **Motivo (Certa):** A grande vantagem do **ECC (Elliptic Curve Cryptography)** é que ele oferece o mesmo nível de segurança que o RSA, mas com **chaves muito mais curtas**. Isto torna-o mais rápido e eficiente para dispositivos móveis e IoT.
- **Por que as outras estão erradas:**
  - **A (Mais rápido):** Embora seja eficiente, a vantagem técnica chave em exames é a relação segurança/tamanho de chave.
  - **C (Gestão de chaves):** A complexidade da gestão (PKI) é semelhante em ambos.
  - **D (Resistência a força bruta):** Ambos são resistentes se as chaves forem dimensionadas corretamente.

**88. A**
- **Motivo (Certa):** O **BIA (Business Impact Analysis)** serve para identificar e **priorizar os processos críticos** da empresa, definindo quanto tempo cada um pode ficar parado (RTO) em caso de desastre.
- **Por que as outras estão erradas:**
  - **B (Gap analysis):** Compara a segurança atual com o ideal.
  - **C (Testar planos de IR):** Feito após o BIA ter definido o que é importante recuperar.
  - **D (Orçamento de recuperação):** O BIA fornece dados, mas o seu objetivo é a análise técnica de impacto.

**89. A**
- **Motivo (Certa):** O uso de **Hashing** (como SHA-256) permite verificar se um ficheiro foi alterado durante a transferência. Se o hash do ficheiro recebido for igual ao do enviado, a **Integridade** está garantida.
- **Por que as outras estão erradas:**
  - **B (Encriptar):** Garante que ninguém lê o ficheiro, mas o hash é que garante que ele não mudou.
  - **C (Protocolo seguro):** SFTP usa hash internamente, mas a função matemática que faz a verificação é o algoritmo de hash.
  - **D (Auditorias):** Verificam processos passados, não garantem a integridade de um ficheiro específico na hora.

**90. C**
- **Motivo (Certa):** O **SSL/TLS** atua na camada de transporte (ou logo acima) para garantir que as comunicações sejam cifradas e seguras, protegendo os dados enquanto viajam pela rede.
- **Por que as outras estão erradas:**
  - **A (WAF):** Atua na camada de aplicação para proteger sites.
  - **B (IPS):** Bloqueia ataques, mas o SSL/TLS é o protocolo de segurança nativo da camada de transporte.
  - **D (NAC):** Atua no acesso à rede física ou Wi-Fi (Layer 2).

**91. B**
- **Motivo (Certa):** O **MFA (Multi-factor Authentication)** reforça a segurança ao exigir pelo menos duas provas de identidade de categorias diferentes (ex: senha + código no telemóvel), tornando muito mais difícil o acesso não autorizado.
- **Por que as outras estão erradas:**
  - **A (Encriptar dados):** MFA é para autenticação, não para cifra de ficheiros.
  - **C (Transferência segura):** Isto é feito por protocolos como o TLS.
  - **D (Prevenir phishing):** MFA mitiga o efeito do phishing (roubo da senha), mas não o impede de acontecer.

**92. A**
- **Motivo (Certa):** O **Password Spraying** consiste em tentar uma senha comum (ex: "Senha123") contra muitas contas diferentes. Isto evita o bloqueio de contas individuais e explica por que razão se vêem falhas de login vindas de vários IPs contra vários utilizadores.
- **Por que as outras estão erradas:**
  - **B (Phishing):** É um ataque via e-mail.
  - **C (SQL Injection):** É um ataque contra a base de dados, não um teste de senhas em massa.
  - **D (Ameaça interna):** Insiders já têm acesso e não costumam fazer ataques de força bruta em massa.

**93. B**
- **Motivo (Certa):** Para garantir a segurança de contentores, o mais importante é o **Image Scanning**. Isto permite detetar vulnerabilidades nas imagens dos contentores **antes de eles serem colocados em produção**, prevenindo riscos de raiz.
- **Por que as outras estão erradas:**
  - **A (HIPS):** Ajuda na monitorização, mas o scan de imagens é uma prevenção mais eficaz no ciclo de vida do contentor.
  - **C (Encriptação em repouso):** Protege os dados guardados, mas não protege o contentor contra falhas no seu código.
  - **D (RBAC):** Controla quem gere os contentores, mas não a segurança interna do software neles contido.

**94. B**
- **Motivo (Certa):** O objetivo de um **Certificado Digital** é provar a autenticidade de uma chave pública, associando-a de forma segura a uma entidade (pessoa ou servidor) através da assinatura de uma autoridade de confiança.
- **Por que as outras estão erradas:**
  - **A (Encriptar comunicações):** O certificado fornece a chave pública; a encriptação é feita por algoritmos como o RSA ou AES.
  - **C (Gerar senhas):** PKI lida com chaves digitais, não com senhas de utilizador.
  - **D (Monitorar acessos):** PKI foca-se em identidade e criptografia, não em vigilância.

**95. C**
- **Motivo (Certa):** O **Pharming** ocorre quando um atacante cria um site falso que imita perfeitamente um legítimo para enganar utilizadores e roubar os seus dados, muitas vezes através do envenenamento de DNS que redireciona a vítima automaticamente.
- **Por que as outras estão erradas:**
  - **A (Spear phishing):** É um e-mail direcionado; o pharming é o site falso ou o redirecionamento em si.
  - **B (Watering hole):** Ataque que infeta um site legítimo onde as vítimas costumam ir.
  - **D (Whaling):** Phishing direcionado a executivos.

**96. B**
- **Motivo (Certa):** Em informática forense, para preservar as provas de um sistema comprometido, o primeiro passo técnico é **criar uma imagem bit-a-bit** do disco ou memória. Isto permite analisar o incidente sem alterar o estado original da prova.
- **Por que as outras estão erradas:**
  - **A (Isolar):** É um passo de contenção da rede, mas a preservação da prova exige a cópia forense.
  - **C (Analisar logs):** Feito após as provas estarem garantidas com a cópia forense.
  - **D (Restaurar backup):** Destrói as provas atuais e nunca deve ser feito antes da recolha forense.

**97. B**
- **Motivo (Certa):** As ferramentas de **DLP (Data Loss Prevention)** servem para detetar e **impedir a transmissão não autorizada de dados sensíveis** para fora da empresa, monitorizando fluxos de e-mail, rede e dispositivos USB.
- **Por que as outras estão erradas:**
  - **A (Encriptar cloud):** DLP pode detetar dados na cloud, mas o seu foco é prevenir a fuga, não gerir a cifra de armazenamento.
  - **C (Detetar malware):** Função de antivírus e sistemas de proteção de e-mail (SEG).
  - **D (Monitorar atividade):** É uma funcionalidade, mas o objetivo final é evitar a perda de dados (Loss Prevention).

**98. A**
- **Motivo (Certa):** Para sistemas antigos (Legacy) que não podem ser atualizados, a melhor defesa é a **Micro-segmentação ou Isolamento**. Ao colocar o sistema numa rede muito restrita, impede-se que um atacante consiga chegar até ele e explorar as suas vulnerabilidades.
- **Por que as outras estão erradas:**
  - **B (Encriptar comunicações):** Protege os dados em trânsito, mas não fecha a falha de segurança do sistema antigo.
  - **C (EDR):** Sistemas muito antigos muitas vezes não suportam software de segurança moderno.
  - **D (Monitorar logs):** Ajuda a detetar a invasão, mas não a impede.

**99. B**
- **Motivo (Certa):** A melhor proteção contra um *Replay Attack* (reenvio de pacotes capturados) é o uso de **Session Tokens com Timestamps**. Isto garante que cada pedido tenha uma validade temporal curta; se o atacante tentar reenviar o pacote mais tarde, ele será rejeitado por estar expirado.
- **Por que as outras estão erradas:**
  - **A (MFA):** Ajuda no login, mas o Replay Attack foca-se na captura de sessões já autenticadas.
  - **C (Encriptação ponta-a-ponta):** Protege a leitura, mas não impede o reenvio do pacote cifrado original.
  - **D (Hashing):** Garante integridade, mas não impede a repetição de transações na rede.

**100. A**
- **Motivo (Certa):** Para evitar erros de configuração em serviços Cloud (como buckets S3 abertos), o ideal é usar **ferramentas automatizadas de auditoria (CSPM)**. Estas ferramentas verificam continuamente as definições de segurança e alertam se algum recurso estiver exposto indevidamente.
- **Por que as outras estão erradas:**
  - **B (Encriptar ficheiros):** Não resolve a causa raiz, que é o acesso público indevido ao local de armazenamento.
  - **C (Restringir acesso público):** É a correção imediata, mas a pergunta foca na prevenção futura (que exige automação).
  - **D (Ativar logs):** Deteta o problema depois de ele acontecer, mas não previne a falha de configuração inicial.
