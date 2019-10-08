<script>
    import axios from 'axios';
    import { environment } from './../../environment/environment'

    export default {
        name: 'subscriptionService',

        addSubscroption(email, category) {
            var urlString = `${window.location.pathname}/addSubscription`;
            debugger;

            return axios.post( urlString,
                    { email = email, category = category })
                .then(response => {
                    console.log(response);
                })
                .catch(response => {
                    console.log(response);
                });
        }
    }
</script>