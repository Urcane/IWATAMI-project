import data from '../../DATA.json'

class SourceIwatami {
    static async getAllData() {
        const responseJson = await data
        return responseJson.data
    }
}

export default SourceIwatami