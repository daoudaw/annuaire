/*********************** getting the buttons, input and suggestions classes ***********************/
const femme = document.querySelector('.femme');
const enfant = document.querySelector('.enfant');
const homme = document.querySelector('.homme');
const parfumsAccessoires = document.querySelector('.parfums-accessoires');
const chaussuresCollants = document.querySelector('.chaussures-collants');
const maison = document.querySelector('.maison');
const bagages = document.querySelector('.bagages');
const services = document.querySelector('.services');
const personnel = document.querySelector('.personnel');
const inputSearch = document.querySelector('.form-control');
const suggestions = document.querySelector('.suggestions');




/*********************** for the tooltip ***********************/
$(document).ready(function() 
{
    $('[data-toggle="tooltip"]').tooltip();
});


//addind links to the buttons
femme.addEventListener('click', () =>
{
    window.location.href='femme.html';

});


enfant.addEventListener('click', () =>
{
    window.location.href='enfant.html';

});


homme.addEventListener('click', () =>
{
    window.location.href='homme.html';

});


parfumsAccessoires.addEventListener('click', () =>
{
    window.location.href='parfum_accessoire.html';

});


chaussuresCollants.addEventListener('click', () =>
{
    window.location.href='chaussure_collant.html';

});


maison.addEventListener('click', () =>
{
    window.location.href='maison.html';

});


bagages.addEventListener('click', () =>
{
    window.location.href='bagage.html';

});


services.addEventListener('click', () =>
{
    window.location.href='service.html';

});


personnel.addEventListener('click', () =>
{
    window.location.href='personnel.html';

});


/*********************** search engine ************************/

const searchResult = () =>
{
    const displayResult = inputSearch.value;
    suggestions.innerHTML = '';
    const infoResult = '';

    //brandInfos
     if(infosResult = brandInfos.filter(item =>
        {
            return item.nom.toLowerCase().includes(displayResult.toLowerCase());   
           //return item.nom.toLowerCase().startsWith(displayResult.toLowerCase());
        }));
        {
            infosResult.forEach(item => 
                {
                    const div = document.createElement('div');
                    const phoneNumber = '<i class="fa fa-phone"></i>';
                    const bulding = '<i class="fa fa-building-o"></i>';
                    const barCode = '<i class="fa fa-barcode"></i>';
                    
                    div.innerHTML = `${item.nom} | ${phoneNumber} ${item.telephone} | ${barCode} ${item.tpv} | ${bulding} ${item.etage}`;
                    suggestions.appendChild(div);
                
                });
        }

        //service infos
        if(infosResult = serviceInfos.filter(item =>
            {
                return item.nom.toLowerCase().includes(displayResult.toLowerCase());   
               //return item.nom.toLowerCase().startsWith(displayResult.toLowerCase());
            }));
            {
                infosResult.forEach(item => 
                    {
                        const div = document.createElement('div');
                        const phoneNumber = '<i class="fa fa-phone"></i>';
                        
                        div.innerHTML = `${item.nom} | ${phoneNumber} ${item.telephone}`;
                        suggestions.appendChild(div);
                    
                    });
            }

            //staff infos
        if(infosResult = personnelInfos.filter(item =>
            {
                return item.nom.toLowerCase().includes(displayResult.toLowerCase());   
               //return item.nom.toLowerCase().startsWith(displayResult.toLowerCase());
            }));
            {
                infosResult.forEach(item => 
                    {
                        const div = document.createElement('div');
                        const phoneNumber = '<i class="fa fa-phone"></i>';
                        const user = '<i class="fa fa-user"></i>';
                        const email = '<i class="fa fa-telegram"></i>';
                        
                        div.innerHTML = `${item.nom} | ${user} ${item.titre} | ${phoneNumber} ${item.telephone} | ${email} ${item.email}`;
                        suggestions.appendChild(div);
                    
                    });
            }

        
            if(displayResult === '')
            {
                suggestions.innerHTML = '';
            }

};

/*********************** search results ***********************/
inputSearch.addEventListener('keyup', searchResult);
