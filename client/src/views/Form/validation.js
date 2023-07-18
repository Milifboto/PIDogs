const regex = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/;

export const validation = (form) => {
  const errors = {};

  if (!(regex.test(form.name))) {
    errors.name = `${form.name} is not valid, dog's breed names cannot contain numbers or special characters`;
  } else if (!form.name) {
    errors.name = "Breed name is required"
  } else if (form.name.length < 3){
    errors.name = `${form.name} is not valid, it is too short`
  } else if (form.name.length > 20){
    errors.name = `${form.name} is not valid, it is too long`
  } else {
    errors.name = "";
  }
  console.log(form.height_min);
  console.log(form.height_max);
  console.log(parseInt(form.height_min) > parseInt(form.height_max));
  if (parseInt(form.height_min) > parseInt(form.height_max)) {
    errors.height_min =
      "Dog's maximum height must be highter than it's minimum height";
  } else {
    errors.height_min = "";
  }

  if (parseInt(form.weight_min) > parseInt(form.weight_max)) {
    errors.weight_min =
      "Dog's maximum weight must be highter than it's minimum weight";
  } else {
    errors.weight_min = "";
  }

  if (parseInt(form.life_span_min) > parseInt(form.life_span_max)) {
    errors.life_span_min =
      "Dog's maximum life span must be highter than it's minimum life span";
  } else {
    errors.life_span_min = "";
  }

  if (form.temperament.length === 0) {
    errors.temperaments = "The dog must have at least one temperament to be created";
  } else {
    errors.temperaments = [];
  }

  return errors;
};
