let app = new Vue({
    el: '#app',
    data: {
        userInput: '',
        current: {
            title: '',
            author: '',
            img: '',
            date: '',
            isbn: ''
        },
        loading: false,
    },
    methods: {
        async openLibrary() {
            try {
                this.loading = true;
                const response = await axios.get('http://openlibrary.org/search.json?q=' + this.userInput);
                this.current = response.data;
                console.log(response.data);
                this.loading = false;
                // this.current.isbn = response.Observer.docs[0].isbn[0];
                    // calls other function
                // getImage(this.current.isbn);
                    // sets other data members
                // this.current.title = response.title;
                // this.current.author = response.author_name;
                // this.current.date = response.date;
            } catch (error) {
                console.log(error);
            }
        },
        // async getImage(isbn) {
        //     try {
        //         const answer = await axios.get(URL to API with thumbnail);
        //         this.current = answer.data;
        //         this.current.img = answer.img;
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
    }
});