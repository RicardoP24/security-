# Respostas - Satender Kumar Practice Test 1 - CompTIA Security+ (SY0-701)

Abaixo estão as respostas para as questões do Teste 1:

**1. A**
- **Motivo (Certa):** Criptografar ficheiros sensíveis garante que, mesmo que pessoas não autorizadas tenham acesso ou interceptem os ficheiros, elas não conseguirão ler o seu conteúdo, mantendo assim a confidencialidade.
- **Por que as outras estão erradas:**
  - **B (Detectar alterações não autorizadas):** Refere-se à **Integridade** dos dados, garantindo que não foram modificados.
  - **C (Garantir que servidores estão disponíveis):** Refere-se à **Disponibilidade** (Availability).
  - **D (Criar backups redundantes):** Também diz respeito à **Disponibilidade**, permitindo restaurar dados em caso de falha.

**2. B**
- **Motivo (Certa):** O ISO 27001 é a norma internacional que fornece requisitos para o estabelecimento, implementação, manutenção e melhoria contínua de um Sistema de Gestão de Segurança da Informação (SGSI), oferecendo uma abordagem estruturada.
- **Por que as outras estão erradas:**
  - **A (GDPR):** É um regulamento de privacidade focado na proteção de dados pessoais (na UE), não um framework genérico de gestão de segurança.
  - **C (COBIT):** É um framework voltado para governança de TI em geral; embora inclua segurança, o ISO 27001 é o padrão específico para segurança.
  - **D (PCI DSS):** É um padrão específico para a indústria de cartões de pagamento, não aplicável de forma geral para todas as gestões de risco.

**3. C**
- **Motivo (Certa):** No conceito da tríade CIA (Confidencialidade, Integridade e Disponibilidade), a **Disponibilidade** garante que os sistemas e recursos estejam operacionais e acessíveis para os utilizadores autorizados sempre que necessário.
- **Por que as outras estão erradas:**
  - **A (Apenas utilizadores autorizados acedem):** Isto é a definição de **Confidencialidade**.
  - **B (Os dados permanecem precisos e confiáveis):** Isto é a definição de **Integridade**.
  - **D (Utilizadores não autorizados são bloqueados):** Outro aspeto relacionado ao controlo de acessos e confidencialidade.

**4. D**
- **Motivo (Certa):** O MAC (Mandatory Access Control) restringe o acesso estritamente com base nas políticas definidas pelos administradores de sistema, tipicamente através do uso de etiquetas de segurança rigorosas (security labels) atribuídas aos objetos e utilizadores.
- **Por que as outras estão erradas:**
  - **A (DAC):** Permite que o próprio criador/dono (owner) do ficheiro defina as políticas de acesso.
  - **B (RBAC):** Baseia-se na função (role) do utilizador dentro da organização e não em políticas baseadas em classificação rigorosa definida pelo admin do sistema.
  - **C (ABAC):** Usa múltiplos atributos contextuais (hora, local, cargo, etc.) para decidir o acesso de forma mais elástica.

**5. A**
- **Motivo (Certa):** O princípio do menor privilégio (least privilege) dita que os utilizadores e processos devem ter apenas os direitos de acesso estritamente necessários para executar as suas funções de trabalho legítimas.
- **Por que as outras estão erradas:**
  - **B (MFA para todos):** É uma política de autenticação robusta, mas não se relaciona com a atribuição granular de permissões.
  - **C (Monitorização contínua):** É uma boa prática de auditoria, mas não é a definição de limitar permissões aos mínimos necessários.
  - **D (Contas de privilégio desativadas por defeito):** Pode fazer parte das boas práticas de segurança, mas a definição técnica foca na minimização de direitos de acesso.

**6. C**
- **Motivo (Certa):** Um Trojan (Cavalo de Troia) é um tipo de malware que se disfarça de software inofensivo, legítimo ou desejável para enganar o utilizador e levá-lo a executar a carga viral.
- **Por que as outras estão erradas:**
  - **A (Worm):** Propaga-se de forma autónoma pelas redes, muitas vezes sem disfarçar a sua identidade como se fosse um software legítimo para o utilizador clicar.
  - **B (Rootkit):** Focado puramente em esconder a presença de malware profundamente no sistema operativo.
  - **D (Keylogger):** Regista as teclas digitadas pelo utilizador; pode ser instalado como consequência de um Trojan, mas não define a técnica do engano ou do disfarce.

**7. A**
- **Motivo (Certa):** Pharming é um ataque que envolve o envenenamento de cache DNS ou modificação de ficheiros *hosts* (DNS spoofing) para redirecionar utilizadores de forma invisível para sites maliciosos, mesmo que eles tenham digitado o URL correto no navegador.
- **Por que as outras estão erradas:**
  - **B (Phishing):** Usa e-mails, SMS ou links enganosos para induzir ativamente os utilizadores a clicar no sítio errado.
  - **C (Shoulder surfing):** Envolve observar fisicamente as ações ou o ecrã do utilizador de forma literal ("espreitar por cima do ombro").
  - **D (Cross-site scripting):** Injeta scripts maliciosos em sites web legítimos para visar vulnerabilidades na aplicação (browsers) de outros utilizadores.

**8. C**
- **Motivo (Certa):** A engenharia social explora a natureza humana ou a ingenuidade para contornar a segurança. Um atacante que se faça passar pelo suporte de TI para obter palavras-passe é o exemplo perfeito de manipulação psicológica ou pretexto (pretexting).
- **Por que as outras estão erradas:**
  - **A (SQL Injection):** É um ataque completamente técnico focado em comprometer o código da base de dados.
  - **B (Ransomware attack):** Uso de malware e encriptação que prejudica o acesso aos ficheiros; o vetor pode incluir engenharia social (ex: o utilizador clica em anexo via phishing), mas em si o ransomware é o payload, não o pretexto.
  - **D (Brute force):** Utilização intensiva de processamento de computador por tentativa e erro para decifrar hashes e passwords.

**9. C**
- **Motivo (Certa):** O Buffer overflow ocorre quando um programa escreve mais dados do que o limite da memória alocada num buffer. Frequentemente, os invasores aproveitam essa vulnerabilidade para substituir dados críticos da aplicação para injetar e depois executar comandos ou código arbitrário de modo remoto.
- **Por que as outras estão erradas:**
  - **A (Command injection):** Aproveita falhas na própria aplicação (ex: caixas de input num formulário) para enviar e executar comandos de shell, e não lida primariamente com a sobreposição forçada no limite do buffer de memória.
  - **B (Privilege escalation):** É o resultado que pode ser obtido através de várias explorações (ex. obter root); é uma finalidade e não propriamente a técnica que possibilita a execução.
  - **D (Zero-day exploit):** Trata-se do nome dado a qualquer vulnerabilidade de qualquer espécie ainda não divulgada/corrigida pelo criador do programa e, por si só, não define a técnica de inserção de código na memória de processo.

**10. A**
- **Motivo (Certa):** O honeypot (pote de mel) é um falso alvo de rede desenhado para ser atrativo. O objetivo principal é detetar atacantes e registar as tentativas de ataque e metodologias, para que a equipa de segurança ganhe inteligência tática do seu ambiente (e desviar invasores dos sistemas reais).
- **Por que as outras estão erradas:**
  - **B (Prevenir infeções de malware):** O honeypot não é o software ativo de bloqueio das ameaças nas endpoitns da empresa; não "previne" diretamente o vírus.
  - **C (Criptografar dados sensíveis):** Totalmente irrelevante num honeypot cujo propósito é ser comprometido deliberadamente.
  - **D (Melhorar a performance da rede):** O honeypot não faz otimização nem balanceamento de rede (não afeta o desempenho, a não ser minimamente em gestão).

**11. B**
- **Motivo (Certa):** A DMZ atua como uma zona de rede intermediária entre a Intranet (rede segura e interna da organização) e as redes exteriores não confiáveis (como a internet). É aí que são alojados de forma isolada os servidores externos para o público (como e-mail, proxy, ou servidores Web).
- **Por que as outras estão erradas:**
  - **A (Segmento para dados sensíveis):** Guardar dados sensíveis não faz sentido numa zona que é exposta para utilizadores externos.
  - **C (Regra de firewall para bloqueios):** Uma firewall possui as regras e isola de facto a DMZ, contudo, a DMZ é a arquitetura/subnet em si, e não somente uma "regra".
  - **D (Túnel seguro de VPN):** Uma VPN liga duas redes, e a função base é comunicação, ao invés de isolamento e posicionamento de serviços abertos.

**12. A**
- **Motivo (Certa):** A micro-segmentação isola individualmente (geralmente por software) cargas de trabalho (workloads) ou fluxos num data center ou na cloud, o que reduz substancialmente a "superfície de ataque". Se um invasor comprometer um dos sistemas isolados, terá imensas dificuldades para saltar (lateral movement) no ambiente.
- **Por que as outras estão erradas:**
  - **B (Criptografar todo o tráfego de rede):** Não envolve criptografar todo o fluxo da empresa e sim compartimentar os acessos e fluxos permitidos de servidor para servidor.
  - **C (Implementa políticas Zero Trust em tudo):** A micro-segmentação é uma componente e aplicação que ajuda o modelo de Zero Trust (confiança zero), mas o Zero Trust abrange identidades, MFA, entre outros.
  - **D (Consolida o tráfego para maior monitorização):** Faz precisamente o inverso (o tráfego é segmentado ou estritamente particionado) em vez de agregá-lo.

**13. C**
- **Motivo (Certa):** Um IPS (Intrusion Prevention System) trabalha numa abordagem proativa (in-line ou passiva adaptativa), não apenas como sensor para detetar, mas também com o objetivo principal de intercetar os fluxos suspeitos e bloqueá-los de imediato (ex: largar ou dropar o pacote ilícito).
- **Por que as outras estão erradas:**
  - **A (Router):** Efetua apenas o reencaminhamento do caminho de rede mais rápido a partir de tabelas.
  - **B (Proxy Server):** Efetua o tráfego à Internet em nome do cliente num formato proxy, guardando muitas vezes dados estáticos (cache); não age intencionalmente na procura profunda e bloqueio ativo na deteção de malware tal como um sensor de IPS.
  - **D (Load balancer):** Focado fundamentalmente em equilibrar ou distribuir acessos concorrentes em múltiplos nós em servidores da mesma aplicação.

**14. B**
- **Motivo (Certa):** A principal premissa ao usar uma VPN num dispositivo final de funcionário é o uso da tunelização com fortes cifras criptográficas para codificar toda a comunicação através das redes pouco seguras que transportam o pacote.
- **Por que as outras estão erradas:**
  - **A (Melhorar conetividade Wi-Fi):** Não intervém em nada da qualidade eletromagnética da rede (até piora ligeiramente a performance pelo peso dos pacotes da encriptação).
  - **C (Reduzir largura de banda):** O tráfego de rede ganha "overhead" extra (logo o volume do pacote VPN pode ser maior).
  - **D (Bloquear conexões na rede LAN local):** O filtro do cliente VPN muitas vezes previne, de forma adicional, que consiga consultar a sua subnet local temporariamente (split tunnelling desativado), contudo, não bloqueia de facto dispositivos de entrarem na rede, apenas gere os saltos do router do host.

**15. B**
- **Motivo (Certa):** A *Private Cloud* define um paradigma da gestão cloud mantido exclusiva e dedicadamente à operação restrita de uma única empresa/organização (possuindo assim os próprios controlos físicos ou de rede partilhada virtual, sem intervenção de outros clientes "tenants").
- **Por que as outras estão erradas:**
  - **A (Public cloud):** A partilha de recursos com dezenas de outros utilizadores do provedor de serviço (Multitenancy).
  - **C (Hybrid cloud):** Conjugação que tira proveito quer do ambiente particular (Private) quer do ambiente partilhado exterior (Public).
  - **D (Community cloud):** Uma infraestrutura reservada a uma associação ou grupo em rede de organizações afins (ex: agências de governo, grupo de hospitais com regulações em comum).

**16. B**
- **Motivo (Certa):** A ferramenta Wireshark atua como "Network Protocol Analyzer" e permite capturar a transmissão no nível da interface física (Packet Analysis), verificando minuciosamente e até descodificando as mensagens brutas trocadas durante uma infração de rede.
- **Por que as outras estão erradas:**
  - **A (Nessus):** Usado unicamente para identificar se versões ou patches da máquina faltam (vulnerability scan) e efetuar varrimento da vulnerabilidade local.
  - **C (Splunk):** Ferramenta clássica para receber Logs formatados (syslog) para apresentar num gráfico intuitivo analítico, e correlacionar de modo SIEM.
  - **D (Netcat):** Ferramenta antiga via linha de comandos de ler e interagir ativamente via portas de escuta (muitas vezes abusada de forma ilícita para exfiltrar ficheiros ou reverse shell).

**17. B**
- **Motivo (Certa):** A essência do IRP (Incident Response Plan) consiste precisamente num guia organizado e documentado antecipadamente. Prevê atribuição de funções (papéis) a quem pertence aos grupos de crise, canais de chamada, as fases do método, e a forma exata de relatar ao longo de qualquer problema cibernético grave que afete o negócio.
- **Por que as outras estão erradas:**
  - **A (Monitorizar o desempenho de máquinas):** Isso lida com Service Level Agreements de Uptime.
  - **C (Impor que a organização obedece à auditoria ISO):** É um benefício para quem lê relatórios das auditorias, mas o propósito em ação durante do plano destina-se puramente em combater ativamente o desastre e parar perdas de imediato.
  - **D (Conduzir varrimento de vulnerabilidades):** Ações pró-ativas que evitam falhas, e que se realizam antes ou entre incidentes, e não em pleno incidente em andamento.

**18. C**
- **Motivo (Certa):** A recolha unificada das métricas de Logs desde todas as fontes da empresa até uma centralização unificada denomina-se do termo "Event Aggregation" e "Correlation". O SIEM encarrega-se disso para exibir métricas que revelam atividade oculta aos observadores em tempo real.
- **Por que as outras estão erradas:**
  - **A (Efetuar Teste Intrusão/Penetration test):** Funções ofensivas ativas com objetivo de perfuração contra sistemas.
  - **B (Gestão de Atualizações/Patch Management):** Distribuir binários e atualizações ao parque informático da organização de forma regular.
  - **D (Proteção baseada no Endpoint):** Ferramentas que instalam a presença na máquina em modo background (como Endpoint Detection e Response - EDR). O SIEM monitoriza globalmente.

**19. B**
- **Motivo (Certa):** No método convencional de Resposta (PICERL - do modelo clássico e NIST), todas as estratégias devem forçosamente prever e adotar a "Preparaçao" (Preparation) inicialmente antes que qualquer adversário consiga chegar sequer perto (desde educar empregados até instalar detetores ou redigir playbooks).
- **Por que as outras estão erradas:**
  - **A (Eradication/Erradicação) e C (Recuperação):** Estas são etapas após o incidente ocorrer e após a equipa intervir bloqueando danos.
  - **D (Containment/Contenção):** Foca em conter o dano logo depois que um incidente é formalmente reconhecido ou detetado.

**20. B**
- **Motivo (Certa):** A definição central do rastreio em event logs por questões puras de tentativas (e falhanços sucessivos) de inícios de sessão, logins efetuados num domínio do administrador global ou trocas forçadas de passaportes, enquadra-se tecnicamente no "Security Log".
- **Por que as outras estão erradas:**
  - **A (System log):** Grava alterações puramente de ambiente do SO; o hardware que encontrou defeitos na placa gráfica, o relógio base perdeu a ligação de time server, etc.
  - **C (Application log):** O software customizado como a App instalada no desktop pelo cliente indica crash e encerramento imprevisto.
  - **D (Audit log):** Um nome muito informal e genérico que traduz toda e qualquer recolha legal contabilística, apesar de se aplicar a qualquer forma de rastreio, é o Security Log que regista a função explícita e sistémica dos utilizadores se validarem e negarem os serviços via autenticação.
**21. A**
- **Motivo (Certa):** O NIST CSF (Cybersecurity Framework) é amplamente utilizado por governos e indústrias para avaliar e melhorar a maturidade da cibersegurança em infraestruturas, providenciando as fases principais: Identificar, Proteger, Detetar, Responder e Recuperar.
- **Por que as outras estão erradas:**
  - **B (ITIL):** Foca-se em Gestão de Serviços de TI (ITSM), como gerir tickets, e não primariamente na cibersegurança e segurança crítica.
  - **C (ISO 31000):** É o padrão geral e abrangente da gestão global de riscos corporativos (riscos financeiros, acidentes de trabalho, etc.), não focado na cibersegurança.
  - **D (COBIT):** Dirige-se à governança corporativa de TI e ao alinhamento com os negócios, em vez de focar puramente em defesa.

**22. B**
- **Motivo (Certa):** Implementar ferramentas de GRC (Governance, Risk, and Compliance) traz o benefício central de criar um painel centralizado para gerir riscos, unificando controlos de auditoria e conformidade em toda a empresa.
- **Por que as outras estão erradas:**
  - **A (Automatizar scanner de vulnerabilidades):** Ferramentas de Gestão de Vulnerabilidades (VM) fazem os varrimentos técnicos (como o Nessus ou Qualys), não o GRC.
  - **C (Melhorar algoritmos de encriptação):** O GRC atua a nível de gestão de processos, não implementando criptografia a nível técnico em infraestrutura.
  - **D (Prevenir totalmente ciberataques):** Nenhuma ferramenta pode prevenir ataques na totalidade; GRC foca na gestão formal e política de mitigar e analisar como a organização se comporta face a esses riscos legais e ameaças reais.

**23. A**
- **Motivo (Certa):** O apetite de risco ("Risk appetite") traduz o nível ou quantidade geral de risco que a administração de uma organização está estrategicamente disposta a assumir para atingir os seus objetivos lucrativos.
- **Por que as outras estão erradas:**
  - **B (Total de vulnerabilidades identificadas):** Esta é uma métrica técnica proveniente de análises de segurança e scanners, não uma decisão de direção sobre aquilo que eles assumem gerir ou não na vida normal.
  - **C (O custo e despesa de mitigar):** Descreve a análise e métrica base Custo-Benefício que afeta a tomada de decisão face às contra medidas, mas não é a tolerância (Apetite) propriamente da cúpula de lidar num risco alto vs baixo.
  - **D (Probabilidade da ameaça atuar ou explorar as fraquezas):** A probabilidade define parte do cálculo base de "Risco" cru/táctico, mas não expressa a vontade humana de lidar e tolerar esse mesmo contexto.

**24. A**
- **Motivo (Certa):** O Regulamento Geral de Proteção de Dados (GDPR) exige fortemente que as empresas (ou responsáveis pelo tratamento) que operam e afetam dados de cidadãos na UE notifiquem imediatamente não só as autoridades reguladoras, mas em certos cenários mandatórios exijam informar ativamente os indivíduos titulares sempre que ocorra uma violação perigosa dos seus dados. *(Nota: A HIPAA também dita regras de notificação para cuidados de saúde, mas o GDPR é uma escolha clássica mais generalizada nos exames nas obrigações a pessoas universais).*
- **Por que as outras estão erradas:**
  - **B (PCI DSS):** Este padrão exige segurança em pagamentos e cartões. Geralmente não tem leis penais que forcem avisar diretamente pessoas por causa exclusiva de estarem cobertos pelo standard (o ónus está em avisar os bancos emissores ou em obrigações contratuais com marcas de débito).

  - **C (HIPAA):** Apesar de existir e forçar o aviso por brecha perigosa de informações médicas privadas ou PHI nos EUA, em âmbito global o exame aponta à RGPD que afeta universalmente todos os cidadãos do território nas suas regras rígidas e de direito amplo a saber das fugas por todas as razões comuns. *(Se num cenário aparecer GDPR, em exames foca mais o GDPR para privacidade de indivíduos em massa no mercado externo).*
 
  - **D (ISO 27001):** Trata-se de certificação técnica adotável e puramente voluntária sem caráter e peso legal universal do Governo civil que obriga judicialmente as multas massivas pela falta em divulgar de imediato as fugas abertas.

**25. A**
- **Motivo (Certa):** O foco principal e único do Business Impact Analysis (BIA) é identificar de forma crítica e analítica as métricas das funções do negócio em profundidade para estimar minuciosamente o real impacto (tempo de paragem e multas financeiras/perdas) gerado por disrupções nos sistemas fundamentais de TI caso desastrem ao ponto zero da falha de continuidade global.
- **Por que as outras estão erradas:**
  - **B (Definir os papéis na Resposta ao Incidente - IRP):** Tal enquadra nos aspetos das matrizes orgânicas operacionais das equipas na política ou procedimentos de Security Incident Response base e não em "Impact Analysis".
  - **C (Avaliar se políticas são eficazes ou efetivas com compliance):** Isto pertence em parte substancial às revisões de risco globais do Chief Risk Officer e Auditorias gerais do que as funções limitadas a investigar o custo-tempo ou prioridade pós-crise no Business Impact puro.
  - **D (Custar adoção futura e implementar tech nova):** Este elemento trata da viabilidade e gestão de orçamento TI (Custo de propriedade ou ROI de ativos), distante face a mapear os abalos sofridos pela empresa na paralisação em crise atual nas métricas TCO vs RTO estritas no BIA clássico.

**26. A**
- **Motivo (Certa):** A utilização das frases e saudações padronizadas, vazias e despersonalizadas como "Prezado Cliente", em e-mails que invocam urgência em pagamentos suspeitos, constitui em si a marca e forte indicador de mensagens phishing em rajada. Remetentes que gerem as contas bancárias legítimas utilizam quase sempre comunicações endereçadas usando dados concretos e específicos vinculados nas vossas áreas e caixas fidedignas (nome, dados parciais).
- **Por que as outras estão erradas:**
  - **B (Logótipo aparente real na mensagem):** Quase o inverso absoluto; o atacante vai sempre adicionar aspetos do marketing original da empresa para passar o esquema por legítimo à primeira vista (spoof de aparência).
  - **C (Soletração legítima real em domínio no header e endereço visível de From):** Os atacantes utilizam mecanismos dissimulados como Email Spoofing severo (quando faltam configurações DMARC/SPF/DKIM dos lados) ou visualizam campos errados no painel do browser com aliases enganadores. A soletração verdadeira na superfície não desculpa uma tentativa como inofensiva ou vice-versa em muitos cenários de engodos disfarçados.
  - **D (Enunciar HTTPS links seguros na estrutura principal):** A larga percentagem massiva de ciberataques armados nos dias hoje obtêm gratuitamente e instantaneamente Certificados de confiança na Web maliciosa (LetsEncrypt). Visualizar apenas que navega em "SSL" no link ou "Cadeado" fechado do Browser deixou há muito longo tempo de provar estarem isentos de intenções nocivas ou furtivas (apenas criptografa para onde a vítima remete a credencial mal gerida).

**27. A**
- **Motivo (Certa):** Os sistemas domésticos tais como termóstatos de edifícios, sistemas inteligentes base de lâmpadas ou botões físicos de segurança com WiFi integrado compõem no mercado TI a franja designada genericamente por aparelhos Internet of Things (Ataques a dispositivos de rede local com firmware e poder computacional ínfimo).
- **Por que as outras estão erradas:**
  - **B (Adulteração da internet em massa ou Denial of Service attack DDoS massivo):** O evento em falha primário a um destes periféricos não o destrói ou corrompe ao formato exaustivo ou esgotado ao limite por pacotes do modo distribuído simultâneo como um ataque puramente volumétrico do exterior (Embora um intruso crie muitas vezes botnets infetando mil aparelhos semelhantes como este caso, a exploração num único dispositivo por falha na sua rede inicial é puramente IoT exploit no local).
  - **C (Engenharia social psicológica ou social engineering no humano e funcionário da portaria):** Totalmente alheio por não envolver enganar e pregar as falas a pessoas e manipulações mentais orais nos corredores da empresa de modo presencial (Pretexting) sobre a firewall perimetral em falhas técnicas do termóstato.
  - **D (Exploração de bases e estruturas das linguagens das apps de dados Injeção ou injeções do tipo SQL tradicional ao interior na DMZ):** Não visa de modo central nas falhas base ou sistemas web destas pequenas máquinas pois estes micro controladores de termóstatos funcionam internamente despidos tipicamente sobre bibliotecas simples HTTP sem o servidor base SQL ou DBs complexas instalados neles diretamente expostos na WAN ou com tabelas estruturais de web servers complexas para serem alvos clássicos e exclusivos a esse formato técnico exótico em injeção de parâmetros (salvo APIs mal programados com injetores ao vendor/cloud-back-end e não o host em si físico propriamente do IoT per se num exploit direto in-network no local que a pergunta remete).

**28. A**
- **Motivo (Certa):** Um exploit ou intrusão de natureza Zero-Day assenta especificamente ao seu nome no facto temporal na altura base do ataque as empresas (Vendor) ou a defesa corporativa deterem literalmente "Zero dias de aviso" para mitigar, codificar, ou disponibilizar atempadamente um patch oficial contra uma brecha até ali inteiramente secreta e que acaba por ser usada livre e globalmente no ambiente antes da indústria criar defesas para a mesma fraqueza orgânica de segurança e de mercado nas apps.
- **Por que as outras estão erradas:**
  - **B (Cross-site scripting (XSS) nas bases client web):** Refere técnica de ataque para browsers injetarem JS. Um XSS pode ser bem ou mal remediado, ter ou não vulnerabilidades antigas expostas em código mas não qualifica a sua natureza "temporária" em que as empresas não tiveram tempo face a lançar a vacina para um recém buraco Zero Day (Qualquer outra falha genérica já conhecida ou não pode gerar XSS perante um formulário web sem verificação do servidor se esta for deixada intocada no tempo por anos e ser sabido no mundo as fraquezas - o oposto estrito de não ter sido exposto ou divulgado antes tal como 0-day).
  - **C (Tentativas no aumento progressivo na escada aos comandos super e raízes do Windows/Privilege Escalation):** Trata a fase e ato interno finalista do hacker a manipular do zero sub permissões estáticas de leitura (elevando à conta máxima ou Root). Sendo um resultado alcançado por si e não a designação fundamental a expressar como a lacuna era indetetada mundialmente pelos Vendors ou se já estaria colmatável nos patches globais.
  - **D (Infiltração ou Injeção maliciosa local na ram nos ficheiros DLL executáveis do ecossistema e ambiente central Microsoft):** Método clássico nos laboratórios malware nos Endpoints executados via DLLs hostis paralelos e bibliotecas adulteradas; independentemente do modo a como corrompem não dita em todo se é recém conhecida à empresa, se já houve ou foi lançada correção e que na base e estado cronológico ou origem "ainda não teve os updates criados do vendor e as respostas ao público".

**29. A**
- **Motivo (Certa):** A assinatura global, inquestionável e inegável que define genericamente um ciber ataque base em ransomware (Ransom/Resgate) reflete inteiramente as rotinas que se inserem a barrar ativamente os discos, paralisar toda a infraestrutura base criptografando (encriptar o acesso ao SO ou bloqueá-lo/locking the user's files) num esquema final massivo e violento da chantagem e exigindo, na contra-ordem para voltar atrás, os fundos (Bitcoin normalmente) aos criminosos num aviso de terror à porta dos administradores e donos empresariais do servidor no retorno da chave de descodificação.
- **Por que as outras estão erradas:**
  - **B (O uso e manobras nos exploits a código aleatório e abusivo e invasão da lógica):** Tal caracteriza e remete fundamentalmente como um Exploit geral para as táticas dos "Payload Execution". Pode vir a causar ransomware mais à frente ou como parte auxiliar inicial no meio (a porta e execução e não a encriptação chantagista para obter pagamentos nos dados).
  - **C (Invasão subtil para escutas na máquina ou vigilância contínua oculta num ecrã disfarçado pelo modo de programa furtivo e passivo Spyware):** Esta operação atua estritamente ao oposto das diretivas violentas. Procura o exílio oculto no ruído num PC e absorver logins lentamente a fim exfiltrar ao adversário em C2 Command. Totalmente avesso do barulho ou bloqueio de ficheiros ou notificar exigências em público de regastes financeiros perante a vitima.
  - **D (Tentativas ativas dos reencaminhamentos ilícitos hostis pelo falso local da web alterando ao endereço web da verdadeira vitima e do browser num ambiente malicioso/falso destino):** É uma infração da técnica comum de desvios via DNS ou Spoof das estruturas base da navegação (DNS Poison e Pharming nos registos gerais) das pessoas, nunca exigindo os cripto montantes em base no retorno de decifragem que as pastas locais encriptadas nos SSD das redes vitimizadas nas grandes entidades o ransomware realiza à risca no desastre total informático.

**30. A**
- **Motivo (Certa):** Os agentes das ameaças cibernéticas munem-se tipicamente e sistematicamente nas suas operações de centenas e enormes quantidades de passwords brutas já recém retiradas atempadamente de sites frágeis desatualizados noutras alturas (brechas passadas), que aplicam em scripts diretos "empurrando ou atolando" a fim testarem essas palavras em sistemas críticos paralelos sem ligar para lógicas nas defesas (Reciclagem dos nomes e tokens num Login e em massas, designado como the Credential Stuffing).
- **Por que as outras estão erradas:**
  - **B (Um assalto de pacotes com Replay intercetados repetitivamente da rede nas LAN locais ou WAN/Replay attack):** Atacantes manipulam ou duplicam fisicamente do zero um sinal já encriptado entre aparelhos (pacote legítimo que viaja sem mexer na senha real legível do host ou credenciais visíveis soltas de log online do utilizador).
  - **C (Deteção à Força ou Força Bruta por tentar às escuras e infinitamente num local/Bruteforcing na hora e tentativa massiva):** Embora Credential Stuffing automatize a força das submissões nos portais bancários com as bots, na sua estrutura a Força Bruta purista, clássica e exata recorre na verdade a gerar (dicionários / alfabetos aleatórios até esbarrar) sem nenhuma evidência a tentar decifrar no alvo original de facto na fonte sem dispor previamente os vazamentos reais do mundo escuro retirados duma tabela noutro lugar em exatidão (que no stuffing o criminoso já retém com sucesso parcial em avanço nas bases e combos a 100%).
  - **D (Intrusões com gravação furtiva através nos componentes Keylogger fisicamente ou via infecção digital na máquina na hora e na estação e capturar num log em txt em real-time das mãos/Inputs do vitima num ataque Keylogger):** Não usa repositórios externos em roubos massivos da deep web por logins (Credential Stuffing no banco a testar de terceiros em nuvem) mas interceta mecanicamente em tempo estrito no teclado individual presencial sem testar listas cruzadas no meio.

**31. A**
- **Motivo (Certa):** A encriptação generalista ou proteção nativa entre duas infraestruturas completas ponto a ponto (end-to-end do local na origem e na rede total das portas da infraestrutura isolada) realiza-se usando tipicamente do modelo tunelado duma Virtual Private Network (A VPN estabelece um trânsito fechado generalista entre dois anfitriões/sites completos criptografando todas as vias e todas as sub-comunicações dos PCs em LAN face a outra LAN de forma privada com o IPSec).
- **Por que as outras estão erradas:**
  - **B (As transações do canal Secure Sockets Layer - O legado obsoleto SSL e as bases conexas de portas base ou túneis aplicacionais do Browser e TLS web):** As ligações atuam entre uma máquina de destino restrita de sessão Web individual (Application-based end to end) mas, na amplitude generalista, de sistemas interligando um túnel global seguro e intercetado, para assegurar comunicações entre redes em infraestruturas e filiais ao invés do browser estrito, o túnel da Firewall em VPN torna-se absoluto (Neste cenário "transmitted between two systems end-to-end", um túnel clássico da VPN resolve no Layer 3 integral os dados e pacotes sem forçar os utilizadores a usarem a cifra na app específica na WAN em tráfego intermédio entre os pontos globais do escritório e filial que trocam tudo).
  - **C (Mecanismos de Dupla Fator Autenticaçao multi face na base das contas / Multi-factor authentication nos canais e nos telemóveis):** Este passo na vertente da tríade lida na segurança ao Confirmar quem gere ou tenta a entrada inicial mas nunca encripta nem baralha do fluxo nos protocolos da WAN que correm do TCP após as autenticações confirmarem positivamente em confidencia.
  - **D (As arquiteturas nos comutadores e NAC da porta local / Controlo estrito à rede Network Access Control no edifício para forçar isolamento portuário nas vlans ou 802.1X do utilizador desconhecido na chegada):** Confere e rege as lógicas físicas ou MAC de entrada no L2 na switch local num host na empresa mas em transitar da web e da nuvem não efetua encriptações nenhumas sobre cabos externos entre 2 sistemas longínquos nos pontos end a end.

**32. B**
- **Motivo (Certa):** Migrações na infraestrutura e a virtualização nos provedores de computação em massas na Nuvens impõem preocupações singulares na arquitetura base do tráfego ou perdas. Entre os riscos mais sérios salienta-se a obrigatoriedade e as lógicas exigentes em assegurar vigorosamente todas as chaves, os certificados, o transito dos terabytes (In transit), e a salvaguarda nas unidades remotas das SAN virtuais sem sofrer fugas num data center externo que partilha discos no hardware comum dos vizinhos à organização e ao provedor com o at-rest.
- **Por que as outras estão erradas:**
  - **A (Gestão local na empresa e manutenção pesada do equipamento On-premises firewalls/Hardwares locais perimetrais originais que ficaram na sede antiga):** É um fator marginal. Migrando ao IaaS/PaaS ou à Nuvem o peso logístico diminui nos hardwares físicos antigos, deixando ou tornando os problemas de caixas metálicas no local menos urgentes perante o risco colossal nos canais e na informação virtual perdida nas nuvens (onde gerir segurança passa de cabos no rack para chaves dos dados criptográficos nos trânsitos abertos e nas databases e servidores do CSP e do Cloud Provider que perde a governação e responsabilidade nas matrizes on-premises e no chão de fábrica da TI).
  - **C (Gerir infraestruturas defuntas ou ultrapassadas e manter os sistemas Legados do negócio que nunca atualizaram nos velhos códigos/Monitoring as aplicações Legacy):** Migrações Cloud efetuam habitualmente abandono (Lift and Shift) perante software sem suporte do fabricante (Legacy). O foco na transição nunca orbita em monitorizar hardware obsoleto deixado fora; e se foi migrado para SaaS a preocupação primária retorna à proteção lógica do canal ao provedor na rede (Integridade do Transit) e no armazenamento distante das cópias de rest fora de casa numa infraestrutura de partilha na nuvem com outros inquilinos com acesso lateral e interno de vizinhança na cloud base isolada por tenants.
  - **D (Políticas da instalação massiva no computador base nos Endpoints ou portáteis na empresa do funcionário face aos Endpoints Protection/Antivírus locais do utilizador nos periféricos e terminais que o cliente opera de casa ou sede face os acessos às redes de internet da WAN ou Nuvem):** Trata um ponto que abarca a gestão dos computadores corporativos. Desafios das Clouds assentam puramente nos acessos remotos a bases alojadas, na governação virtual, controlo partilhado, das restrições do IAM no CSP portal, nos S3 Buckets soltos ou encriptação remota a salvaguarda de backups em servidores onde os administradores e executivos não têm mais os servidores na garagem do perímetro a fechar os acessos nem podem garantir segurança total e integridade passiva na máquina física.

**33. D**
- **Motivo (Certa):** O avanço formidável do data center definido por software perante ameaças horizontais de salto-a-salto baseia-se na adoção generalizada nas nuvens sobre o papel fundamental de "Micro-segmentation". Limita-se rigidamente o que podem falar num painel granular, onde um hipervisor pode colocar uma cerca microscópica a cada VM/Contentor mesmo residindo virtualmente a centímetros numa estrutura lógica idêntica e idênticos hosts nas VLAN do switch de virtualização e sem atravessar um firewall convencional.
- **Por que as outras estão erradas:**
  - **A (Separar as divisões do escritório usando isolamento nas matrizes nativas do switch e nas tags MAC/Porto OSI L2 base com as antigas VLANs nos Datacenters on-prem):** Arquiteturas base L2 do velho centro computacional operam segmentações longas de departamentos, sem flexibilidade a nível de interface isolado por container nos clouds dinâmicas e sem o suporte de tráfego individual (East-West) a travar no meio duma cloud a mobilidade da VM sem o uso do motor virtual central dos grupos de segurança individualizados no host.
  - **B (O framework complexo dos conceitos de segurança profunda Zero Trust no ecossistema e filosofia de autenticação arquitetural Zero trust architecture corporativo e universal entre todos sem margens de segurança na zona física em que o host confia dentro das paredes empresariais ou fora na Internet a desconfiar do MAC inicial e pass de login/SSO da autenticação profunda nas arquiteturas Cloud):** A teoria é o farol holístico desta gestão cega; no entanto a prática de bloquear (técnica isolada em segmentar workloads na subnet partilhada) baseia as rotinas singulares de controlo restrito explícito de fluxo ao conceito particular da micro-segmentação do tráfego das apps independentemente da ideologia que o abrace ou se seja imposto noutro contexto no modelo zero-trust.
  - **C (Barreiras sólidas na entrada periférica dos dados pela perímetro, o uso do Firewall Edge corporativo comum do roteador no gargalo para evitar acessos indesejados):** Firewalls não lidam com eficácia tráfego East-West horizontal entre máquinas da mesma Cloud sem enviar tráfego todo (Hairpinning) ao equipamento L3 no perímetro; o seu alvo de "segmentar ou isolar workloads dentro da cloud" usa virtualizações das micro regras nativas nas hipervisor.

**34. B**
- **Motivo (Certa):** O grande incentivo impulsionador da Federação de Gestão de Identidades (Federated Identity) reflete no objetivo único e na facilitação pragmática das entidades desvinculadas ou parceiras interconectarem portais. Fomenta ativamente nas rotinas das companhias os canais na delegação duma simples submissão no login inicial em SSO permitindo estender e ramificar aos demais domínios inter-associados sem que a vítima humana enfrente e replique as 20 pass diferentes a plataformas independentes das várias subscrições/SSO corporativo estrito global do grupo multi empresas na Federação do standard e nas redes independentes da aliança web (SAML/OAuth).
- **Por que as outras estão erradas:**
  - **A (Guardar dados inativos da BD e efetuar uma cifra rígida universal - Encrypt at rest):** O controlo dos serviços IAM na web para aceder não intervém e não previne estragos se o dado for ou não for encriptado quando armazenado após o acesso ou autenticação base.
  - **C (Envolver o reforçar técnico dos controlos 2FA num painel no momento e fortificar o Multi Factor Verification das sub missões com biometria ou telemóvel da infraestrutura):** As arquiteturas de token SAML e federação confiam cegamente em quem validou a chave externa noutro provedor; pode não incluir obrigações no FIM dum parceiro para usar de forma mais forte as proteções do que o método central já previa na origem noutro estado sem melhorar nada (O IdP externo na rede do governo valida e passa o recibo de confiança para acesso ao sistema da saúde do FIM de SSO da universidade num portal sem ligar a MFA se essa via original falhou, não fortifica por ser MFA mas sim por facilitar).
  - **D (Limitar os possíveis alvos expostos à internet, apagar serviços mortos e o Attack surface minimizado nas pontas híbridas face ameaças exteriores nas empresas):** Em oposição do que afirma a opção, gerir tokens universais alavanca um colapso único e abrangente se for violado no alvo único do provedor de identidade do serviço Federação que autoriza acesso aos portais de todas as dezenas de clouds adjacentes ligadas. Se o token assinado da Identity originária for comprometido e falsificado, os danos das ramificações ou brechas expandem em cadeia maciça de privilégios.

**35. D**
- **Motivo (Certa):** O "Bastion Host" atua primordialmente na arquitetura com a missão ingrata de suportar e estar virado às redes adversas. É reforçado de forma deliberada a fornecer com segurança e estabilidade (com menos ou nenhum serviço trivial ativo a comprometer) acesso num serviço virado à Web (como Proxy base, Jump Server de SSH public face-to-face à internet externa, sem correr riscos na rede privada onde os acessos devem transitar isolados nas linhas duras e diretas) – servindo as aplicações frontais ou o salto central como host que sobrevive no hostil DMZ.
- **Por que as outras estão erradas:**
  - **A (Ponte para Remote Desktop a internos):** Isso tipicamente é VPN Gateway. Embora um "jump box" atue como bastion para admins, a descrição geral do propósito de bastion numa DMZ frequentemente aponta para host de serviços frontais fortificados. *(Se num contexto estrito for acesso remoto a admin, a opção A concorre com D, mas D é o conceito genérico do Bastion Host clássico em segurança perimetral public-facing).*
  - **B (Garantir que toda a criptografia sai à net forçosamente):** Refere-se a Proxy/VPN/SSL Offloader, não ao bastion que é um OS robusto e fortificado.
  - **C (Funcionamento estrito no Routing de firewalls na passagem da web a rede restrita interna e na LAN):** Não é um firewall, é um servidor de serviço puramente fortificado que coexiste paralelamente na DMZ blindada no ecossistema sem rotear isoladamente os filtros IP das comunicações do segmento.

**36. A**
- **Motivo (Certa):** Um processo de forense num local e perante os dispositivos eletrónicos base (telemóvel ou servidor atacado) tem obrigatoriamente a prioridade universal a fim de garantir todo e qualquer grau de validade legal da integridade do trabalho técnico ao documentar e justificar a cadeia restrita nos manuseios da "Chain Of Custody" em cada etapa desde extração à sala restrita da delegacia e das testemunhas e horários exatos antes de iniciar ações do analista ou do técnico no percurso pericial no laboratório.
- **Por que as outras estão erradas:**
  - **B (Sacar as cablagens RJ45 e retirar conectividade web do dispositivo afetado do ataque na rede/Network disconnection imediatist and remove from network access do suspeito sem analisar mais processos nas RAMs online antes disso - e remover acesso aos switch corporativos ao portátil do atacante ou vítima):** Muitas vezes apaga e descarta registos online de malwares sem fios remotos cruciais nos servidores remotos em C2, ou os apagões intempestivos acionam as defesas maliciosas programadas contra a perícia num Kill-switch que limpam evidências sem aviso antes da apreensão legal da custódia física no local ao PC.
  - **C (Cópia massiva sem restrições diretas sobre as caixas dos logs cruciais e pastas ocultas da pasta Logs and system Events no computador do local alvo da extração técnica nas vias digitais e na sua base e HDD):** Isto requer documentação anterior; extrair um dump pode modificar meta dados, violando a integridade legal inicial da ação na sala.
  - **D (Efetuar a análise pura e dissecar meticulosamente dumps de Bit e RAM/Disks com ferramentas complexas forenses e scripts no isolamento total do Laboratório final):** As capturas e a exploração (análise de hash, bit a bit image mount, etc.) não é o 1º passo no terreno. É o último e mais complexo após apreender formal e garantidamente as garantias dos custodiantes e transportar sem tocar sem ordem à máquina selada.

**37. C**
- **Motivo (Certa):** O *User and Entity Behavior Analytics* (UEBA) aplica IA ou Machine Learning estritamente no mapeamento diário base da "normalidade" nas métricas estatísticas da conduta laboral/dados humanos contínuos dos sujeitos da rede (Utilizadores e hosts ligados). Dispara em alertas não baseados em lista de vírus, mas caso alguém, noutro momento do turno, logue de Paris ao amanhecer, abrindo e movendo 20.000 PDF confidenciais de forma insólita e contrária à sua linha estatística pregressa histórica das semanas de conduta laboral.
- **Por que as outras estão erradas:**
  - **A (Intrusion Detection IDS estrito baseado essencialmente em assinaturas estáticas de regras de código perigoso base - Deteção em modo passivo sem intervir com bloqueio em rede do Signature/Heuristic engine do sensor perimetral em tempo real nas ameaças L4):** O IDS foca primariamente na anatomia dos bytes nos pacotes e da infração nas regras programadas e nas heurísticas (Snort rules), ignorando a vasta e completa história e biografia do padrão sociológico e conduta contínua de "Entidade Y e User Z" a operar na WAN ou perante anomalias de transferências que quebram contexto do hábito corporativo da pessoa nos departamentos da empresa.
  - **B (Proteção restrita aos ficheiros nativos Endpoint ou PC com Endpoint Detection nas subscrições antivírus em tempo real contra anomalias internas - Motores baseados no End Point corporativo isolado nos serviços locais e eventos nativos ou Kernel no Windows):** Focado profundamente nas injeções processuais maliciosas ou DLL hijacking na própria RAM num alvo específico de máquina instalada na ponta da LAN a atuar sem englobar na análise das suas correlações uma visão comportamental e universal central do perfil de uma identidade em dezenas de contextos espalhados das apps independentemente da plataforma se EDR estiver na mesma ou não na empresa inteira ao mesmo tempo.
  - **D (Scanner automático em rotinas programadas por calendários contra os pacotes maliciosos na web com os varrimentos e verificações nas listagens das Bases CVE no mundo real das portas expostas abertas ou no Patch antigo vulnerável e esquecido nas pastas dos admins - Vulnerability Scans nos alvos IP da subnet externa):** Varre remotamente contra IPs apenas à procura de Portos sem pass ou serviços web frágeis ao Log4j no seu banner. Nada monitoriza nem estuda um comportamento dos analistas, não aplica análises à conduta das horas do sistema da Entidade da HR no PC local e nem atua numa proteção preditiva ou contínua na linha do tempo das ações laborais de um grupo como UEBA processa na sombra silenciosa usando algoritmos de classificação face ao desvio diário do padrão ou desvio logado.

**38. A**
- **Motivo (Certa):** O formato peculiar denominado por "Password Spraying" (Varrimento Horizontal Pulverizado) descreve rigorosamente um ataque num panorama onde, face a milhares ou contas globais da empresa alvo, testa-se a conta inteira do portal central duma só vez unicamente e apenas recorrendo à singela inserção da mesmíssima senha (e.g. Inverno2023!), evadindo assim a típica contagem bloqueadora estrita dos três tiros por user num Lockout de brute force clássico em série e sem levantar alarme estatístico nas defesas frontais nos IDS das IP das conexões externas nos portais da organização visada na sua base de utilizadores ativa ou desativada dos dados da rede do Active Directory exposta.
- **Por que as outras estão erradas:**
  - **B (Atrair por esquemas as credenciais diretas e enganosas num formulário por via duma mensagem nos e-mails de alerta falso aos empregados dos quadros internos nas chefias em campanha - O perigoso ataque engenhoso clássico massivo de Phishing social web ou Pretexting das páginas disfarçadas enviadas no link escondido aos quadros da LAN):** A ação reflete-se primariamente numa vertente psicológica e humana na captura. O Log e alertas que expõem "repeated login attempts" massificados na VPN referem intrusões mecânicas de ataque massivo via bots (Ataques criptográficos automáticos ou força nas palavras chaves do portal face à vítima) opondo inteiramente aos poucos cliques furtivos nas armadilhas de Phishing (que resultam nos roubos isolados ou diretos se a pessoa der a pass sem logs mecânicos gigantescos prévios das falhas consecutivas).
  - **C (Abusos técnicos da inserção profunda nos carateres base duma form web ou de URL no portal que enviam o bypass SQL via query no SQL injeção aos servidores backend no SQL):** Furtam dados estruturados das tabelas do servidor usando código da linguagem nativa mal feita, e contornam nas strings lógicas a página da autenticação inteira da BD de forma cirúrgica na falha exata, abdicando inteiramente e totalmente da força inútil perante logs de dezenas de IP com login falhado.
  - **D (Processo de exploração de exploits com o ganho indevido em direitos internos ao administrador no SO através do salto de permissões Privilege Escalation no OS root e Windows System locais num atacante que já entrou anteriormente no alvo via contas base/Guest no local onde o PC trabalha ou opera):** Processa de dentro para fora, pós entrada inicial. Totalmente isolado das métricas massivas base de IP externos nos firewalls dos "tentativas de Login no painel" nos serviços perimetrais ou portais no mundo frontal ou DMZ.

**39. A**
- **Motivo (Certa):** O papel dos playbooks instalados em centrais de comando *Security Orchestration, Automation, and Response* (SOAR) reside explicitamente em formatar, ditar passos técnicos automatizados a rotinas constantes no incidente. Uma vez engatilhado pelo evento duma API ou SIEM, reage de imediato executando ou mitigando dezenas de tarefas com workflows (ex: bloqueia porta router, notifica o user na equipa do Slack, etc).
- **Por que as outras estão erradas:**
  - **B (Gerar e auditar obrigações formais das ISOs/Normas a gestores nos compliance e no relatório de auditor legal das autoridades e RGPD nas pastas do C-level / GRC Tasks e Governação no Risk e Report de auditorias no mercado ou gestão de certificados e das obrigações globais):** Funções reservadas e exercidas puramente pelas ferramentas GRC do risco geral de modo passivo sem automação pericial reativa nas APIs das Switchs como o SOAR exerce na trincheira aos IPs perigosos num incidente agudo cibernético ou infeção aguda das estações perigosas detetadas num centro de comando de resposta imediata SOC da empresa.
  - **C (Executar as lógicas e defesas reais no próprio local da máquina contra injeções da ram e proteger profundamente as workstations ou telemóveis do vírus executável - Ferramentas robustas anti malware nativo EDR / Anti virus puro local sem intervenções externas isolado nas pastas e diretórios nos aparelhos dos trabalhadores e nos dados no local onde rodam ativamente as DLLs ou SO base da estação e no disco do host):** As ferramentas do local (EDR/AV) efetuam a resposta estrita ao vírus propriamente; o SOAR efetua apenas a ponte exterior central comunicando à ferramenta e entre todas numa camada orquestrada na cloud do gestor sem se alojar estritamente na profundidade mecânica das RAM da estação para proteger do ficheiro em si de imediato na isolamento puro de root do sistema ou processos em execução locais isolados no OS base que é o papel único da componente base endpoint do software residente original e não dum integrador SOAR.
  - **D (Varrer preventivamente os problemas não urgentes como pacotes obsoletos nos servidores de DMZ via rede / Vulnerability Scanner com varrimentos regulares calendarizados e reportes técnicos):** A rotina prévia dum scan puro pertence ao Vulnerability Scanner a identificar e mapear sem stress num dashboard passivo os perigos, nunca servindo as rotinas ativas de workflow numa resposta imediata SOAR focada unicamente perante uma crise cibernética iminente do momento em que um invasor perfura ativamente o sistema real perante a analista do SOC (SOAR é resposta viva).

**40. B**
- **Motivo (Certa):** Das categorizações principais clássicas, o controlo "Detetive" (Detective Control) assume estritamente o dever da fiscalização pericial de registar e observar anomalias do tempo exato após as ações sem impedir ativamente a ocorrência na origem (tais como registos do CCTV e vídeos, auditorias de Logs, e detetores passivos térmicos ou IDS nas portas da rede sem bloqueios).
- **Por que as outras estão erradas:**
  - **A (As configurações na lista e Regras perimetrais severas nas caixas e sistemas das bordas e gateway corporativo no router de acessos bloqueantes / Firewall Rules no L4 com o Deny IP):** Evitam ativamente os trânsitos de pacotes, bloqueando o agressor fisicamente na malha (Preventive/Prevenção da ação letal logo de imediato e por defeito ao entrar sem avisos).
  - **C (Matematização base por cifra e codificação de acesso negado sem chaves dos conteúdos sensíveis da memória e ficheiros no sistema de discos no AES 256 restrito e criptologia avançada - Data Encryption in rest):** Inviabiliza a quebra confidencial direta. Interdita o uso ou o benefício pelo roubo com prevenção técnica robusta das ações.
  - **D (A plataforma nativa perimetral residente e local Antivírus/EDR focada no kill imediato de processo e quarentena do sistema central infetado no OS local ativamente em MS nos portáteis ou Servers da LAN da rede empresarial e nos anfitriões nas ameaças do dia-a-dia na deteção signature base / Antivírus Preventivo local de ameaças comuns da web):** Não regista apenas factos silenciosos para a polícia (Detetive); bloqueia e esmaga fisicamente as infeções nas horas, agindo na barreira de modo intrínseco num Preventivo na execução da máquina da vitima com o kill e isolation ativo no kernel local e da pasta perigosa na rede (Embora AVs tenham Logs detetives de origem o pilar é sempre bloqueio e não observação inócua neutra pura de câmara).

**41. C**
- **Motivo (Certa):** A Certificate Revocation List (CRL) numa PKI é uma lista pública assinada pela Autoridade Certificadora (CA) que contém explicitamente a identificação (números de série) dos certificados que já não são válidos (foram revogados antecipadamente por furto ou perda das chaves privadas) antes da data de expiração normal.
- **Por que as outras estão erradas:**
  - **A (Validar autenticidade do certificado):** Quem confere autenticidade é a assinatura criptográfica de raiz da CA sobre o certificado, não a lista CRL (a lista só diz quem foi revogado).
  - **B (Distribuir chaves públicas):** O certificado propriamente dito é o pacote que distribui as chaves, não a lista de penalizações e cessações (CRL).
  - **D (Encriptar comunicação em e-mails):** A encriptação utiliza a chave em si (S/MIME, PGP). A CRL não encripta nada, apenas serve de base de dados de confiança.

**42. B**
- **Motivo (Certa):** O WPA3 (Wi-Fi Protected Access 3) adota no seu perfil central o Advanced Encryption Standard (AES) em modos modernos, como o AES-GCM (ou o mínimo AES-CCMP de 128 bits no perfil pessoal). O AES é a cifra simétrica aprovada para redes sem fios seguras atuais.
- **Por que as outras estão erradas:**
  - **A (RSA):** É um algoritmo assimétrico usado em trocas de chaves e certificados (ex. HTTPS), mas muito pesado para encriptar tráfego contínuo e volumoso de Wi-Fi.
  - **C (SHA-256):** É exclusivamente uma função unidirecional Hash (usada para verificação de integridade, não para cifra reversível no túnel).
  - **D (Blowfish):** Cifra simétrica antiga e preterida há vários anos oficialmente pelo AES em standard de comunicações.

**43. A**
- **Motivo (Certa):** A grande vantagem do Elliptic-Curve Cryptography (ECC) baseia-se na sua capacidade de prover segurança extrema com o benefício de gerar chaves significativamente mais curtas e com processamento muito mais rápido (ideal para dispositivos IoT ou telemóveis) do que algoritmos massivos como o RSA.
- **Por que as outras estão erradas:**
  - **B (Exige chaves longas e pesadas para a mesma proteção):** Ocorre o inverso. O ECC alcança o equivalente a RSA de forma muito mais curta.
  - **C (Utiliza encriptações de chaves simétricas):** O ECC é um sistema de criptografia de chave pública (assimétrica), e não simétrica.
  - **D (Foca puramente em funções Hash):** Criptografia de curva envolve encriptação e troca de chaves (ECDH, ECDSA), não é uma mera função Hash unidirecional.

**44. B**
- **Motivo (Certa):** O protocolo Secure File Transfer Protocol (SFTP) utiliza túneis encriptados por baixo do protocolo SSH para estabelecer canais fiáveis onde grandes transferências de ficheiros navegam cifrados a 100%, sem arriscar capturas pelo percurso.
- **Por que as outras estão erradas:**
  - **A (SSH):** O Secure Shell é a linha base em que o SFTP opera, servindo primariamente para sessões remotas de consola/terminal Unix, não para transferências de lotes de ficheiros de forma nativa e cómoda (o SFTP é o sub-protocolo dedicado a isso).
  - **C (HTTP):** Standard de sites Web. Sem a camada "S" (HTTPS), flutua sem cifra. Além disso, não é otimizado para gestão pura de ficheiros "Large Data" como FTP/SFTP.
  - **D (FTP):** O FTP normal transita sem tunelamento encriptado, ou seja, as senhas de acesso viajam em "Clear Text".

**45. A**
- **Motivo (Certa):** As funções de resumo ("Hashing") atuam exclusivamente para garantir a **Integridade**. Se o documento recebido apresentar a mesmíssima hash gerada na origem, assegura que não sofreu adições ou manipulações durante o trajeto (Checksum verification).
- **Por que as outras estão erradas:**
  - **B (Criptografia assimétrica) / C (Criptografia simétrica):** Criptografia protege de imediato a **Confidencialidade** contra leitura externa. Apesar de alguns modos adicionarem integridade em anexo, a tarefa estrita e natural que "garante integridade do ficheiro" sem o encriptar em si, é o Hashing.
  - **D (Tokenization):** Método usado para substituir dados (ex. números de cartão) por tokens aleatórios nas bases de dados para dissimulação de formato, não para assinar a integridade global de um ficheiro.

**46. C**
- **Motivo (Certa):** O Regulamento Geral sobre a Proteção de Dados (GDPR) possui escopo extraterritorial. Exige que empresas mundiais, independentemente da sua localização, protejam estritamente os dados e privacidade de qualquer cidadão europeu (UE) se prestarem serviço ou alojarem dados desse mercado.
- **Por que as outras estão erradas:**
  - **A (PCI DSS):** Regula obrigações de segurança focadas na indústria de cartões de pagamento (bancos/bandeiras).
  - **B (HIPAA):** Lei focada exclusivamente no mercado da saúde (PHI) e provedores de seguros médicos dentro dos EUA.
  - **D (SOX):** A lei Sarbanes-Oxley atua em moldes de auditoria financeira e contábil, não em dados pessoais de privacidade civil ou europeia.

**47. B**
- **Motivo (Certa):** A HIPAA (Health Insurance Portability and Accountability Act) é a lei dos EUA vocacionada exclusivamente para o dever legal de preservar e blindar interações de saúde do paciente, protegendo ativamente dados designados como *Protected Health Information (PHI)*.
- **Por que as outras estão erradas:**
  - **A (Proteger dados financeiros):** Esse âmbito recai no PCI DSS (cartões) ou SOX e GLBA (finanças e bancos).
  - **C (Reger frameworks globais de cibersegurança):** Frameworks técnicos abrangentes referem-se ao NIST CSF, ISO 27001, etc. HIPAA dita regras legais na vertical hospitalar/seguradoras.
  - **D (Impor Zero-trust):** HIPAA exige controlos de acesso, mas "Zero Trust" é um conceito técnico moderno, não o "propósito central/primário" da legislação de base dos anos 90.

**48. B**
- **Motivo (Certa):** O *Recovery Time Objective* (RTO) estabelece um prazo máximo estipulado (ex: 4 horas). Indica o tempo alvo após o desastre no qual as operações da organização, aplicação ou rede têm forçosamente de regressar à atividade aceitável antes de causar perdas fatais.
- **Por que as outras estão erradas:**
  - **A (RPO - Recovery Point Objective):** Mede o "passado", definindo quanto volume de dados ou horas de transações o negócio tolera perder desde o último backup seguro até ao desastre.
  - **C (MTBF - Mean Time Between Failures):** A métrica física e estatística do tempo médio expectável em que um hardware ou servidor pode falhar (útil para estimativas de compras).
  - **D (MTD - Maximum Tolerable Downtime):** É o limite máximo intransponível de paragem, após o qual o negócio colapsa e morre (RTO é o alvo otimista fixado para recuperar muito antes de chegar ao MTD).

**49. B**
- **Motivo (Certa):** Num cenário rigoroso de Gestão de Risco (Risk Assessment) numa aplicação ou processo novo, o primeiro passo absoluto é Identificar e Classificar Ativos (Asset Identification). Sem saber que sistema é aquele e o quão sensível (e a que categoria pertence o seu dado) ele é, não é viável aplicar medições de risco e medidas de proteção realistas.
- **Por que as outras estão erradas:**
  - **A (Executar logo scanner de vulnerabilidades):** Só se correm scans contra alvos que já estejam no catálogo, mapeados e autorizados.
  - **C (Executar Análise de Impacto/BIA):** O BIA avalia o impacto financeiro/operacional na paralisação de um serviço. Precisa também saber quais são e qual o valor dos ativos preliminarmente.
  - **D (Analisar conformidades):** Avaliar leis a aplicar num sistema depende primariamente da "Classificação" que lhes for atribuída no passo 1 (Identificar que os ativos têm dados de doentes ou cartões para poder ler a lei HIPAA ou PCI a seguir).

**50. A**
- **Motivo (Certa):** O *Penetration Testing* (Teste de Penetração / Pen-Test) consiste em simular ativamente e explorar invasões realísticas com autorização. Recorre a métodos agressivos em ferramentas que quebram, bypassam defesas reais do alvo e atingem a base das falhas para provar que a rede é suscetível num ataque em modo vida real.
- **Por que as outras estão erradas:**
  - **B (Vulnerability scanning):** É ação puramente base de diagnóstico neutro; sonda se faltam os patches das versões e mapeia as portas na lista. O Scan detecta o buraco; o Pentest atira-se para dentro dele de armas em punho para explorar.
  - **C (Risk assessment):** É a avaliação de conformidades em papel e matrizes teóricas de cálculos (Riscos base e mitigação formal sem ferramentas na consola em tempo real a invadir a firewall).
  - **D (Patch management):** Ação de gerir as atualizações e correções de Windows/Software de forma contínua em manutenção, não constitui avaliação em invasão real forçada da TI.

**51. C**
- **Motivo (Certa):** O propósito imperativo da etapa de Contenção (Containment) num Plano de Resposta a Incidentes reside em travar o alastramento rápido ("Limitar o espalhar do ataque") estancando o vírus. Desconectar temporariamente sub-redes ativas e suspender VMs para isolá-las do movimento lateral do ransomware num instante, protegendo as zonas sãs da corporação de sofrer o mesmo estrago do servidor original em crise.
- **Por que as outras estão erradas:**
  - **A (Descobrir Causa Raíz):** A análise profunda forense final do desastre ocorre na etapa prolongada da recuperação e no *Post-Incident Activity* / Lições Aprendidas após as poeiras baixarem e se fechar os buracos, nunca na contenção aguda e a fundo para atrasar ações drásticas aos IPs na fase fulcral da Contenção na hora e no dia um a isolar.
  - **B (Erradicar a ameaça):** A fase da *Erradicação* (Remover ativamente malwares, limpar rootkits nos discos com Antivírus do HD) desenrola-se apenas quando se conseguir suster as malhas da contenção das infeções, depois de não conseguir propagar.
  - **D (Notificar reguladores):** Esta é a responsabilidade legal/PR paralela. O grupo SOC no incidente prioriza travar a rede; as obrigações a notificar leis, apesar de importantes e céleres (72h para GDPR), não são a "função e alvo principal tático" na etapa pura de *Containment* base para deter as invasões em TI na área de SOC Response na hora e em contenção de proliferações internas das redes e das ameaças de movimento e roubos ativos nos data e tráfego.

**52. B**
- **Motivo (Certa):** Utilitários e controlos referenciados como *File Integrity Monitoring* (FIM) garantem a validação de configurações e de mudanças profundas usando Hashing no Windows ou sistemas Unix. Parametrizam hashes diários das pastas fundamentais (Sys32, hosts) do servidor de rede. Qualquer alteração ou trojan inserido invisivelmente, levanta o alarme por alteração na assinatura base dos hashes imutáveis.
- **Por que as outras estão erradas:**
  - **A (SIEM):** Concentra eventos gerais de firewalls e acessos, contudo sem os dados granulares enviados ativamente do FIM nas pastas do File System do End Point, o log principal global muitas vezes ignora uma reescrita minuciosa num byte/Rootkit local num script obscuro de DLL não monitorizado nativamente na recolha de login generalista do firewall do SIEM em alto nível das IPs de internet fora do host end-user.
  - **C (Vulnerability Scanner):** Descobre ativamente versões não atualizadas e faltas de patches num ambiente do servidor que está aberto a exploits expostos à Wan sem aceder de forma a mapear integridade base e alterada oculta dum binário nos discos internos após as injeções furtivas de 0 days de backdoor da madrugada passiva do sistema interno que ocorre após os desvios invisíveis no binário (O scan apenas alerta a falta ou exposição dum banner num log, FIM lê nas partições as corrupções do próprio byte num dll corrompido pós o bypass).
  - **D (NAC - Network Access Control):** Executa controlos puros da "saúde e posture MAC" de isolar um visitante na Porta de Ethernet nas Switches da LAN da sede.

**53. B**
- **Motivo (Certa):** O ciberataque *Distributed Denial of Service* (DDoS) ocorre quando uma vasta botnet de múltiplas origens submete, em uníssono, fluxos avassaladores e simultâneos de tráfego a um só recurso/alvo isolado (no caso a máquina e gateway da empresa e do seu serviço). O alvo esgota o limite do processador de tráfego, sucumbe e encerra a disponibilidade na internet inteira para os negócios.
- **Por que as outras estão erradas:**
  - **A (DNS Spoofing):** Significa envenenar passivamente e corromper uma cache dos endereços nas máquinas vítimas para reencaminhá-las ao portal web falso (Ex. Banco), sem ter qualquer premissa no peso/carga extrema avassaladora baseada na "Inundação Multi-source esgotante para não responder das requests ativas simultâneas" da exaustão volumétrica num alvo e vítima (DDoS).
  - **C (DNS Amplification):** É um sub-tipo do DDoS asimétrico mas a diferença assenta num truque de reflexão: O criminoso forja na sua máquina com o IP e endereço e a identidade da vitima de forma mascarada, requisitando ao "DNS alvo vulnerável gigante" (Neste caso não da vitima mas do mundo externo sem filtro dos Open Resolver de terabytes de base DNS de tráfego num host de terceiros sem filtro publico e da operadora) para que o tráfego brutal das respostas dos DNS seja projetado em efeito reverso ("ampliado" e refletido passivamente e não submetido pelo DNS aberto intencional ou originário e sem requests intencionais puras multi distribuídas de bots) de volta contra o router isolado da vitima alvo real sob uma inundação forçada pelo "spoofed source". Contudo, as respostas que referem o cenário de origem esgotada multi-fontes ao servidor real é um DDoS.
  - **D (Man-in-the-Middle):** Engana ativamente o ARP nas sessões em rede local dum router a um PC com espelhamento da chave e do canal a fim interceptar segredos no tráfego sem causar disrupção com negação maciça ao utilizador final que a utiliza alheio duma intrusão invisível sob esgotamento.

**54. B**
- **Motivo (Certa):** Implementar e configurar *Write-Once-Read-Many (WORM)* em drives e fitas constitui a proteção blindada "Anti-Tampering" final para logs de auditorias. Quando eventos num SOC são gravados em dispositivos/armazenamento com suporte rigoroso na root do firmware de WORM, os bytes inseridos nos discos convertem-se irreversivelmente cimentados no hardware na placa. Qualquer invasor, mesmo possuindo contas Admin no sistema que roubou na DMZ/Domain Controller, torna-se fisicamente bloqueado a apagar vestígios maliciosos.
- **Por que as outras estão erradas:**
  - **A (Rodar logs periodicamente):** Trata-se da automação num cron job e de espaço da DB num servidor OS da base (ex. var/log/ rotate e compactar o do mês para gzip e descartar velhos), não fornecendo qualquer resistência real a ataques de apagar dos Administradores infetados ou root das caixas, vulneráveis num instant delete puro da console da pasta inteira sem um WORM nas partições de base de cópias com immutability a protegê-los de imediato num backup real e inviabilização.
  - **C (Encriptar logs nas partições no backup Data-at-rest em AES):** Previne do conteúdo roubado de IP ser decifrado pelo adversário e que este exponha ou não a inteligência interna do IDS às massas e deep web. Cifra a confidencialidade mas nada resolve perante ransomware a corromper por cima com as suas passes ou a formatação apagada massiva nos blocos dos discos nas DBs e destruição integral duma pasta na base cega nos discos em ataque.
  - **D (Descarregar nas NAS partilhas SMB na infraestrutura / Logs noutra localização interna nos file Servers):** Movimentar os ficheiros na cloud num sistema de Ficheiro partilhado num PC, na mesma LAN vulnerável sem proteções "Imutabilidade de WORM" apenas eleva os targets visíveis, vulnerabiliza-os a hackers que penetrem essa drive partilhada SMB do grupo do Admin logado nas Windows Network dos grupos em vulnerabilidades SMB locais ou Kerberos tickets roubados nas extrações de ataques paralelos do Domínio da corporação em movimentações laterais aos Discos comuns base expostos sem o protocolo cego de Root WORM do storage a impedir edições.

**55. B**
- **Motivo (Certa):** O *Tabletop Exercise* (Exercício de simulação teórica e de mesa de crise sem os computadores) permite as direções nas equipas nos Centros a rever, polir ou debater os passos processuais do plano nas folhas do IRP base, num gabinete sob cenários simulados num papel "O CISO discute as comunicações se faltar a luz nas DBs, quem fará as decisões perante os médias? Se um resgate entrar da WAN no mail a quem envia o Analista os avisos do alerta legal das multas nas 72h no Compliance Officer?". Verifica a coesão sem a paralisação técnica no meio duma guerra de scripts sem a execução arriscada em realidade (Live Execution) de alvos na plataforma real e TI viva de servidores de empresa.
- **Por que as outras estão erradas:**
  - **A (Correr ataques e atirar perigos bélicos do sistema do Red Team na rede / Simulações reais live na rede target local):** Esse é o domínio das simulações "Live action", Adversarial Simulations com Red Teaming ou Penetration a sistemas abertos num contexto caótico sem a calma puramente dos cenários mentais no Tabletop (onde a guerra é discutida a falar nos passos orais com lideranças ou nos fluxos dos analistas num SOC em papel perante processos sem disparar payloads na Switch L3).
  - **C (Efetuar do lado do exterior o Pentesting clássico às barreiras no site DMZ / Penetration Testing ativo):** Tal atua perante defesas e as explora via vulnerabilidades e bypass real à Firewall, ignorando muitas vezes as valências procedimentais dos workflows, os fluxos no C-level das empresas nas negociações de Ransomware e nos papeis e lideranças orgânicas em Crise teóricas do Tabletop burocrático e comunicacional da corporação inteira a resolver na sala as falhas organizacionais e legais sob pressão psicológica das perdas massivas.
  - **D (Preparar na automatização dos playbooks dos robôs e da AI em Respostas nas Ferramentas SOC/SOAR):** São tarefas focadas nos engenheiros das regras em sistemas, orquestrações das firewalls ou respostas nativas reativas programadas sem a "discussão e exercícios dos operacionais base a testar falhas de comunicação sem execução".

**56. B**
- **Motivo (Certa):** Como resposta imperativa em ciberataques ou predefinições em redes complexas de IoT (termóstatos da DMZ base corporativa, luzes, assistentes voz no lobby do edifício) onde firmwares vêm embutidos fracos ou difíceis a não receber os patches na gestão e segurança local, o isolamento imperativo ocorre via a separação rigorosa ou segmentações dos canais (*Network Segmentation* - IoT nas VLAN fechadas sem a internet global) restringindo drasticamente sem o perigo dum movimento livre para as pastas Confidenciais Financeiras Lógicas adjacentes das DBs se comprometidos via WiFi das tomadas ou que ataquem fora a internet na botnet num DDoS num exterior host.
- **Por que as outras estão erradas:**
  - **A (Deploy do filtro web/WAF):** Os WAF focam na sanitização baseada e perante servidores Web em HTTP frontais. Um aparelho de Botnet nem sempre age ou transita em protocolos clássicos expostos nas URL (TCP/80, 443 web) do qual justifique colocar uma barreira em cada frigorífico a proteger do DMZ nas falésias e ataques da deep web perante tráfegos em serviços P2P ou canais maliciosos e protocolos obscuros a fugir do foco Web no WAF local da empresa que foca noutro vector perimetral dos servidores da DMZ frontal Web ou API Gateway das Apps nativas da nuvem da sede Web site corporativo exposto publicamente na internet.
  - **C (Colocar os serviços e subscrições Antivírus corporativos robustos num Firmware do Dispositivo Pequeno - OS ou App Endpoint de EDR de IoT Endpoint):** Inviável, quase impossível a nível comercial das restrições drásticas e nativas do aparelho (As CPU reduzidas na base da câmara não toleram pesadas atualizações de Windows EDR para se defenderem per si com a Firewall AV ativa, o que legitima basearem a cura e mitigação no controlo indireto ou de "cerco cego" exterior na barreira do comutador - Segmentação Network Vlan).
  - **D (Efetuar do local testes Penest nas lâmpadas/Televisores da corporação dos corredores nas Pentest anuais da conformidade com red teaming da internet sem a resolução pura do cerco do tráfego a vedar isoladamente ao aparelho falho):** Isso revelará no diagnóstico final: "IoT é vulnerável" num Scan / Pentest aos Auditores, falhando categoricamente por não resolver nem mitigar com efetividade (bloquear e conter trânsito) os malwares persistentes dum ataque Bot e da rede maliciosa como o isolamento da Segmentação atua na proteção prática contra o Bot das comunicações e das execuções ativas na Switch (Contém a rede logo sem esperar do relatório) nas mitigações nativas da prevenção da corporação.

**57. D**
- **Motivo (Certa):** Vulnerabilidades nos campos dum input web ou duma query nas caixas dos browsers (e.g. `Username: ' OR 1=1 --`) onde os invasores aproveitam a pobre higienização do programador para ordenar nativamente comandos injetáveis de bypass aos bancos de dados referem-se estritamente ao "SQL Injection".
- **Por que as outras estão erradas:**
  - **A (Buffer overflow):** Falha focada em corromper limites de memória de variáveis (C/C++), não em queries de base de dados.
  - **B (Cross-site scripting):** Injeta scripts web e Javascript no browser da vítima, sem atuar de imediato nas tabelas backend de SQL.
  - **C (Command injection):** Semelhante, mas injeta e executa puros comandos do Sistema Operativo e da consola (Bash/PowerShell) fora do ambiente da Base de Dados isolada do SGBD do SQL base alvo de injeções estritas do SQLi nos dados confidenciais nos dumps na injeção.

**58. A**
- **Motivo (Certa):** O *Input validation* (Validação da entrada de dados) impede forçosamente na barreira do código os dados mal formatados que as entidades inserem para que não rebentem com limites de memória. É a regra base de codificação segura (Secure Coding) que trava os *Buffer Overflows* e corrupções de memória nativas, impedindo a injeção ser consumida pela RAM na aplicação e subvertendo ponteiros sem controlo.
- **Por que as outras estão erradas:**
  - **B (Security patching):** Os patches resolvem a falha já existente a nível do fabricante quando atua depois do problema se manifestar na empresa ou comunidade e atualizam o binário. O que a "Técnica base de programação de base que barra e bloqueia os caracteres para precaver e proibir o bypass ao programar" é puramente na codificação nativa do código fonte do input validation no ecrã (O patch é atualização da App do Vendor).
  - **C (Data encryption):** Cifrar o disco ou partições (Data at rest) impede o roubo num servidor físico desligado, mas quando este corre os executáveis vivos no arame na RAM (In-Use) perante a porta aberta de utilizadores na rede exposta de frontais web abertos, a cifra de disco não mitiga bugs de buffer overflows nativos.
  - **D (Secure boot):** Evita malware de arranques e rootkits durante a inicialização do BIOS ou boot EFI, não tem relação a corrupções dinâmicas a decorrer num porto L7 de input no decorrer livre das atividades Web da porta duma API.

**59. A**
- **Motivo (Certa):** O *Ping Sweep* consiste em enviar uma série de solicitações ICMP a várias moradas de uma sub-rede. É um método de exploração para determinar furtivamente (covertly) ou pelo menos ativamente numa varredura lenta inicial e indireta quais IP's estão "vivos", mapeando passivamente o perímetro externo de ativos on-line sem tentar invasões.
- **Por que as outras estão erradas:**
  - **B (ARP poisoning):** Exige estar na mesma LAN física (layer 2) e intersetar tráfego ativamente entre duas máquinas falsificando o gateway (MITM), gerando um ataque severo e nunca é uma pura recolha disfarçada antes da entrada corporativa na LAN externa na deep web do scan geral inicial de Reconnaissance global de moradas externas (Não é furtivo de fora nem de exploração no mapa alvo).
  - **C (DNS zone transfer):** Esvazia e rouba toda a base de dados de zonas de domínios da empresa num comando maciço e visível (se não bloqueado); é extremamente barulhento no IDS e altamente incisivo.
  - **D (MAC spoofing):** Engana o switch da rede e falsifica-se perante o hardware como visitante autorizado para saltar bloqueios físicos portuários locais (VLAN hop), técnica ativa não focada em mapear os alvos ou rede da varredura externa.

**60. D**
- **Motivo (Certa):** Ao incorporar o mecanismo de "Salting", os administradores adicionam "sal" (dados aleatórios únicos) às passwords antes de triturá-las em Hashes inquebráveis guardados. Isto impede e destrói ataques via *Rainbow Tables* (dicionários pré-calculados de Hashes de chaves expostas no mundo), pois o sal deforma o Hash idêntico que estaria tabelado num hash totalmente díspar em cada uso isolado no utilizador mundial nas bases de dumps.
- **Por que as outras estão erradas:**
  - **A (Increase computational difficulty / Elevar exigência nos CPU ao máximo forçado numa força bruta base lenta ou em Brute force off/online nas hashes / lentidão intencional em hash e nos iterations Key stretching massivos):** Embora os PBKDF2/Bcrypt ou hashing prolongado tornem lento o chip do atacante, o objetivo exclusivo/primário do *Salting* sozinho na hash sem ser as iterações (Key stretch) prende-se em inutilizar Rainbow Tables já computadas e forçar computar tudo do zero isoladamente na pessoa.
  - **B (Enable MFA):** Nada tem a ver, MFA lida em SMS e Tokens no telemóvel para um login live validado da pass, Salt protege os registos cifrados na base de dados (Storage).
  - **C (Encrypt stored passwords):** As senhas não devem ser encriptadas (que é reversível se a chave for roubada pelo admin DB root da base de tabelas corporativa). Têm forçosamente de ser Hashed (irreversíveis) e com sal (Salted) sem serem sujeitas à cifra bidirecional (encriptação nativa) de dados estáticos para proteger o leak do administrador infiel no portal de TI se abrir os schemas ou ler tudo desprotegido.
**61. B**
- **Motivo (Certa):** O *Transport Layer Security (TLS)* é a espinha dorsal criptográfica da Web moderna. A sua finalidade primária é criar um túnel seguro de comunicação ponto-a-ponto (normalmente via HTTPS) na Internet, encriptando os dados entre o cliente/browser e o servidor Web, garantindo que terceiros não escutam a comunicação em trânsito.
- **Por que as outras estão erradas:**
  - **A (Encrypt email communications):** Embora o TLS proteja o túnel SMTP/IMAP no transporte, a encriptação direta do conteúdo do e-mail em si do princípio ao fim (End-to-End) é missão nativa do S/MIME ou PGP.
  - **C (Authenticate users during login):** O TLS autentica o "servidor" usando certificados (prova que o site é quem diz ser). A autenticação real do "utilizador" é gerida pelas caixas de login (OAuth, SAML, Passwords).
  - **D (Detect unauthorized file access):** Detetar acessos não autorizados é função de um IDS, FIM ou de Logs no servidor (Security Logging), não do canal TLS que apenas cifra a viagem na rede.

**62. C**
- **Motivo (Certa):** A família SHA-2 (que inclui o **SHA-256**) é amplamente considerada a norma moderna e segura para Hashing criptográfico sem problemas conhecidos de colisões fáceis até o momento, aprovada nas indústrias corporativas mundiais.
- **Por que as outras estão erradas:**
  - **A (MD5):** Obsoleto há muitos anos; é extremamente frágil a ataques de colisão (produzir a mesma hash com ficheiros diferentes).
  - **B (SHA-1):** Descontinuado e classificado como inseguro desde 2017 pelas grandes empresas por também sofrer de fraquezas de colisão demonstráveis na prática.
  - **D (RC4):** Não é um algoritmo de Hashing, é um algoritmo de cifra de fluxo (Stream Cipher) muito frágil, já descontinuado nas redes Wi-Fi antigas (WEP).

**63. A**
- **Motivo (Certa):** A definição fundamental da *criptografia simétrica* assenta na utilização da **exata mesma chave** singular tanto para encriptar os dados quanto para decifrá-los (ex: AES, DES). A chave deve ser guardada em segredo total entre as duas partes.
- **Por que as outras estão erradas:**
  - **B (Baseia-se em pares Public-Private key):** Esta é a definição pura de Criptografia **Assimétrica** (como RSA ou ECC).
  - **C (Providencia Assinaturas Digitais):** Assinaturas dependem da chave privada dum utilizador (assimétrica) para garantir não repúdio; a simétrica falha aqui porque ambas as partes possuem a mesma chave e não se prova quem a usou.
  - **D (Suporta lógicas Blockchain):** O Blockchain confia inteiramente nas Árvores Hash e Chaves Assimétricas públicas/privadas das carteiras, não em cifras de chave singular simétrica para identidade.

**64. A**
- **Motivo (Certa):** Para garantir o túnel sem fios de tráfego volumoso, o WPA3 adotou estritamente o *Advanced Encryption Standard (AES)* de forma nativa e melhorada. É o pilar da encriptação simétrica de alta performance da Wi-Fi moderna.
- **Por que as outras estão erradas:**
  - **B (Diffie-Hellman Key Exchange):** Atua de forma efémera no início do processo (SAE) só para trocar a chave com segurança; o AES toma conta da cifra do canal de seguida, o DH não encripta o tráfego contínuo.
  - **C (RSA):** Pesado demais. Raramente usado para encriptar túneis Wi-Fi na totalidade.
  - **D (ECDSA):** Usado unicamente para assinar identidades em certificados de chaves de curva; não serve para encriptação massiva dos pacotes em tempo real.

**65. C**
- **Motivo (Certa):** Nas regras base da criptografia assimétrica, se um remetente usa a "Chave Pública do Destinatário" (visível ao mundo) para trancar o pacote, o destinatário precisa obrigatoriamente do par matemático complementar e secreto para abrir a caixa - a **sua própria chave privada** (Recipient's Private Key).
- **Por que as outras estão erradas:**
  - **A (Sender’s private key):** Encriptar com a chave privada do remetente cria uma "Assinatura Digital" (Prova de quem enviou), pois qualquer pessoa com a pública abriria, logo não esconde o segredo.
  - **B (Sender’s public key):** Não desempenha qualquer função matemática válida na abertura da caixa trancada pela chave do destinatário.
  - **D (Recipient’s public key):** Foi a chave usada ativamente para encriptar. As chaves públicas não decifram o que elas próprias cifraram; só o par complementar o faz (a privada).

**66. B**
- **Motivo (Certa):** Numa perspetiva avançada, um ambiente de **Sandbox** fornece essencialmente uma "zona isolada" e virtualizada (VM). O analista pode executar ficheiros suspeitos lá dentro e observar ativamente como o malware opera e altera ficheiros sem permitir que a ameaça salte e corrompa a rede principal da empresa.
- **Por que as outras estão erradas:**
  - **A (Proteger dados sensíveis do vírus):** A Sandbox não previne que dados expostos na rede fiquem seguros, apenas isola a amostra numa câmara estéril que não possui dados reais.
  - **C (Prevenir ataques de Phishing nos mails):** Quem previne o e-mail em si é o filtro Anti-spam. A Sandbox pode analisar os anexos depois, mas não foca na premissa "Prevenir o email".
  - **D (Cifrar as assinaturas do vírus):** A sandbox não faz cifra, atua como observatório do comportamento do binário em execução dinâmica.

**67. A**
- **Motivo (Certa):** Ligar escritórios distantes duma organização sobre a Internet aberta exigiu o uso de *Virtual Private Network* (VPN) através de protocolos fortes (IPsec). Ela encapsula as ligações num túnel inviolável, criando a simulação de uma rede fechada.
- **Por que as outras estão erradas:**
  - **B (Firewall):** Limita entradas e saídas (Access Control). Por si só, a Firewall nua não criptografa o tráfego externo (muitas gerem a VPN, mas a tecnologia que o faz é a VPN).
  - **C (DNSSEC):** Assegura apenas que a conversão "site.com" -> "IP" num DNS seja autêntica, não constrói vias encriptadas L3 completas.
  - **D (SIEM):** Concentra logs auditáveis centralizados.

**68. B**
- **Motivo (Certa):** O modelo *Context-Aware Access Control* evolui além das senhas estáticas, analisando fatores dinâmicos e "Contextuais" da localização: Geofencing (está no edifício/país certo?), Hora, e dispositivo. Se o GPS não bater certo com o Geofencing, nega acesso.
- **Por que as outras estão erradas:**
  - **A (Role-based - RBAC):** Foca inteiramente no cargo estático ("É Gestor? Acede"), ignorando o local geográfico da requisição.
  - **C (Discretionary - DAC):** Baseado no dono do ficheiro conceder acesso manualmente a colegas de forma flexível.
  - **D (Mandatory - MAC):** Avalia rigorosamente a etiqueta estática de classificação de segurança ("Top Secret") cruzada com o clearance do utilizador, não de contextos dinâmicos de GPS.

**69. C**
- **Motivo (Certa):** As Firewalls clássicas atuavam nas portas (IP/TCP), mas a **Next-Generation Firewall (NGFW)** revolucionou integrando inspeção profunda (Deep Packet Inspection), detetando e filtrando a atividade específica nativa das Apps no Payload Web (Camada 7 - *Application Layer*).
- **Por que as outras estão erradas:**
  - **A (Packet-filtering clássica):** Filtra apenas em "Se IP=X e Porta=Y bloqueia", ignorando a aplicação contida no pacote.
  - **B (Stateful firewall):** Verifica o estado e o histórico da ligação nas tabelas L4, sem dissecção avançada das camadas aplicacionais L7 e antivírus integrados (IPS).
  - **D (Circuit-level gateway):** Valida os *handshakes* da sessão sem inspecionar profundamente a carga útil da aplicação.

**70. B**
- **Motivo (Certa):** Uma solução de *Network Access Control (NAC)* atua primariamente na admissão à rede (muitas vezes via 802.1x), avaliando forçosamente qualquer dispositivo na tomada/Wi-Fi: avalia o seu cumprimento face às regras ("Tens o antivírus ligado? Patches em dia?"). Garante que só aparelhos saudáveis (Compliant) e de confiança acedem à rede oficial.
- **Por que as outras estão erradas:**
  - **A (Monitorizar/Log da rede):** Isso é função do SIEM ou do Syslog.
  - **C (Detetar maliciosos em Phishing):** Secure Email Gateways é que fazem isso.
  - **D (Encriptação na rede):** Protocolos como IPSec ou MACsec operam as encriptações, o NAC cuida do controlo da admissão e quarentenas locais antes da comunicação iniciar.

**71. B**
- **Motivo (Certa):** Instituída em força após grandes escândalos americanos (ex. Enron), a Sarbanes-Oxley Act (SOX) visa assegurar ativamente a transparência financeira corporativa de capital aberto, protegendo rigorosamente a exatidão, integridade e os registos da *contabilidade financeira* contra manipulações internas.
- **Por que as outras estão erradas:**
  - **A (Notificação de Data breach de Pessoas):** O GDPR (UE) e leis estaduais gerem fortemente isto perante as PII dos cidadãos.
  - **C (Proteger diagnósticos Médicos):** Essa é a missão base e única do HIPAA.
  - **D (Gestão de transferências de dados além-fronteiras):** A regulação disto é dominada pelo GDPR nos aspetos das normas DPF e Cláusulas Europeias.

**72. B**
- **Motivo (Certa):** Da matriz de estratégias de Risco, "Avoidance" (Evitar) significa tomar a decisão dura de cancelar a ação ou recusar envolver-se (*Refusing to engage*) nesse projeto totalmente para fugir a 100% do risco. (ex: Não criar loja online para não gerir risco cibernético de cartões).
- **Por que as outras estão erradas:**
  - **A (Comprar Seguros Cibernéticos):** Corresponde a *Transference* (Transferir risco a terceiros no mercado segurador).
  - **C (Mitigação do Risco com controlos técnicos):** Significa ativamente aceitar o risco mas instalar uma firewall para reduzi-lo (*Risk Mitigation* ou Reduction).
  - **D (Assumir o risco residual):** Trata-se do clássico *Risk Acceptance* de modo consciente, sem o evitar parando o negócio.

**73. D**
- **Motivo (Certa):** O *Open Web Application Security Project* (OWASP) é a fundação sem fins lucrativos mundialmente afamada que constrói o top oficial ("Top 10 OWASP") com as falhas web mais graves (Injection, XSS), educando equipas de desenvolvedores a criarem softwares seguros na Web.
- **Por que as outras estão erradas:**
  - **A (ISO):** Publica padrões formais e burocráticos de sistemas de gestão global (ex. ISO 27001), não tabelas dinâmicas anuais focadas em programadores e código de falhas de aplicações Web.
  - **B (NIST):** Cria o Cybersecurity Framework generalista e publicou inúmeras recomendações governamentais, mas o OWASP Top 10 é da organização homónima independente (a D).
  - **C ((ISC)²):** Entidade pura nos exames mundiais (Certificações CISSP), mas não desenvolveu o guia OWASP.

**74. B**
- **Motivo (Certa):** As soluções robustas de *Data Loss Prevention* (DLP) vasculham de modo sensível a exfiltração: garantem e previnem ativamente que os dados marcados e confidenciais da corporação "saiam" indevidamente (*Leaving the organization*) para pens USB dos empregados ou e-mails pessoais no webmail por fuga não autorizada.
- **Por que as outras estão erradas:**
  - **A (Encriptar discos em servidores - At Rest):** Esse campo corresponde estritamente ao *Storage Encryption* nativo em volumes. DLP gere fluxos em movimento ou regras de fuga baseadas em padrões, e não no algoritmo frio de cifra das caixas inativas de disco estático como objetivo único.
  - **C (Monitorizar puramente o tráfego geral e rotina de utilizadores na WAN global via SIEM ou UEBA):** DLP foca apenas e em restrito em "Dado Confidencial vs Canal de Saída", não efetuando rastreio psicológico das atitudes gerais das pessoas ou IPs abertos se não envolver fugas documentais na restrição explícita e regras.
  - **D (Impor as permissões e Controlos nas regras IAM na corporativa submissão de Contas no LDAP):** Essa área das credenciais assenta puramente em IAM (*Identity and Access Management*) e DAC/MAC. DLP restringe e previne a partilha ilícita documental na porta para o exterior via regras de conteúdo a posteriori que as contas no portal lhes dão ou não leitura interna sem partilhas no One Drive.

**75. C**
- **Motivo (Certa):** Leis vocacionadas a proteger, regulamentar com encriptação mandatórias e blindagem de acesso restrita da informação no cenário de *Saúde/Patient Health Information (PHI)* focam explicitamente nas regras do **HIPAA** no contexto regulatório predominante dos exames CompTIA globais baseados nas leis EUA.
- **Por que as outras estão erradas:**
  - **A (GDPR):** Focado em dados pessoais genéricos a todos (PII) focando no mercado Europeu (E embora lide com a biometria/saúde, HIPAA é a reposta clara americana no jargão puramente e exclusivamente de "Patient Health Information PHI").
  - **B (PCI DSS):** Padrão blindado exclusivo das indústrias de Cartões Bancários contra brechas em fraude financeira do comércio Web ou Lojas de Retalho globais com cartões (PAN number, PIN e CVVs magnéticos).
  - **D (FISMA):** Foca puramente em agências e órgãos Oficiais e Federais no âmbito exclusivo de sistemas governamentais ou estatais da Segurança nos EUA e Exército americano em sistemas cibernéticos.

**76. C**
- **Motivo (Certa):** Se um atacante utilizar senhas expostas e furtadas, a adoção iminente do *Multi-factor Authentication* (MFA) paralisa a quebra instantaneamente. O invasor esbarra porque não detém o acesso ao token temporário do telemóvel do funcionário e aos SMS vitais na altura, inutilizando o "conhecimento" isolado de senhas comprometidas nas fugas da Web.
- **Por que as outras estão erradas:**
  - **A (Lockout da conta ao bloquear 3 vezes consecutivamente):** Se o atacante recolheu a senha em claro e acertar logo na primeira tentativa num ataque pontual não levanta qualquer bloqueio baseado em número excessivo e massivo nas falhas na Firewall.
  - **B (Requerer rodar ou expirar a Pass periodicamente com Updates rígidos corporativos/Password Policies exaustivas):** Obrigar e expirar a senha constantemente estimula e habitua utilizadores a tornarem-se preguiçosos usando "Verão1, Verão2", perpetuando senhas fracas ou que rapidamente escoam de novo face a uma segurança robusta técnica no token. O MFA impede do início o erro no log on imediato sem ser senha com a barreira complementar (Bloqueia logo senhas vazadas em segundos, a mudança pode ainda revelar falhas ou padrões idênticos expostos após mudar de amanhã face as listas do dicionário massivas em brute forces contínuos se reciclar pass repetidas antigas em variações e sequenciais e sem o 2FA como rede segura das proteções).
  - **D (Ações em Awareness/Formação aos empregados base na deteção de Engenharia/Phishing e esquemas gerais Web contra o factor Humano e social de mentiras no e-mail):** Essencial de facto em prevenir cenários a longo prazo contudo perante os IPs expostos em acessos roubados as proteções no MFA são a defesa barreira técnica imediata para barrar as invasões à rede, independente das aulas no mês seguinte em segurança comportamental de esquemas se não fecharem no IAM de imediato.

**77. B**
- **Motivo (Certa):** Em cenários da *Memory Forensics*, a ferramenta clássica pura global de raiz focada na consola nas pesquisas minunciosas em capturas voláteis extraídas (*Memory Dumps/RAM*) é a *Volatility*. Analisa os vestígios dos rootkits invisíveis ou chaves pass-words no chip do PC de uma memória parada sem ser enganada pelo malware em SO vivo.
- **Por que as outras estão erradas:**
  - **A (Wireshark):** Analisador do pacote ativo (TCP/IP) a espiar fluxos Ethernet da placa do cabo de rede L2 L3 e L4, mas não escava a memória dos processos parados no S.O do computador local num dump hexadecimal de memória RAM morta da motherboard após o ataque numa sala e mesa forense de laboratórios isolados.
  - **C (Nessus):** Scanner dinâmico passivo/ativo em falhas e de remendos em portos abertos. Não estuda binários corrompidos das tabelas e dumps da Memoria de forma a achar código do vírus malicioso ou DLL injetados invisivelmente (Só alerta que o servidor "Tem uma versão Velha do Software").
  - **D (Splunk):** Um agregador colossal (SIEM) de Syslogs em tempo real em texto claro com a visão nas infraestruturas em Painel gráfico. Ignora o exame microscópio pericial e hex nos binários (Array bytes e Bit por Bit de disco volátil) focado e efetuado manualmente das ferramentas RAM como a Volatility Forensics efetua nas máquinas num Snapshot em RAM File local pós facto na deep análise local dum investigador do SOC Forensics.

**78. A**
- **Motivo (Certa):** Ao desconectar o switch fisicamente e retirar/Isolar do meio ambiente Web e LAN um dispositivo de forma drástica, aplica-se o passo nevrálgico inicial do *Containment* (Contenção) do Ciclo de Incidentes e PICERL. Trava ativamente a capacidade do malware propagar e infetar os sistemas em volta via a rede interna (Movimento Lateral).
- **Por que as outras estão erradas:**
  - **B (Eradication / Erradicação):** Corresponde a formatar, aplicar o antivírus pesado e apagar literalmente o trojan na pasta residente C: no disco com limpezas isoladas ativas puras nos repositórios, logo que a máquina esteja travada em Contenção segura sem espalhar na WAN de antemão durante o Wipe.
  - **C (Recovery / Recuperação):** Seria exatamente ligar o cabo da Internet ativamente de volta (Após a formatação e as vacinas limpas já aplicadas e os remendos feitos em Defesa), regressando às rotinas empresariais o servidor saudável com vigilância do tráfego ativamente.
  - **D (Preparation / Preparação):** Etapa de tempo de paz anterior à falha que lida com redigir papéis e manuais na gestão do IRP, aulas e SOC setup prévias em meses antes dum vírus estar de fato ativo ao qual exija que desligue à pressa e cabos ativamente do RJ45 do router no local a conter na hora com desespero.

**79. B**
- **Motivo (Certa):** No Windows e servidores gerais corporativos modernos as auditorias críticas aos registos contínuos das falhas contendo senhas recusadas, autenticações massivas negadas ou nomes base utilizados por IPs invasores assenta pura e oficialmente nos *Security logs* (Logs de Segurança e de Auditorias "Authentication Event ID" nos Visualizadores AD e Local no domínio da Gestão).
- **Por que as outras estão erradas:**
  - **A (Firewall Logs do router ou Edge corporativo geral WAN exterior nas bordas):** Verificam essencialmente a permissão física nas restrições de IP/Porta a saltar na Firewall ao entrar e bloquear num Syn Drop na rede, contudo a componente e log L7 Autenticacional das Passwords internas a serem recusadas localmente processa no Server alvo final no "Security Log" ativado pelo LDAP das contas sem passarem nos filtros cegos L3/L4 originais do Gateway Edge Firewall passivos que não lê a Base e AD das permissões do Logon.
  - **C (Application Logs nas lógicas do Windows de crash nas aplicações diárias corporativas do PC Desktop Client/Serviços isolados):** Focam em falhas ou paragens, como do MSSQL falhar memória e crash da interface e app sem incidência contínua ou foco nativo a escrutinar estritamente as Autenticações/Logons contínuos ao SO base com IPs nativas puras nos registos dos utilizadores no Active Directory Security Logs de Autenticação na Console Local.
  - **D (DNS logs de traduções da pesquisa pura Web/Endereços nos Nameservers/Domains Queries do utilizador nas visitas passivas nos Servers de Domínio BIND locais do LAN resolvendo site IPs nos e-mails externos):** Trata das traduções dos links da navegação web da net dos funcionários para sites. Nada atua sobre quem tentou as senhas falsas no AD Login ou portais corporativos perante falhas nas tentativas nas credenciais nas falhas contínuas e exaustões na validação (Sem Password/Username validation neles) dos acessos proibitivos das intrusões lógicas no login painel no Security Event Logger na corporação ou Windows Server.

**80. C**
- **Motivo (Certa):** Num cenário de Defesa SOC estruturada, um *Runbook* dita taticamente "O que o Analista técnico ou SOC deve inserir na Consola isolado e fazer agora nos 3 passos com 5 comandos em MS DOS perante o Servidor em Falha de Apache DDoS em X". Fornece estritas e específicas descrições passo a passo (Step-by-step) para mitigações técnicas manuais focadas nas tarefas restritas em resposta a um alarme.
- **Por que as outras estão erradas:**
  - **A (Documentos mestre nas delegações das Lideranças e do Plano Orgânico Macro e Resposta das Instituições em Crises - Incident Response Plan / Plano e Política Geral das Empresas globais e de contacto aos mídia e PR e o seu papel de CEO nos desastres/IRP):** Isso reflete a governação e *Incident Response Plan* formal. Um runbook atua na parte suja, ao detalhe tático no "Como desativar a linha 4 da regra L3 do Firewall Edge XPTO com código X".
  - **B (Atividades robóticas massificadas das automações nas firewalls puras sem interação ou intervenções das Equipas base humanas com acoplamentos SOC Automations/Automações e Playbook SOAR base /Security Orchestration, Automation, and Response playbooks das lógicas no servidor central SIEM e vendors em APIs ativas):** Um playbook automatizado foca nestas APIs e bots (SOAR automations). O Runbook humano é o documento escrito da "Instrução técnica e pormenorizada ao humano Analista Level 1 e Level 2 ler em documento Word de guia de resposta isolado" de modo prático passo-a-passo manual no SOC (Embora Playbooks sejam usados sem distinção para a mesma, nas opções de exames o runbook puro refere-se "detailed manual instruction guide to specific human response manual in tasks" do analista humano e o Playbook base as orquestrações SOAR muitas vezes nos fluxos macro).
  - **D (Varrer a estrutura ativamente de erros do OS vulnerável no patch num sistema normal e descontraído sem combates a intrusos no mapa corporativo / Vulnerability Network Scanning / Identificar vulnerabilidades num assessment e auditorias com o scanner de IPs):** É mapeamento pacífico das operações prévias. O Runbook do SOC acorda reativamente no caos prático vivo a intervir nos passos drásticos e cirúrgicos aos sistemas face o ciberataque imediato sem scaneamento nas listas velhas (Responde ao evento, não lista anomalias estáticas passadas num scanner de diagnóstico pacífico do SOC de manutenções de patch diárias no Windows WSUS updates e patches sem ataque vivo ou crise e IR/Incident em andamento ou Resposta Ativa base imediata da rotina ou crise bélica na equipa).
**81. A**
- **Motivo (Certa):** Um *Evil Twin* é um ataque de rede sem fios onde o atacante configura um Access Point (AP) malicioso com o exato mesmo SSID (nome da rede) de uma rede legítima (ex: Wi-Fi do Aeroporto). O objetivo é enganar os utilizadores para que se liguem a este AP falso, permitindo ao atacante intercetar todo o tráfego e dados sensíveis (Passwords, cookies de sessão).
- **Por que as outras estão erradas:**
  - **B (Rogue AP):** Um Rogue AP é qualquer ponto de acesso não autorizado ligado à rede da empresa (ex: um funcionário que traz um router de casa). Embora possa ser perigoso, o termo "Evil Twin" descreve especificamente a tática de "imitar" uma rede legítima para interceção de dados.
  - **C (Bluejacking):** É um ataque de Bluetooth que consiste em enviar mensagens não solicitadas para dispositivos próximos, sem roubo de dados ou interceção de sessões.
  - **D (Packet sniffing):** É a técnica passiva de capturar pacotes que viajam no ar ou cabo. É uma ferramenta/ação, mas o "ataque do AP falso" tem o nome específico de Evil Twin.

**82. A**
- **Motivo (Certa):** O malware *Polimórfico* altera o seu próprio código e assinatura a cada nova infeção para evitar a deteção por antivírus baseados em assinaturas. Embora a função maliciosa permaneça a mesma, a "aparência" do ficheiro (o seu hash/binário) muda constantemente.
- **Por que as outras estão erradas:**
  - **B (Rootkit):** Foca-se em obter acesso administrativo (root) e esconder a sua presença no sistema operativo, mas não se define necessariamente pela mudança constante de código.
  - **C (Spyware):** Malware desenhado para espiar e recolher informações do utilizador sem o seu consentimento.
  - **D (Logic Bomb):** Código malicioso que permanece adormecido até que uma condição específica seja cumprida (ex: uma data específica ou a demissão de um funcionário).

**83. A**
- **Motivo (Certa):** A exploração de APIs fracas muitas vezes envolve o envio de dados malformados ou excessivos para quebrar a lógica do servidor. A *Input Validation* (Validação de Entradas) garante que a API apenas aceite dados no formato, tamanho e tipo esperado, bloqueando tentativas de injeção ou ataques de buffer logo na entrada.
- **Por que as outras estão erradas:**
  - **B (Encrypt API traffic):** A encriptação (HTTPS/TLS) protege os dados em trânsito contra espiões, mas não impede que um atacante envie um comando malicioso "encriptado" para explorar uma falha na lógica da API.
  - **C (Monitor API usage with a SIEM):** É um controlo de deteção (Detetive), mas não impede (Prevenir) que o ataque ocorra com sucesso.
  - **D (Use TLS for all communications):** Semelhante à B, o TLS garante confidencialidade no transporte, mas não valida se o conteúdo da mensagem é seguro para o processamento da aplicação.

**84. A**
- **Motivo (Certa):** O *Cross-Site Scripting (XSS)* ocorre quando um atacante injeta scripts maliciosos (geralmente JavaScript) num website fidedigno. Quando outros utilizadores visitam essa página, o browser deles executa o script do atacante, permitindo o roubo de cookies de sessão ou redirecionamentos.
- **Por que as outras estão erradas:**
  - **B (SQL injection):** Injeta comandos de base de dados para manipular o backend, não scripts para correr no browser do utilizador.
  - **C (Command injection):** Injeta comandos do sistema operativo no servidor.
  - **D (Buffer overflow):** Tenta saturar a memória de uma aplicação para causar falhas ou execução de código a nível de sistema, não é focado em scripts web no cliente.

**85. C**
- **Motivo (Certa):** Ataques de engenharia social exploram a psicologia humana (mentira, urgência, autoridade). A melhor defesa é a **Educação/Awareness Training**, ensinando os funcionários a reconhecer e reportar tentativas de Phishing, Vishing ou Tailgating, uma vez que a tecnologia raramente bloqueia 100% da manipulação humana.
- **Por que as outras estão erradas:**
  - **A (Strong password policies):** Ajuda contra força bruta, mas não impede um funcionário de "dar" a sua senha forte a um atacante que se faça passar pelo suporte técnico ao telefone.
  - **B (Email filtering):** Bloqueia muito spam e malware, mas a engenharia social pode ocorrer via telefone, redes sociais ou pessoalmente.
  - **D (EDR):** Deteta malware nos computadores, mas não impede que um humano seja enganado a transferir dinheiro ou revelar segredos verbalmente.

**86. B**
- **Motivo (Certa):** O *Não-Repúdio (Non-repudiation)* garante que o autor de uma ação ou mensagem não possa negar a sua autoria. Em criptografia, isto é alcançado através de Assinaturas Digitais (chave privada do remetente), servindo como prova legal de que aquela transação partiu especificamente daquela pessoa.
- **Por que as outras estão erradas:**
  - **A (Encryption):** Garante a Confidencialidade (segredo), mas não prova por si só quem enviou a mensagem (pode ser um segredo partilhado).
  - **C (Integrity):** Garante que a mensagem não foi alterada, mas não prova quem a enviou originalmente.
  - **D (Authentication):** Verifica a identidade de quem está a aceder, mas o não-repúdio é o conceito específico para a impossibilidade de negação posterior.

**87. A**
- **Motivo (Certa):** O *Perfect Forward Secrecy (PFS)* garante que, mesmo que a chave privada de longo prazo de um servidor seja comprometida no futuro, as sessões passadas continuam seguras. Isto é feito gerando chaves de sessão únicas e efémeras para cada ligação, que são descartadas logo a seguir.
- **Por que as outras estão erradas:**
  - **B (Ensure data confidentiality):** É o objetivo geral da encriptação, mas não define a função específica do PFS.
  - **C (Support certificate management):** PFS é um mecanismo de troca de chaves, não de gestão de certificados (PKI).
  - **D (Detect unauthorized modifications):** Esta é a função do Hashing/Integridade.

**88. A**
- **Motivo (Certa):** O *S/MIME (Secure/Multipurpose Internet Mail Extensions)* utiliza certificados digitais para assinar (garantindo Identidade e Integridade) e encriptar (garantindo Confidencialidade) o conteúdo dos e-mails diretamente, do remetente ao destinatário.
- **Por que as outras estão erradas:**
  - **B (POP3) / C (IMAP):** São protocolos para **receber/descarregar** e-mails, não providenciam segurança de conteúdo nativa sem túneis adicionais.
  - **D (SMTP):** É o protocolo para **enviar** e-mails entre servidores, mas por si só envia tudo em texto limpo.

**89. A**
- **Motivo (Certa):** O **SHA-256** é o algoritmo de Hashing padrão atual para assinaturas digitais, pois produz um resumo único e fixo de 256 bits, sendo resistente a colisões e amplamente aceite por autoridades certificadoras.
- **Por que as outras estão erradas:**
  - **B (MD5):** Obsoleto e vulnerável a colisões (inseguro para assinaturas).
  - **C (RC4):** É um algoritmo de cifra de fluxo (Stream Cipher), não uma função Hash.
  - **D (AES):** É um algoritmo de cifra simétrica, não uma função Hash.

**90. A**
- **Motivo (Certa):** A diferença técnica reside na forma como processam os dados: **Block Ciphers** dividem a informação em blocos de tamanho fixo (ex: 128 bits no AES) para encriptar; **Stream Ciphers** encriptam os dados bit a bit ou byte a byte, sendo ideais para fluxos em tempo real (ex: áudio/vídeo).
- **Por que as outras estão erradas:**
  - **B (Symmetric vs Asymmetric):** Ambos (Block e Stream) são tipos de criptografia **Simétrica**.
  - **C (Block ciphers are faster for real-time):** Errado, as Stream Ciphers são geralmente mais rápidas e eficientes para dados em tempo real.
  - **D (Stream ciphers offer better support for files):** Errado, Block ciphers são as preferidas para ficheiros e discos (Data at Rest).

**91. B**
- **Motivo (Certa):** O *Software-Defined Networking (SDN)* separa o plano de controlo (a inteligência que decide onde os dados vão) do plano de dados (o hardware que os envia). Isto permite centralizar a gestão da rede num software, tornando a infraestrutura muito mais flexível, escalável e fácil de programar.
- **Por que as outras estão erradas:**
  - **A (Encrypt all traffic):** SDN pode facilitar a gestão, mas o seu propósito não é a encriptação em si.
  - **C (Prevent unauthorized access to physical devices):** Isto é segurança física e NAC, não o objetivo do SDN.
  - **D (Deploy microservices securely):** É uma vantagem indireta, mas o foco do SDN é o controlo centralizado da rede.

**92. A**
- **Motivo (Certa):** O *TLS (Transport Layer Security)* protege contra ataques Man-in-the-Middle (MitM) ao autenticar o servidor (através de certificados) e criar um canal encriptado. Se um atacante tentar intercetar a ligação, o browser avisará que o certificado é inválido ou a encriptação impedirá a leitura dos dados.
- **Por que as outras estão erradas:**
  - **B (DNSSEC):** Protege apenas a resolução de nomes (evita redirecionamentos falsos no DNS), mas não encripta a comunicação entre os computadores.
  - **C (WPA2):** Protege apenas o acesso Wi-Fi local; não impede um MitM que ocorra noutra parte da Internet ou na rede cablada.
  - **D (SIEM):** É uma ferramenta de log e monitorização, não impede ativamente o ataque MitM na hora.

**93. B**
- **Motivo (Certa):** O modelo *Zero Trust* baseia-se no princípio "Nunca confiar, verificar sempre". Exige que a identidade e a saúde do dispositivo sejam verificadas continuamente para cada pedido de acesso, independentemente de o utilizador estar dentro ou fora da rede da empresa.
- **Por que as outras estão erradas:**
  - **A (Implicit trust within internal networks):** Isto é o oposto do Zero Trust. No modelo tradicional confia-se na rede interna, no Zero Trust não.
  - **C (Relying solely on perimeter firewalls):** Zero Trust foca-se na proteção do dado e da identidade, e não apenas no "muro" da firewall.
  - **D (Storing all data on-premises):** O modelo Zero Trust funciona perfeitamente (e é até mais necessário) em ambientes Cloud e Híbridos.

**94. C**
- **Motivo (Certa):** Um *Proxy Server* atua como um intermediário entre os utilizadores internos e a Internet. A sua função primária de segurança é intercetar os pedidos de saída, filtrar conteúdos perigosos (bloquear sites de malware) e esconder os endereços IP internos da rede.
- **Por que as outras estão erradas:**
  - **A (Block malware downloads):** É uma funcionalidade de proxies avançados, mas a função genérica é o "intermédio e filtragem de tráfego".
  - **B (Cache resources):** É uma função de performance, mas não o objetivo principal de segurança num contexto CompTIA.
  - **D (Monitor bandwidth):** Função de gestão de rede, não a principal função de um proxy de segurança.

**95. A**
- **Motivo (Certa):** Um *Load Balancer* distribui o tráfego entre vários servidores. Isto garante **Alta Disponibilidade** (se um servidor falhar, o tráfego vai para os outros) e **Tolerância a Falhas**, permitindo que a aplicação continue online mesmo sob carga pesada.
- **Por que as outras estão erradas:**
  - **B (Encrypt traffic):** Embora muitos load balancers façam "SSL Offloading", o seu benefício principal é a disponibilidade.
  - **C (Block SQL injection):** Esta é a função de um WAF (Web Application Firewall), que pode estar num load balancer, mas não é a função do balanceador de carga em si.
  - **D (Ensure compliance with GDPR):** É um objetivo legal, não uma função técnica direta do aparelho.

**96. C**
- **Motivo (Certa):** O **PCI DSS** (Payment Card Industry Data Security Standard) é o regulamento criado pelas bandeiras de cartões (Visa, Mastercard, etc.) para garantir que todas as empresas que processam, armazenam ou transmitem dados de cartões de pagamento o façam de forma segura.
- **Por que as outras estão erradas:**
  - **A (GDPR):** Foca em privacidade de dados pessoais gerais na UE.
  - **B (HIPAA):** Foca em dados de saúde (PHI).
  - **D (FISMA):** Foca em sistemas de agências governamentais federais dos EUA.

**97. C**
- **Motivo (Certa):** Uma *Retention Policy* (Política de Retenção) define quanto tempo os dados devem ser guardados. O objetivo principal é garantir o cumprimento de leis e regulamentos (*Compliance*), que obrigam a manter certos registos por 5, 7 ou mais anos para auditorias legais.
- **Por que as outras estão erradas:**
  - **A (Reduce storage costs):** É um benefício secundário (ao apagar o que já não é necessário), mas não o objetivo principal de segurança.
  - **B (Limit access):** Isto é controlo de acessos (IAM), não retenção temporal.
  - **D (Prevent unauthorized transfers):** Isto é DLP ou Firewall.

**98. C**
- **Motivo (Certa):** O **NIST Cybersecurity Framework (CSF)** foi criado especificamente para ajudar organizações (especialmente de infraestruturas críticas) a gerir, medir e melhorar a sua maturidade e postura de cibersegurança através de uma linguagem comum.
- **Por que as outras estão erradas:**
  - **A (ISO 27001):** É um standard de certificação internacional para sistemas de gestão, mas o NIST CSF é o framework de referência para maturidade em infraestruturas.
  - **B (COBIT):** Framework focado na governança de TI e alinhamento com o negócio.
  - **D (ITIL):** Framework focado na gestão de serviços de TI (processos de suporte e entrega).

**99. B**
- **Motivo (Certa):** O **ALE (Annualized Loss Expectancy)** é uma métrica quantitativa que ajuda a priorizar esforços, calculando o valor financeiro que a empresa espera perder por ano com um risco específico (ALE = SLE x ARO). Ajuda a decidir se o custo de um controlo vale a pena.
- **Por que as outras estão erradas:**
  - **A (RPO) / C (RTO):** São métricas de continuidade de negócio e recuperação de desastres, não de priorização de risco financeiro anual.
  - **D (Residual Risk):** É o risco que sobra após aplicarmos controlos, não uma métrica de cálculo de prioridade inicial.

**100. B**
- **Motivo (Certa):** Sendo o HIPAA focado na privacidade da saúde, um auditor irá focar-se obrigatoriamente no armazenamento seguro, acesso e proteção de **registos médicos/saúde** (Electronic Protected Health Information - ePHI).
- **Por que as outras estão erradas:**
  - **A (Payment card information):** Isto seria um auditor de PCI DSS.
  - **C (Firewall rules) / D (Passwords):** São controlos técnicos gerais; embora avaliados, não são o "foco distintivo" do HIPAA como os registos de saúde são.
