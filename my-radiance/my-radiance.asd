(in-package #:cl-user)
(asdf:defsystem #:my-radiance
  :version "0.1"
  :description "Roller PIXI test sandbox."
  :author "Janne"
  :defsystem-depends-on (:radiance :r-clip)
  :class "radiance:module"
  :components ((:file "my-radiance"))
  :depends-on NIL)
