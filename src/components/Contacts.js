const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-3xl -4 m-4">Contact us page</h1>
            <form>
                <input type="text" className="border boreder-black p-2 m-2" placeholder="name"/>
                <input type="text" className="border boreder-black p-2 m-2" placeholder="message"/>
                <button className="border border-black p-2 m-2 bg-gray-100 hover:bg-gray-600 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;