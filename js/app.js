// Whatsapp with vue js

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            // dark mode
            darkMode: false,
            // user Avatar
            userName: 'Sonia',
            userAvatar: 'img/avatar_io.jpg',
            // dropdown icon left header
            circleDropdownActive: false,
            commentDropdownActive: false,
            ellipsisDropdownActive: false,
            // notification
            reciveNotification: 'Ricevi notifiche desktop',
            activeMessage: 'Attiva le notifiche desktop',
            inactiveMessage: 'Disattiva le notifiche desktop',
            // last message sent
            lastMessageText: '', 
            // last hour message sent
            hourSentLastMessage: '', 
            // *****************************
            // selected contact
            selectedContact: null,
            // last access
            lastAccess: 'Ultimo accesso oggi alle 12:00',
            // new message
            newMessage: '',
            // search contact
            searchText: '',
            // active bell
            isBellActive: false,
            // active menu
            notificationActive: true,
            // contacts
            contacts: [
                {
                    id : 0,
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                        }
                    ],
                },
                {   
                    id : 1,
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                        }
                    ],
                },
                {   
                    id : 2,
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                        }
                    ],
                },
                {   
                    id : 3,
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                        }
                    ],
                },
                {   
                    id : 4,
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                        }
                    ],
                },
                {   
                    id : 5,
                    name: 'Claudia',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                        }
                    ],
                },
                {   
                    id : 6,
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                        }
                    ],
                },
                {   
                    id : 7,
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                        }
                    ],
                },
            ],
        }
    },

    methods: {

    // Dark mode function
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
    },

    // Function select contact 
    selectContact(contact) {
        this.selectedContact = contact;
        console.log("contatto selezionato", this.selectedContact);

        this.lastMessageText = this.lastMessage(contact);
        this.hourSentLastMessage = this.hourSent(contact);
    },

    // Function to define if a message is sent or received
    isSentMessage(message) {
        return message.status === 'sent';
    },

    // Function to send a new message
    sendMessage() {
        if (this.newMessage.trim() === '') {
            return; // Don't send empty messages
        } else if (this.selectedContact === null) {
            return; // Don't send messages if no contact is selected
        } else if (this.selectedContact === undefined) {
            return; // Don't send messages if no contact is selected   
        } 
      
        const newMessageObj = {
            date: new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit' }),
            message: this.newMessage,
            status: 'sent',
        };
      
        this.selectedContact.messages.push(newMessageObj);
        this.newMessage = ''; // Clear the input field
      
        setTimeout(() => {
            const receivedMessageObj = {
                date: new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit' }),
                message: 'GG Bro',
                status: 'received',
            };
            this.selectedContact.messages.push(receivedMessageObj);
        }, 2000); // Delay the received message by 2 seconds
    },

    handleKeyDown(event) {
        if (event.key === 'Enter') {
          this.sendMessage(); // Call the correct method name: sendMessage()
        }
    },

    // Function to format the date
    formatTime(date) {
        const messageDate = new Date(date);
        if (isNaN(messageDate.getTime())) {
            return '';
        } 
        return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },

    // Function to delete a message
    deleteMessage(contact, messageIndex) {
       contact.messages.splice(contact.messages.indexOf(messageIndex), 1);
    },
    
    // Function to toggle the dropdown menu
    toggleDropdown(message) {
        message.showDropdown = !message.showDropdown;
    },

    // Function to show in the chat list the last message  
    lastMessage(contact) {
        const lastMessage = contact.messages[contact.messages.length - 1];
        if (lastMessage) {
            return `${lastMessage.message}`;
        }
        return '';
    },

    // Function to show in the chat list the last message's hour
    hourSent(contact) {
        const lastMessage = contact.messages[contact.messages.length - 1];
        if (lastMessage) {
          const messageDate = new Date(lastMessage.date);
          return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });  
        }
        return '';
    },
      
    // Function to toggle the bell icon
    toggleBell() {
        this.isBellActive = !this.isBellActive;
        this.notificationActive = !this.notificationActive;
    },
},

    // created function to select the first contact
    created() {

        if (this.contacts.length > 0) {
          this.selectContact(this.contacts[0]);
        } 
    
        window.addEventListener('keydown', (event) => this.handleKeyDown(event));

        this.contacts.forEach(contact => {
            contact.messages.forEach(message => {
                message.showDropdown = false; 
            });
        });
    },

    computed: {

        // Function to filter contacts
        filteredContacts() {
            if (!this.searchText) {
                return this.contacts;
            }
            const search = this.searchText.toLowerCase();
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(search));
        },

        // Function to show the notification
        notificationText() {
            return this.notificationActive ? this.activeMessage : this.inactiveMessage;
        },

        // Function to show the tooltip
        tooltipMessage() {
            return this.isBellActive ? 'Clicca per disattivare le notifiche' : 'Clicca per attivare le notifiche';
        },
    },
});
app.mount('#app');