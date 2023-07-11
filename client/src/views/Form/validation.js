const regex = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/

export const validation = (form) => {
    // piso las propiedades del objeto errors, debería agregar más cuando hago el estado de errors?
    const errors = {};
    if(regex.test(form.name) || !form.name ){
      errors.name = "";
    } else {
        errors.name = `${form.name} is not valid, dog names cannot contain numbers`;
    }

    if(form.height_min > form.height_max) {
      errors.height_min= "Dog's minimum height must be highter than it's maximum height";
    } else {
        errors.height_min= "";
    }

    if(form.weight_min > form.weight_max) {
        errors.weight_min =  "Dog's minimum weight must be highter than it's maximum weight";
    } else {
        errors.weight_min= "";
    }


    if(form.life_span_min > form.life_span_max) {
      errors.life_span_min = "Dog's minimum life span must be highter than it's maximum life span";
    } else {
        errors.life_span_min= "";
    }


    if(!form.first_temperament) {
      errors.first_temperament = "You must choose at least one temperament for your dog";
    } else {
        errors.first_temperament= "";
    }


    if(form.height_min <= 0 || form.height_max <= 0) {
        errors.height_min= "Dog's height cannot be a negative number";
      } else {
        errors.height_min= "";
    }

  
      if(form.weight_min <= 0 || form.weight_max <= 0) {
          errors.weight_min =  "Dog's weight cannot be a negative number";
      } else {
        errors.weight_min= "";
    }

  
      if(form.life_span_min <= 0 || form.life_span_max <= 0) {
        errors.life_span_min = "Dog's life span cannot be a negative number";
      } else {
        errors.life_span_min = "";
    }

    
return errors;
  }


//   const regex = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/

// export const validation = (form) => {
//     const errors = {};
//     if(regex.test(form.name) || !form.name ){
//       setErrors({...errors, name: ""}) 
//     } else {
//       setErrors({...errors, name: `${form.name} is not valid, dog names cannot contain numbers`})
//     }

//     if(form.height_min > form.height_max) {
//       setErrors({...errors, height_min: "Dog's minimum height must be highter than it's maximum height"})
//     }

//     if(form.weight_min > form.weight_max) {
//       setErrors({...errors, weight_min: "Dog's minimum weight must be highter than it's maximum weight"})
//     }

//     if(form.life_span_min > form.life_span_max) {
//       setErrors({...errors, life_span_min: "Dog's minimum life span must be highter than it's maximum life span"})
//     }

//     if(!form.first_temperament) {
//       setErrors({...errors, first_temperament: "You must choose at least one temperament for your dog" })
//     }
// return errors;
//   }