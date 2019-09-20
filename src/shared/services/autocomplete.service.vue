<script>
import axios from 'axios';
import {environment} from './../../environment/environment'

export default {
    name: 'autocompleteService',
    getDataForAutocomplete(text) {
        return axios.get(`${environment.googleApiUrl}input=${text}&key=${environment.googleApiKey}`);
    },
}
</script>