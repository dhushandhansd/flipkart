// DropsDown//

let fashionDropDown = document.getElementById('dropdownFashionId')

let electDropDown = document.getElementById('dropdownElectId')

let homeDropDown = document.getElementById('dropdownHomeId')

let appDropDown = document.getElementById('dropdownAppId')

let toysDropDown = document.getElementById('dropdownToysId')

//Navbar//

let moreDropdown = document.getElementById('moreDropdown')

//Topics//

let fashionList = document.getElementById('fashionId')

let electList = document.getElementById('electId')

let homeList = document.getElementById('homeId')

let appList = document.getElementById('appId')

let toysList = document.getElementById('toysId')

//Navbar//

let moreId = document.getElementById('moreId')



fashionList.addEventListener('mouseenter', () => {
    fashionDropDown.classList.toggle('dropdown-active')
})

electList.addEventListener('mouseenter', () => {
    electDropDown.classList.toggle('dropdown-active')
})

homeList.addEventListener('mouseenter', () => {
    homeDropDown.classList.toggle('dropdown-active')
})

appList.addEventListener('mouseenter', () => {
    appDropDown.classList.toggle('dropdown-active')
})

toysList.addEventListener('mouseenter', () => {
    toysDropDown.classList.toggle('dropdown-active')
})

moreId.addEventListener('mouseenter', () => {
    moreDropdown.classList.toggle('moreDrop-active')
})