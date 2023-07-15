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

  if (form.height_min > form.height_max) {
    errors.height_min =
      "Dog's minimum height must be highter than it's maximum height";
  } else {
    errors.height_min = "";
  }

  if (form.weight_min > form.weight_max) {
    errors.weight_min =
      "Dog's minimum weight must be highter than it's maximum weight";
  } else {
    errors.weight_min = "";
  }

  if (form.life_span_min > form.life_span_max) {
    errors.life_span_min =
      "Dog's minimum life span must be highter than it's maximum life span";
  } else {
    errors.life_span_min = "";
  }

  if (form.temperaments.length === 0) {
    errors.temperaments = "The dog must have at least one temperament to be created";
  } else {
    errors.temperaments = "";
  }

  return errors;
};
