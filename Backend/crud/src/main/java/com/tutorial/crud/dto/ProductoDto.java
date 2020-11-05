package com.tutorial.crud.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Min;

public class ProductoDto {

    @NotBlank // No puede ser blanco el parametro
    private String nombre;

    @Min(0) // no acepta negativos
    private Float precio;

    public ProductoDto() {
    }

    public ProductoDto(@NotBlank String nombre, @Min(0) Float precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Float getPrecio() {
        return precio;
    }

    public void setPrecio(Float precio) {
        this.precio = precio;
    }
}
