import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import { addShops } from "../../actions";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "97%",
    },
  },
}));

const Card = (props) => {
  const { register, control, handleSubmit } = useForm();
  const classes = useStyles();
  let formData;
  const onSubmit = (data) => {
    formData = new FormData();

    formData.append("shopName", data.shopName);
    formData.append("url", data.url);
    formData.append("location", data.location);
    formData.append("number", data.number);
    formData.append("description", data.description);
    formData.append("photo", data.photo[0]);

    props.addShops(formData);
  };

  return (
    <Paper className={classes.root} elevation={8}>
      <form ref={formData} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          defaultValue=""
          name="shopName"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Наименование точки"
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="url"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="URL-ссылка на сайт партнера"
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="location"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Адрес"
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="number"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Телефон"
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          defaultValue=""
          name="description"
          render={({ field }) => (
            <TextareaAutosize
              id="filled-helperText"
              fullWidth
              name="description"
              aria-label="minimum height"
              rowsMin={3}
              placeholder="Описание"
              style={{ width: "97%", resize: "none" }}
              label="Наименование точки"
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />

        <input
          name="photo"
          id="filled-helperText"
          type="file"
          accept=".jpeg,.png,.jpg"
          {...register("photo")}
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          {props.BtnText}
        </Button>
      </form>
    </Paper>
  );
};

export default connect(null, { addShops })(Card);
