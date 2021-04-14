import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Paper from "@material-ui/core/Paper";
import { useForm, Controller } from "react-hook-form";

import Input from "@material-ui/core/Input";
import { editShops, getCurrentShop } from "../../actions";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "97%",
    },
  },
}));

const Card = (props) => {
  const { register, control, handleSubmit, setValue } = useForm();

  const classes = useStyles();
  useEffect(() => {
    props.getCurrentShop(props.id);

    if (props?.shops?.shop) {
      setValue("shopName", props?.shops?.shop?.shopName);
      setValue("url", props?.shops?.shop?.url);
      setValue("location", props?.shops?.shop?.location);
      setValue("number", props?.shops?.shop?.number);
      setValue("description", props?.shops?.shop?.description);
    }
  }, [props?.shops?.shop?._id]);
  const onSubmit = (data) => props.editShops(data, props.id);

  return (
    <Paper className={classes.root} elevation={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          defaultValue=""
          name="shopName"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
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

        <Button variant="contained" color="primary" type="submit" fullWidth>
          {props.BtnText}
        </Button>
      </form>
    </Paper>
  );
};

const mapStateToProps = (state) => ({ shops: state.shops });

export default connect(mapStateToProps, {
  editShops,
  getCurrentShop,
})(Card);
