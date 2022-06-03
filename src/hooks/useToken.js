import axios from "axios";

const useToken = async email => {
    const { data } = await axios.post('https://mrtools.herokuapp.com/user', { email });
    localStorage.setItem('accessToken', data.accessToken);

    return [data.accessToken]
};

export default useToken;