const useApi = () => ((method, endpoint, payload) =>{ 
    if(method === 'get' && endpoint ==='/call') {
        return {
            from: 'Fabio',
            date: '03-06-2022',
            time: '18:00'
        }
    }

    alert(`ftching: ${method}: ${endpoint}, Have a payload: ${!!payload}`)
})

export default useApi 