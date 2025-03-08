let guests = [];
  
export const getAllGuest = () => {
          return guests;
    }

export const addGuest = (name, message) => { 
          const newGuest = { name, message }; 
          guests.push(newGuest); 
          return newGuest;
    };
