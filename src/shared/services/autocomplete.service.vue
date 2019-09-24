<script>
import axios from 'axios';
import {environment} from './../../environment/environment'

export default {
    name: 'autocompleteService',
    getDataForAutocomplete(text) {
        return axios.get(`https://maps.googleapis.com/maps/${environment.googleApiUrl}input=${text}&key=${environment.googleApiKey}`);
    },
}
</script>