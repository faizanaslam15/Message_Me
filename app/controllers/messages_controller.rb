class MessagesController < ApplicationController
    before_action :require_user

    def create
      message = current_user.messages.build(message_params)
      if message.save
        # ActionCable.server.broadcast("chatroom_channel", { mod_message: message.render(message) })
        ActionCable.server.broadcast("chatroom_channel", { mod_message: ApplicationController.renderer.render(partial: "messages/message", locals: { message: message }) })

      end
    end

    private
    def message_params
          params.require(:message).permit(:body)
    end
    def message_render(message)
          render(partial: "message", locals: { message: message })
    end
end
