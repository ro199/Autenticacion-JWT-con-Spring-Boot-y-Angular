package com.tutorial.crud.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Min;

public class ProductoDto {

    @NotBlank // No puede ser blanco el parametro
    private String nombre;

    @Min(0) // no acepta negativos
    private float precio;

    public ProductoDto() {
    }

    public ProductoDto(String nombre, float precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
