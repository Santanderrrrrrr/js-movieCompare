const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, summary })=>{
    // const root  = document.querySelector('.autocomplete')

    
    root.innerHTML =
    `
        <label><b>Search</b></label>
        <input class="input"/>
        <div class="dropdown"
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>
    `


    const input = root.querySelector('input')
    

    const dropdown = root.querySelector('.dropdown')
    dropdown.style.visibility = 'hidden'

    const resultsWrapper = root.querySelector('.results')


    const onInput = async (event) =>{

        const items = await fetchData(event.target.value)
    
    
        // dropdown.classList.add('is-active')
 
        
        if(items.length){
            dropdown.style.display = 'block'
            dropdown.style.visibility = 'visible'

            document.querySelector('.tutorial').style.visibility = 'hidden'
            

    
            resultsWrapper.innerHTML = ''
            for(let item of items){
    
                const option = document.createElement('a')

                option.classList.add('dropdown-item')
                option.innerHTML = renderOption(item)

                resultsWrapper.appendChild(option)
    
                option.addEventListener('click', ()=>{
                    dropdown.style.display = 'none'
                    input.value = inputValue(item)
                    // console.log(onOptionSelect(item))
                    onOptionSelect(item, summary)
                })
            }
        }else{
            return
        }
    }
    
    input.addEventListener('input', debounce(onInput, 1000))

    document.addEventListener('click', (event)=>{
            if(!root.contains(event.target)){
                // dropdown.classList.remove('is-active')
                dropdown.style.display = 'none'
            }
        })
}