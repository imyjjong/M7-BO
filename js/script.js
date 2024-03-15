class FetchAccounts{
    constructor(){
        this.fetch().then(data => {
            for(let i = 0; i < data.accounts.length; i++){

            }
        });
    }
    async fetch(){
        return fetch("data/data.json")
        .then(
            function(response){
                return response.json();
            }
        )
    }
}
class UserProfile{
    constructor(){
        this.data = new FetchAccounts();
        this.createProfile();
    }
    async createProfile(){
        const chatbox = document.getElementById("js--chatbox");
        const toBeAddedList = document.createElement("ul");
        chatbox.appendChild(toBeAddedList);

        let loadMore = function(){
            for(let i = 0; i < data.accounts.length; i++){
                const newChat = document.createElement('li');
                newChat.classList.add("chatboxUser");
                chatbox.appendChild(newChat);
    
                const image = document.createElement("img");
                image.classList.add("chatboxUser__img");
                image.setAttribute("src", data.accounts[i].img);
                newChat.appendChild(image);
    
                const toBeAddedChat = document.createElement("article");
                toBeAddedChat.classList.add("chatboxUser__chat");
                newChat.appendChild(toBeAddedChat);
    
                const wrapper = document.createElement("span");
                wrapper.classList.add("chatboxUser__chatWrapper");
                toBeAddedChat.appendChild(wrapper);
    
                const username = document.createElement("h3");
                username.classList.add("chatboxUser__chatWrapper--username");
                username.innerText = data.accounts[i].username;
                username.style.color = data.accounts[i].color;
                wrapper.appendChild(username);

                const date = document.createElement("p");
                date.classList.add("chatboxUser__chatWrapper--date");
                date.innerText = data.accounts[i].name;
                wrapper.appendChild(date);
    
                const chat = document.createElement("p");
                chat.classList.add("chatboxUser__chatText");
                chat.innerText = data.accounts[i].text;
                toBeAddedChat.appendChild(chat);
    
                if(i === data.accounts.length - 1){
                    observer.observe(newChat);
                }
            }
        }
        const data = await this.data.fetch();
        for(let i = 0; i < data.accounts.length; i++){
            this.toBeAddedLi = document.createElement("li");
            this.toBeAddedLi.classList.add("chatboxUser");
            toBeAddedList.appendChild(this.toBeAddedLi);
    
            this.image = document.createElement("img");
            this.image.classList.add("chatboxUser__img");
            this.image.setAttribute("src", data.accounts[i].img);
            this.toBeAddedLi.appendChild(this.image);
    
            this.toBeAddedChat = document.createElement("article");
            this.toBeAddedChat.classList.add("chatboxUser__chat");
            this.toBeAddedLi.appendChild(this.toBeAddedChat);
    
            this.wrapper = document.createElement("span");
            this.wrapper.classList.add("chatboxUser__chatWrapper");
            this.toBeAddedChat.appendChild(this.wrapper);
    
            this.username = document.createElement("h3");
            this.username.classList.add("chatboxUser__chatWrapper--username");
            this.username.innerText = data.accounts[i].username;
            this.username.style.color = data.accounts[i].color;
            this.wrapper.appendChild(this.username);

            this.date = document.createElement("p");
            this.date.classList.add("chatboxUser__chatWrapper--date");
            this.date.innerText = data.accounts[i].name;
            this.wrapper.appendChild(this.date);

            this.chat = document.createElement("p");
            this.chat.classList.add("chatboxUser__chatText");
            this.chat.innerText = data.accounts[i].text;
            this.toBeAddedChat.appendChild(this.chat);
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting && entry.target === chatbox.lastElementChild){
                    loadMore();
                }
            });
        });
        loadMore();
    }
}
class FetchMembers{
    constructor(){
        this.fetch().then(data => {
            for(let i = 0; i < data.members.length; i++){

            }
        });
    }
    async fetch(){
        return fetch("data/data.json")
        .then(
            function(response){
                return response.json();
            }
        )
    }
}

class MemberList{
    membersMember;
    image;
    wrapper;
    username;
    bio;
    constructor(){
        this.data = new FetchMembers();
        this.createMember();
    }
    async createMember(){
        const data = await this.data.fetch();
        const toBeAddedTitle = document.createElement("h2");
        toBeAddedTitle.classList.add("membersTitle");
        toBeAddedTitle.innerText = "MEMBERS - "+data.members.length;
        document.getElementById("js--members").appendChild(toBeAddedTitle);
        for(let i = 0; i < data.members.length; i++){
            this.membersMember = document.createElement("li");
            this.membersMember.classList.add("membersMember");
            document.getElementById("js--members").appendChild(this.membersMember);

            this.image = document.createElement("img");
            this.image.classList.add("membersMember__img");
            this.image.setAttribute("src", data.members[i].img);

            let hiddenAccount = true;

            this.image.onclick = () => {
                if(hiddenAccount === true){
                    this.accountCard = document.createElement("section");
                    this.accountCard.classList.add("accountsAccount")
                    document.getElementById("js--accounts").appendChild(this.accountCard);
    
                    this.toBeAddedDiv = document.createElement("div");
                    this.toBeAddedDiv.classList.add("accountsAccount__div");
                    this.accountCard.appendChild(this.toBeAddedDiv);

                    this.image = document.createElement("img");
                    this.image.classList.add("accountsAccount__divImage");
                    this.image.setAttribute("src", data.accounts[i].img);
                    this.toBeAddedDiv.appendChild(this.image);
    
                    this.information = document.createElement("div");
                    this.information.classList.add("accountsAccount__information");
                    this.accountCard.appendChild(this.information);
    
                    this.username = document.createElement("h2");
                    this.username.classList.add("accountsAccount__informationUsername");
                    this.username.innerText = data.accounts[i].username;
                    this.information.appendChild(this.username);
    
                    this.name = document.createElement("h3");
                    this.name.classList.add("accountsAccount__informationName");
                    this.name.innerText = data.accounts[i].name;
                    this.information.appendChild(this.name);
    
                    this.pronouns = document.createElement("p");
                    this.pronouns.classList.add("accountsAccount__informationPronouns");
                    this.pronouns.innerText = data.accounts[i].pronouns;
                    this.information.appendChild(this.pronouns);
    
                    this.border = document.createElement("hr");
                    this.border.classList.add("accountsAccount__informationBorder");
                    this.information.appendChild(this.border);
    
                    this.bio = document.createElement("p");
                    this.bio.classList.add("accountsAccount__informationBio");
                    this.bio.innerText = data.accounts[i].bio;
                    this.information.appendChild(this.bio);
                    
                    hiddenAccount = false;
                    window.addEventListener("click", () => {
                        this.accountCard.remove();
                    });
                }
                else{
                    this.accountCard.remove();
                    console.log("hidden");
                    hiddenAccount = true;
                }
            }

            this.membersMember.appendChild(this.image);

            this.wrapper = document.createElement("span");
            this.wrapper.classList.add("membersMember__wrapper");
            this.membersMember.appendChild(this.wrapper);

            this.username = document.createElement("h3");
            this.username.classList.add("membersMember__wrapper--username");
            this.username.innerText = data.members[i].username;
            this.username.style.color = data.members[i].color;
            this.wrapper.appendChild(this.username);

            this.bio = document.createElement("p");
            this.bio.classList.add("membersMember__wrapper--bio");
            this.bio.innerText = data.members[i].bio;
            this.wrapper.appendChild(this.bio);
            }
        }
    }

class FetchServers{
    constructor(){
        this.fetch().then(data => {
            for(let i = 0; i < data.servers.length; i++){};
        });
    }
    async fetch(){
        return fetch("data/data.json")
        .then(
            function(response){
                return response.json();
            }
        )
    }
}

class Servers{
    data;
    logo;
    border;
    server;
    constructor(){
        this.data = new FetchServers();
        this.createServers();
    }
    async createServers(){
        const data = await this.data.fetch();
        this.logo = document.createElement("i");
        this.logo.classList.add("fa-brands");
        this.logo.classList.add("fa-discord");
        this.logo.classList.add("serversLogo");
        document.getElementById("js--servers").appendChild(this.logo);
        this.border = document.createElement("hr");
        this.border.classList.add("serversBorder");
        document.getElementById("js--servers").appendChild(this.border);
        for(let i = 0; i < data.servers.length; i++){
            this.server = document.createElement("img");
            this.server.classList.add("serversServer");
            this.server.setAttribute("src", data.servers[i].image);
            this.server.setAttribute("title", data.servers[i].information);
            this.server.onclick = this.focus;
            document.getElementById("js--servers").appendChild(this.server);
        }
    }
    focus = () => { 
            this.server.onclick = function(){
                this.server.classList.replace("serversServer", "serversServer__focus");
            }
        }
    }

class Accounts{
    data;
    accountCard;
    toBeAddedDiv;
    image;
    information;
    username;
    name;
    border;
    bio;
    pronouns;
    constructor(){
        this.data = new FetchAccounts();
        this.createAccount();
    }
    async createAccount(){
    }
}

class FetchChannels{
    constructor(){
        this.fetch().then(data => {
            for(let i = 0; i < data.channels.length; i++){

            }
        });
    }
    async fetch(){
        return fetch("data/data.json")
        .then(
            function(response){
                return response.json();
            }
        )
    }
}

class Channels{
    constructor(){
        this.data = new FetchAccounts();
        this.createChannel();
    }   
    async createChannel(){
        const data = await this.data.fetch();
        this.server = document.createElement("div");
        this.server.classList.add("channelsServer");
        document.getElementById("js--channels").appendChild(this.server);

        this.serverTitle = document.createElement("h2");
        this.serverTitle.classList.add("channelsServer__title");
        this.serverTitle.innerText = data.servers[5].information;
        this.server.appendChild(this.serverTitle);
        for(let i = 0; i < data.channels.length; i++){
            this.dropdown = document.createElement("div");
            this.dropdown.classList.add("channelsDropdown");
            document.getElementById("js--channels").appendChild(this.dropdown);

            this.wrapper = document.createElement("span");
            this.wrapper.classList.add("channelsDropdown__wrapper");
            this.wrapper.onclick = this.dropdownFunction;
            this.dropdown.appendChild(this.wrapper);
            
            this.button = document.createElement("i");
            this.button.classList.add("fa-solid");
            this.button.classList.add("fa-angle-down");
            this.button.classList.add("channelsDropdown__wrapper--arrow");
            this.wrapper.appendChild(this.button);

            this.listName = document.createElement("h3");
            this.listName.classList.add("channelsDropdown__wrapper--title");
            this.listName.innerText = data.channels[i].title;
            this.wrapper.appendChild(this.listName);

            this.list = document.createElement("ul");
            this.list.classList.add("channelsDropdown__list");
            this.dropdown.appendChild(this.list);

            const channelLoop = data.channels[i].channel;
            for(let i = 0; i < channelLoop.length; i++){
                this.icon = document.createElement("i");
                this.icon.classList.add(channelLoop[i].icon);
                this.icon.classList.add(channelLoop[i].icons);
                this.icon.classList.add("channelsDropdown__list--itemIcon");

                this.channel = document.createElement("li");
                this.channel.classList.add("channelsDropdown__list--item");
                this.list.appendChild(this.channel);
                this.name = document.createElement("p");
                this.name.classList.add("channelsDropdown__list--itemText");
                this.channel.appendChild(this.icon);
                this.channel.appendChild(this.name);
                this.name.innerText = channelLoop[i].name;
            }
        }
        this.account = document.createElement("div");
        this.account.classList.add("channelsAccount");
        document.getElementById("js--channels").appendChild(this.account);

        this.wrapper = document.createElement("span");
        this.wrapper.classList.add("channelsAccount__wrapper");
        this.account.appendChild(this.wrapper);

        this.image = document.createElement("img");
        this.image.classList.add("channelsAccount__image");
        this.image.setAttribute("src", "img/jade.jpg");
        this.wrapper.appendChild(this.image);

        this.name = document.createElement("h3");
        this.name.classList.add("channelsAccount__wrapper--name");
        this.name.innerText = data.accounts[0].username;
        this.wrapper.appendChild(this.name);

        this.microphone = document.createElement("i");
        this.microphone.classList.add("fa-solid");
        this.microphone.classList.add("fa-microphone");
        this.microphone.classList.add("channelsAccount__icons");
        this.microphone.onclick = this.microphoneButton;
        this.microphone.style.padding = "0.8rem 1rem";
        this.account.appendChild(this.microphone);
        
        this.headphones = document.createElement("i");
        this.headphones.classList.add("fa-solid");
        this.headphones.classList.add("fa-headphones");
        this.headphones.classList.add("channelsAccount__icons");
        this.headphones.onclick = this.headphonesButton;
        this.account.appendChild(this.headphones);
        
        this.gear = document.createElement("i");
        this.gear.classList.add("fa-solid");
        this.gear.classList.add("fa-gear");
        this.gear.classList.add("channelsAccount__icons");
        this.account.appendChild(this.gear);
        this.addAudio();
    }
    addAudio(){
        let call = document.getElementsByClassName("fa-volume-high");
        for(let i = 0; i < call.length; i++){
            call[i].onclick = function(){
                this.join = new Audio("audio/join.mp3");
                this.join.play();
            }
        }
    }
    dropdownFunction = () => {
        if(dropdownHidden === false){
            this.button.classList.replace("fa-angle-down", "fa-angle-right");
            this.list.style.display = "none";
            dropdownHidden = true;
        }
        else{
            this.button.classList.replace("fa-angle-right", "fa-angle-down");
            this.list.style.display = "flex";
            dropdownHidden = false;
        }
    }
    microphoneButton = () => {
        if(mutedMicrophone === false){
            this.microphone.classList.replace("fa-microphone", "fa-microphone-slash");
            this.microphone.style.color = "#ef3d43";
            this.microphone.style.padding = "0.8rem 0.79vh";
            this.mute = new Audio("audio/mute.mp3");
            this.mute.play();
            mutedMicrophone = true;
        }
        else{
            this.microphone.classList.replace("fa-microphone-slash", "fa-microphone");
            this.microphone.style.color = "white";
            this.microphone.style.padding = "0.8rem 1rem";
            this.unmute = new Audio("audio/unmute.mp3");
            this.unmute.play();
            mutedMicrophone = false;
        }
    }
    headphonesButton = () => {
        if(mutedHeadphones === false){
            this.headphones.style.color = "#ef3d43";
            this.slash = document.createElement("i");
            this.slash.classList.add("fa-solid");
            this.slash.classList.add("fa-slash");
            this.slash.classList.add("channelsAccount__iconsSlash");
            this.headphones.appendChild(this.slash);
            this.deafen = new Audio("audio/deafen.mp3");
            this.deafen.play();
            mutedHeadphones = true;
        }
        else{
            this.headphones.style.color = "white";
            this.slash.remove();
            this.undeafen = new Audio("audio/undeafen.mp3");
            this.undeafen.play();
            mutedHeadphones = false;
        }
    }
}

let dropdownHidden = false;
let mutedHeadphones = false;
let mutedMicrophone = false;

class Chatbox{
    constructor(){
        this.addProfiles();
    }
    addProfiles(){
            this.profile = new UserProfile();
            this.member = new MemberList();
            this.server = new Servers();
            this.channel = new Channels();
        
    }
}

let data = new Chatbox();
