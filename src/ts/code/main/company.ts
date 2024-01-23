export async function companyProduct() {
    console.log('da');
    
    const fetchResults = async () => {
        
        
            const response = await fetch(
                `http://localhost:1337/api/tours?populate=deep`
              );
              const data = await response.json();
              const product = data.data ;
              console.log(data);
              
        
    }

    // const urlParams = new URLSearchParams(window.location.search);
    // const productIdParam = urlParams.get("id");
    
    fetchResults();

}



