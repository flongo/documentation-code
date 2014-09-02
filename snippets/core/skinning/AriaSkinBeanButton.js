Aria.beanDefinitions({
    $package : "snippets.core.skinning.AriaSkinBeanButton",
    $description : "Structure of a skin.",
    $namespaces : {
        "json" : "aria.core.JsonTypes"
    },
    $beans : {
        // //#ButtonCfg
        "ButtonCfg" : {
            $type : "Object",
            $properties : {
                "states" : {
                    $type : "StatesSet",
                    $properties : {
                        "normal" : {
                            $type : "StateWithFrame"
                        },
                        "msdown" : {
                            $type : "StateWithFrame"
                        },
                        "msover" : {
                            $type : "StateWithFrame"
                        },
                        "normalFocused" : {
                            $type : "StateWithFrame"
                        },
                        "msoverFocused" : {
                            $type : "StateWithFrame"
                        },
                        "disabled" : {
                            $type : "StateWithFrame"
                        }
                    }
                },
                "frame" : {
                    $type : "Frame"
                },
                "simpleHTML" : {
                    $type : "json:Boolean",
                    $description : "true when the widget has to have a basic markup as close as possible to standard HTML. As a consequence, a frame of type \"SimpleHTML\" will be used, which basically means that no further frame markup will be added.",
                    $default : false
                },
                "label" : {
                    $type : "Object",
                    $properties : {
                        "fontWeight" : {
                            $type : "json:String",
                            $default : "normal"
                        }
                    }
                }
            }
        },
        ////#ButtonCfg
        ////#FixedHeigtFrameStateCfg
         "FixedHeightFrameStateCfg" : {
            $type : "Object",
            $description : "Properties of a frame of type \"FixedHeight\" for this state.",
            $properties : {
                "color" : {
                    $type : "Color",
                    $default : "#000"
                },
                "spriteURL" : {
                    $type : "json:String"
                },
                "spriteURLv" : {
                    $type : "json:String"
                },
                "skipLeftBorder" : {
                    $type : "SkipBorderCfg"
                },
                "skipRightBorder" : {
                    $type : "SkipBorderCfg"
                },
                "sprWidth" : {
                    $type : "Pixels"
                },
                "sprHeight" : {
                    $type : "Pixels"
                },
                "verticalAlign" : {
                    $type : "json:String",
                    $description : "Vertical alignment value applied to the content. The standard html values are accepted (top, middle, ...)."
                },
                "innerHeight" : {
                    $type : "json:MultiTypes",
                    $default : "normal",
                    $description : "The text line height. It must be set when the verticalAlign is used.",
                    $contentTypes : [{
                                $type : "Pixels"
                            }, {
                                $type : "json:String"
                            }]
                },
                "sprIdx" : {
                    $type : "json:Integer"
                },
                "sprSpacing" : {
                    $type : "Pixels",
                    $default : 2
                },
                "spcLeft" : {
                    $type : "Pixels"
                },
                "marginTop" : {
                    $type : "Pixels",
                    $default : 0
                },
                "marginLeft" : {
                    $type : "Pixels",
                    $default : 0
                },
                "marginRight" : {
                    $type : "Pixels",
                    $default : 0
                },
                "marginBottom" : {
                    $type : "Pixels",
                    $default : 0
                }
            }
        }
        ////#FixedHeigtFrameStateCfg
    }
});