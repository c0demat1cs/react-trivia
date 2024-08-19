export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

export const networkingQuestions = {
  questions: [
    {
      question: "What is the primary function of a router in a network?",
      choices: [
        "To provide internet access",
        "To route data between networks",
        "To connect devices within the same network",
        "To assign IP addresses to devices",
      ],
      correctAnswer: "To route data between networks",
    },
    {
      question:
        "Which protocol is used for secure communication over the internet?",
      choices: ["HTTP", "FTP", "HTTPS", "DNS"],
      correctAnswer: "HTTPS",
    },
    {
      question: "What does DNS stand for?",
      choices: [
        "Dynamic Network System",
        "Domain Name Service",
        "Domain Name System",
        "Data Network Service",
      ],
      correctAnswer: "Domain Name System",
    },
    {
      question:
        "Which layer of the OSI model is responsible for end-to-end communication?",
      choices: ["Physical", "Data Link", "Network", "Transport"],
      correctAnswer: "Transport",
    },
    {
      question: "What is the maximum length of a Cat5e Ethernet cable?",
      choices: ["50 meters", "100 meters", "150 meters", "200 meters"],
      correctAnswer: "100 meters",
    },
    {
      question:
        "Which protocol is used to convert IP addresses into MAC addresses?",
      choices: ["ARP", "RARP", "DHCP", "ICMP"],
      correctAnswer: "ARP",
    },
    {
      question: "What is the purpose of a firewall in a network?",
      choices: [
        "To encrypt data",
        "To control incoming and outgoing traffic",
        "To provide Wi-Fi access",
        "To allocate IP addresses",
      ],
      correctAnswer: "To control incoming and outgoing traffic",
    },
    {
      question: "Which IP address class is used for a large network?",
      choices: ["Class A", "Class B", "Class C", "Class D"],
      correctAnswer: "Class A",
    },
    {
      question:
        "Which device connects multiple networks and forwards packets to their destination?",
      choices: ["Switch", "Router", "Hub", "Bridge"],
      correctAnswer: "Router",
    },
    {
      question: "What does TCP stand for?",
      choices: [
        "Transmission Control Protocol",
        "Transport Communication Protocol",
        "Total Communication Protocol",
        "Transmission Communication Process",
      ],
      correctAnswer: "Transmission Control Protocol",
    },
    {
      question: "Which port does HTTP use by default?",
      choices: ["20", "443", "80", "25"],
      correctAnswer: "80",
    },
    {
      question: "What is the main advantage of using a VLAN?",
      choices: [
        "Increased security and segmentation",
        "Faster data transmission",
        "Support for wireless devices",
        "Decreased bandwidth usage",
      ],
      correctAnswer: "Increased security and segmentation",
    },
    {
      question:
        "Which command is used to test the reachability of a host on a network?",
      choices: ["ipconfig", "tracert", "ping", "netstat"],
      correctAnswer: "ping",
    },
    {
      question: "What is the function of DHCP?",
      choices: [
        "To convert domain names into IP addresses",
        "To assign IP addresses automatically",
        "To monitor network traffic",
        "To transfer files between devices",
      ],
      correctAnswer: "To assign IP addresses automatically",
    },
    {
      question: "What is the default subnet mask for a Class C IP address?",
      choices: ["255.0.0.0", "255.255.255.0", "255.255.0.0", "255.255.255.255"],
      correctAnswer: "255.255.255.0",
    },
    {
      question:
        "What type of attack involves overwhelming a network with excessive traffic?",
      choices: [
        "Man-in-the-middle attack",
        "Brute force attack",
        "Denial of Service (DoS) attack",
        "Phishing attack",
      ],
      correctAnswer: "Denial of Service (DoS) attack",
    },
    {
      question: "Which of the following is an IPv6 address?",
      choices: [
        "192.168.0.1",
        "10.0.0.255",
        "FE80::0202:B3FF:FE1E:8329",
        "172.16.0.1",
      ],
      correctAnswer: "FE80::0202:B3FF:FE1E:8329",
    },
    {
      question:
        "What is the primary purpose of NAT (Network Address Translation)?",
      choices: [
        "To provide encryption for data",
        "To convert private IP addresses to public IP addresses",
        "To segment the network",
        "To allocate IP addresses dynamically",
      ],
      correctAnswer: "To convert private IP addresses to public IP addresses",
    },
    {
      question: "Which protocol is used for sending emails?",
      choices: ["HTTP", "SMTP", "FTP", "POP3"],
      correctAnswer: "SMTP",
    },
    {
      question: "What is the primary function of a network switch?",
      choices: [
        "To forward packets based on MAC addresses",
        "To route packets between networks",
        "To control network security",
        "To monitor network traffic",
      ],
      correctAnswer: "To forward packets based on MAC addresses",
    },
  ],
};
